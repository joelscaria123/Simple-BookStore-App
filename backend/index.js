import express from 'express';
import { PORT,MONGODB_URI } from './config.js';
import mongoose from 'mongoose';
import booksRoutes from './routes/book.route.js';
import cors from 'cors';


const app = express();

app.use(cors());

app.use(express.json());

app.use("/books", booksRoutes);



mongoose
      .connect(MONGODB_URI)
      .then(()=> {
        console.log("MongoDB Connected Successfully");
        app.listen(PORT, () => {
        console.log("Server running on PORT", PORT);
         })
      })
      .catch((error)=> {
        console.log(error.message);
      })

