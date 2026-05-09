import React from 'react'
import Container from '../../layout/Container'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <footer>
        <Container>
          <FooterTop/>
          <FooterBottom />
        </Container>
    </footer>
  )
}

export default Footer
