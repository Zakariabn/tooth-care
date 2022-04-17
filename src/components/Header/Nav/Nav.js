import React, { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import logo from "../../../asset/Icon/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleUp } from "@fortawesome/free-solid-svg-icons";
// import auth from '';

const Nav = () => {
  // const [user, loading, error] = useAuthState(auth);
  let user; // this variable for demo user we need to change with useAuthState user
  const [menuState, setMenuState] = useState(false);

  return (
    <div className="w-full flex justify-center shadow-sm">
      <nav className="w-full max-w-screen-lg flex justify-between items-center px-4 py-2">
        <div>
          <img src={logo} alt="Tooth care logo" className="h-[50px]" />
        </div>

        <div className={``}>
          <div>
            {menuState ? (
              <FontAwesomeIcon
                icon={faBars}
                className="md:hidden absolute right-5 z-20 text-shadeOfPrimary text-xl hover:cursor-pointer hover:text-primary"
                onClick={() => setMenuState(!menuState)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleUp}
                className="md:hidden absolute right-5 z-20 text-shadeOfPrimary text-xl hover:cursor-pointer hover:text-primary"
                onClick={() => setMenuState(!menuState)}
              />
            )}
          </div>

          <div
            className={`absolute duration-150 ${
              menuState ? "translate-y-[-500px]" : "translate-y-0"
            } z-10 top-[65px] left-0 w-full text-center bg-navBgShadow md:bg-inherit  md:block md:static md:translate-y-0`}>
            <div className="flex flex-col md:flex-row items-center gap-4 font-bold font-title text-primary no-underline">
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/services">Services</CustomLink>
              <CustomLink to="/blogs">Blogs</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <div className="flex flex-col md:flex-row gap-4 md:ml-10">
                {!user ? (
                  <>
                    <CustomLink to="/sign-up">Sign up</CustomLink>
                    <CustomLink to="/login">Login</CustomLink>
                  </>
                ) : (
                  <CustomLink to="/logout"><span className="block w-[35px] h-[35px] bg-slate-300 rounded-full"></span></CustomLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
