import React from 'react';

function AboutUs() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-slate-100 dark:bg-slate-900 px-4'>
      <div className='max-w-6xl w-full flex flex-col lg:flex-row items-center lg:space-x-8 text-center lg:text-left'>
        
        <div className='w-full lg:w-1/2 h-full flex justify-center items-center pb-5'>
          <img
            src='https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-write-an-about-us-wip1.png?v=1618511825' 
            alt='About Us'
            className='rounded-lg shadow-lg w-full lg:h-full object-cover'
          />
        </div>

        <div className='w-full lg:w-1/2'>
          <h1 className='text-4xl font-bold text-slate-800 dark:text-white mb-4'>About <span className='text-blue-800'>Us</span></h1>
          <p className='text-lg text-slate-600 dark:text-slate-300 mb-6 text-left'>
            Welcome to <span className='font-semibold text-blue-800'>inkSpot</span>, your go-to place for a diverse range of books. From fiction to textbooks, we have it all.
          </p>

          <p className='text-lg text-slate-600 dark:text-slate-300 mb-6 text-left'>
            Since 2023, we’ve been dedicated to offering a vast selection of books with excellent customer service and affordability.
          </p>

          <p className='text-lg  text-slate-600 dark:text-slate-300 mb-6 text-left'>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
