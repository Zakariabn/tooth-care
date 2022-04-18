import React from "react";
import { toast } from "react-toastify";
import placeholderImg from "../../../asset/Images/user-account-img-placeholder.png";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-primary my-5">Blogs</h1>
      <div className="w-full flex justify-center">
        <div className="w-[450px] bg-[#e1e2e3]">
          {/* title info */}
          <div className="flex justify-between px-3 bg-shadeOfPrimary text-white py-3">
            <p className="text-xl font-semibold">Blog heading</p>
          </div>
          {/* Blog body */}
          <div className="px-5 py-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              nam. Quam quidem officiis quo veniam minima id! Excepturi, dolore
              provident?
            </p>
          </div>

          {/* blog footer */}
          <div className="flex items-center gap-2 bg-shadeOfPrimary py-1 px-2">
            <img
              src={placeholderImg}
              alt=""
              className="w-[16px] h-[16px] rounded-full"
            />
            <small>1 day ago, 12.00p</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
