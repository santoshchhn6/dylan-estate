import {
  email_validation,
  name_validation,
} from "../../utils/inputValidations";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../FormInputs/Input";
import RadioButton from "../FormInputs/RadioButton";
import { Phone } from "../FormInputs/Phone";
import { Select } from "../FormInputs/Select";
import { useDispatch, useSelector } from "react-redux";
import { setSeller } from "../../redux/sellerSlice";
import FormTab from "./FormTab";
import { Area } from "../FormInputs/Area";
import RadioButton2 from "../FormInputs/RadioButton2";
import { InputNumber } from "../FormInputs/InputNumber";
import { TextArea } from "../FormInputs/TextArea";
import RadioButton3 from "../FormInputs/RadioButton3";
import { useState } from "react";
import { setPropertyType } from "../../redux/formSlice";
import { setPropertyDetail } from "../../redux/propertyDetailSlice";
import Padding from "../Padding";

const PropertyDetails = ({ handleNext }) => {
  const methods = useForm();
  const dispatch = useDispatch();
  const { propertyType } = useSelector((state) => state.form);

  const handleSubmit = methods.handleSubmit((inputs) => {
    console.log(inputs);
    dispatch(setPropertyDetail(inputs));
    handleNext();
  });

  return (
    <FormTab handleNext={handleSubmit}>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" flex flex-col gap-5  text-black bg-white space-y-[60px]"
        >
          <RadioPropertyFor />

          <div className="space-y-[40px]">
            <RadioPropertyType />
            {propertyType === "residential" && <RadioPropertyTypeResidential />}
            {propertyType === "commercial" && <RadioPropertyTypeCommercial />}
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-[60px] ">
            <Area name={"built_up_area"} label="Built up Area" />
            <Area name={"carpet_area"} label="Carpet Area" />
          </div>
          <div className="w-full flex flex-wrap lg:flex-nowrap gap-[60px]">
            <div className="flex gap-[40px]">
              <InputNumber
                name="property_on_floor"
                label={"Property on Floor"}
                placeholder={"Total Floor"}
                validation={{ required: "Enter floor" }}
                className="w-[170px]"
              />
              <InputNumber
                name="total_floor"
                label={"Total Floor"}
                placeholder={"Floor"}
                validation={{ required: "Enter Total floor" }}
                className="w-[170px]"
              />
            </div>
            <SelectPropertyFacing />
          </div>
          <RadioPropertyAge />
          <RadioBHKType />
          <RadioBathroomsType />
          {/* <RadioBalcony /> */}
          {/* <RadioTenantPreference /> */}
          <RadioAvailability />
          <TextArea
            name={"property_description"}
            placeholder={
              "Add a description for your property to attract the best tenant"
            }
            label={"Property Description"}
            validation={{ required: "Enter Property Description" }}
          />
          <Padding />
        </form>
      </FormProvider>
    </FormTab>
  );
};

const RadioPropertyFor = () => {
  const options = [
    {
      value: "rent",
      label: "Rent",
    },
    {
      value: "sale",
      label: "Sale",
    },
  ];
  return (
    <RadioButton name="property_for" label="Property For" options={options} />
  );
};

const RadioPropertyType = () => {
  const dispatch = useDispatch();
  const options = [
    {
      value: "residential",
      label: "Residential",
    },
    {
      value: "commercial",
      label: "Commercial",
    },
    {
      value: "land/plot",
      label: "Land/Plot",
    },
  ];
  return (
    <RadioButton
      name="property_type"
      label="Property Type"
      options={options}
      onSelect={(v) => dispatch(setPropertyType(v))}
    />
  );
};

const SelectPropertyFacing = () => {
  const directions = ["North", "South", "East", "West", "North-East"];

  return (
    <Select
      name={"property_facing"}
      label="Property Facing"
      options={directions}
    />
  );
};

const RadioPropertyAge = () => {
  const options = [
    {
      id: "<1",
      value: "less than 1 year",
      label: "Less than 1 Years",
    },
    {
      id: "1-3",
      value: "1-3 years",
      label: "1-3 Years",
    },
    {
      id: "3-5",
      value: "3-5 years",
      label: "3-5 Years",
    },
    {
      id: "5-10",
      value: "5-10 years",
      label: "5-10 Years",
    },
    {
      id: "10<",
      value: "greater than 10 years",
      label: "Greater than 10 Years",
    },
  ];
  return (
    <RadioButton2 name="property_age" label="Property Age" options={options} />
  );
};

const RadioBHKType = () => {
  const options = [
    {
      id: "1rk",
      value: "1 RK",
      label: "1 RK",
    },
    {
      id: "1bhk",
      value: "1 BHK",
      label: "1 BHK",
    },
    {
      id: "2bhk",
      value: "2 BHK",
      label: "2 BHK",
    },
    {
      id: "3bhk",
      value: "3 BHK",
      label: "3 BHK",
    },
    {
      id: "4bhk",
      value: "4 BHK",
      label: "4 BHK",
    },
    {
      id: "5+bhk",
      value: "5+ BHK",
      label: "5+ BHK",
    },
  ];
  return <RadioButton2 name="BHK_type" label="BHK Type" options={options} />;
};

const RadioBathroomsType = () => {
  const options = [
    {
      id: "bth1",
      value: "1",
      label: "1",
    },
    {
      id: "bth2",
      value: "2",
      label: "2",
    },
    {
      id: "bth3",
      value: "3",
      label: "3",
    },
    {
      id: "bth4",
      value: "4",
      label: "4",
    },
    {
      id: "bth5",
      value: "5",
      label: "5",
    },
    {
      id: "bth6+",
      value: "6+",
      label: "6+",
    },
  ];
  return (
    <RadioButton2
      name="bathrooms"
      label="Bathrooms/Toilets"
      options={options}
    />
  );
};

const RadioBalcony = () => {
  const options = [
    {
      id: "blc0",
      value: "0",
      label: "0",
    },
    {
      id: "blc1",
      value: "1",
      label: "1",
    },
    {
      id: "blc2",
      value: "2",
      label: "2",
    },
    {
      id: "blc3",
      value: "3",
      label: "3",
    },
    {
      id: "blc4+",
      value: "4+",
      label: "4+",
    },
  ];
  return <RadioButton2 name="balcony" label="Balcony" options={options} />;
};

const RadioTenantPreference = () => {
  const options = [
    {
      id: "any",
      value: "any",
      label: "Any",
    },
    {
      id: "family",
      value: "family",
      label: "Family",
    },
    {
      id: "bachelor_man",
      value: "bachelor_man",
      label: "Bachelor (Man)",
    },
    {
      id: "bachelor_women",
      value: "bachelor_women",
      label: "Bachelor (Women)",
    },
  ];
  return (
    <RadioButton2 name="tenant" label="Tenant Preference" options={options} />
  );
};

const RadioAvailability = () => {
  const options = [
    {
      id: "immediate",
      value: "immediate",
      label: "Immediate",
    },
    {
      id: "within_15_days",
      value: "within 15 days",
      label: "Within 15 days",
    },
    {
      id: "within_1_month",
      value: "within 1 month",
      label: "Within 1 month",
    },
    {
      id: "within_2_month",
      value: "within 2 month",
      label: "Within 2 month",
    },
  ];
  return (
    <RadioButton2 name="availability" label="Availability" options={options} />
  );
};

const RadioPropertyTypeResidential = () => {
  const options = [
    {
      id: "residential_flat/apartment",
      value: "flat/apartment",
      label: "Flat/Apartment",
    },
    {
      id: "residential_house/villa",
      value: "house/villa",
      label: "House/Villa",
    },
  ];
  return <RadioButton3 name="property_type_residential" options={options} />;
};

const RadioPropertyTypeCommercial = () => {
  const options = [
    {
      id: "commercial_office_space",
      value: "office space",
      label: "Office Space",
    },
    {
      id: "commercial_co_working",
      value: "co working",
      label: "Co working",
    },
    {
      id: "commercial_restaurant/cafe",
      value: "restaurant cafe",
      label: "Restaurant/Cafe",
    },
    {
      id: "commercial_shop/showroom",
      value: "shop/showroom",
      label: "Shop/Showroom",
    },
    {
      id: "commercial_industrial_bldg",
      value: "industrial bldg",
      label: "Industrial Bldg.",
    },
    {
      id: "commercial_industial_shed",
      value: "industrial shed",
      label: "Industrial Shed",
    },
    {
      id: "commercial_warehouse/godown",
      value: "warehouse/godown",
      label: "Warehouse/Godown",
    },
  ];
  return <RadioButton3 name="property_type_commercial" options={options} />;
};

export default PropertyDetails;
