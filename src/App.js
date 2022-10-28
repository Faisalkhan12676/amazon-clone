import react from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Detailpage from "./pages/Detailpage";
import Navbar from "./components/Navbar";
import Cartpage from "./pages/Cartpage";


const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Detailpage />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>
    </>
  );
};

export default App;
