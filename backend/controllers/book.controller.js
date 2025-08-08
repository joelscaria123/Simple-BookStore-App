import { Book } from "../models/bookModel.js"

export const getBooks = async (_,res) => {
      
      try{
           const books  = await Book.find({});
           res.status(200).json(books);
      }
      catch(error){
         console.log("Error in getBooks controller", error.message);
         res.status(500).json({message:"Internal Server Error"});
      }
}


export const createBook = async(req,res) => {
     
    try{
          if(!req.body.title || !req.body.author || !req.body.publishYear){
              return res.status(400).json({message: "All fields are required"});
          }

          const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
          }

          const book = await Book.create(newBook);
          return res.status(201).json(book);
    }
    catch(error){
       console.log("Error in createBook controller", error.message);
       res.status(500).json({message: "Internal Server Error"});
    }

}




export const getBookById = async(req,res) => {
      
    try{
        const {id} = req.params;
        const book = await Book.findById(id);

        if(!book){
            return res.status(404).json({message: "Book Not Found"});
        }

        return res.status(200).json(book);

    }
    catch(error){
       console.log("Error in getBookById controller", error.message);
       res.status(500).json({message: "Internal Server Error"});
    }

}



export const editBook = async(req,res) => {

     try{
       const { id } = req.params;

       if(!req.body.title || !req.body.author || !req.body.publishYear){
          return res.status(400).json({message: "All fields are required"}); 
       }

       const editedBook = {
          title: req.body.title,
          author: req.body.author,
          publishYear: req.body.publishYear,
       }

       const book = await Book.findByIdAndUpdate(id, editedBook, {new:true});

       if(!book){
         return res.status(404).json({message: "Book not Found"});
       }

       return res.status(200).json(book);
     }
     catch(error){
       console.log("Error in editBook controller", error.message);
       return res.status(500).json({message: "Internal Server Error"});
     }
}



export const deleteBook = async(req,res) => {
    
     try{
         const {id} = req.params;
         
         const deletedBook = await Book.findByIdAndDelete(id);

         if(!deletedBook){
            return res.status(404).json({message: "Cannot find Book"});
         }

         return res.status(200).json({message: "Book deleted Successfully"});
     }
     catch(error){
        console.log("Error in deleteBook controller", error.message);
        return res.status(500).json({message: "Internal Server Error"});
     }
}