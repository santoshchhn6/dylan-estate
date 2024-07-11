import React from "react";
import { useNavigate } from "react-router-dom";

const PostProperty = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black/50 w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
      <div className="bg-white w-full sm:w-[469px] h-[252px] px-[40px] rounded-[16px] flex flex-col justify-center items-center">
        <p className="font-medium text-[16px] font-inter text-black/80">
          POST PROPERTY ON DYLAN ESTATE?
          <span className="text-[#FF4D4F]"> *</span>
        </p>
        <button
          onClick={() => navigate("/confirm")}
          className="bg-[#1e324a] hover:bg-[#2d4869] w-full h-[33px] rounded-[4px] mt-[17px] mb-[5px] text-white font-mws font-bold text-[16px]"
        >
          Continue
        </button>
        <p className="font-light text-[12px] font-inter text-[#122B49]">
          By continuing you agree to our Terms and Conditions & Privacy Policy
          <span className="underline font-normal">
            Terms and Conditions & Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
};

export default PostProperty;
