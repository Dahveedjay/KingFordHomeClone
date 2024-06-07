import React from 'react'
import Overlay from '../assets/gallery/overlay.jpg'


function SectTwo() {
  return (
    <div>
      <div className='pb-[20rem] pt-[15rem]' style={{
        backgroundImage:`url(${Overlay})`,
      
        backgroundSize: "cover", 
        backgroundPosition: "top top",
        backgroundAttachment: "fixed",
        

        

      }}>
      <div className='w-[80%] fle m-[auto]'>
      <div>

        <div className='flex'>
         <p className='w-20 h-1 bg-white mt-4 '></p>
         <h1 className='text-white text-[20px]'>
            KingFordHomes
        </h1>
        </div>
        <h1 className=' text-[4.5rem] w-[50%] text-[#977349] pt-10 pb-[80px]'>
            Designed to meet the highest criteria
        </h1>
       </div>
       <div className=' text-white flex justify-center'>
        <div>
         <h1>
            We Auction
         </h1>
         <p className='w-[70%]'>
            We sell a wide range of residential and commercial properties
         </p>
        </div>
        <div >
         <h1>
            We Buy
         </h1>
         <p  className='w-[70%]'>
            we aquire properties for our neighbors in desirable neighborhood
         </p>
        </div>
        <div>
         <h1>
            We Sell
         </h1>
         <p className='w-[70%]'>
            Smooth properties sells across lagos and beyond
         </p>
        </div>
        <div>
         <h1>
            We Rehabilitate
         </h1>
         <p className='w-[70%]'>
            We transform "Ugly" houses into beautiful homes
         </p>
        </div>
       </div>
      </div>
         
      </div>
    </div>
  )
}

export default SectTwo
