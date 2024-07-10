import { useFormContext } from "react-hook-form";

import { isFormInvalid } from "../../utils/isFormInvalid";
import { findInputError } from "../../utils/findInputError";
import { InputError } from "./InputError";

export const OTPInput = ({ label, type, placeholder, validation, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <InputError inputError={inputError} isInvalid={isInvalid}>
      <div>
        <div className="flex justify-between items-baseline">
          <label htmlFor={name} className="text-[16px] font-medium">
            {label}
            <span className="text-[#FF4D4F] mb-[8px]"> *</span>
          </label>
          <span className="border-b border-[#122B49] text-[12px] text-[#122B49] cursor-pointer">
            Change
          </span>
        </div>

        <input
          name={name}
          type={type}
          className="w-full mt-[28px] mb-[8px] py-[9px] px-[12px] text-[14px] font-inter bg-white border rounded-[2px] border-[#7A7A7A] outline-gray-600"
          placeholder={placeholder}
          {...register(name, validation)}
        />

        <span className="float-right text-[12px] text-[#122B49] cursor-pointer">
          Resend OTP
        </span>
      </div>
    </InputError>
  );
};
