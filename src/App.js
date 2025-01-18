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
import ResetPassword from "./routes/ResetPassword";
import Dashboard from "./routes/Dashboard";
import Error from "./routes/Error";
import Cart from "./routes/Cart";
import Profile from "./routes/Profile";
import EditProfile from "./routes/EditProfile";

function App() {
  return (
    <div>

      {/* add open and close routes respectively */}

       <Nav/>

       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/verify-email" element={<VerifyEmail/>}/>

        <Route path="/login" element={<LogIn/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/forgot-password/:id" element={<ResetPassword/>}/>
        
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/my-profile" element={<Profile/>}/>
        <Route path="/dashboard/my-profile/edit-profile" element={<EditProfile/>}/>
        <Route path="/dashboard/cart" element={<Cart/>}/>
        

        <Route path="*" element={<Error/>}/>
       </Routes>

       <Footer/>
    </div>
  );
}

export default App;
