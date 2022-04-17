import React, { useContext } from 'react';
import { BookingContext } from '../../../../context/context';

import './Service.css'


const Service = ({service}) => {
  const {id, img, title, disc} = service;

  const handelAppointment = useContext(BookingContext);
  return (
    <div className={`w-[300px] h-auto p-2 flex flex-col gap-4 rounded-xl items-center justify-center bg-white relative shadow-2xl pb-10 ${'custom-class-'+ id}`}>
      <img src={img} alt="" />
      <h4 className='font-text font-bold text-xl'>{title}</h4>
      <p className='p-3 font-title'>{disc}</p>
        
      <button className='hidden absolute bottom-2 bg-primary text-white px-3 py-1 rounded-md' onClick={handelAppointment}>Book Now</button>
    </div>
  );
};

export default Service;