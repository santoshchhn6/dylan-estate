import { FormProvider, useForm } from "react-hook-form";
import { Select } from "../FormInputs/Select";
import { useDispatch, useSelector } from "react-redux";
import FormTab from "./FormTab";
import { Input2 } from "../FormInputs/Input2";
import { Input3 } from "../FormInputs/Input3";
import { setMaintenanceType, setPriceDetail } from "../../redux/priceDetailSlice";
import { TextArea } from "../FormInputs/TextArea";
import Padding from "../Padding";

const PriceDetails = ({ handleNext }) => {
  const methods = useForm();
  const dispatch = useDispatch();
  const { maintenance_price_type } = useSelector((state) => state.priceDetail);

  const handleSubmit = methods.handleSubmit((inputs) => {
    console.log(inputs);
    console.log({ maintenance_price_type });
    dispatch(setPriceDetail(inputs));
    handleNext();
  });

  return (
    <FormTab handleNext={handleSubmit}>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full flex flex-col gap-5  text-black bg-white  space-y-[60px]"
        >
          <div className="flex flex-wrap lg:flex-nowrap gap-[60px] ">
            <Input2
              type="number"
              name="rent"
              label="Rent"
              placeholder2="/Month"
              validation={{ required: "Enter rent" }}
            />
            <Input2
              type="number"
              name="security"
              label="Security"
              placeholder2="/Month"
              validation={{ required: "Enter security" }}
            />
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-[60px] ">
            <SelectMaintenance />
            <Input3
              type="number"
              name="maintenance_price"
              label={"Maintenance"}
              placeholder={"Maintenance"}
              options={["Monthly", "Yearly"]}
              onChange={(v) => dispatch(setMaintenanceType(v))}
            />
          </div>
          <TextArea
            name={"additional_pricing_detail"}
            placeholder={
              "Do you have any concerns regarding pricing of your property? Add your concerns here or call us. "
            }
            label={"Additional Pricing details to convey to agent?"}
            validation={{ required: false }}
          />
          <Padding />
        </form>
      </FormProvider>
    </FormTab>
  );
};

const SelectMaintenance = () => {
  const options = ["Included in Rent", "Extra Maintenance"];

  return <Select name={"maintenance"} label="Maintenance" options={options} />;
};

export default PriceDetails;
