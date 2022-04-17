import React from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../../../context/context";
import Banner from "./Banner/Banner";
import Pricing from "./Pricing/Pricing";
import Services from "./Services/Services";



const Home = () => {
  const navigate = useNavigate();
  
    function handelBooking() {
      navigate('/checkout');
      console.log('success');
    }

  return (
    <BookingContext.Provider value={handelBooking}>
      <div className="flex flex-col items-center">
        <Banner></Banner>
        <Services></Services>
        <Pricing></Pricing>
      </div>
    </BookingContext.Provider>
  );
};

export default Home;
