import React, { useState } from 'react'

import { 
	InfluencerSignupEmailBlock,
	InfluencerSignupServiceBlock,
	InfluencerSignupSocialBlock
} from '../../components'

const InfluencerSignup = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    username: '',
    password: '',
    email: '',
    imageUrl: '',
  })
  
  const nextStep = () => {
    setStep(step + 1)
    console.log('step-------', step)
  };
  const prevStep = () => {
    setStep(step - 1)
  };

  const handleChange = (input) => {
		setValues(input)
		console.log(values)
  };

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state)
    event.preventDefault()
  }
  
  switch (step) {
    default:
      return <h1>User Forms not working. Enable Javascript!</h1>	
    case 1:
      return (
        <InfluencerSignupEmailBlock
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      )
    case 2:
      return (
        <InfluencerSignupServiceBlock
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      )
    case 3:
      return (
        <InfluencerSignupSocialBlock
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      )
  }
}

export default InfluencerSignup