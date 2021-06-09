import React, { useState } from "react"
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'

import "./InfluencerSocialAccountsBlock.scss"

const InfluencerSocialAccountsBlock = (props) => {
  const [socialAccounts, setSocialAccounts] = useState([])
  const clientId = "256608629571-auf7nn50geu2petersm29b8ldtou73c9.apps.googleusercontent.com"
  const facebookId = "1525806031129466"

  const responseGoogle = (res) => {
		const googleAccount = {platform: 'youtube'}
		if(res.profileObj.email) googleAccount.email = res.profileObj.email
		if(res.profileObj.name) googleAccount.name = res.profileObj.name
		if(res.profileObj.imageUrl) googleAccount.imageUrl = res.profileObj.imageUrl
		if(res.profileObj.googleId) googleAccount.googleId = res.profileObj.googleId
		if(res.profileObj.familyName) googleAccount.familyName = res.profileObj.familyName
		if(res.profileObj.givenName) googleAccount.givenName = res.profileObj.givenName
		setSocialAccounts([...socialAccounts, googleAccount])
  }
  const onFailure = () => {

  }

  const responseFacebook = (response) => {
		console.log(response)
	}

  return (
    <div className='influencer-social-accounts__account__container'>
      <div style={{width:'50%', padding:'0 20px'}}>
        <h3>Your accounts</h3>
        {	
          socialAccounts.length <= 0 &&
          <p>No social accounts have been added!</p>
        }
        {
          socialAccounts.length > 0 &&						
          socialAccounts.map((item,idx) =>
            <div key={idx} className='influencer-social-accounts__item'>
              <a href='#' className='influencer-social-accounts__item__link'>
                <img className='influencer-social-accounts__image' src={`/social_icons/${item.platform}.png`} alt='' />
                <h3 className='influencer-social-accounts__item__name'>{item.name}</h3>
              </a>
            </div>
            )							
        }
      </div>
      <div style={{width:'50%'}}>
        <h3>Add your social accounts</h3>
        <div>
          <button className='influencer-social-accounts__link'>
            <img className='influencer-social-accounts__image' src='/social_icons/instagram.png' alt='' />
          </button>

          <FacebookLogin
            appId={facebookId}
            callback={responseFacebook}
            className='influencer-signup-email__social__facebook'								
            render={renderProps => (
              <button className='influencer-social-accounts__link' onClick={renderProps.onClick}>
                <img className='influencer-social-accounts__image' src='/social_icons/facebook.png' alt='' />
              </button>	
            )}
          />

          <GoogleLogin
            clientId={clientId}
            buttonText='Login'
            onSuccess={responseGoogle}
            onFailure={onFailure}
            style={{marginTop:'100px'}}
            className='influencer-social-accounts__link influencer-social-accounts__link__youtube'
          >		
            <img className='influencer-social-accounts__image' src='/social_icons/youtube.png' alt='' />
          </GoogleLogin>
          
        
          <button className='influencer-social-accounts__link'>
            <img className='influencer-social-accounts__image' src='/social_icons/pinterest.png' alt='' />
          </button>
          <button className='influencer-social-accounts__link'>
            <img className='influencer-social-accounts__image' src='/social_icons/twitter.png' alt='' />
          </button>
          
        </div>	
        <p className='influencer-social-accounts__link__desc'>
          Are we missing a social network you&#8216;d like to show to brands? Let us know <a href='#'>here</a>!
        </p>
        <h3>Add your Blog</h3>

        <div style={{textAlign:'center'}}>
          <a href="/" className='influencer-social-accounts__blog__link'>Add via Google Analytics</a>
        </div>
        <p>Do you use a different service to track visitors to your blog? Let us know <a href='#'>here</a>!</p>

      </div>		
    </div>		
  )

}

export default InfluencerSocialAccountsBlock