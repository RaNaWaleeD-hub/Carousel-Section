import React, { useState } from 'react'
import { useTimer } from "react-timer-hook";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { AiFillCaretLeft, AiFillCaretRight,AiOutlineHeart,AiFillHeart } from 'react-icons/ai';


const Card = ({ data }) => {
 
    const [currentIndex,setCurrentIndex] = useState(0);
    const [active,setActive] =useState(false)
    const images = data.details.images;
    const getImages = images.split(',');

    const slideRight = () => {
        if(currentIndex !== getImages.length - 1)
        {
            setCurrentIndex(currentIndex + 1);
            console.log(getImages[currentIndex + 1]);
            
        }
        else 
        {
            console.log("Its ok");
        }
    }

    const slideLeft = () => {
        if(currentIndex !== getImages.length - 1) 
        {
            setCurrentIndex(currentIndex - 1);
            console.log(currentIndex - 1,getImages.length - 1);
        }
    }

  

    
   const handleClick=()=>{
    setActive(!active)
   }


    const expiryTimestamp = new Date(data.expiry).getTime();
    const { seconds, minutes, hours,days } = useTimer({ expiryTimestamp });

   
    // function calculateSecondsToDate(targetDate) {
    //   const now = new Date();
    //   const targetTime = targetDate.getTime();
    //   const currentTime = now.getTime();
    //   const secondsDifference = Math.floor((targetTime - currentTime) / 1000);
    //   return secondsDifference;
    // }
    
    // const time = calculateSecondsToDate(targetDate);
    
    // const {
    //   seconds,
    //   minutes,
    //   hours,
    //   days,
    // } = useTimer({ time });
    
    // const second = Math.floor(seconds);
    

   




   
   
      return (
        <>
        <div className='flex flex-col'>
            <div className=' mb-3 text-white card h-[400px] grid  grid-cols-4 rounded-xl space-between p-4 ' style={{ backgroundImage: `url(${getImages[currentIndex]})` }}>
                <div className='z-10 col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col items-center'>
                    <div className='text-5xl'>{days}</div>
                    <div className='text-xs'>DAYS</div>
                    
                 </div>
                <div className='z-10 col-start-2 col-end-3 row-start-1 flex flex-col items-center'>
                    <div className='text-5xl'>{hours}</div>
                    <div className='text-xs'>HOURS</div>
                </div>
                <div className='z-10 col-start-3 col-end-4 row-start-1 flex flex-col items-center'>
                    <div className='text-5xl'>{minutes} </div>
                    <div className='text-xs'>MINUTES</div>
                </div>
                <div className='z-10 col-start-4 col-end-5 row-start-1 flex flex-col items-center'>
                    <div className='text-5xl'>{seconds}</div>
                    <div className='text-xs'>SECONDS</div>
                </div>
                <div className='z-10 cursor-pointer my-7 items-center row-start-2 row-end-3 col-start-4 col-end-5 flex justify-around'>
                    <img src="/static/share.png" alt="" />
                 
                            {active ?
                                <AiFillHeart onClick={handleClick} className='cursor-pointer text-red-600 text-3xl h-fit' />
                                :
                                <AiOutlineHeart onClick={handleClick} className='cursor-pointer text-white text-3xl h-fit' />
                            }
                        
                    
                </div>
                <div className='flex relative top-1 justify-between text-white  col-span-full items-center text-3xl'>
                    <AiFillCaretLeft className='cursor-pointer' onClick={slideLeft}/>
                    <AiFillCaretRight className='cursor-pointer' onClick={slideRight}/>
                </div>
            
                <div className='z-10 col-span-full flex flex-wrap pt-20 text-sm grid-cols-4 row-start-8 flex w-full relative '>
                    <h1 className='col-span-1 p-2 flex items-center justify-center  text-[12px]' style={{wordSpacing:'8px'}}>SHELTON STREET COVENT GARDEN LONDON WC2H</h1>
                        
                </div>
                  <div className=' z-10  row-start-5 col-span-full flex items-center justify-center  text-[14px] relative top-3'>
                  <h1 >United Kingdom</h1>
                  </div>
                
                <div className='relative top-8 col-span-full grid grid-cols-3 flex   justify-center mt-3'>
                    <div class="col-span-1 flex justify-center items-center pr-10 relative bottom-3">
                        <img src="/static/zimologo.png" alt='' />
                    </div>
                    <p className='col-span-1 flex items-center justify-center  relative bottom-5 '>£5,000,000 GBP</p>
                    <div class="col-span-1 flex justify-center items-center pl-10 relative bottom-3">
                        <img src="/static/bottomlogo.png" alt='' />
                    </div>
                   
                </div>
                <div  className='z-10 text-[10px] col-span-full   flex items-center justify-center relative top-3'>
                   <p>
                    #ZM786123456
                </p>
                <div className='z-10'>
                                <CircularProgressbar
                                    className='z-10 h-7 w-7 flex items-center justify-center text-white absolute bottom-[50px] left-[75px]'
                                    styles={{
                                        text: {
                                            fontSize: '35px',
                                            fill: 'white',
                                        },
                                        path: { stroke: 'white' },
                                        trail: { fill: 'black' } // Set trail color to black
                                    }}
                                    text={`${data.completion_percentage}%`}
                                    percentage={data.completion_percentage}
                                />
                            </div>
               </div>
            </div>
            <div className=' px-5 py-2 bg-black text-white rounded-2xl  flex items-center justify-between cursor-pointer'>
                <div>
                    <p>£ {data.price} {data.currency}</p>
                </div>
                <div>
                    
                   <h4 className='px-10 bg-black text-white rounded-2xl  flex items-center justify-between cursor-pointer '> BUY ENTRY NOW</h4>
                    <p className='text-[10px] text-end'>#ZM786123456</p>
                </div>
            </div>
        </div>
    </>
      )
  }
  
  export default Card;