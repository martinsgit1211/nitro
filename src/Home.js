import React from 'react'
import Banner from './Banner.js'
import Sectiontwo from './section2.js'


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
         <div class="sixth-body">
          <div class="top-sixth">
              <div>
                  <p class="imagine-place">IMAGINE A <br/>PLACE</p>
                  <img class="americanflag" src="./src/usa.png" alt=""/>  English, USA <select name="country" id="dropcountry"></select>
              </div>
              <div>
                  <p class="p-blue">Product</p>
                  <p class="underline">Download</p>
                  <p class="underline">Nitro</p>
                  <p class="underline">Status</p>
              </div>
              <div>
                  <p class="p-blue">Company</p>
                  <p class="underline">About</p>
                  <p class="underline">Jobs</p>
                  <p class="underline">Branding</p>
                  <p class="underline">Newsroom</p>
              </div>
              <div>
                  <p class="p-blue">Resources</p>
                  <p class="underline">College</p>
                  <p class="underline">Support</p>
                  <p class="underline">Safety</p>
                  <p class="underline">Blog</p>
                  <p class="underline">Feedback</p>
                  <p class="underline">Developers</p>
                  <p class="underline">Streamkit</p>
              </div>
              <div>
                  <p class="p-blue">Policies</p>
                  <p class="underline">Terms</p>
                  <p class="underline">Privacy</p>
                  <p class="underline">Cookie Settings</p>
                  <p class="underline">Guidelines</p>
                  <p class="underline">Acknowledgements</p>
                  <p class="underline">Licenses</p>
                  <p class="underline">Moderation</p>
              </div>
          </div>
           <hr class="line" size="1.5" width="75%"/>
          <div class="bottom-sixth">
           <p class="bottom-discord">Discord</p>
           <button class="botom-signup">Sign up</button>
          </div>
      </div>
  </div>
    </>
  )
}

export default Home