
import 'bootstrap/dist/css/bootstrap.css';
import UserInfo from './userInfo.tsx';
// import Greet from './greet.tsx';
import ProductsList from './list.tsx'

function App() {
  return (
    <>
    {/* <Greet name='AMMAR' message='Welcome to my web app' /> */}
    <hr />
    <UserInfo course= "Frontend development course"
      summary= "We offer modern and responsive frontend development services using the latest technologies like React, HTML, CSS, and JavaScript"
      courseImageUrl= "https://images.pexels.com/photos/16129705/pexels-photo-16129705/free-photo-of-man-sitting-at-desk-working-on-computers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      portfolioUrl= "https://ammarruk.github.io/My-portfloio/"/>
      <hr />
    <ProductsList id= {1} name= "Earphone" description= "Experience premium sound quality with Sony headphones, designed for comfort, style, and superior audio performance. Whether for music, calls, or gaming, they offer clear sound, deep bass, and noise cancellation features for an immersive listening experience."price={599 }
     id= {2} name= "Laptop" description= "HP laptops combine performance, reliability, and sleek design, making them ideal for work, study, and entertainment. With powerful processors, long battery life, and vibrant displays, HP offers a smooth computing experience for every need." price={ 79999 }
     id= {3} name= "Smartwatch" description= "The Apple Watch blends cutting-edge technology with elegant design, offering health tracking, fitness features, and seamless connectivity. Stay updated, monitor your health, and control your devices—all from your wrist." price= {19999}/>
</>
);}    


export default App;
