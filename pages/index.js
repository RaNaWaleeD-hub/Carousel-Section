
import React, { useState, useRef } from 'react'
import Card from '../component/Card';
import data from '../public/data.json';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Homepage = () => {
    const [cardItem, setcardItem] = useState(data.listing);
    const sliderRef = useRef(null);
    const handleLeftSlider = () => {
        sliderRef.current.slickPrev();
    }
    const handleRightSlider = () => {
        sliderRef.current.slickNext();
    }
       var settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        slidesToScroll:4,
        responsive: [
            {
              breakpoint: 1324,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                initialSlide: 1
              }
            },
          
          ]
    };

    return (
        <>
        
                <div className='m-4 flex justify-between items-center flex-wrap '>
                    <h1 className='font-sans text-[30px] font-[400] tracking-widest  mb-4'>FEATURED</h1>
                    <h1 className='text-[30px] font-[400] tracking-widest  mb-4'>VIEW ALL HOMES</h1>
                    <div className='flex w-25 justify-between'>
                        <img className='cursor-pointer m-5' src="/static/LeftIcon.png" alt="" onClick={handleLeftSlider} />
                        <img className='cursor-pointer m-5' src="/static/RightIcon.png" alt="" onClick={handleRightSlider} />
                    </div>
                </div>
                <div>
                    <Slider {...settings} ref={sliderRef}>
                        {
                            cardItem.map((item) => {
                                return (
                                    <>
                                        <div className='flex m-3 p-0 justify-center min-h-screen'>
                                            <Card data={item} />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </Slider>
                </div>
                </>
    );
}

export default Homepage