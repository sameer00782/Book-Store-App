import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './cards';

import list from "../../src/list.json";

function freebooks() {

    const filterData=list.filter((data) => data.category === "free");
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white py-10 dark:bg-slate-900 dark:text-white">

    <div>
    <h1 className='font-semibold text-xl pb-2 text-slate-900 dark:text-white'>Free Offered Books</h1>
    <p className='text-slate-600 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti architecto natus ducimus sit totam sed aliquam quasi doloremque eum non.</p>
     </div>

  
   <div>
     <Slider {...settings}>
  
     
      {filterData.map((item)=>(
        <Cards item={item} key={item.id}/>
      ))}
        
        
      </Slider>
    </div>

    </div>

   </>
  )
}

export default freebooks
