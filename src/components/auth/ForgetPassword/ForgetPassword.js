import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const ForgetPassword = () => {

  const [email, setEmail] = useState('');

  console.log(typeof email.email);

  const [errors, setErrors] = useState({
    emailError: "",
  });
  function handelEmailChange(e) {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setEmail(e.target.value.toLowerCase());
      setErrors({emailError: "" });
    } else {
      setErrors({emailError: "Invalid Email"});
      setEmail('');
    }
  }

  const [sendPasswordResetEmail, sending, hookError] = useSendPasswordResetEmail(auth);

  function handelForgetPassword (e) {
    e.preventDefault();

    if(email) {
      console.log('found');
      sendPasswordResetEmail(email);
      toast.success("Email verification link send");
    }
  }

   // login with email-password error handel
   useEffect(() => {
    if (hookError) {
      switch (hookError?.message) {
        case "Firebase: Error (auth/user-not-found).":
          toast.error("Email not found. Please sign up", { toastId: "u-not-f" });
          break;

        default:
          toast.error("Something went wrong!!!");
          break;
      }
    }
  }, [hookError]);

  return (
    <div className='flex justify-center h-[87vh]'>
      <form className="w-[320px] flex flex-col items-center mt-20" onSubmit={handelForgetPassword}>
      <div className="w-full mb-3">
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Email address"
            onChange={handelEmailChange}
            className="w-full text-xl border text-center border-gray-400 focus:outline-none pl-4 pr-2 rounded-[15px_15px_0px_0px] h-[40px]"
          />
          <p className="text-[coral] ml-3">
            {errors.emailError && errors.emailError}
          </p>
        </div>

        <button
          type="submit"
          disabled = {!email && "disabled"}
          className="bg-shadeOfPrimary px-10 py-2 rounded-[1rem_0px_1rem_0px]   mt-6 font-medium duration-200 hover:rounded-[0rem_1rem_0rem_1rem]  hover:bg-primary hover:text-white disabled:bg-gray-400"> Forgot password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;