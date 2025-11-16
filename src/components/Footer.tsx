import type React from 'react'
import fb from '../assets/images/fb.png'
import google from "../assets/images/google.png"
import linkedin from "../assets/images/linkedin.png"
import twitter from "../assets/images/twitter.png"
const Footer: React.FC = () => {
  return (
    <div className="row my-5">
      <div className="col-12 text-center">

        <div className="d-flex justify-content-center gap-4 mb-3">
          <div className="social-circle">
            <img src={fb} alt="fb" />
          </div>
          <div className="social-circle">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="social-circle">
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className="social-circle">
            <img src={google} alt="google" />
          </div>
        </div>

        <p className="my-3 fs-bold footer-email">Example@email.com</p>

        <p className="mb-3 fs-bold footer-copy">
          Copyright © 2020 Name. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer