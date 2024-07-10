import {
  email_validation,
  name_validation,
} from "../../utils/inputValidations";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../FormInputs/Input";
import RadioButton from "../FormInputs/RadioButton";
import { Phone } from "../FormInputs/Phone";
import { Select } from "../FormInputs/Select";
import { useDispatch } from "react-redux";
import { setSeller } from "../../redux/sellerSlice";
import FormTab from "./FormTab";
import { useNavigate } from "react-router-dom";

const PropertyImages = () => {
  const methods = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = methods.handleSubmit((inputs) => {
    console.log(inputs);
    dispatch(setSeller(inputs));
    navigate("/confirm");
  });

  return (
    <FormTab handleNext={handleSubmit}>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-5 items-center text-black bg-white w-[380px] space-y-[60px]"
        >
          {/* <RadioInputWhoAmI />
          <Input {...name_validation} />
          <CountryInput />
          <div className="space-y-[16px] w-full">
            <Phone name="phone" label="Phone" />
            <p className="text-[16px] font-medium">OR</p>
            <Input {...email_validation} />
          </div> */}
          Property Images
        </form>
      </FormProvider>
    </FormTab>
  );
};

const RadioInputWhoAmI = () => {
  const options = [
    {
      value: "owner",
      label: "Owner",
    },
    {
      value: "builder",
      label: "Builder",
    },
  ];
  return <RadioButton name="iam" label="I am" options={options} />;
};

const CountryInput = () => {
  const countries = [
    "Afghanistan",
    "Bangladesh",
    "Bhutan",
    "China",
    "India",
    "Maldives",
    "Myanmar",
    "Nepal",
    "Pakistan",
    "Sri Lanka",
  ];

  return <Select name={"country"} label="Country" options={countries} />;
};

export default PropertyImages;
