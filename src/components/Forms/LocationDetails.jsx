import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../FormInputs/Input";

import { useDispatch } from "react-redux";
import FormTab from "./FormTab";
import Padding from "../Padding";
import { setLocationDetail } from "../../redux/locationDetail";

const LocationDetails = ({ handleNext }) => {
  const methods = useForm();
  const dispatch = useDispatch();

  const handleSubmit = methods.handleSubmit((inputs) => {
    dispatch(setLocationDetail(inputs));
    handleNext();
  });

  return (
    <FormTab handleNext={handleSubmit}>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-5  text-black bg-white  space-y-[60px]"
        >
          <div className="flex flex-wrap lg:flex-nowrap gap-[60px] ">
            <Input
              type="text"
              name="building_name"
              label={"Building/Society Name"}
              placeholder={"Enter Apartment Name"}
              validation={{ required: "Enter Apartment Name" }}
            />
            <Input
              type="text"
              name="locality"
              label={"Locality/Area"}
              placeholder={"Eg:sheetal nagar"}
              validation={{ required: "Enter Locality" }}
            />
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-[60px] ">
            <Input
              type="text"
              name="landmark_name"
              label={"Landmark/Street Name"}
              placeholder={"Prominent Landmark"}
              validation={{ required: "Enter Landmark" }}
            />
            <Input
              type="text"
              name="city"
              label={"City"}
              placeholder={"Mumbai, Maharashtra"}
              validation={{ required: "Enter City" }}
            />
          </div>
          <Padding />
        </form>
      </FormProvider>
    </FormTab>
  );
};

export default LocationDetails;
