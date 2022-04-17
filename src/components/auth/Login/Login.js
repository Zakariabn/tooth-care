import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCocktail } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-10">
      <form className="w-[320px] flex flex-col items-center">
        <div className="w-full flex gap-5 justify-between mb-3">
          <input
            type="text"
            name="email"
            id="email"
            autoComplete='off'
            placeholder="Email address"
            className="w-full text-xl border border-gray-400 focus:outline-none pl-4 pr-2 rounded-[15px_15px_0px_0px] h-[40px]"
          />
        </div>
        <div className="w-full flex gap-5 justify-between">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full text-xl border border-gray-400 focus:outline-none pl-4 pr-2 rounded-[0px_0px_15px_15px] h-[40px]"
          />
        </div>
        <div className="w-full flex justify-between mt-5 text-md font-medium">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="h-[15px] w-[15px]"
            />
            <label htmlFor="">Remember me</label>
          </div>
          <button className="text-shadeOfPrimary font-medium ml-2 hover:cursor-pointer">Forgot password?</button>
        </div>
        <button
          type="submit"
          className="bg-shadeOfPrimary px-10 py-2 rounded-[1rem_0px_1rem_0px]   mt-6 font-medium duration-200 hover:rounded-[0rem_1rem_0rem_1rem]  hover:bg-primary hover:text-white">
          {" "}
          Login{" "}
        </button>
      </form>
      <div className="my-5">
        <p className="text-primary">
          Did you new hear? <button className="text-shadeOfPrimary font-medium ml-2 hover:cursor-pointer"><Link to='/sign-up'>Sign up</Link></button>
        </p>
      </div>

      <div className="w-[320px] flex items-center mb-5">
        <div className="h-[2px] w-full bg-primary ml-5"></div>
        <div className="px-5">OR</div>
        <div className="h-[2px] w-full bg-primary mr-5"></div>
      </div>

      <div className="w-[320px] flex flex-col gap-3 text-white text-lg font-medium">
        <button className="w-full bg-[#3B5998] py-1.5 rounded-md">
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span className="ml-2">Continue With Facebook</span>
        </button>
        <button className="w-full bg-[#DB4437] py-1.5 rounded-md">
          <FontAwesomeIcon icon={faGoogle} />
          <span className="ml-2">Continue With Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
