import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [passVisible, setPassVisible] = useState(false);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    generalError: "",
  });

  function handelEmailChange(e) {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value.toLowerCase() });
      setErrors({ ...errors, emailError: "" });
    } else {
      setErrors({ ...errors, emailError: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  }

  function handelPasswordChange(e) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{6,}$/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setErrors({
        ...errors,
        passwordError:
          "Password mast contain minimum 6 length and small, capital, number, special character. ",
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  }

  function handelLogin(e) {
    e.preventDefault();

    if( userInfo.email && userInfo.password){
      signInWithEmailAndPassword(userInfo.email, userInfo.password);
      setErrors({...errors, generalError: ''})
    }else {
      setErrors({...errors, generalError: 'Email and password must require'})
    }
  }

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {

    navigate(from, {replace: true})
  }

  // Create user with google
  const [signInWithGoogle, user_google, loading_google, error_google] = useSignInWithGoogle(auth);

  function handelGoogleSignUp() {
    signInWithGoogle();
  }

//  Google user 
  if(user_google) {
    setErrors({ ...errors, firebaseError: "" });
    toast("Email verification link send");
    navigate(from, { replace: true });
  }

  return (
    <div className="w-full flex flex-col justify-center items-center my-10">
      <form className="w-[320px] flex flex-col items-center" onSubmit={handelLogin}>
        <div className="w-full mb-3">
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Email address"
            onChange={handelEmailChange}
            className="w-full text-xl border border-gray-400 focus:outline-none pl-4 pr-2 rounded-[15px_15px_0px_0px] h-[40px]"
          />
          <p className="text-[coral] ml-3">
            {errors.emailError && errors.emailError}
          </p>
        </div>
        <div className="w-full relative">
          <input
            type={passVisible ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            onChange={handelPasswordChange}
            className="w-full text-xl border border-gray-400 focus:outline-none pl-4 pr-2 rounded-[0px_0px_15px_15px] h-[40px]"
          />
          {passVisible ? (
            <FontAwesomeIcon
              icon={faEye}
              onClick={() => setPassVisible(!passVisible)}
              className="text-primary absolute right-4 top-3"
            />
          ) : (
            <FontAwesomeIcon
              icon={faEyeSlash}
              onClick={() => setPassVisible(!passVisible)}
              className="text-primary absolute right-4 top-3"
            />
          )}
          <p className="text-[coral] ml-3">
            {errors.passwordError && errors.passwordError}
          </p>
        </div>
        <p className="text-red-500 ml-3 font-medium">{errors.generalError && errors.generalError}</p>
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
          <button className="text-shadeOfPrimary font-medium ml-2 hover:cursor-pointer">
            Forgot password?
          </button>
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
          Did you new hear?{" "}
          <button className="text-shadeOfPrimary font-medium ml-2 hover:cursor-pointer">
            <Link to="/sign-up">Sign up</Link>
          </button>
        </p>
      </div>

      <div className="w-[320px] flex items-center mb-5">
        <div className="h-[2px] w-full bg-primary ml-5"></div>
        <div className="px-5">OR</div>
        <div className="h-[2px] w-full bg-primary mr-5"></div>
      </div>

      <div className="w-[320px] flex flex-col gap-3 text-white text-lg font-medium">
        <button className="w-full bg-[#DB4437] py-1.5 rounded-md" onClick={handelGoogleSignUp}>
          <FontAwesomeIcon icon={faGoogle} />
          <span className="ml-2">Continue With Google</span>
        </button>
        <button className="w-full bg-[#3B5998] py-1.5 rounded-md">
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span className="ml-2">Continue With Facebook <br /> working on it</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
