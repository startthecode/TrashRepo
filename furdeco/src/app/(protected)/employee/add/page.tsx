import FilterAndAction from "@/app/components/UI/FilterAndAction";
import { Filters } from "@/app/components/UI/Filters";
import HeadingAndActions from "@/app/components/UI/HeadingAndActions";
import { headingActionButton } from "@/app/types/components/Button";
import React from "react";
import { handleClick } from "./actions";
import DatePickerInput from "@/app/components/UI/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import Forms from "./components/Forms";
const page = () => {
  const buttons: headingActionButton = [
    {
      name: "save",
      varient: "Primary",
      text: "save",
    },
    {
      name: "draft",
      varient: "Primary",
      text: "draft",
    },
  ];

  return (
    <>
      <HeadingAndActions buttons={buttons} heading="Create employee">
        <FilterAndAction
          renderType="client"
          buttons={buttons}
          actions={handleClick}
          withFilter={true}
        />
      </HeadingAndActions>
      <div className="my-4">
        <Forms/>
      </div>
    </>
  );
};

export default page;
