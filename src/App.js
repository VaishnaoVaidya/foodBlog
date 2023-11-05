import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import Home from './screens/Home';
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Blog from './screens/Blog.js';
// import Navbar from './components/Navbar.js';
import BlogDetails from './screens/BlogDetails.js';
import AllCategorises from './screens/AllCategorises.js';
import Community from './screens/Community.js';
import Culture from './screens/Culture.js';
import Company from './screens/Company.js';
import Technology from './screens/Technology.js';

function App() {
  return (
   <div>
    <Router>
      <Blog/>
     <Routes>
      {/* <Route exact path="/" element={<Home />} /> */}
      {/* <Route exact path="/blog" element={<Blog/>} /> */}
      <Route exact path="/blog" element={<AllCategorises/>} />
      <Route exact path="/community" element={<Community/>} />
      <Route exact path="/company" element={<Company/>} />
      <Route exact path="/culture" element={<Culture/>} />
      <Route exact path="/technology" element={<Technology/>} />
      <Route path='/blogdetails' element={<BlogDetails/>} >
      <Route path=':id' element={<BlogDetails/>} />
      </Route>
      <Route exact path="/login" element={<Login/>} />
     </Routes>
   </Router>
   </div>
  );
}

export default App;
