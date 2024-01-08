import { config } from "dotenv";
config();

import express, {Request, Response} from "express";
import mongoose from "mongoose";
import BlogPost from './models/BlogPost';
import cors from 'cors';


const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/blog", (req: Request, res: Response) => {
    res.send("hey");
});     

app.post("/blog", async (req: Request, res: Response) => {
    const newBlogPost = new BlogPost({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body,
        date: req.body.date,
        coverimg: req.body.coverimg,
    });
    const createdPost = await newBlogPost.save();
    res.json(createdPost);
});  
mongoose
.connect(process.env.MONGO_URL!)
.then( () => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});
