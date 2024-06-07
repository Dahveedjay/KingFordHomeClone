import React from 'react'
import Pic from '../assets/gallery/sectTwo.jpg'
import Pics from '../assets/gallery/secOne.jpg'

function Sects() {
  return (
    <div className='bg-black'>
      <div className='flex justify-center pt-[150px] mr-[100px]  gap-10'>
       <div className='w-[40%] ml-40 '>
        <div className='flex pt-10'>
          <p className='w-[100px] mt-3 h-1 bg-white'></p>
          <h3 className='w-[40%]  text-[20px] ml-2 text-white'> KINGFORD HOMES</h3>

        </div>
       <h1 className='  red text-[60px] pt-10 pb-10 text-[#977349]'>About Us</h1>


       <p className='   w-[40] text-xl text-white'>We are a real estate brokerage, development, and investment advisory firm domiciled in ikoyi, the most high-brow neighborhood in Lagos, Nigeria, with highly experienced affiliates in neighborung cities. At kingFord, we provide affordable luxury home for every income earners, in Nigeria and Diaspora irrespective of their varying budgets.</p>
         
       </div>
       <div className='flex mt-[2rem]  ' >
       <div className='relative  '>
       <img className=' w-[] z-[10px]  ' src={Pic} alt=''/>
       <div className='absolute top-[150px] left-[20px]'>
      <img className=' z-[100px]' src={Pics} alt="" />
      </div>
       </div>
      
       </div>




      </div>
      <div className='flex mt-40  justify-center gap-[250px] pb-[50px] pt-10'>
        <div>
        <h1 className='text-[45px] text-[#977349]'>
          2020
        </h1>
        <p className='text-white text-[20px]'>
          ESTABLISH
        </p>
        </div>
        <div>
        <h1 className='text-[45px] text-[#977349]'>
          4+
        </h1>
        <p className='text-white text-[20px]'>
          PROPERTIES
        </p>
        </div>
        <div>
        <h1 className='text-[45px] text-[#977349]'>
          114+
        </h1>
        <p className='text-white text-[20px]'>
          CLIENTS
        </p>
        </div>
        <div>
        <h1 className='text-[45px] text-[#977349]'>
          4+
        </h1>
        <p className='text-white text-[20px]'>
          LOCATIONS
        </p>
        </div>
        
      </div>
      <div className='text-center pt-20 pb-20 bg-white'>
        <h1 className='text-[3rem] text-[#AB8151] pb-7 font'>
          Luxury Embedded in Affordability 
          </h1>
          <p className='text-[1.3rem] w-[80%] m-[auto]'>
            We maintain high levels of customer/client service, and ensure compliance with all state-based real estate laws. Our approach to real estate operations includes buying, renovating, and managing homes.
          </p>
       
      </div>
  
  </div>
  )
}

export default Sects
