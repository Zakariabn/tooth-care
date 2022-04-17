import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import logo from "../../../asset/Icon/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
// import auth from '';

const Nav = () => {
  // const [user, loading, error] = useAuthState(auth);
  let user;

  return (
    <div className="w-full flex justify-center shadow-sm">
      <nav className="w-full max-w-screen-lg flex justify-between items-center px-4 py-2">
        <div>
          <img src={logo} alt="Tooth care logo" className="h-[50px]"/>
        </div>

        <div className="flex gap-4 font-bold font-title text-primary no-underline">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/services">Services</CustomLink>
          <CustomLink to="/blogs">Blogs</CustomLink>
          <div className="flex gap-4 ml-10">
          {!user ? (
            <>
              <CustomLink to="/sign-up">Sign up</CustomLink>
              <CustomLink to="/login">Login</CustomLink>
            </>
          ) : (
            <CustomLink to="/logout">Logout</CustomLink>
          )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
