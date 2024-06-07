import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Alausa from './pages/Alausa'
import About from './pages/About'




import './App.css';
// import Mid from './component/Mid'
// import { FaFacebookF, FaGithub, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";

function App() {
  return (
         <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Alausa' element={<Alausa />} />
        <Route path='/About' element={<About />} />


        </Routes>


         </BrowserRouter>
    
  //  <>
   
  //   <footer className='text-white bg-blue-950'>
  //   <div className="flex items-center justify-around">
  //     <p>Get connected with us on social networks:</p>

  //     <div className="flex items-center text-[30px] gap-10 mt-4">
  //     <i><FaFacebookF /></i>
  //     <i><FaTwitter/></i>
  //     <i><FaLinkedin/></i>
  //     <i><FaGoogle/></i>
  //     <i><FaGithub/></i>
  //   </div>
  //   </div>

  //   <div className="flex -center p-14">
  //     <div className="w-1/4">
  //      <h2 className='mb-8'>COMPANY NAME</h2>
  //      <p className='w-6/12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi atque facilis repudiandae deserunt sint molestiae. Minima voluptates veniam magnam eligendi?</p>
  //     </div>
  //     <div className="w-1/4">
  //       <h2 className='mb-8'>PRODUCTS</h2>
  //       <ul>
  //         <li className="mb-6">lorem</li>
  //         <li className="mb-6">lorem</li>
  //         <li className="mb-6">lorem</li>
  //         <li className="mb-6">lorem</li>
  //       </ul>
  //     </div>
  //     <div className="w-1/4">
  //     <h2 className='mb-8'>PRODUCTS</h2>
  //       <ul>
  //         <li className="mb-6">lorem</li>
  //         <li className="mb-6">lorem</li>
  //         <li className="mb-6">lorem</li>
  //         <li className="mb-6">lorem</li>
  //       </ul>
  //     </div>
  //     <div className="w-1/4">
  //     <h2 className='mb-8'>PRODUCTS</h2>
  //       <ul>
  //         <li className="mb-6">lorem</li>
  //         <li className="mb-6">lorem</li>
  //         <li className="mb-6">lorem</li>
  //         <li className="mb-6">lorem</li>
  //       </ul>
  //     </div>


  //   </div>
    
   
  //   </footer>
  //  </>

  );
}
 
export default App
