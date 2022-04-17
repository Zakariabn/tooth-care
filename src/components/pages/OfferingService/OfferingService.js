import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import sImg1 from "../../.../../../asset/Images/Services/service3-1.jpg";
import sImg2 from "../../.../../../asset/Images/Services/service3-2.jpg";
import sImg3 from "../../.../../../asset/Images/Services/service3-3.jpg";
import { BookingContext } from "../../../context/context";

const OfferingService = () => {
  const navigate = useNavigate();

  function handelBooking() {
    navigate('/checkout');
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full flex flex-col items-center  max-w-screen-lg">
        <div className=" before:content-['_←'] after:content-['_→'] font-bold text-orange-600 mb-4">
          SERVICES
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold font-text mb-3 text-primary">
            I'm Offering You{" "}
          </h2>
          <p className="px-14 text-justify md:px-20 lg:px-36 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut omnis
            perferendis iusto, deserunt neque sit vel, debitis modi nobis
            repudiandae quisquam maiores iure ipsum quia tempora, quo sed? Rem,
          </p>
          <button
            onClick={handelBooking}
            className="mt-5 bg-shadeOfPrimary px-20 py-3 rounded-md text-white font-text hover:bg-primary duration-200 ease-in">
            Book An Appointment
          </button>
        </div>

        <div className="flex flex-wrap gap-10 justify-center mt-10 services-class">
          <div className="flex flex-col items-center">
            <img src={sImg1} alt="" className="rounded-lg w-[300px]" />
            <button className=" bg-white px-7 py-2.5 rounded-md shadow-lg text-lg font-bold font-text relative top-[-25px] text-primary">
              Dental Fillings
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img src={sImg2} alt="" className="rounded-lg w-[300px]" />
            <button className=" bg-white px-7 py-2.5 rounded-md shadow-lg text-lg font-bold font-text relative top-[-25px] text-primary">
              Orthodontics
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img src={sImg3} alt="" className="rounded-lg w-[300px]" />
            <button className=" bg-white px-7 py-2.5 rounded-md shadow-lg text-lg font-bold font-text relative top-[-25px] text-primary">
              Dental Fillings
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img src={sImg3} alt="" className="rounded-lg w-[300px]" />
            <button className=" bg-white px-7 py-2.5 rounded-md shadow-lg text-lg font-bold font-text relative top-[-25px] text-primary">
              Dental Advice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingService;
