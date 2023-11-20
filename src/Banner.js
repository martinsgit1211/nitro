import React from 'react'
import './App.css'
import nitro from './images/nitro.svg'
import rocket from './images/rocket-guy.png'

function Banner() {
  return (
    <>
      <div class="nitro-container">
        <nav class="nav-container">
            <div class="nav-discordd">
                <img src="https://img.icons8.com/ios-filled/50/000000/discord-logo.png"/>
               <a href="" class="nav-discord">Discord</a>
            </div>
            <div class="download-nav">
               <a href="http://" class="nav-items">Download</a>
               <a href="http://" class="nav-items">Nitro</a>
               <a href="" class="nav-items">Safety</a>
               <a href="" class="nav-items">Support</a>
               <a href="" class="nav-items">Blog</a>
               <a href="" class="nav-items">Careers</a>
            </div>
            <div class="login">
               <button class="logbut">
                   <a href="./src/CSS/index.html" class="log">Login</a>
               </button>
            </div>  
           </nav>
           
           <div class="section1">
               <div class="left">
                   <img src={nitro} class="nitro" alt=""/>
                    <p class="imagine-2">Get an enhanced Discord experience for one low monthly cost. Upgrade your emoji, enjoy bigger file uploads, stand out in your favorite Discords, and more.</p>
                    <div class="buttons">
                        <button class="openbutton"> $99.99 per year<div class="innerbutton">16% off</div></button>
                        <button class="openbutton2">$9.99 per month</button>
                    </div>
               </div>
               <div class="right">
                    <img src={rocket} alt="" class="right-img"/>
               </div>
           </div>
        </div>
    
    </>
  )
}

export default Banner