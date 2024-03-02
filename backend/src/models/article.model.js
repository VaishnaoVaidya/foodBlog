import mongoose from "mongoose";
import slugify from 'slugify';
import  {marked} from 'marked';
import createDomPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const dompurify = createDomPurify(new JSDOM().window);



const articleSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            required: true,
            index: true,
        }, 
        title: {
            type: String,
            required: true,
            index: true,
        },
        content: {
            type: String,
            required: true,
            index: true,
        },
        image: {
            type: String,    
            required: true,
        },
        markdown: {
            type: String,    
            required: true, 
            index: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        sanitizedHtml: {
            type: String,
            required: true,
        },

        // tag: {
        //     type: String, 
        //     default: ["Community", "Company", "Culture", "Technology"],
        // },

    },
    {
        timestamps: true
    }
)

articleSchema.pre('validate', async function (next) {
    if (this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true });
    }

    if (this.markdown) {
        this.sanitizedHtml = dompurify.sanitize(await marked(this.markdown));
    }

    next();
});


export const Article  = mongoose.model('Article', articleSchema);