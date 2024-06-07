import React from 'react'
import Navbar from '../component/Navbar'
import HeroSect from '../component/HeroSect'
import Sects from '../component/Sects'
import SectTwo from '../component/SectTwo'
import SectThree from '../component/SectThree'
import SectFour from '../component/SectFour'
import Slider from '../component/Slider'
import Footer from '../component/Footer'
import MyComponent from '../component/MyComponent'
function Home() {
  return (
    <div>
      <Navbar />
      <HeroSect />
      <Sects />
      <SectTwo/>
      <SectThree />
      <SectFour />
      <MyComponent />
      <Slider />
      <Footer />



    </div>
  )
}

export default Home
