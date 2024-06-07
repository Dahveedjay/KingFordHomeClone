import React, { useState } from 'react';
import Logo from '../assets/pictures/KINGFORD-LOGO-PNG-WHITE (1).png';


const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseOver = () => {
    setDropdownVisible(true);
  };

  const handleMouseOut = () => {
    setDropdownVisible(false);
  };

  return (
    <div className='bg-white w-100%'>
      <header className='bg-black text-white flex w-[100%] fixed z-[50px] justify-center gap-[70px]'>
        <div>
          <img className='w-[150px] mb-' src={Logo} alt="" />
        </div>

        <ul className='flex mt-6 gap-10 '>
          <div className='flex gap-10 '>
            <div className=''>
              <li className='mb-[5px]'>Home</li>
              <p className=' w-[44px] bg-[#AB8151] h-[2px]'></p>
            </div>
            <div className='bg- group' >
              <li className='mb-[5px]'>About Us</li>
              <p className='h-[2px] w-[0px] bg-[#AB8151] group-hover:w-[70px] group-hover-transition-transform duration-300 ease-out '></p>

            </div>
            <div className='relative group  text-white ' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <li className=' mb-[5px]'>Properties</li>
              <p className='h-[2px] w-[0px] bg-[#AB8151] group-hover:w-[70px] group-hover-transition-transform duration-300 ease-out '></p>

              {dropdownVisible && (
                
                 <div className='bg-white text-black mt-[30px] w-[300px] absolute top-[10px]'>
                  
                  {<NavContent />}
                  </div>
                
              )}
            </div>
            <div className='bg- group'>
              <li className='mb-[5px]'>Blog</li>
              <p className='h-[2px] w-[0px] bg-[#AB8151] group-hover:w-[34px] group-hover-transition-transform duration-300 ease-out'></p>
            </div>
            <div className='bg- group'>
              <li className='mb-[5px]'>Our Team</li>
              <p className='h-[2px] w-[0px] bg-[#AB8151] group-hover:w-[68px] group-hover-transition-transform duration-300 ease-out'></p>
            </div>
            <div className='bg- group'>
              <li className='mb-[5px]'>Contact</li>
              <p className='h-[2px] w-[0px] bg-[#AB8151] group-hover:w-[55px] group-hover-transition-transform duration-300 ease-out'></p>
            </div>
          </div>
        </ul>

        <div className='mt-2  '>
          <button className='bg-[#AB8151] px-5 py-4  text-center '>
            Schedule Appointment
          </button>
        </div>
      </header>
    </div>
  );
};

const NavContent = () => {
  return (
    <div>
      <div className='Hover-menu group mt-[20px] '>
      <ul className="">
        
          <a  href="/Alausa"> <li className='hover:translate-x-4 hover:text-[#AB8151]'><p className="w-3  h-1 mb-1 mr-3 ml-2 bg-[#AB8151] inline-block"></p>Alausa heights</li></a>
                <li className="pt-3 pb-3 hover:translate-x-4 hover:text-[#AB8151]"><p  className="w-3 h-1 mb-1 mr-3 ml-2 bg-[#AB8151] inline-block "></p>Daffodil Garden Estate</li>
                <li className="pt-3 pb-3 hover:translate-x-4 hover:text-[#AB8151]"><p className="w-3 h-1 mb-1 mr-3 ml-2 bg-[#AB8151] inline-block"></p>Knight Villa Banana Island</li>
                <li className="pt-3 pb-3 hover:translate-x-4 hover:text-[#AB8151]"><p className="w-3 h-1 mb-1 mr-3 ml-2 bg-[#AB8151] inline-block"></p>Silver Crest Estate</li>
                <li className="pt-3 pb-3 hover:translate-x-4 hover:text-[#AB8151]"><p className="w-3 h-1 mb-1 mr-3 ml-2 bg-[#AB8151] inline-block"></p>Lagoon Vista</li>
                <li className="w-[70%] pt-3 pb-3 text-center hover:translate-x-4 hover:text-[#AB8151]"><p className="w-3 h-1 mb-1 ml-2 mr-3 bg-[#AB8151] inline-block"></p>Lekki Town Square Lekki <span className='mr-[40px]'>Shopping Mall</span></li>
            </ul>

      </div>
       
    </div>
  )
}

export default Navbar;