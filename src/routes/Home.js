import React from 'react'
import Nav from "../components/homepage/Nav"
import SectionA from "../components/homepage/SectionA"
import SectionB from "../components/homepage/SectionB"
import SectionC from "../components/homepage/SectionC"
import Footer from "../components/homepage/Footer"


const Home = () => {
  return (
    <div className='mx-5'>
       
       <Nav/>

       <div className='h-0.5 bg-white'></div>

       <SectionA/>

       <SectionB/>

       <SectionC/>

       <Footer/>

    </div>
  )
}

export default Home
