import React from 'react'
import Pexel from '../assets/gallery/pexels-joao-vitor-heinrichs-1787044-scaled.jpg'
import Dark from "../assets/gallery/3-scaled.jpg"

function SectFour() {
  return (
    <div>
       <div className='flex justify-end  h-[650px] ' >
            <img className='w-[30%] h-[635px]' src= {Dark} alt="" />
           <div className='w-[60%]'>
           <img className='' src={Pexel} alt="" />
          
           <div className=' flex  h-[635px] text-white  bg-white-900 relative top-[-44.6rem] left- '>
         <div className='flex m-[auto] pr-[200px] gap-10'>
         <div className='text-[40px]'>
           <h1 className='text-[#977349]'>
           Luxury Town House 
           </h1>
           <h1>from 90,000,000</h1>
          </div>
          <div>
             <div>

             </div>
             <div className='bg-[#977349] flex pb-[10px] mt-5'>
             <i className="fa-solid fa-phone text-[25px] pl-2 pt-8"></i>
             <div>
             <h1 className='pl-8'>
                Reserve your spot
              </h1>
              <h1 className='text-[25px] pl-5 pr-10 '>
                +234467289399
              </h1>
             </div>
             </div>
         </div>
          </div>
           </div>
           
           </div>
          
        </div>
    </div>
  )
}

export default SectFour
