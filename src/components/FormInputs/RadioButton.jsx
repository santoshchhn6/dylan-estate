import { isFormInvalid } from "../../utils/isFormInvalid";
import { findInputError } from "../../utils/findInputError";
import { InputError } from "./InputError";
import { useFormContext } from "react-hook-form";

const RadioButton = ({
  name,
  label,
  options,
  onSelect = (v) => {
    console.log(v);
  },
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  // const handleOnClick = (value) => {
  //   console.log(value);
  // };

  return (
    <InputError inputError={inputError} isInvalid={isInvalid}>
      <div className="w-full">
        <h1 className="mb-[16px] text-[18px] font-medium">
          <span className="text-[#FF4D4F]">* </span> {label} :
        </h1>
        <div className="w-full flex flex-wrap gap-[10px]  pl-[8px]">
          {options?.map((e) => (
            <div
              key={e?.value}
              className="w-[229px] flex items-center gap-[23px]"
            >
              <input
                id={e?.value}
                type="radio"
                name={name}
                value={e?.value}
                onClick={(event) => onSelect(event.target.value)}
                {...register(name, { required: "Please select an options" })}
                className=" accent-black w-[26px] h-[26px] cursor-pointer"
              />
              <label htmlFor={e?.value} className="text-[18px]">
                {e?.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </InputError>
  );
};

export default RadioButton;
