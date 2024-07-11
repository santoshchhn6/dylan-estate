const FormNav = ({ children, handleNext }) => {
  return (
    <div className=" w-full h-full font-inter flex flex-col">
      <h1 className=" w-[inherit] h-[68px] text-[rgb(18,43,73)] bg-[#FCF8F4] font-mws text-[20px] pt-[15.5px] pl-[68px] pb-[17.5px]">
        LETS GET YOU STARTED!
      </h1>
      <div className="flex-grow flex px-[78px] py-[36px]  overflow-y-auto bg-white  text-black ">
        {children}
      </div>
      <div className=" w-[inherit] min-h-[63px] px-[32px]  font-inter bg-[#FCF8F4] flex items-center justify-between">
        <p className="text-[#7A7A7A] text-[12px]">
          Need Help?{" "}
          <span className="font-medium text-black">Call 9999999999</span>
        </p>
        <button
          onClick={handleNext}
          className="bg-[#122B49]  hover:bg-[#264d7e] text-[16px] py-[6.5px] px-[33.5px] rounded-[8px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FormNav;
