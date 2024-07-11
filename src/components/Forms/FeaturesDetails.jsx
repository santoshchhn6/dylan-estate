import { FormProvider, useForm } from "react-hook-form";
import RadioButton from "../FormInputs/RadioButton";
import { useDispatch, useSelector } from "react-redux";
import FormTab from "./FormTab";
import CheckBox from "../FormInputs/CheckBox";
import {
  addAmenities,
  addFurnishing,
  removeAmenities,
  removeFurnishing,
  setFeatures,
} from "../../redux/featuresSlice";
import securityImg from "../../assets/images/security.svg";
import parkingImg from "../../assets/images/parking.svg";
import cctvImg from "../../assets/images/cctv.svg";
import liftImg from "../../assets/images/lift.svg";
import CheckBoxWithImage from "../FormInputs/CheckBoxWithImage";
import Padding from "../Padding";
import Hr from "../FormInputs/Hr";

const FeaturesDetails = ({ handleNext }) => {
  const { furnishing, amenities } = useSelector((state) => state.features);
  const methods = useForm();
  const dispatch = useDispatch();

  const handleSubmit = methods.handleSubmit((inputs) => {
    console.log(inputs);
    console.log(furnishing);
    console.log(amenities);
    dispatch(setFeatures(inputs));
    handleNext();
  });

  return (
    <FormTab handleNext={handleSubmit}>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-5  text-black bg-white  space-y-[60px]"
        >
          <h1 className="font-semibold text-[18px]">General Features</h1>
          <RadioNonVeg />
          <RadioPetsAllowed />
          <Hr />
          <CheckBoxFurnishing />
          <Hr />
          <CheckBoxAmenities />
          <Padding />
        </form>
      </FormProvider>
    </FormTab>
  );
};

const RadioNonVeg = () => {
  const options = [
    {
      value: "allowed",
      label: "Allowed",
    },
    {
      value: "not allowed",
      label: "Not Allowed",
    },
  ];
  return <RadioButton name="non_veg" label="Non-Veg" options={options} />;
};

const RadioPetsAllowed = () => {
  const options = [
    {
      value: "yes",
      label: "Yes",
    },
    {
      value: "no",
      label: "No",
    },
  ];
  return (
    <RadioButton name="pets_allowed" label="Pets Allowed" options={options} />
  );
};

const CheckBoxFurnishing = () => {
  const dispatch = useDispatch();
  const onChange = (value, checked) => {
    if (checked) {
      dispatch(addFurnishing(value));
    } else {
      dispatch(removeFurnishing(value));
    }
  };
  const options = [
    {
      id: "furnishing_1",
      value: "full furnished",
      label: "Fully Funished",
    },
    {
      id: "furnishing_2",
      value: "semi furnished",
      label: "Semi Furnished",
    },
    {
      id: "furnishing_3",
      value: "unfurnished",
      label: "Unfurnished",
    },
  ];
  return (
    <CheckBox
      name="furnishing"
      label="Furnishing"
      options={options}
      onChange={onChange}
    />
  );
};

const CheckBoxAmenities = () => {
  const dispatch = useDispatch();
  const onChange = (value, checked) => {
    console.log(value, checked);
    if (checked) {
      dispatch(addAmenities(value));
    } else {
      dispatch(removeAmenities(value));
    }
  };
  const options = [
    {
      id: "amenities_1",
      value: "sercurity",
      label: "24/7 Security",
      img: securityImg,
    },
    {
      id: "amenities_2",
      value: "cctv camera",
      label: "CCTV Camera",
      img: cctvImg,
    },
    {
      id: "amenities_3",
      value: "lift",
      label: "Lift",
      img: liftImg,
    },
    {
      id: "amenities_4",
      value: "reserved parking",
      label: "Reserverd Parking",
      img: parkingImg,
    },
  ];
  return (
    <CheckBoxWithImage
      name="society_amenities"
      label="SOCIETY_AMENTIES"
      options={options}
      onChange={onChange}
    />
  );
};

export default FeaturesDetails;
