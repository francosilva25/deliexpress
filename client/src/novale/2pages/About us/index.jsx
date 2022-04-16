import React from 'react'
import Company from '../../components/AboutsUs/Company'
import Intro from '../../components/AboutsUs/Intro'
import ObjetivoPrincipal from '../../components/AboutsUs/ObjetivoPrincipal'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <Intro />
      <ObjetivoPrincipal />
      <Company />
      <Footer />
    </>
  )
}

export default AboutUs