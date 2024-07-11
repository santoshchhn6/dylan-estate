import { isFormInvalid } from "../../utils/isFormInvalid";
import { findInputError } from "../../utils/findInputError";
import { InputError } from "./InputError";
import { useFormContext } from "react-hook-form";

const CheckBox = ({
  name,
  label,
  options,
  onChange = (v, c) => {
    console.log(v, c);
  },
}) => {
  return (
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
              id={e?.id}
              type="checkbox"
              name={name}
              value={e?.value}
              className=" accent-black w-[26px] h-[26px] cursor-pointer"
              onChange={(event) =>
                onChange(event.target.value, event.target.checked)
              }
            />
            <label htmlFor={e?.value} className="text-[18px]">
              {e?.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBox;
