import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  return (
    <div className="font-inter text-black/80 px-5 md:px-[119px] py-[90px] space-y-[20px]">
      <h1 className="text-[24px]">
        Thank you for listing your property with us,
      </h1>
      <p className="text-[18px]">
        Your listing will be reviewed and will go live within 24 hours.
      </p>
      <p>
        We will now manage your listing and get in touch with you after finding
        the best suitable tenant as per your preference.
      </p>
      <p className="text-16px font-serif text-[#122B49]">-Dylan Estates</p>
      <div className="flex flex-wrap lg:flex-nowrap gap-[40px]">
        <Button>Edit Property Listing</Button>
        <Button onClick={() => navigate("/property_preview")}>
          Preview Property Listing
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
