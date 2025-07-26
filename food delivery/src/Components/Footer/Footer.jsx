import React from 'react'
import './Footer.css';
import { assets } from '../../assets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt=""/>
                  <p>Lorem Ipsum is dummy text used by the printing industry. It helps designers visualize layouts without focusing on real content. This text has been standard for centuries. Reproducing content without permission is a violation of copyright and may be prosecuted.

                   </p>
                   <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt=""/>
                     <img src={assets.twitter_icon} alt=""/>
                      <img src={assets.linkedin_icon} alt=""/>

                   </div>

            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-222-456-789</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>

        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 Tomato.com-All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
