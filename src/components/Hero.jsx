import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "../styles/Hero.scss"

export default function Hero() {
  return (
    <>
      <Container className='hero-container d-flex flex-column'>
        <Container className='hero-content d-flex flex-column'>
          <h4 className="title">"Unlock Your Potential with Personalized Learning"</h4>
          <h6 className="sub-title">Discover a learning experience tailored just for you. IntelliLearn adapts to your unique style, helping you achieve your goals faster and more effectively.</h6>
        </Container>
        <Container className='hero-cta d-flex flex-row justify-content-center align-items-center col-6 me-0'>
          <Button className='btn-outline-light btn-dark'>Get Started for Free!</Button>
          <Button className='btn-outline-light btn-dark'>Log In!</Button>
        </Container>
      </Container>
    </>
  )
}
