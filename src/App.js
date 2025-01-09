import { Route, Routes } from "react-router-dom";
import Nav from "./components/common/Nav";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Footer from "./components/common/Footer";
import LogIn from "./routes/LogIn";
import SignUp from "./routes/SignUp";
import ForgotPassword from "./routes/ForgotPassword";
import VerifyEmail from "./routes/VerifyEmail";

function App() {
  return (
    <div>

       <Nav/>

       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/verify-email" element={<VerifyEmail/>}/>
        <Route path="/signup" element={<SignUp/>}/>
       </Routes>

       <Footer/>
    </div>
  );
}

export default App;
