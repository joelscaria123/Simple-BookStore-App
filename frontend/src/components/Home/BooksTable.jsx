import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineDelete } from "react-icons/md"
import { Link } from "react-router-dom"


const BooksTable = ({books}) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
                 <thead>
                    <tr>
                      <th className='border border-secondary/60 rounded-md font-bold text-lg'>No.</th>
                      <th className='border border-secondary/60 rounded-md font-bold text-lg'>Title</th>
                      <th className='border border-secondary/60 rounded-md font-bold text-lg'>Author</th>
                      <th className='border border-secondary/60 rounded-md font-bold text-lg'>Publish Year</th>
                      <th className='border border-secondary/60 rounded-md font-bold text-lg'>Operations</th>
                    </tr>
                 </thead>
                 <tbody>
                   {books.map((book, index) => (
                       <tr key={book._id} className='h-8'>
                          <td className='border border-secondary/60 rounded-md text-center'>
                             {index+1}
                           </td>
                           <td className='border border-secondary/60 rounded-md text-center'>
                            {book.title}
                           </td>
                           <td className='border border-secondary/60 rounded-md text-center'>
                            {book.author}
                           </td>
                           <td className='border border-secondary/60 rounded-md text-center'>
                             {book.publishYear}
                           </td>
                          <td className='border border-secondary/60 rounded-md text-center flex justify-evenly py-2'>
                            <Link to={`/books/details/${book._id}`} title="View Details">
                               <BsInfoCircle className='text-2xl text-blue-500 hover:text-blue-600 transition-colors duration-200'/>
                            </Link>
           
                            <Link to={`/books/edit/${book._id}`} title="Edit Book">
                               <AiOutlineEdit className='text-2xl text-amber-500 hover:text-amber-600 transition-colors duration-200'/>
                            </Link>

                            <Link to={`/books/delete/${book._id}`} title="Delete Book">
                               <MdOutlineDelete className='text-2xl text-rose-500 hover:text-rose-600 transition-colors duration-200'/> 
                            </Link>
                          </td>
                       </tr>
                   ))}
                 </tbody>
              </table>
  )
}

export default BooksTable
