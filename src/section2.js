import React from 'react'
import one from './images/better-emoji.svg'
import two from './images/personal-profile.svg'
import three from './images/support-a-server.svg'
function section2() {
  return (
   <>

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
                      <img class="col-imgs" src={one} alt=""/>                   
                  </div>
                  <div class="card2">
                      <div>
                          <div class="text1">Personal Profile</div>
                          <div class="text2">Use an animated avatar and claim a <br/>custom tag.</div>
                      </div>
                      <img class="col-imgss5" src={two} alt=""/>                
                  </div>
                  <div class="card3">
                      <div>
                          <div class="text1">Support a Server</div>
                          <div class="text2">Get 2 Server Boosts and 30% off extra Boosts.</div>
                      </div>
                      <img class="col-imgs" src={three} alt=""/>               
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
   </>
  )
}

export default section2