import { useState } from "react";
import tick from "../assets/images/tick.png";
import UserDetail from "../components/Forms/UserDetail";
import OTP from "../components/Forms/OTP";
const Home = () => {
  return (
    <div className="min-h-screen bg-[#122B49] text-white px-3 sm:px-10 lg:px-[116px] py-[56px] font-mws">
      <div>
        <h1 className="text-[32px] ">Sell or Rent your Property For Free</h1>
        <p className="font-light text-[16px]">
          Whether you’re ready to sell or looking for answers, we’ll guide you
          with data and expertise specific to your needs.
        </p>
      </div>
      <div className="flex justify-center mt-[38px]">
        <div className="w-full  flex flex-col min-[1150px]:flex-row  gap-[96px] justify-center">
          <Info />
          <Form />
        </div>
      </div>
    </div>
  );
};

const Info = () => {
  const infoList = [
    { title: "Add your properties", bold: "Basic Details" },
    { title: "Add property", bold: "Location" },
    { title: "Add property", bold: "Features and amenities" },
    { title: "Add", bold: "Price details" },
    { title: "Add your best", bold: "Property Shots" },
  ];

  return (
    <div className="w-[364px] py-[24px] space-y-[24px]  h-fit">
      <h3 className="text-[20px]">Upload your property in 4 simple steps</h3>
      <ul className="text-[14px]">
        {infoList.map((e) => (
          <li key={e.title} className="flex items-center">
            <img src={tick} alt="" />
            {e.title}
            <span className="ml-1 font-extrabold">{e.bold}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Form = () => {
  const [page, setPage] = useState(1);
  const handleNext = () => {
    setPage(page + 1);
  };

  const getForm = () => {
    switch (page) {
      case 1:
        return <UserDetail handleNext={handleNext} />;
      case 2:
        return <OTP />;

      default:
        break;
    }
  };

  return (
    <div className="border w-full min-[1150px]:w-[608px] h-[376px] rounded-[16px] overflow-hidden">
      {getForm()}
    </div>
  );
};

export default Home;
