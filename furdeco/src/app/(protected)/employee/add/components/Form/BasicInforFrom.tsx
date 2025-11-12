"use client";

import { childFormProps } from "@/app/types/CreateEmployeeForm";
import React from "react";
import { Input } from "@headlessui/react";
import { labelHolder } from "@/app/const/labelHolder";

const BasicInforFrom: React.FC<childFormProps> = ({
  register,
  control,
  error,
}) => {

  return (
    <div className="flex flex-wrap gap-0">
      <div className="basis-3/12 mb-2 px-1">
        <Input
          {...register("mamberid")}
          disabled
          placeholder={labelHolder.memberId}
          className="border-2 border-black/20 p-2 w-full"
        />
      </div>
      <div className="basis-3/12 mb-2 px-1">
        <Input
          {...register("employeeID")}
          placeholder={labelHolder.employeeID}
          className="border-2 border-black/20 p-2  w-full"
        />
        {error.employeeID?.message}
      </div>
      <div className="basis-3/12 mb-2 px-1">
        <Input
          {...register("preferedName")}
          placeholder={labelHolder.preferedName}
          className="border-2 border-black/20 p-2  w-full"
        />
      </div>
      <div className="basis-3/12 mb-2 px-1">
        <Input
          {...register("firstName")}
          placeholder={labelHolder.firstName}
          className="border-2 border-black/20 p-2  w-full"
        />
      </div>
      <div className="basis-3/12 mb-2 px-1">
        <Input
          {...register("lastName")}
          placeholder={labelHolder.lastName}
          className="border-2 border-black/20 p-2  w-full"
        />
      </div>
      <div className="basis-3/12 mb-2 px-1">
        <Input
          {...register("personalEmail")}
          placeholder={labelHolder.personalEmail}
          className="border-2 border-black/20 p-2  w-full"
        />
      </div>

      <div className="basis-3/12 mb-2 px-1">
        <Input
          {...register("contactNumber")}
          placeholder={labelHolder.contactNumber}
          className="border-2 border-black/20 p-2  w-full"
        />
      </div>

      <div className="basis-3/12 mb-2 px-1">
        <Input
          {...register("employeeContract")}
          placeholder={labelHolder.employeeContract}
          className="border-2 border-black/20 p-2  w-full"
        />
      </div>

    </div>
  );
};

export default BasicInforFrom;
