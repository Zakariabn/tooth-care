import React, { useContext } from 'react';
import { BookingContext } from '../../../../context/context';


const PriceCard = ({pricing}) => {
  const {tag, price, serviceTime, services} = pricing;

  
  const handelAppointment = useContext(BookingContext);
  return (
    <div className='flex flex-wrap flex-col items-center bg-white shadow-md px-4 pt-5 pb-16 relative rounded-md'>
      <h3 className='font-bold text-xl font-text text-primary mb-6'>{tag}</h3>
      <span className='text-shadeOfPrimary block px-3'>
        <sup className='text-text font-bold text-xl relative top-[-40px]'>$</sup>
        <h2 className='text-7xl font-bold inline-block'>{price}</h2>
        <sub className='text-normal text-lg'>/{serviceTime}</sub>
      </span>
      <div style={{height: '2.5px'}} className='w-1/5 bg-shadeOfPrimary my-6'></div>
      <div className='text-center px-12'>
        {
          services.map(service => {
            
            return <>
            <p className='text-primary font-medium mb-4' key={pricing.id}>{service}</p>;
            </>
          })
        }
      </div>
      <button onClick={handelAppointment} className='bg-shadeOfPrimary px-6 py-2 rounded-t-md absolute bottom-0 text-white font-title hover:bg-primary duration-150'>Buy Now</button>
    </div>
  );
};

export default PriceCard;