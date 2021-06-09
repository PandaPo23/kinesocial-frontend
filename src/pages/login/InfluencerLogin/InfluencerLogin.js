import React, {useState} from "react"
import { Row, Col } from 'react-bootstrap'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';

import "./InfluencerLogin.scss"
import { useHistory } from 'react-router-dom';

const InfluencerLogin = (props) => {

	const clientId = "256608629571-auf7nn50geu2petersm29b8ldtou73c9.apps.googleusercontent.com"
  const facebookId = "1525806031129466"
  const history = useHistory();

  const [values, setValues] = useState({
    username: '',
    password: '',
    email: '',
    imageUrl: '',
  })
  
  const responseGoogle = (response) => {
		console.log(response.profileObj)
		let googleAccount = {
			'username': response.profileObj.name,
			'email': response.profileObj.email,
		}
		if(response.profileObj.imageUrl) googleAccount.imageUrl = response.profileObj.imageUrl
    history.push("/");
  }

  const responseFacebook = (response) => {
		console.log(response)
		props.handleChange({
			'username': response.name,
			'email': response.email,
		})
		history.push("/");
  }
  
  const onFailure = (response) => {
		console.log(response)
	}

	const next = e => {
		e.preventDefault()
		props.nextStep()
	}

	const handleChange = e => {
    // props.handleChange({ [e.target.name]: e.target.value })
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
              <label className='influencer-signup-email__form__label'>Email Address</label>		
              <input type="text" className='influencer-signup-email__input' name='email' defaultValue={values.email} onChange={handleChange} />							
              <label className='influencer-signup-email__form__label'>Password</label>		
              <input type="password" className='influencer-signup-email__input' name='password' defaultValue={values.password} onChange={handleChange} />								
              <input type="submit" className='influencer-signup-email__submit' value="Sign Up" />
            </form>
          </Col>
        </Row>
      </div>
      <p className='influnecer-signup-email__login__text'>
        Don't have an account? Sign up <a href='/influencer/signup'>here</a>.
        <br/>
        We no longer support Instagram login due to a change from Instagram. Check here to see how to log in with email instead.
      </p>  
    </div>
  )
  
}

export default InfluencerLogin