import React from 'react';
import pricingData from './data';
import PriceCard from './PriceCard';



const Pricing = () => {


  return (
    <div className=' mb-10 flex gap-10 flex-wrap justify-center'>
      {
        pricingData?.map(pricing => {
          return <PriceCard
            key={pricing.id}
            pricing={pricing}
          ></PriceCard>
        })
      }
    </div>
  );
};

export default Pricing;