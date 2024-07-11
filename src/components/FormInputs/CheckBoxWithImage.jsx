import { isFormInvalid } from "../../utils/isFormInvalid";
import { findInputError } from "../../utils/findInputError";
import { InputError } from "./InputError";
import { useFormContext } from "react-hook-form";

const CheckBoxWithImage = ({
  name,
  label,
  options,
  onChange = (v, c) => {
    console.log(v, c);
  },
}) => {
  return (
    <div className="w-full">
      <h1 className="mb-[60px] text-[18px] font-semibold">{label}</h1>
      <div className="w-full flex flex-wrap gap-[93px] ">
        {options?.map((e) => (
          <div
            key={e?.value}
            className=" w-[135px] h-[138] flex flex-col items-center"
          >
            <img
              src={e?.img}
              alt=""
              className=" w-[36px] aspect-square object-contain"
            />
            <label
              htmlFor={e?.id}
              className="text-[14px] text-[#7A7A7A] text-center mt-[13px] mb-[32px]"
            >
              {e?.label}
            </label>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxWithImage;
