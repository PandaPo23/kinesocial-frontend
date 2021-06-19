import React, {useState} from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

import './Header.scss'

const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  const showMenu = (e) => {
    setMenuShow(true)
  }
  const hideMenu = (e) => {
    setMenuShow(false)
  }
  return (
    <Navbar expand='lg' className='header__navbar'>     
      <Container className='header__nav__container'>   
        <Nav className='header__nav'>
          <Nav.Link href='#'>Blog</Nav.Link>
          <Nav.Link href='#'>Creators</Nav.Link>
          <NavDropdown title='Sign-in' show={menuShow} onMouseEnter={showMenu} onMouseLeave={hideMenu}>
            <NavDropdown.Item href='brands/login'>Brands</NavDropdown.Item>
            <NavDropdown.Item href='influencer/login'>Influencer</NavDropdown.Item>
          </NavDropdown>
        </Nav>   
      </Container>         
    </Navbar>
  )
}

export default Header