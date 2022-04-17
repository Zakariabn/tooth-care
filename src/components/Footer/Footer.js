import React from 'react';

const Footer = () => {
  return (
    
      <div className='text-center bg-slate-300 p-2 w-full'>
      <p className='font-normal'>Copyright <span className='font-bold '>©</span> {new Date().getFullYear()}</p>
    
    </div>
  );
};

export default Footer;