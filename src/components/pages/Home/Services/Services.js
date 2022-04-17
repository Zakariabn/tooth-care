import React, { useContext } from 'react';
import { BookingContext } from '../../../../context/context';

import serviceData from './data';
import Service from "./Service";

const Services = () => {
  const handelAppointment = useContext(BookingContext);

  return (
    <div className="max-w-screen-lg flex flex-col items-center relative mt-10 lg:mt-0 lg:top-[-70px] z-10">
      <div className="flex flex-wrap lg:flex-row justify-center gap-5">
        {serviceData.map((service) => {
          return <Service key={service.id} service={service}></Service>;
        })}
      </div>
        
      <button onClick={handelAppointment} className="my-20 bg-shadeOfPrimary px-32 py-3 rounded-md text-white font-text hover:bg-primary duration-200 ease-in">Book An Appointment</button>
    </div>
  );
};

export default Services;
