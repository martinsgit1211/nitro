import React from 'react'
import Banner from './Banner.js'
import Sectiontwo from './section2.js'
import Footer from './footer.js'


function Home() {
  return (
    <>
     <div class="main-container">
      
      <Banner/>

      <Sectiontwo/>
      <div class="nitro-classic">
          <div class="left">
              <img src="./src/nitro-classic.svg" class="nitro" alt=""/>
               <p class="imagine-2">Keep it simple — get the base chat perks without a Server Boost.</p>
               <div class="buttons">
                   <button class="openbutton"> $49.99 per year<div class="innerbutton">16% off</div></button>
                   <button class="openbutton2">$4.99 per month</button>
               </div>
          </div>
      </div>
       <Footer/>
  </div>
    </>
  )
}

export default Home