import React from "react"
import { Row, Col } from 'react-bootstrap'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';

import "./InfluencerSignupEmailBlock.scss"

const InfluencerSignupEmailBlock = (props) => {

	const clientId = "256608629571-auf7nn50geu2petersm29b8ldtou73c9.apps.googleusercontent.com"
  const facebookId = "1525806031129466"
  
  const responseGoogle = (response) => {
		console.log(response.profileObj)
		let googleAccount = {
			'username': response.profileObj.name,
			'email': response.profileObj.email,
		}
		if(response.profileObj.imageUrl) googleAccount.imageUrl = response.profileObj.imageUrl
		props.handleChange(googleAccount)
		props.nextStep()
  }

  const responseFacebook = (response) => {
		console.log(response)
		props.handleChange({
			'username': response.name,
			'email': response.email,
		})
		props.nextStep()
  }
  
  const onFailure = (response) => {
		console.log(response)
	}

	const next = e => {
		e.preventDefault()
		props.nextStep()
	}

	const handleChange = e => {
    props.handleChange({ [e.target.name]: e.target.value })
  };

  return (
    <div className='influencer-singup'>
      <p className='influencer-signup-email__title'>Influencer Account Creation</p>
      <div className='influencer-signup-email__container'>
        <Row style={{width:'100%', display:'flex'}}>
          <Col md={6} className='influencer-signup-email-email__social'>
            <p className='influencer-signup-email__social__title'>Sign up with a social network</p>

            <FacebookLogin
              appId={facebookId}
              callback={responseFacebook}
              fields="name,email,picture"
              scope="public_profile"
              className='influencer-signup-email__social__facebook'
              render={renderProps => (
                <a className='influencer-signup-email__social__facebook' href='#' onClick={renderProps.onClick} >
                  <FaFacebookSquare className='fab fa-facebook-square influencer-signup-email__social__facebook__icon' />
                  Sign Up with Facebook Page
                </a>
              )}
            />

            <GoogleLogin
              clientId={clientId}
              buttonText='Login'
              onSuccess={responseGoogle}
              onFailure={onFailure}
              style={{marginTop:'100px'}}
              className='influencer-signup-email__social__youtube'
            >				
              <FaYoutube className='fab fa-youtube influencer-signup-email__social__facebook__icon'/>
              Sign Up with YouTube
            </GoogleLogin>
          </Col>
          <Col md={6}>
            <p className='influencer-signup-email__social__title'>Sign up with email</p>
            <form className='influencer-signup-email__form' onSubmit={next}>		
              <label className='influencer-signup-email__form__label'>Full Name</label>		
              <input type="text" className='influencer-signup-email__input' name='username' defaultValue={props.values.username} onChange={handleChange} />
              <label className='influencer-signup-email__form__label'>Email Address</label>		
              <input type="text" className='influencer-signup-email__input' name='email' defaultValue={props.values.email} onChange={handleChange} />							
              <label className='influencer-signup-email__form__label'>Password</label>		
              <input type="password" className='influencer-signup-email__input' name='password' defaultValue={props.values.password} onChange={handleChange} />								
              <input type="submit" className='influencer-signup-email__submit' value="Sign Up" />
            </form>					
          </Col>
        </Row>
      </div>
      <p className='influnecer-signup-email__login__text'>
        Already have an account? Login <a href='/influencer/login'>here</a>.
      </p>    
    </div>
  )
  
}

export default InfluencerSignupEmailBlock