import React from 'react'

function contact() {
  return (
    <>
    
    <div className='max-w-md w-full mx-auto px-6 py-3 bg-slate-100 rounded-600 rounded-lg shadow-md dark:bg-slate-800'>
    <h2 className='text-3xl text-center text-blue-800 font-bold mb-6 dark:text-white'>Contact Us</h2>
    
    <form action="">

    <div className='mb-4'>
     <label className='block text-black text-sm font-semibold mb-2 dark:text-white' htmlFor="">Your Name</label>
     <input placeholder='Sameer Sonwane' className='w-full px-3 py-2 border rounded-lg bg-white dark:text-black focus:border-blue-800 focus:outline-none' required type="text" />
    </div>

    <div className='mb-4'>
     <label className='block text-black text-sm font-semibold mb-2 dark:text-white' htmlFor="">Your Email</label>
     <input placeholder='sameer@example.com' className='w-full px-3 py-2 border rounded-lg bg-white dark:text-black focus:border-blue-800 focus:outline-none' required type="email" />
    </div>

    <div className='mb-4'>
     <label className='block text-black text-sm font-semibold mb-2 dark:text-white' htmlFor="">Your Message</label>
     <textarea rows='4' placeholder='Type Your Message here...' className='w-full px-3 py-2 border rounded-lg bg-white dark:text-black focus:border-blue-800 focus:outline-none' required type="text" />
    </div>

     <div className='flex justify-center'>
        <button type='submit' className='bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-700 focus:outline-white dark:bg-blue-800'>
            Send Message
        </button>
     </div>

    </form>

    </div>
    
    </>
  )
}

export default contact
