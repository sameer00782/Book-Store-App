import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import About from '../components/about';

function Abouts() {
  return (
   <>
   
   <Navbar />

   <div className='min-h-screen'>
   <About/>
   </div>

   <Footer />

   </>
  )
}

export default Abouts
