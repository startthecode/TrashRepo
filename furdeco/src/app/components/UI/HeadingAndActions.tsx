'use client';
import {
  buttonVarients,
  headingActionButton,
} from "@/app/types/components/Button";
import React, { HTMLElementType } from "react";
import Button from "./Button";

interface Props {
  heading: string;
  HeadingElement?: HTMLElementType;
  buttons?: headingActionButton;
  children?: React.ReactNode;
}

const HeadingAndActions: React.FC<Props> = ({
  heading,
  buttons,
  HeadingElement = "h1",
  children,
}) => {
  return (
    <div className="flex justify-between items-center flex-wrap">
      <HeadingElement className=" basis-4/12 text-xl font-bold">
        {heading}
      </HeadingElement>
      {children}
    </div>
  );
};

export default HeadingAndActions;
