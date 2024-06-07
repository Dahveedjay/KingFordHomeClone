import React from 'react'
import Pic from '../assets/gallery/sectTwo.jpg'
import Pics from '../assets/gallery/secThree.jpg'
import Picture from '../assets/gallery/727-by.jpg'

function SectThree() {
  return (
    <div>
      <div className='w-[80%] m-[auto] pb-[100px]'>

     <div className='flex pt-[100px]'>
     <p className='w-[100px] mt-3 h-[1px] bg-[#977349] mt-5'></p>

<h1 className='text-[#977349] text-[25px]  '>Tour</h1>

     </div>
        <h1 className='text-[#977349] text-[40px] pt-[60px] pb-[100px] '>Our Properties</h1>

        <div className='flex gap-10'>
            <div>
             <img src={Picture} alt="" />
             <h1 className='text-[35px] text-[#977349] pt-3 pb-2 '>
                Alausa
             </h1>
             <p>
             From the innovative design and superb attention to details, 
             Alausa Heights allows for a great combination to create a truly distinctive home.
             </p>
            </div>
            <div>
            <img src={Pics} alt="" />
             <h1 className='text-[35px] text-[#977349] pt-3 pb-2 '>
             Daffodil Gardens Estate
             </h1>
             <p>
             Daffodil Gardens Estate is located In a secure, 
             safe and quiet vicinity, central to amazing schools, market places, malls,churches.
             </p>
            </div>
            <div>
            <img className='pb-10 ' src={Pic} alt="" />
             <h1 className='text-[30px] text-[#977349] pt-3 pb-2 '>
             Knight Villa Banana Island
             </h1>
             <p>
             Knight Villa situated in Banana Island, Ikoyi Lagos. 
             It’s a series of elegant and tranquil residential luxury villas situated on a land area
             </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SectThree
