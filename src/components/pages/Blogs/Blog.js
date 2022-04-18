import React from "react";
import placeholderImg from "../../../asset/Images/user-account-img-placeholder.png";

const Blog = ({ title, desc }) => {
  return (
    <div className="w-full flex justify-center items- mb-5 px-4">
      <div className="w-[450px] bg-[#e1e2e3] flex flex-col justify-between">
        <div>
          <div className="flex justify-between px-3 bg-shadeOfPrimary text-white py-3">
            <p className="text-xl font-semibold">{title}</p>
          </div>

          <div className="px-5 py-3">
            <p>{desc}</p>
          </div>
        </div>

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
  );
};

export default Blog;
