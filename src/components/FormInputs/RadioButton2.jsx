import { isFormInvalid } from "../../utils/isFormInvalid";
import { findInputError } from "../../utils/findInputError";
import { InputError } from "./InputError";
import { useFormContext } from "react-hook-form";

const RadioButton2 = ({ name, label, options }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <InputError inputError={inputError} isInvalid={isInvalid}>
      <div className="w-full">
        <h1 className="mb-[16px] text-[18px] font-medium">
          <span className="text-[#FF4D4F]">* </span> {label} :
        </h1>
        <div className="w-full flex flex-wrap gap-[24px] ">
          {options?.map((e) => (
            <div key={e?.id} className=" ">
              <input
                id={e?.id}
                type="radio"
                name={name}
                value={e?.value}
                {...register(name, { required: "Please select an options" })}
                className="hidden peer"
              />
              <label
                htmlFor={e?.id}
                className="text-[14px] rounded-[30px] py-[11px] px-[25px] border dark:hover:text-gray-900 dark:border-[#D6D6D6] dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:text-black dark:bg-white dark:hover:bg-gray-100 cursor-pointer"
              >
                {e?.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </InputError>
  );
};

export default RadioButton2;
