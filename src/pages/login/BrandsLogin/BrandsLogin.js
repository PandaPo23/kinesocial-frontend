import React, {useState} from "react"
import { Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

import "./BrandsLogin.scss"

const BrandsLogin = (props) => {
  const history = useHistory();

  const [values, setValues] = useState({
    username: '',
    password: '',
    email: '',
    imageUrl: '',
  })
  
  const handleChange = e => {
    // props.handleChange({ [e.target.name]: e.target.value })
  }; 
  const login = () => {
    history.push("/");
  }

  return (
    <div className='brands-login'>
      <h1>Brand Log In</h1>
      <p>Please use your email &amp; password to login</p>
      <form className='brands-login__form' onSubmit={login}>		            
        <input type="text" className='brands-login__input' name='email' defaultValue={values.email} onChange={handleChange} />							
        <input type="password" className='brands-login__input' name='password' defaultValue={values.password} onChange={handleChange} />								
        <input type="submit" className='brands-login__submit' value="Log In" />
      </form>
    </div>
  )
  
}

export default BrandsLogin