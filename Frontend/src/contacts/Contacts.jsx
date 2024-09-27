import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Contact from '../components/contact';

function Contacts() {
  return (
    <>
      <Navbar />

      <div className='min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8 pb-28'>
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default Contacts;
