import { useFormContext } from "react-hook-form";

import { isFormInvalid } from "../../utils/isFormInvalid";
import { findInputError } from "../../utils/findInputError";
import { InputError } from "./InputError";

export const Phone = ({
  label = "Phone",
  type = "tel",
  placeholder = "000-000-0000",
  name,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <InputError inputError={inputError} isInvalid={isInvalid}>
      <div>
        <label htmlFor={name} className="text-[16px] font-medium">
          {label}
          <span className="text-[#FF4D4F] mb-[8px]"> *</span>
        </label>
        <div className="flex gap-[5px]">
          <PhoneCode />
          <input
            name={name}
            type={type}
            className="w-full py-[9px] px-[12px] text-[16px] font-inter bg-white border rounded-[2px] border-[#7A7A7A] outline-gray-600"
            placeholder={placeholder}
            {...register(name, {
              required: "Please enter phone number",
              maxLength: {
                value: 10,
                message: "There should be 10 digit",
              },
              minLength: {
                value: 10,
                message: "There should be 10 digit",
              },
            })}
          />
        </div>
      </div>
    </InputError>
  );
};

const PhoneCode = () => {
  const { register } = useFormContext();
  const phonecodes = [
    "+86",
    "+91",
    "+92",
    "+93",
    "+94",
    "+95",
    "+880",
    "+960",
    "+975",
    "+977",
  ];
  return (
    <select
      name="phonecode"
      defaultValue={"+91"}
      {...register("phonecode")}
      className=" py-[9px] px-[12px] text-[16px] font-inter bg-white border rounded-[2px] border-[#7A7A7A] outline-gray-600"
    >
      {phonecodes.map((e) => (
        <option key={e} value={e}>
          {e}
        </option>
      ))}
    </select>
  );
};
