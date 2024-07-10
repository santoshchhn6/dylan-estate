import { useFormContext } from "react-hook-form";

import { isFormInvalid } from "../../utils/isFormInvalid";
import { findInputError } from "../../utils/findInputError";
import { InputError } from "./InputError";

export const Area = ({ label, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <InputError inputError={inputError} isInvalid={isInvalid}>
      <div className=" flex flex-col">
        <label htmlFor={name} className="text-[16px] font-medium">
          {label}
          <span className="text-[#FF4D4F] mb-[8px]"> *</span>
        </label>
        <div className="w-[380px] flex justify-between py-[9px] px-[12px] text-[14px] font-inter bg-white border rounded-[2px] border-[#7A7A7A]">
          <input
            id={name}
            name={name}
            type={"number"}
            className=" bg-white outline-none"
            placeholder="0"
            {...register(name, { required: "Enter the area" })}
          />
          <span className="text-[rgba(0,0,0,0.25)]">Sq. Ft.</span>
        </div>
      </div>
    </InputError>
  );
};
