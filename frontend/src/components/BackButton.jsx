import {BsArrowLeft} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div className='px-4 py-4'>
     <Link to={"/"}>
      <button className="btn btn-outline btn-secondary/70">
        <BsArrowLeft className='size-5'/>
      </button>
     </Link>
   </div>
  )
}

export default BackButton
