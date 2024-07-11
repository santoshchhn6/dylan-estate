import { useDispatch, useSelector } from "react-redux";
import FormTab from "./FormTab";
import { useNavigate } from "react-router-dom";
import plusImg from "../../assets/images/plus.svg";
import cameraImg from "../../assets/images/camera.svg";
import Padding from "../Padding";
import { useState } from "react";
import { setPropertyImages } from "../../redux/propertyImagesSlice";
import PostProperty from "../PostProperty";

const PropertyImages = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const { images } = useSelector((state) => state.propertyImages);
  const [propertyImagePreview, setpropertyImagePreview] = useState(null);

  const handleSubmit = () => {
    console.log(images);
    if (images?.length > 0) {
      setShow(true);
    } else {
      alert("Add Image");
    }
  };

  const onChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      dispatch(setPropertyImages(file));
      setpropertyImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <FormTab handleNext={handleSubmit}>
      <div>
        <p className="text-[16px] font-medium text-black/80">
          Add Photos / videos to attract more tenants!
        </p>
        <p className="text-[16px] font-medium mt-[40px] mb-[20px] text-black/80">
          Add Photos of living room, bedroom, bathroom, floor, doors, kitchen,
          balcony, location map, neighborhood, etc
        </p>

        <div className="relative w-full aspect-[820/309] border border-gray-300  mb-[40px]">
          {propertyImagePreview && (
            <img
              src={propertyImagePreview}
              alt=""
              className="absolute top-0 left-0 w-[inherit] h-[inherit] aspect-[820/309] object-cover"
            />
          )}
          <div className="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] w-fit flex flex-col  items-center gap-[10px] ">
            <img
              src={cameraImg}
              alt=""
              className="w-[24px] h-[24px] object-contain"
            />
            <label className="flex gap-[8px] text-[16px] font-medium p-[8px] rounded-[8px] bg-[#122B49] text-white hover:bg-[#1b3c64] cursor-pointer">
              <img
                src={plusImg}
                alt=""
                className="w-[24px] h-[24px] object-contain"
              />
              Add Photos Now
              <input type="file" className="hidden" onChange={onChange} />
            </label>
          </div>
        </div>

        <Padding />
        {show && <PostProperty />}
      </div>
    </FormTab>
  );
};

export default PropertyImages;
