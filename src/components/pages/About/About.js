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
            আমি জাকারিয়া আমার কোন জিনিসকে অটোমেটিক করতে অনেক ভালো লাগে এবং আমি
            গেম খেলতে অনেক পছন্দ করি  আমি সাউথইস্ট ইউনিভার্সিটি তে সিএসই করতেছি 5
            সেমিস্টার, <br /><br />  ছাত্র থাকা অবস্থায় মার্কেট কেমন জব কেমন তাদের রিকোয়ারমেন্ট কি থাকে এজন্য নিজেকে প্রস্তুত করছি এবং এর জন্য নিজেকে যতোটুকু
            প্রিপেয়ার করা দরকার আমি সেটা করার সর্বাত্মক চেষ্টা করছি <br /><br /> আগামী তিন থেকে পাঁচ মাসে আমার টার্গেট front-end এবং back-end এর Basic এবং Intermediate লেভেলের concept গুলোতে Confident হওয়া এবং ওয়েব সফটওয়্যার রিলেটেড কোন কোম্পানির সাথে যুক্ত হওয়া
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
