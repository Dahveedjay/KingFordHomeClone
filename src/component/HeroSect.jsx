import React from 'react'
import BgOne from '../assets/gallery/featured_image_blog.jpg'

function HeroSect() {
  return (
    <div>
      <div className='h-screen ' style={{ 
        backgroundImage:`url(${BgOne})`,
        
      
        backgroundSize: "cover", 
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        
        
        

        

      }}>

      </div>
    </div>
  )
}

export default HeroSect
