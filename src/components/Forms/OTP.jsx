import { useDispatch } from "react-redux";
import FormNav from "./FormNav";
import { otp_validation } from "../../utils/inputValidations";
import { FormProvider, useForm } from "react-hook-form";
import { OTPInput } from "../FormInputs/OTPInput";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const methods = useForm();
  const navigate = useNavigate();

  const handleSubmit = methods.handleSubmit((inputs) => {
    console.log(inputs);
    navigate("/property_listing_form");
  });

  return (
    <FormNav handleNext={handleSubmit}>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-5 items-center text-black bg-white w-[380px] space-y-[60px]"
        >
          <OTPInput {...otp_validation} />
        </form>
      </FormProvider>
    </FormNav>
  );
};

export default OTP;
