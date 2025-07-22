import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
