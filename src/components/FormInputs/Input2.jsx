import { useFormContext } from "react-hook-form";

import { isFormInvalid } from "../../utils/isFormInvalid";
import { findInputError } from "../../utils/findInputError";
import { InputError } from "./InputError";

export const Input2 = ({
  type,
  label,
  name,
  placeholder,
  placeholder2 = "",
  validation,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <InputError inputError={inputError} isInvalid={isInvalid}>
      <div className=" flex flex-col">
        <label htmlFor={name} className="text-[16px] font-medium mb-[8px]">
          {label}
          <span className="text-[#FF4D4F] "> *</span>
        </label>
        <div className="w-[380px] h-[40px] flex items-center gap-3 py-[9px] px-[12px] text-[14px] font-inter bg-white border rounded-[2px] border-[#7A7A7A]">
          <span className="text-[rgba(0,0,0,0.25)] text-[18px] ">₹</span>
          <input
            id={name}
            name={name}
            type={type}
            className=" bg-white outline-none flex-grow"
            placeholder={placeholder}
            {...register(name, validation)}
          />
          <span className="text-[rgba(0,0,0,0.25)]">{placeholder2}</span>
        </div>
      </div>
    </InputError>
  );
};
