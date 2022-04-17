import React from "react";
import toothP from "../../../../asset/Images/grafic/grafic-1.png";
import teethWhite from "../../../../asset/Images/grafic/grafic-2.png";
import cosmeticDen from "../../../../asset/Images/grafic/grafic-3.png";
import Service from "./Service";

const serviceData = [
  {
    id: 1,
    img: toothP,
    title: 'Tooth Protection',
    disc: "We have introduced the principle of family medicine, which means that the family practitioner will",
  },
  {
    id: 2,
    img: teethWhite,
    title: 'Teeth Whitening',
    disc: "We have introduced the principle of family medicine, which means that the family practitioner will",
  },
  {
    id: 3,
    img: cosmeticDen,
    title: 'Cosmetic Dentistry',
    disc: "We have introduced the principle of family medicine, which means that the family practitioner will",
  },
];

const Services = () => {
  return (
    <div className="max-w-screen-lg flex flex-col items-center relative top-[-70px] z-10">
      <div className="flex justify-center gap-5">
        {serviceData.map((service) => {
          return <Service key={service.id} service={service}></Service>;
        })}
      </div>
        
      <button className="mt-20 bg-shadeOfPrimary px-32 py-3 rounded-md text-white font-text hover:bg-primary duration-200 ease-in">Book An Appointment</button>
    </div>
  );
};

export default Services;
