import React from 'react'
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Freebooks from '../components/freebooks';
import Footer from '../components/footer';

function home() {
  return (
  <>
    <Navbar/>
    <Banner/>
    <Freebooks/>
    <Footer/>
  </>
  )
}

export default home
