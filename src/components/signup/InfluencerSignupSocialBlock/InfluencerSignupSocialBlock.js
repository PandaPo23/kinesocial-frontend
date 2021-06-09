import React, { useState } from "react"
import { Container, Alert } from "react-bootstrap"
import { InfluencerSocialAccountsBlock } from "../../../components"
import "./InfluencerSignupSocialBlock.scss"

const InfluencerSignupSocialBlock = (props) => {

  return (
    <Container className='influencer-singup-social'>
      <div className='influencer-signup-social__profile'>
        <img className='influencer-signup-social__profile__image' src={`${props.values.imageUrl ? props.values.imageUrl: '/public/images/avatar.png'}`} alt='' />
        <h1 className='influencer-signup-social__profile__name'>{props.values.username}</h1>
      </div>
      <h1 style={{fontWeight:'bold'}}>Welcome! Add Your Social Accounts!</h1>
      <h3 style={{fontWeight:'bold'}}>Adding more accounts will qualify you to work with a wider range of brands.</h3>

      <InfluencerSocialAccountsBlock />

      <div style={{textAlign:'center'}}>
        <a href="/" className='influencer-signup-social__submit'>Finish</a>
      </div>
      <p style={{margin:'20px'}}>You can add and manage your accounts later through your profile settings.</p>
    </Container>
  )

}

export default InfluencerSignupSocialBlock