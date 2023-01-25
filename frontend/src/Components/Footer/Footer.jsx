import React from 'react'
import "./_Footer.scss"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 footerLeft">
            <h1>Mary Byrd</h1>
            <div className='footerForm'>
              <form >
                <input type="email" placeholder='Your Email' />
                <button>Send</button>
                
              </form>
            </div>
          </div>
          <div className="col-2 footerCenter">
            <h3>About</h3>
            <ul className='footerLinks'>
              <li>
                <Link>About us</Link>
              </li>
              <li>
                <Link>Our Partners</Link>
              </li>
              <li>
                <Link>Our Services</Link>
              </li>
            </ul>
          </div>
          <div className="col-2 footerCenter">
            <h3>Contact</h3>
            <ul className='footerLinks'>
              <li>
                <Link>Contact us</Link>
              </li>
              <li>
                <Link>Faq Page</Link>
              </li>
              <li>
                <Link>About me</Link>
              </li>
            </ul>
          </div>
          <div className="col-2 footerCenter">
            <h3>Follow us</h3>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer