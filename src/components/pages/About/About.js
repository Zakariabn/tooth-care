import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import placeholderImg from "../../../asset/Images/user-account-img-placeholder.png";
import profileImage from "../../../asset/Images/profile-img_500x500.jpg";
import {
  faGasPump,
  faLocation,
  faLocationDot,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="w-full flex justify-center mt-10 mb-[170px]">
      <div className="w-[400px] flex flex-col justify-center items-center bg-slate-100 shadow-md border border-gray-300 rounded-md px-5 py-10 mt-10 ">
        {/* header */}
        <div className=" flex flex-col items-center text-center mb-5">
          <img
            src={profileImage || placeholderImg}
            alt=""
            className="w-[130px] rounded-full mb-3"
          />
          <div>
            <p className="text-lg font-medium">Md. Zakaria</p>
            <p>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-shadeOfPrimary mr-2"
              />
              <span className="text-sm"> Faridpur, Dhaka-1200</span>
            </p>
          </div>
        </div>
        {/* body */}
        <div className="mb-8 ">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquam
            ea porro. Facilis recusandae, explicabo provident dolor officia
            delectus exercitationem.
          </p>
        </div>

        <div className="text-center">
          <p className="mb-4 font-medium text-lg text-primary">Get Connected</p>
          <div className="w-full flex gap-4 justify-center items-center text-xl text-white">
            <button className="bg-shadeOfPrimary hover:bg-primary duration-150 ease-linear px-5 py-0.5 rounded-md ">
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button className="bg-shadeOfPrimary hover:bg-primary duration-150 ease-linear px-5 py-0.5 rounded-md ">
              <FontAwesomeIcon icon={faInstagram} />
            </button>
            <button className="bg-shadeOfPrimary hover:bg-primary duration-150 ease-linear px-5 py-0.5 rounded-md ">
              <FontAwesomeIcon icon={faYoutube} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

/* You will create an about me page. It could be the about route. There will put your name and your image (picture is optional. However, if you put a photo, please put a professional look picture). And write a small paragraph (3-5 lines) about your goal. And how you will work hard to achieve your goal. */
