import axios from "axios";
import { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";


const CreateBook = () => {

     const [loading, setLoading] = useState(false);
     const [title, setTitle] = useState("");
     const [author, setAuthor] = useState("");
     const [publishYear, setPublishYear] = useState("");
     const navigate = useNavigate();
     const titleRef = useRef();

     useEffect(() => {
        titleRef.current?.focus()
     },[])


     const createBook = async() => {
        
        try{
             const data = {
               title,
               author, 
               publishYear
             }
             setLoading(true);
             await axios.post("http://localhost:5001/books", data);
             toast.success("Book Created Successfully");
             navigate("/");

        }
        catch(error){
           console.log(error.message);
           toast.error("Error in creating Book")
        }
        finally{
          setLoading(false);
        }
     }

  return (
    <div className="p-4">
       <BackButton/>
      <h1 className="flex justify-center items-start text-primary/60 font-semibold text-2xl">Create Book</h1>
      {loading ? (<Spinner/>) : (
        <div className="flex items-center max-w-lg mx-auto border rounded-lg mt-6 border-primary/40 ">
          <div className="flex justify-start flex-col min-w-full ">
            
            <h2 className="ml-4 my-3 text-lg font-xl">
              Title
            </h2>
            <input 
                 className="mx-4 border-primary/60 min-w-fit rounded-md 
                             min-h-12 bg-base-100 border p-2 focus:outline-none focus:border-secondary"
                 type="text"
                 ref={titleRef}
                 value={title}
                 onChange={(e)=> setTitle(e.target.value)}
              />


             <h2 className="ml-4 my-3 text-lg font-xl">
              Author
            </h2>
            <input className="mx-4 border-primary/60 min-w-fit rounded-md
                               min-h-12 bg-base-100 border p-2 focus:outline-none focus:border-secondary"
                   type="text"
                   value={author}
                   onChange={(e) => setAuthor(e.target.value)}
                />

             
             <h2 className="ml-4 my-3 text-lg font-xl">
                Publish year
             </h2>
            <input className="mx-4 border-primary/60 min-w-fit rounded-md 
                               min-h-12 bg-base-100 border p-2 focus:outline-none focus:border-secondary"
                    type="number"
                    value={publishYear}
                    onChange={(e) => setPublishYear(Number(e.target.value))}/>

            <button className="btn btn-neutral text-neutral-300 mx-4 mt-3 mb-5"
                    onClick={createBook}
                    disabled={loading}>
                  {loading? "Creating..." : "Create Book"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateBook
