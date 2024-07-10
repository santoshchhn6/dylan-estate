import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { navlist } from "../utils/navList";
import language from "../assets/images/langauge.svg";
import user from "../assets/images/user.svg";

const Header = () => {
  return (
    <div className="w-full px-[60px] flex gap-3  py-5 ">
      <SmallMenu />
      <div className=" w-full flex flex-wrap justify-center xl:justify-between items-center">
        <Logo />

        <div className="hidden xl:flex items-center  gap-[40px] mt-[32px] mb-[13px]">
          <Nav />
          <Divider />
          <LanguageAndUser />
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("PROPERTIES");
  return (
    <div className="flex items-center gap-[52px]">
      {navlist?.map((nav) => (
        <button
          key={nav?.title}
          onClick={() => {
            setActive(nav.title);
            navigate(nav.to);
          }}
          className={`${
            active == nav.title && "border-b-2 border-black"
          } font-inter font-bold text-[14px] text-black hover:text-gray-600 text-xl ease-out duration-300 `}
        >
          {nav?.title}
        </button>
      ))}
    </div>
  );
};

const Divider = () => {
  return <div className=" border-2 border-black h-[27px]"></div>;
};

const LanguageAndUser = () => {
  return (
    <div className="flex items-center gap-[34px]">
      <img src={language} alt="" className="cursor-pointer " />
      <img src={user} alt="" className="cursor-pointer " />
    </div>
  );
};

const SmallMenu = () => {
  const [show, setShow] = useState(false);
  return (
    <div onClick={() => setShow(!show)} className="xl:hidden relative ">
      <CiMenuBurger
        size={40}
        className="  text-black hover:text-gray-600 ease-out duration-300 cursor-pointer"
      />
      {show ? <SmallMenuOptions /> : null}
    </div>
  );
};

const SmallMenuOptions = () => {
  return (
    <div className="bg-slate-200    flex flex-col rounded-md overflow-hidden shadow-md border-gray-500 absolute top-16 -left-3 bg-red z-10">
      {navlist.map((nav, index) => (
        <Link
          key={index}
          to={nav.to}
          className="whitespace-nowrap px-3 py-3 hover:text-white hover:bg-teal-600"
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

export default Header;
