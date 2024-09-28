import React from 'react';

function Cards({ item }) {
  return (
    <div className='py-10'>
      <div className="card bg-base-50 w-92 p-6 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="mb-4">
          <img 
            src={item.image} 
            alt={item.name} // Updated to use item.name for better accessibility
            className="w-full h-96 object-contain  rounded-lg" // Ensures proper sizing and aspect ratio
          />
        </figure>
        <div className="card-body text-black dark:text-white">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-primary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">₹{item.price}</div>
            <div className="badge badge-outline hover:bg-blue-800 hover:text-white duration-300 cursor-pointer px-2 py-1">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
