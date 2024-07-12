import backImg from "../assets/images/leftArrow.svg";
import addressImg from "../assets/images/address.svg";
import likeImg from "../assets/images/like.svg";
import uploadImg from "../assets/images/upload.svg";
import previousImg from "../assets/images/previous.svg";
import nextImg from "../assets/images/next.svg";
import closeImg from "../assets/images/close.svg";

import availImg from "../assets/images/avail.svg";
import buildingImg from "../assets/images/building.svg";
import ageImg from "../assets/images/age.svg";
import directionImg from "../assets/images/direction.svg";
import floorImg from "../assets/images/floor.svg";
import sqaureImg from "../assets/images/square.svg";
import tubImg from "../assets/images/tub.svg";
import bedImg from "../assets/images/bed.svg";

import securityImg from "../assets/images/security.svg";
import parkingImg from "../assets/images/parking.svg";
import cctvImg from "../assets/images/cctv.svg";
import liftImg from "../assets/images/lift.svg";
import { useSelector } from "react-redux";

const PropertyPreview = () => {
  return (
    <div className="px-5 md:px-[60px] py-[25px]">
      <img src={backImg} alt="" className="block mb-[17px]" />
      <Heading />
      <Images />
      <Overview />
    </div>
  );
};

const Heading = () => {
  const { locationDetail } = useSelector((state) => state.locationDetail);
  const { propertyDetail } = useSelector((state) => state.propertyDetail);
  return (
    <div className="w-full flex justify-between flex-wrap gap-[10px] mb-[17px] ">
      <div className="space-y-[20px] ">
        <h1 className="font-mws text-[26px]">
          {propertyDetail?.BHK_type} {propertyDetail?.property_type_residential}{" "}
          For {propertyDetail?.property_for} in {locationDetail?.building_name}{" "}
          ( {propertyDetail?.built_up_area} Sq.ft.){" "}
        </h1>
        <div className="flex gap-[8px]">
          <img src={addressImg} alt="" />
          <p className="text-[16px]">
            {locationDetail?.building_name}, {locationDetail?.locality},
            {locationDetail?.landmark_name}, {locationDetail?.city}
          </p>
        </div>
      </div>
      <div className="flex gap-[20px]  items-end">
        <img
          src={likeImg}
          alt=""
          className="w-[43.44px] aspect-square object-contain"
        />
        <img
          src={uploadImg}
          alt=""
          className="w-[43.44px] aspect-square object-contain"
        />
      </div>
    </div>
  );
};

const Images = () => {
  const { images } = useSelector((state) => state.propertyImages);
  console.log(images);
  return (
    <div className="relative w-full  aspect-[837/405] bg-[#C4C4C4] border border-[#D6D6D6] overflow-hidden shadow-[0px_4px_8px_0px_#493F3440]">
      <img
        src={URL.createObjectURL(images[0])}
        alt=""
        className="absolute top-0 left-0 w-[inherit] h-[inherit] object-cover"
      />
      <img
        src={previousImg}
        alt=""
        className="absolute left-0 top-1/2 translate-y-[-50%] cursor-pointer"
      />
      <img
        src={nextImg}
        alt=""
        className="absolute right-0 top-1/2 translate-y-[-50%] cursor-pointer"
      />
      <div className="w-[inherit] absolute bottom-0 left-0 bg-[#e3e3e3] text-[#7A7A7A] flex items-center justify-between pl-[24px]">
        <div>
          <span className="font-medium text-[16px]">Property ID :</span>
          <span className="font-medium text-[14px] ml-3">9999999999</span>
        </div>
        <p className="bg-white py-[4px] px-[24px] text-[14px] text-[#424242] flex items-center gap-[48px]">
          Reject this property
          <img src={closeImg} alt="" />
        </p>
      </div>
    </div>
  );
};

const Overview = () => {
  return (
    <div className="w-full space-y-[56px]">
      <PropertyOverview />
      <Amenties />
      <Description />
    </div>
  );
};

const PropertyOverview = () => {
  const { propertyDetail } = useSelector((state) => state.propertyDetail);
  const { features } = useSelector((state) => state.features);

  return (
    <div className="py-[40px] px-[36px] space-y-[60px]">
      <h1 className="font-mws text-[32px]">Property Overview</h1>
      <div className="grid grid-cols-3 gap-[60px]">
        <OverviewIcon
          title="Bathrooms"
          value={propertyDetail?.bathrooms}
          img={tubImg}
        />
        <OverviewIcon
          title="Bedrooms"
          value={propertyDetail?.BHK_type}
          img={bedImg}
        />
        <OverviewIcon
          title="Property Type"
          value={propertyDetail?.property_type}
          img={buildingImg}
        />
        <OverviewIcon
          title="Sq. Ft."
          value={propertyDetail?.built_up_area}
          img={sqaureImg}
        />
        <OverviewIcon
          title="Total Floors"
          value={propertyDetail?.total_floor}
          img={floorImg}
        />
        <OverviewIcon
          title="Facing"
          value={propertyDetail?.property_facing}
          img={directionImg}
        />
        <OverviewIcon
          title="Property Age"
          value={propertyDetail?.property_age}
          img={ageImg}
        />
        <OverviewIcon
          title="Availability"
          value={propertyDetail?.availability}
          img={availImg}
        />
      </div>
    </div>
  );
};

const OverviewIcon = ({ title, value, img }) => {
  return (
    <div className="flex gap-[4px]">
      <img
        src={img}
        alt=""
        className="w-[20px] h-[20px] object-contain mt-[4px]"
      />
      <div className="space-y-[7px] ">
        <p className="font-inter font-medium text-[18px] text-[#122B49] ">
          {value}
        </p>
        <p className="font-inter font-medium text-[14px] text-[#7A7A7A]">
          {title}
        </p>
      </div>
    </div>
  );
};

const Amenties = () => {
  const { amenities } = useSelector((state) => state.features);
  console.log(amenities);

  return (
    <div className="py-[40px] px-[36px] space-y-[60px]">
      <h1 className="font-mws text-[32px]">Amenities</h1>
      <div className="grid grid-cols-4 gap-[42px]">
        {amenities.includes("sercurity") && (
          <AmentiesIcon title="24/7 Security" img={securityImg} />
        )}
        {amenities.includes("cctv camera") && (
          <AmentiesIcon title="CCTY Camera" img={cctvImg} />
        )}
        {amenities.includes("lift") && (
          <AmentiesIcon title="Lift" img={liftImg} />
        )}
        {amenities.includes("reserved parking") && (
          <AmentiesIcon title="Reserved Parking" img={parkingImg} />
        )}
      </div>
    </div>
  );
};

const AmentiesIcon = ({ title, img }) => {
  return (
    <div className=" w-[135px] h-[138] flex flex-col items-center ">
      <img
        src={img}
        alt=""
        className=" w-[36px] aspect-square object-contain"
      />
      <span className="text-[14px] text-[#7A7A7A] text-center mt-[13px] ">
        {title}
      </span>
    </div>
  );
};

const Description = () => {
  const { propertyDetail } = useSelector((state) => state.propertyDetail);
  return (
    <div className="py-[40px] px-[36px] space-y-[25px]">
      <h1 className="font-mws text-[32px]">Description</h1>
      <div>
        <p className="font-inter text-[16px] text-[#424242]">
          {propertyDetail?.property_description}
        </p>
        <p className="underline font-inter font-bold text-[16px] text-[#424242] mt-[12px]">
          show More
        </p>
      </div>
    </div>
  );
};

export default PropertyPreview;
