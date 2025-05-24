// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// // import './App.css'


// // import Home from './1-Home';
// // import About from './1About';
// // import Contact from './Contact';
// // import MovieList from './MovieList';




 

// function App() {
//   return (
//     <BrowserRouter>

//         {/* <Link to="/" className="nav-link"></Link>
//   <Link to="/services" className="nav-link active"></Link>
//     <Contact/> */}


//       {/* <nav className='bg-info'>
//         <Link to='/' className='py-3 px-5 myNavButton'>Home</Link>
//       <Link to='/UserInfo' className='py-3 px-5 myNavButton'>Courses</Link>
//         <Link to='/MovieList' className='py-3 px-5 myNavButton'>Movies</Link>
//         <Link to='/1Contact' className='py-3 px-5 myNavButton'>Contact</Link>
//         <Link to='/1About' className='py-3 px-5 myNavButton'>About</Link>
//       </nav> */}
//             {/* <h1 className="text-center text-white fw-bold display-4 my-4 bg-dark border pb-2">
//   AMMAR'S REACT APP
// </h1> */}
//       <Routes>
//         {/* <Route path='/' element={<Home />}></Route>
      
//         <Route path='/MovieList' element={<MovieList />}></Route>
//         <Route path='/1Contact' element={<Contact />}></Route>
//         <Route path='/1About' element={<About />}></Route> */}
      

//           {/* <Route path='/UserInfo' element={<UserInfot />}></Route> */}
  
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing all components
import Navbar from "./07Assignments/Nav";
import Hero from "./07Assignments/Hero";
import Services from "./07Assignments/Services";
import Contact from "./07Assignments/1Contact";
import About from "./07Assignments/About";
import Footer from "./07Assignments/Footer";

function App() {
  return (
    <BrowserRouter> 
      <Navbar /> {/* Always show */}
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer /> {/* Always show */}
    </BrowserRouter>
  );
}

export default App;
