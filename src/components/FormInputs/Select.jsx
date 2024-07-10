import { useFormContext } from "react-hook-form";

import { isFormInvalid } from "../../utils/isFormInvalid";
import { findInputError } from "../../utils/findInputError";
import { InputError } from "./InputError";

export const Select = ({ label, name, options }) => {
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
        <select
          name={name}
          defaultValue={"India"}
          {...register(name)}
          className="w-[380px] py-[9px] px-[12px] text-[16px] font-inter bg-white border rounded-[2px] border-[#7A7A7A] outline-gray-600"
        >
          {options?.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
    </InputError>
  );
};
