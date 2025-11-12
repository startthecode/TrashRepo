"use client";
import { headingActionButton } from "@/app/types/components/Button";
import React, { useState } from "react";
import Button from "./Button";
import { Filters } from "./Filters";

interface Props {
  buttons?: headingActionButton;
  children?: React.ReactNode;
  renderType: "server" | "client";
  actions: (actionName: string) => Promise<any>;
  withFilter: boolean;
}

const FilterAndAction: React.FC<Props> = ({
  buttons,
  actions,
  renderType = "server",
  withFilter,
}) => {
  let [show, setShow] = useState(false);
  return (
    <>
      <div className="basis-6/12 flex justify-end">
        {buttons?.map(({ varient, text, name }) => (
          <Button
            key={name}
            type="submit"
            varient={varient}
            text={text}
            onClick={() => actions(name)}
          />
        ))}
        <Button
          varient="Primary"
          text={"filter"}
          onClick={() => setShow(!show)}
        />
      </div>
      <div className="basis-6/12">
        <Filters visibility={show} />
      </div>
    </>
  );
};

export default FilterAndAction;
