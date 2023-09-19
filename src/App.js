import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ImageApi from "./Components/ImageApi";
import UserCard from "./Components/UserCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ImageApi />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/userlist" element={<UserCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
