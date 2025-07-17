import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Sobre from "./pages/Sobre/Sobre";

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/contato" element={<Contact />}/>
          <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
