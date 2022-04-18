import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function runToast ()  {
  return toast.warn("Wow so easy !");
}

const Blogs = () => {
  return (
    <div>
      <button onClick={runToast}>Toast</button>
    </div>
  );
};

export default Blogs;