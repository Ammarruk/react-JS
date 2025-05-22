// Assignment 03
// Implement useState to show the actively selected Product/Course in your Product List when clicked.
 
 
 import { useState } from 'react';
 
 import './App.css'
 function Course() {
     const courseInfo = [
         {
             summary: "Learn the basics of Python, a versatile programming language used in various fields.",
             duration: "60 days",
             rating: 5,
             imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
             courseId: "Py",name: "Python", },
             
        {
             courseId: "JS",
             name: "JavaScript 123",
             summary: "Learn the basics of JavaScript, the most popular programming language for web development.",
             duration: "30 days",
             rating: 4.5,
             imageUrl: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=600",
         }, {
             courseId: "WD",
             name: "Advanced Web Design",
             duration: "60 days", 
             rating: 4,
             imageUrl: "https://images.pexels.com/photos/211151/pexels-photo-211151.jpeg?auto=compress&cs=tinysrgb&w=600",
             summary:
                 "Advanced Web Design... Advanced Web Design.. Advanced Web Design",
         }, {
             id: "REACT",
             name: "Frontend Development using React and TypeScript",
             duration: "60 days",
             rating: 4,
             imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
             summary:
                 "Frontend Development using React and TypeScript.. Frontend Development using React and TypeScriptFrontend Development using React and TypeScript",
         },
     ]
     const [selectedIndex, setSelectedIndex] = useState(-1);
 
     return (
         <>
             <div style={{
   backgroundColor: '#17a2b8',
   color: 'white',
   padding: '3px',
   textAlign: 'center',
   fontSize: '24px'
 }}>
   <h1>Welcome to our courses</h1>
 </div>
    <div className="row">
                 {courseInfo.map((c, index) => (
                     <div className={selectedIndex == index ? "card text-bg-info" : "card"} key={c.courseId} onClick={() => setSelectedIndex(index)} >
                         <img src={c.imageUrl} className="card-img-top " alt="..." />
                         <div className="card-body">
                             <h5 className="card-title">{c.name}</h5>
                             <h5 className='card-link'>{c.rating} stars</h5>
                             <h5 className='card-subtitle mb-2 text-body-secondary'>{c.duration} </h5>
                             <p className="card-text">{c.summary}</p>
                         </div>
                     </div>
 
                 ))}
             </div>
         </>
     );
 }
 
 export default Course;