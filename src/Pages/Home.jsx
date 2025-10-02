import React from 'react'
// ------ Components Imports
import Banner from '../Components/Banner/Banner'
import Section from '../Components/Section/Section'
import Collections from '../Components/Collections/Collections'
import Beautify from '../Components/Beautify/Beautify'
import Range from '../Components/Range/Range'
import Works from '../Components/Works/Works'
import Mailing from '../Components/Mailing/Mailing'
import Shop from '../Components/Shop/Shop'

const Home = () => {
  return (
    <>
      {/*------ Banner ------*/}
      <Banner />
      {/*------ Section ------*/}
      <Section />
      {/*------ Collections ------*/}
      <Collections />
      {/*------ Beautify ------*/}
      <Beautify />
      {/*------ Range ------*/}
      <Range />
      {/*------ Works ------*/}
      <Works />
      {/*------ Mailing ------*/}
      <Mailing />
      {/*------ Shop ------*/}
      <Shop />
    </>
  )
}

export default Home