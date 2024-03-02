import mongoose from "mongoose";
// import cors from 'cors';
import express from 'express';
import { Article } from "./models/article.model.js";
const app = express();
import  methodOverride from "method-override"
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// // Get the directory name of the current module file
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

app.set("view engine", "ejs");

app.use(express.json({limit: "9kb"}));
app.use(express.urlencoded({extended: true, limit: "9kb"}));
// ...

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.use(methodOverride('_method'))


app.get('/',  async(req, res) => {
    const articles = await Article.find().sort({
        createdAt: "desc"
    })
    res.render('articles/index' , { articles: articles})
});

( async () => {
    try {
        await mongoose.connect(`mongodb+srv://foodie:foodblog@cluster0.abetipk.mongodb.net/foodie`,

        );
        app.on("error", (error) => {
            console.log("App not able to talk to mongoDB: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
        console.log(`App listening on port  http://localhost:${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: " + error);
        throw error
    }
})()

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))
// app.use(express.static("public"))


import articleRouter from "./routes/article.route.js";


app.use('/articles', articleRouter)

export{ app };



