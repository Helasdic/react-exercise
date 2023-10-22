// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./component/pages/navbar";
import Home from "./component/pages/home";
import About from "./component/pages/about";
import Posting from "./component/pages/posting";
import Contact from "./component/pages/contact";
import Registration from "./component/auth/registration";
import Login from "./component/auth/login";
import Userall from "./component/pages/userall";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posting" element={<Posting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Userall />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
