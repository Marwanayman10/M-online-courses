import React from 'react'
import { FaFacebook , FaInstagram , FaWhatsapp } from 'react-icons/fa'
import "./Footer.css"

function Footer() {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="footer-row">
          <div className="col">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="social">
              <a href="https://www.facebook.com/share/1G8nbLrfft/"><FaFacebook/></a>
              <a href="https://www.instagram.com/marwann_ayman10?igsh=MW51a2lvcDV3eXJsMA=="><FaInstagram/></a>
              <a href="https://wa.me/201020416756?text=%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%B3%D8%B9%D8%B1%20%D9%85%D9%88%D9%82%D8%B9"><FaWhatsapp/></a>
            </div>
          </div>
          <div className="col">
            <h2>Company Info</h2>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="col">
            <h2>Features</h2>
            <ul>
              <li>Business Marketing</li>
              <li>User Analysis</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>
          <div className="col">
            <h2>Resources</h2>
            <ul>
              <li>Ios &amp; Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 | All right reserved made by <a href="https://wa.me/201020416756" target='_blank'><strong className='text-primary'>Marwan ayman</strong></a></p>
        </div>

      </div>
      
    </footer>
  )
}

export default Footer
