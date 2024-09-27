import React from 'react';
import Home from './home/home';
import Course from './components/course.jsx';
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup.jsx'; 
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx';
import Contacts from './contacts/Contacts.jsx';
import Abouts from './Abouts/abouts.jsx';

function App() {

  const[authUser,setAuthUser]=useAuth()
  console.log(authUser)

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Abouts/>}/>
          <Route path='/course' element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/signup' element={<Signup />} />  
        </Routes>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
