import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ShowBook from "./pages/ShowBook"
import CreateBook from "./pages/CreateBook"
import EditBook from "./pages/EditBook"
import DeleteBook from "./pages/DeleteBook"
import {Toaster} from 'react-hot-toast';

const App = () => {
  return (
    <div data-theme="night" className="min-h-screen">
     <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/books/details/:id" element={<ShowBook/>}/>
        <Route path="/books/create" element={<CreateBook/>}/>
        <Route path="/books/edit/:id" element={<EditBook/>}/>
        <Route path="/books/delete/:id" element={<DeleteBook/>}/>
     </Routes>
      <Toaster/>
     </div>
  )
}

export default App
