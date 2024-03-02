import upload from "../middlewares/multer.middleware.js";
import { Article } from "../models/article.model.js";
import express from "express";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const router = express.Router();

router.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});

router.get("/edit/:id", upload.single("image"), async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render("articles/edit", { article: article });
});


router.post(
  "/",
  upload.single('image'),
  async (req, res, next) => {
    req.article = new Article();
    console.log("REQUEST FILE:", req.file);
    next();
  },
  saveArticleAndRedirect("edit")
);



router.get("/:slug", async (req, res) => {
  const article = await Article.findOne({
    slug: req.params.slug,
  });
  console.log("article", article);
  if (article == null) res.redirect("/");
  res.render("articles/show", { article: article });
});

router.delete("/:id", async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.redirect("/");

    res.status(204).end();
  } catch (error) {
    console.error("Error deleting article:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put(
  "/:id",
  upload.single('image'),
  async (req, res, next) => {
      req.article = await Article.findById(req.params.id);

      // If a new image is uploaded, update the image field
      if (req.file) {
        req.article.image = req.file.filename;
      }
      next()
  },
  saveArticleAndRedirect("edit")
);


function saveArticleAndRedirect(path) {
  return async (req, res) => {
    try {
      let article = req.article;
      console.log("REQUEST BODY:", req.body);
      console.log("FILE:", req.file);

      if (req.file) {
        article.image = req.file.filename;
      }

      // Update article fields
      article.author = req.body.author;
      article.title = req.body.title;
      article.content = req.body.content;
      article.markdown = req.body.markdown;

      try {
        article = await article.save();
        console.log("Article saved successfully: " + article);
        res.redirect(`/articles/${article.slug}`);
      } catch (error) {
        console.error(error);
        res.status(500).send("Error saving article: " + error.message);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Error saving article: " + error.message);
    }
  };
}



export default router;
