import React, { useState } from "react"
import { Container, Alert } from "react-bootstrap"

import "./InfluencerSignupServiceBlock.scss"

const InfluencerSignupServiceBlock = (props) => {

  const [checkTerms, setCheckTerms] = useState(false)
  const [checkPolicy, setCheckPolicy] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const nextStep = e => {
    if(!checkTerms || !checkPolicy) {
      setShowAlert(true)
      return
    }
    e.preventDefault()
    props.nextStep()
  }
  const changeCheckTerms = () => {
    setCheckTerms(!checkTerms)
  }
  const changeCheckPolicy = () => {
    setCheckPolicy(!checkPolicy)
  }

  return (
    <div className='influencer-singup-service'>
      <Container>
        <h1 className='influencer-signup-service__title'>Welcome !</h1>
        <p className='influencer-signup-service__subtitle'>
          Before you get started, we want to make sure you understand and agree to our terms and policies.
        </p>
        <div className='influencer-signup-service__item'>
          <a href='#' className='influencer-signup-service__item__title'>Terms of Service</a>
          <p className='influencer-signup-service__item__desc'>
            These terms of service outline our relationship with you and how everything works. As part of the terms, we ask that you agree to comply with all applicable laws including the FTC Guidelines for sponsored posts, which you can review here.
          </p>
          <label className="influencer-signup-service__item__check">
            <input type="checkbox" value="" className='influencer-signup-service__item__check__box' onChange={changeCheckTerms} defaultChecked={checkTerms} />
            I agree to the Terms of Service
          </label>
        </div>
        <div className='influencer-signup-service__item'>
          <a href='#' className='influencer-signup-service__item__title'>Privacy Policy</a>
          <p className='influencer-signup-service__item__desc'>
            Our Privacy Policy is intended to help make how our service works as clear as possible. Some of the personal data we may gather include:
          </p>
          <ul>
            <li>
              Your name, email, address and phone number which you provide to us. We only use this to provide our Services to you, including sharing with Brands as directed by you.
            </li>
            <li>
              Public information from your social accounts, which is collected to help Brands discover and decide to work with you.
            </li>
            <li>
              Your PayPal address so that we can pay you for collabs.
            </li>
          </ul>
          <label className="influencer-signup-service__item__check">
            <input type="checkbox" value="" className='influencer-signup-service__item__check__box'  onChange={changeCheckPolicy} defaultChecked={checkPolicy} />
            I agree to the Privacy Policy
          </label>
        </div>
        {
          showAlert &&
          <Alert variant='danger'>
            Please check our Terms of Service and Privacy Policy.
          </Alert>
        }
        <div style={{textAlign:'center'}}>
          <input type="submit" className='influencer-signup-service__item__submit' value="Continue" onClick={nextStep} />
        </div>
      </Container>
    </div>
  )

}

export default InfluencerSignupServiceBlock