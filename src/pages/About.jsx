import React from 'react'
import Navbar from '../component/Navbar'
import Living from '../assets/pictures/Untitled-4.jpg'
import Kitchen from '../assets/pictures/Untitled-5.jpg'
import Footer from '../component/Footer'

function About() {
  return (
    <div>
      <div className='bg-black w-[100%] h-[100%] pb-[100px]'>
        <Navbar />
        <div className='m-[auto] '>
            <h1 className='text-[#A48056] text-[50px] m-[auto] text-center pt-[250px] pb-[30px]'>
                WHY CHOOSE US?
            </h1>
            <p className='text-white w-[80%] align-end text-[20px] margin m-[auto]'>
            We are a real estate brokerage, development, and investment advisory firm domiciled in Ikoyi, the most high-brow neighborhood in Lagos, Nigeria, with highly experienced affiliates in neighboring cities. At KingFord, we provide afforadable luxury home for every income earners,  <span className='ml-[300px]'>In Nigeria and Diaspora irrespective of their varying budgets.</span>
            </p>
            <p className='text-white w-[70%] align-end text-[20px] mt-10 m-[auto] '>
            We make dream of owning a home which meets the increasing demnd of the mordern-day urban architecture a reality with our process of 
            aucioneering, valuing and mortaging of properties across Lagos and beyond for our clients hassle-free.
            </p>
        </div>
        <div className='flex gap-[150px] justify-center pt-20'>
            <div className='w-[20%]'>

            <i className="fa-solid fa-spa text-[50px] text-[#A48056]"></i>
                <h1 className='text-white mt-5 mb-5'>
                  WE AUCTION
                </h1>
                <p className='text-white'>
                We sell a wide range of residential and commercial properties on behalf of both Private individuals and corporate clients across the Nigeria.
                </p>
            </div>
            <div className='w-[20%]'>
            <i className="fa-solid fa-coins text-[50px] text-[#A48056]"></i>
            <h1 className='text-white mt-5 mb-5'>
                WE FINANCE
            </h1>
            <p className='text-white'>
            Our real estate finance practice focuses on the financing and refinancing of the sale, purchase, development and management of real estate assets of all types. our real estate finance team is diverse, with a culture of technical excellence on loan financings carefully built over the years.
            </p>
            </div>
            <div className='w-[20%]'>
            <i className="fa-solid fa-briefcase text-[50px]  text-[#A48056]"></i>
                <h1 className='text-white mt-5 mb-5'>
                    WE ADVISE
                </h1>
                <p className='text-white'>
                A huge pressure is being mounted on the real estate sector across the globe, as rapid urbanization and the quest for re-urbanization are driving the business forward for investment cycles and capital market movements. consequently, the task of improving the performance of real estate, and offering service value is becoming more demanding.
                </p>
            </div>
        </div>

        <div className='flex gap-[150px] justify-center pt-20'>
            <div className='w-[20%]'>

            <i className="fa-solid fa-truck-fast text-[50px] text-[#A48056]"></i>
                <h1 className='text-white mt-5 mb-5'>
                  WE REHABILITATE
                </h1>
                <p className='text-white'>
                We transform “ugly” houses into beautiful homes


                </p>
            </div>
            <div className='w-[20%]'>
            <i className=" fa-solid fa-solar-panel text-[50px] text-[#A48056]"></i>
            <h1 className='text-white mt-5 mb-5'>
               WE BUY
            </h1>
            <p className='text-white'>
            acquire properties for our clients in desirable neighborhoods.
            </p>
            </div>
            <div className='w-[20%]'>
            <i className="fa-solid fa-holly-berry text-[50px]  text-[#A48056]"></i>
                <h1 className='text-white mt-5 mb-5'>
                    WE SELL
                </h1>
                <p className='text-white'>
                Smooth property sales across Lagos and beyond


                </p>
            </div>
        </div>


      </div>
      <div className='flex'>
        <div className=''>
          <img src={Living} alt="" />
        </div>
        <div className='w-[90%]'>
          <h1 className='w-[20%] text-[#A48056] text-[60px] pl-8 pt-[150px]'>
          Affordable Luxury Redefined
          </h1>
          <p className='w-[70%] pl-8'>
          At Kingford Home we see a home as the most valuable investment, and the greatest necessity in the world of man. That is why our expert team curates the Nigeria’s most elite properties, matches them with qualified buyers, and facilitates an easy, market-driven transaction with proper documentation and valuing of each property.
          </p>
        </div>
      </div>
      <div className='flex'>
        
        <div className='w-[100%] pt-[100px] '>
          <h1 className='w-[70%] text-[#A48056] text-[60px] relative left-[200px] pt-[150px]'>
          90 Days Solution

          </h1>
          <p className='w-[30%] absolute left-[200px]'>
          The Kingford Homes Auctions 90-day solution would deliver a higher or Lower Net Present Value than the status quo, resulting in a time-certain sale, we add unmatched exponential reach, speed, and certainty. As a matter of fact we help sellers accomplish in as little as 90 days what can otherwise take years.
          </p>
        </div>
        <div className=''>
          <img src={Kitchen} alt="" />
        </div>
      </div>
      <div className='text-center pt-20 pb-20'>
        <h1 className='text-[3rem] pb-10'>
          Luxury Embedded in Affordability 
          </h1>
          <p className='text-[1.5rem] w-[80%] m-[auto]'>
            We maintain high levels of customer/client service, and ensure compliance with all state-based real estate laws. Our approach to real estate operations includes buying, renovating, and managing homes.
          </p>
       
      </div>

      <div className='flex justify-center gap-10 mb-[100px]'>
        <div className='bg-black text-white w-[18%]'>
        <i className="fa-solid fa-gavel text-[45px] pb-10 pt-8 ml-[200px]"></i>
        <p className='w-[80px] bg-white h-[1px] mt-10 ml-5'></p>
        <h1 className='text-[30px] pt-5 pb-2 ml-5'>
          Intergrity
        </h1>
        <p className='w-[70%] pb-10 ml-5'>
        We operate consistently in accordance with a strong set of moral values and ethical guidelines.
        </p> 
        </div>
        <div className='bg-[#C39F75] text-white w-[18%]'>
        <i className="fa-solid fa-layer-group text-[45px] pb-10 pt-8 ml-[200px]"></i>
        <p className='w-[80px] bg-white h-[1px] mt-10 ml-5'></p>
        <h1 className='text-[30px] pt-5 pb-2 ml-5'>
          Experience
        </h1>
        <p className='w-[70%]  pb-10 ml-5'>
        We provide top notch services and experiences throughout the entire customer journey while providing you with value for your money.
        </p>
        </div>
        <div className='bg-black text-white w-[18%]'>
        <i className="fa-solid fa-chart-column text-[45px] pb-10 pt-8 ml-[200px]"></i>
        <p className='w-[80px] bg-white h-[1px] mt-10 ml-5'></p>
        <h1 className='text-[30px] pt-5 pb-2 ml-5'>
          Excellence
        </h1>
        <p className='w-[70%] pb-10 ml-5'>
        As certified Professionals, we are embedded with the responsibility of ensuring optimum satisfaction to every client.
        </p>
        </div>
        <div className='bg-black text-white w-[18%]'>
        <i className="fa-solid fa-snowflake text-[45px] pb-10 pt-8 ml-[200px]"></i>
        <p className='w-[80px] bg-white h-[1px] mt-10 ml-5'></p>
        <h1 className='text-[30px] pt-5 pb-2 ml-5'>
          Team Spirit
        </h1>
        <p className='w-[70%] pb-10 ml-5'>
        With our line of professional business development executives who are always readily available ensure that no need is left unmet at all times.
        </p>
        </div>
      </div>
      <Footer />
      
    </div>
  )
}

export default About
