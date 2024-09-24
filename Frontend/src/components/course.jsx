import React from 'react';
import Cards from './cards';
import list from '../../src/list.json';
import { Link } from 'react-router-dom';

function course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-20 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-3xl text-slate-800 dark:text-white'>We're Delighted to have you <span className='text-blue-600'>Here!</span></h1>
        <p className='mt-4 text-slate-500 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur vitae laborum, incidunt aliquid quasi neque culpa explicabo at numquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime atque harum labore veniam. Deleniti!</p>
        <Link to={"/"}>
        <button className='bg-black text-white px-4 py-2  dark:text-white dark:bg-blue-600 hover:bg-slate-700 duration-300 mt-3 rounded-full'>Back</button>
        </Link>
        </div>

<div className='py-10 grid grid-cols-1 md:grid-cols-4'>

{
    list.map((item)=>(
        <Cards key={item.id} item={item}/>
    ))
}

</div>


    </div>
    </>
  )
}

export default course
