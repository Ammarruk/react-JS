import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './1-Home';
import About from './1About';
import Contact from './Contact';
import UserInfot from './UserInfo';
import MovieList from './MovieList';


function App() {
  return (
    <BrowserRouter>


      <nav className='bg-info'>
        <Link to='/' className='py-3 px-5 myNavButton'>Home</Link>
        <Link to='/UserInfo' className='py-3 px-5 myNavButton'>Courses</Link>
        <Link to='/MovieList' className='py-3 px-5 myNavButton'>Movies</Link>
        <Link to='/1Contact' className='py-3 px-5 myNavButton'>Contact</Link>
        <Link to='/1About' className='py-3 px-5 myNavButton'>About</Link>
      </nav>
            <h1 className="text-center text-white fw-bold display-4 my-4 bg-dark border pb-2">
  AMMAR'S REACT APP
</h1>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/UserInfo' element={<UserInfot />}></Route>
        <Route path='/MovieList' element={<MovieList />}></Route>
        <Route path='/1Contact' element={<Contact />}></Route>
        <Route path='/1About' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;