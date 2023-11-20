import React from 'react'
import Banner from './Banner.js'

function Home() {
  return (
    <>
     <div class="main-container">
      
      <Banner/>

      <div class="section2">
          <div class="reliable">
              <p class="reliable-1">DISCORD NITRO ENHANCES YOUR ALL-IN-<br/>ONE DISCORD VOICE, VIDEO, AND TEXT CHAT.</p>
              <center><p class="reliable-2">Check out the perks you'll get.</p></center>
          </div>
          <div class="cards">
              <div class="cards-top">
                  <div class="card1">
                      <div>
                          <div class="text1">Better Emoji</div>
                          <div class="text2">Collect or make your own custom and <br/>animated emojis.</div>
                      </div>
                      <img class="col-imgs" src="./src/better-emoji.svg" alt=""/>                    
                  </div>
                  <div class="card2">
                      <div>
                          <div class="text1">Personal Profile</div>
                          <div class="text2">Use an animated avatar and claim a <br/>custom tag.</div>
                      </div>
                      <img class="col-imgss5" src="./src/personal-profile.svg" alt=""/>                
                  </div>
                  <div class="card3">
                      <div>
                          <div class="text1">Support a Server</div>
                          <div class="text2">Get 2 Server Boosts and 30% off extra Boosts.</div>
                      </div>
                      <img class="col-imgs" src="./src/support-a-server.svg" alt=""/>               
                  </div>
              </div>
              <div class="cards-bottom">
                  <div class="card4">
                  <div>
                      <div class="text1">Rep Your Support</div>
                      <div class="text2">Profile badge shows how long you've <br/>supported Discord.</div>
                  </div>
                  <img class="col-imgs" src="./src/rep-your-support.svg" alt=""/>                 
                  </div>
                  <div class="card5">
                      <div>
                          <div class="text1">Bigger Uploads</div>
                          <div class="text2">100MB upload size for high-quality file sharing.</div>
                      </div>
                      <img class="col-imgss" src="./src/bigger-uploads.png" alt=""/>                
                  </div>
                  <div class="card6">
                      <div>
                          <div class="text1">HD Video</div>
                          <div class="text2">Hi-res video, screenshare, and Go <br/>Live streaming.</div>
                      </div>
                      <img class="col-imgss5" src="./src/hd-video.png" alt=""/>                    
                  </div>
              </div>
              <div class="does-it">
                  <h3 class="do-it">Doitdoitdoitdoitdoitdoit</h3>
                  <div class="buttons2">
                      <button class="openbutton3"> $99.99 per year<div class="innerbutton">16% off</div></button>
                      <button class="openbutton4">$9.99 per month</button>
                  </div>
              </div>
          </div>
      </div>
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