import mongoose from "mongoose";
import {Book} from './models/bookModel.js';
import { MONGODB_URI } from "./config.js";
import { books } from "./booksData.js";

const seedBooks = async() => {

   try{
      await mongoose.connect(MONGODB_URI);
      console.log("MongoDB Connected");
      
      await Book.insertMany(books);
      console.log("Books inserted");
      process.exit(0);
   }
   catch(error){
     console.log("Sending Failde", error.message);
     process.exit(1);
   }
};

seedBooks();