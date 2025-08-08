import { useEffect, useState } from "react"
import {useNavigate, useParams} from 'react-router-dom';
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import {toast} from 'react-hot-toast';


const DeleteBook = () => {
     
      const [book, setBook] = useState({});
      const [loading, setLoading] = useState(false);
      const navigate = useNavigate();
      const { id } = useParams();

      useEffect(() => {
          
        const fetchBook = async() => {
            setLoading(true);

            try{
              const res = await axios.get(`http://localhost:5001/books/${id}`);
              setBook(res.data);
            }
            catch(error){
              console.log("Error in fetching the book", error.message);
            }
            finally{
              setLoading(false);
            }
        }
        fetchBook();
      },[id]);


      const handleDeleteBook = async () => {
           setLoading(true);
            try{
              await axios.delete(`http://localhost:5001/books/${id}`)
              toast.success("Book Deleted Successfully");
              navigate("/");
            }
            catch(error){
              console.log("Error in deleting book", error.message);
              toast.error("Error in deletion");
            }
            finally{
              setLoading(false);
            }
      }


 return (
  <div className="p-4">
    <BackButton />
    <h1 className="text-center text-primary/60 font-semibold text-2xl mb-6">
      Are you sure you want to delete this book?
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

          <div className="flex justify-between">
            <button class="btn btn-outline btn-error" onClick={()=>navigate("/")}>No, Don't Delete</button>
            <button class="btn btn-outline btn-success" onClick={handleDeleteBook}>Yes Delete it</button>
          </div>
        </div>
      </div>
    )}
  </div>
);

}

export default DeleteBook
