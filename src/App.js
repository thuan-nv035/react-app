import List from './pages/todos/List'
import Add from './pages/todos/Add'
import Edit from './pages/todos/Edit'
import GalleryImage from './pages/GalleryImage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
   <>
      <BrowserRouter>
      <Link to = "/add">Add</Link>
        <Routes>
          <Route path = "/" element = {<List />}/>
          <Route path = "/add" element = {<Add />}/>
          <Route path = "/edit" element = {<Edit />}/>
          <Route path = "/galleryImage" element = {<GalleryImage/>} />
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
