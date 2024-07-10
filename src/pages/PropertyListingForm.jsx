import { useState } from "react";
import bell from "../assets/images/bell.svg";
import PropertyDetails from "../components/Forms/PropertyDetails";
import LocationDetails from "../components/Forms/LocationDetails";
import FeaturesDetails from "../components/Forms/FeaturesDetails";
import PriceDetails from "../components/Forms/PriceDetails";
import PropertyImages from "../components/Forms/PropertyImages";
import { useDispatch, useSelector } from "react-redux";
import { setFormPage } from "../redux/appSlice";

const PropertyListingForm = () => {
  const { propertyDetail } = useSelector((state) => state.propertyDetail);
  console.log(propertyDetail);
  return (
    <div className="px-3 md:px-[27px] py-[11px] ">
      <div className="mb-[23px]  flex justify-end">
        <img src={bell} alt="" className=" " />
      </div>
      <Form />
    </div>
  );
};

const Form = () => {
  const { formPage } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(setFormPage(formPage + 1));
  };
  const getForm = () => {
    switch (formPage) {
      case 1:
        return <PropertyDetails handleNext={handleNext} />;

      case 2:
        return <LocationDetails handleNext={handleNext} />;

      case 3:
        return <FeaturesDetails handleNext={handleNext} />;

      case 4:
        return <PriceDetails handleNext={handleNext} />;

      case 5:
        return <PropertyImages handleNext={handleNext} />;

      default:
        return <p>No Form</p>;
    }
  };
  return <>{getForm()}</>;
};

export default PropertyListingForm;
