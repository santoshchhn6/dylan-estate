import { useFormContext } from "react-hook-form";

import { isFormInvalid } from "../../utils/isFormInvalid";
import { findInputError } from "../../utils/findInputError";
import { InputError } from "./InputError";

export const Input3 = ({
  label,
  type,
  placeholder,
  validation,
  name,
  className = "",
  options,
  onChange = (v) => {
    console.log(v);
  },
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
        <label htmlFor={name} className="text-[16px] font-medium  mb-[8px]">
          {label}
          <span className="text-[#FF4D4F]"> *</span>
        </label>
        <div className="flex gap-[12px]">
          <div className="w-[184px] h-[40px] flex gap-3 items-center px-[12px] text-[14px] font-inter bg-white border rounded-[2px] border-[#7A7A7A]">
            <span className="text-[rgba(0,0,0,0.25)] text-[18px] ">₹</span>
            <input
              id={name}
              name={name}
              type={type}
              className="w-full bg-white outline-none flex-grow"
              placeholder={placeholder}
              {...register(name, validation)}
            />
          </div>
          <select
            name={name}
            onChange={(event) => onChange(event.target.value)}
            className="w-[184px] py-[9px] px-[12px] text-[16px] font-inter bg-white border rounded-[2px] border-[#7A7A7A] outline-gray-600"
          >
            {options?.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>
    </InputError>
  );
};
