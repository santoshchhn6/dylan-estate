import { useFormContext } from "react-hook-form";

import { isFormInvalid } from "../../utils/isFormInvalid";
import { findInputError } from "../../utils/findInputError";
import { InputError } from "./InputError";

export const InputNumber = ({
  label,
  placeholder,
  validation,
  name,
  className = "",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <InputError inputError={inputError} isInvalid={isInvalid}>
      <div className="flex flex-col">
        <label htmlFor={name} className="text-[16px] font-medium">
          {label}
          <span className="text-[#FF4D4F] mb-[8px]"> *</span>
        </label>
        <input
          name={name}
          type={"number"}
          className={`w-[170px] py-[9px] px-[12px] text-[14px] font-inter bg-white border rounded-[2px] border-[#7A7A7A] outline-gray-600 ${className}`}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      </div>
    </InputError>
  );
};