import { useSelector } from "react-redux";

const FormTab = ({ children, handleNext }) => {
  return (
    <div className="mx-auto w-full lg:w-[976px] h-[552px] rounded-[16px] shadow-[0px_-2px_8px_2px_#122B4944]  overflow-hidden">
      <div className=" w-full h-full font-inter flex flex-col">
        <Tabs />
        <div className="flex-grow flex px-3 sm:px-[68px] py-[36px]   overflow-y-auto bg-white  text-black ">
          {children}
        </div>
        <div className=" w-full min-h-[63px] px-[32px] text-white  font-inter bg-[#122B49] flex items-center justify-between">
          <p className=" text-[12px]">
            Need Help? <span className="font-medium ">Call 9999999999</span>
          </p>
          <button
            onClick={handleNext}
            className="  bg-[#1e324a] hover:bg-[#2c496b] text-[16px] py-[6.5px] px-[33.5px] rounded-[8px]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Tabs = () => {
  const { formPage } = useSelector((state) => state.app);
  const tabs = [
    {
      id: 1,
      label: "PROPERTY DETAILS",
    },
    {
      id: 2,
      label: "LOCATION DETAILS",
    },
    {
      id: 3,
      label: "FEATURES DETAILS",
    },
    {
      id: 4,
      label: "PRICE DETAILS",
    },
    {
      id: 5,
      label: "PROPERTY IMAGES",
    },
  ];

  return (
    <div className="w-full">
      <div
        className={` w-full h-[80px] flex text-[#7A7A7A] bg-[#FCF8F4] font-mws text-[14px]`}
      >
        {tabs.map((e) => (
          <span
            key={e.id}
            className={` ${
              formPage === e.id && "bg-[#EDF2F8] text-[#122B49]"
            } flex-1 flex justify-center items-center text-center px-3 min-[800px]:px-[41.6px]`}
          >
            {e.label}
          </span>
        ))}
      </div>
      <div className="w-full h-[8px] bg-[#D6D6D6]"></div>
    </div>
  );
};

export default FormTab;
