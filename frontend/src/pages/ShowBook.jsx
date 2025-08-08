import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from '../components/Spinner'


const ShowBook = () => {

  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    
    const fetchBook = async() => {
       setLoading(true);
       
      try{
        const res = await axios.get(`http://localhost:5001/books/${id}`);
        setBook(res.data);
        console.log(res.data);
      }
      catch(error){
        console.log("Error in fetching the book", error.message);
      }
      finally{
        setLoading(false);
      }
    }
    fetchBook();
  }, [])
   

  

 return (
  <div className="p-4">
    <BackButton />
    <h1 className="text-center text-primary/90 font-semibold text-2xl mb-6">
      Book Details
    </h1>

    {loading ? (
      <Spinner />
    ) : (
      <div className="mx-auto max-w-screen-sm border border-secondary rounded-xl shadow-md">
        <div className="p-6 space-y-4">
          {/* Row */}
          <div className="flex justify-between border-b border-base-200 pb-2">
            <span className="text-lg font-medium">ID</span>
            <span className="bg-base-100 border border-primary rounded px-3 py-1">
              {book._id}
            </span>
          </div>

          <div className="flex justify-between border-b border-base-200 pb-2">
            <span className="text-lg font-medium">Title</span>
            <span className="bg-base-100 border border-primary rounded px-3 py-1">
              {book.title}
            </span>
          </div>

          <div className="flex justify-between border-b border-base-200 pb-2">
            <span className="text-lg font-medium">Author</span>
            <span className="bg-base-100 border border-primary rounded px-3 py-1">
              {book.author}
            </span>
          </div>

          <div className="flex justify-between border-b border-base-200 pb-2">
            <span className="text-lg font-medium">Date Created</span>
            <span className="bg-base-100 border border-primary rounded px-3 py-1">
              {new Date(book.createdAt).toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-lg font-medium">Date Updated</span>
            <span className="bg-base-100 border border-primary rounded px-3 py-1">
              {new Date(book.updatedAt).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    )}
  </div>
);

}

export default ShowBook
