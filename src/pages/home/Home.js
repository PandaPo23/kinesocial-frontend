import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Container>
        <Row>
          <Col sm={6} className='home-grow__desc'>
            <h1>
              Grow your ROI with the leading influencer marketing platform
            </h1>
            <p className='home-grow__desc__text'> 
              Drive sales, grow brand awareness, and generate high-performing content with your influencer community.
            </p>
            <a href='#' className='home-grow__desc__btn'>Request Demo</a>
          </Col>
          <Col sm={6}>
            <img src='/images/grow-your_ROI.png' className='home-grow__image' alt='' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Home