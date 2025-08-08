import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import {BsInfoCircle} from 'react-icons/bs';
import {AiOutlineEdit} from 'react-icons/ai';
import BooksTable from '../components/Home/BooksTable';
import BooksCard from '../components/Home/BooksCard';

const HomePage = () => {
    
     const [books, setBooks] = useState([]);
     const [loading, setLoading] = useState(false);
     const [showType, setShowType] =  useState("table");
   
    useEffect(() => {
       
       const fetchBooks = async () => {
          
        setLoading(true);
         
        try{
           const res = await axios.get("http://localhost:5001/books");
           setBooks(res.data);   
         }
         catch(error){
           console.log("Error in fetching the books", error.message);
         }
         finally{
            setLoading(false);
         }

       }
       fetchBooks();
    }, [])


  return (
    
    <div className='p-4'>
       <div className='flex justify-center items-center gap-x-4'>
         <button 
              className="btn btn-secondary hover:bg-secondary/70 px-4 py-1 rounded-lg transition duration-150"
              onClick={() => setShowType("table")}>
           Table
        </button>
        <button 
              className="btn btn-secondary hover:bg-secondary/70 px-4 py-1 rounded-lg transition duration-200"
              onClick={() => setShowType("card")}>
           Card
        </button>
       </div>
      <div className='flex justify-between items-center pl-5 pr-5'>
        <h1 className='text-3xl my-8 text-primary'>Books List</h1>
        <Link to={"/books/create"}>
          <MdOutlineAddBox className='text-4xl text-primary'/>
        </Link>
      </div>
      {loading ? (<Spinner/>):
           (
              showType === "table"  ? <BooksTable books={books}/> : <BooksCard books={books}/>
           ) }       
    </div>
  )
}

export default HomePage
