import Home from "./pages/home";
import Cart from "./pages/cart"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/cart" element = {<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
