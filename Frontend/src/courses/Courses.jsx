import React from 'react'
import Navbar from '../components/navbar';
import Course from '../components/course';
import Footer from '../components/footer';
import list from '../../src/list.json';


function Courses() {
  return (
   <>
   <Navbar/>

   <div  className='min-h-screen'>
   <Course/>
   </div>

   <Footer/>
   </>
  )
}

export default Courses
