import React from 'react'
import Log from '../assets/gallery/king.png'

function Footer() {
  return (
    <div>
     <div className='w-[100] bg-black'>
     <div className=' w-[70%] top-10 text-white pt-[100px] pl-[100px]'>
           <div className='flex justify-around'>
            <h1 className='ml-[250px]'>
              Links
            </h1 >
            <h1 className='pl-[150px]'>
              
              Call Us

            </h1>
            
           </div>
           <div className='flex   justify-center gap-[40px]'>
            <img className='w-[300px]' src={Log} alt="" />
            <div className=' '>
               <div className=' border-b pt-[50px] pb-[4px]'>
                About Us
               </div>
               <div className=' border-b pt-[5px] pb-[4px]'>
                Privacy
               </div>

            </div>
            <div className='pt-[55px] pl-[400px]'>
              <div className='flex'>
              <i className="fa-solid fa-phone pt-1 pr-1"></i>  
              <h1 className='border-l pl-2 mb-2'>+23422489039</h1>

              </div>
              <div className='flex'>
              <i className="fa-solid fa-phone pt-1 pr-1"></i> 
                <h1 className='border-l pl-2 '>+23422489039</h1>
              </div>
            </div>
           </div>
           <div className='ml-[50px]'>
           <h1 className='mb-2'><i className="fa-solid fa-house pr-2"></i>
           39, Alfred Rewane road Ikoyi, Lagos, Nigera
           </h1>
           <h1 className='w-[40%] mb-2'><i className="fa-solid fa-house pr-2"></i>
           Plot A02/156, 10 Benue cresent, Wuse Zone 4(Abacha Estate) Behind Sheraton Hotel
           </h1>
           <h1 className='mb-2'><i className="fa-solid fa-house pr-2"></i>
            35 Balfe St Kings Cross, London N1 9EB
           </h1>

           <h1 > <i className="fa-regular fa-envelope pr-2"></i>

            info@kingfordhomes.com
           </h1>

           </div>
           <div className=' pb-[100px] ml-[50px] pt-10'>
            <h1>
              Follow us:
            </h1>
           <div className='flex gap-3 mt-2'>
           <div className=' flex justify-center rounded-[100%] bg-[#A48056] w-[30px] h-[30px]'>
           <i className="fa-brands fa-facebook-f m-[auto]"></i>
           </div>
            <div className=' flex justify-center rounded-[100%] bg-[#A48056] w-[30px] h-[30px]'>
            <i className="fa-brands fa-twitter m-[auto]"></i>

            </div>
            <div className='flex justify-center rounded-[100%] bg-[#A48056] w-[30px] h-[30px]'>
            <i className="fa-brands fa-youtube m-[auto]"></i>
            </div>
            <div className='flex justify-center rounded-[100%] bg-[#A48056] w-[30px] h-[30px]'>
            <i className="flex justify-center fa-brands fa-instagram m-[auto]"></i>
            </div>
           </div>
           </div>
           
        </div>
     </div>
    </div>
  )
}

export default Footer
