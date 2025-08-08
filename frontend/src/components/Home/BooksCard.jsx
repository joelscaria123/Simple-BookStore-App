import { FaBookOpen } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BooksCard = ({ books }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <div
          key={book._id}
          className="border border-secondary rounded-xl px-5 py-4 relative bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          {/* Publish Year */}
          <div className="absolute right-0 top-0 bg-primary/80 text-white text-sm px-3 py-1 rounded-bl-lg font-medium">
            {book.publishYear}
          </div>

          {/* Title */}
          <div className="flex items-center gap-x-2 mt-8">
            <FaBookOpen className="text-accent size-6" />
            <h1 className="font-semibold text-base truncate">{book.title}</h1>
          </div>

          {/* Author */}
          <div className="flex items-center gap-x-2 pt-3">
            <BiUser className="text-green-500 size-6" />
            <h2 className="font-medium truncate">{book.author}</h2>
          </div>

          {/* Actions */}
          <div className="mt-8 flex items-center justify-between">
            <Link to={`books/details/${book._id}`} title="View Details">
              <BsInfoCircle className="size-5 text-blue-500 hover:text-blue-600 transition-colors duration-200" />
            </Link>
            <Link to={`books/edit/${book._id}`} title="Edit Book">
              <AiOutlineEdit className="size-5 text-amber-500 hover:text-amber-600 transition-colors duration-200" />
            </Link>
            <Link to={`books/delete/${book._id}`} title="Delete Book">
              <MdDeleteOutline className="size-5 text-rose-500 hover:text-rose-600 transition-colors duration-200" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
