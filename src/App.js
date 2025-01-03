import { Route, Routes } from "react-router-dom";
import Nav from "./components/common/Nav";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div>

       <Nav/>

       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
       </Routes>

       <Footer/>
    </div>
  );
}

export default App;
