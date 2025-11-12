"use client";

import { useForm } from "react-hook-form";
import AddressDetails from "./Form/AddressDetails";
import BasicInforFrom from "./Form/BasicInforFrom";
import HierarchyInformation from "./Form/HierarchyInformation";
import PayslipAccount from "./Form/PayslipAccount";
import PersonalDetails from "./Form/PersonalDetails";
import WorkInformation from "./Form/WorkInformation";
import { IfromState } from "@/app/types/CreateEmployeeForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addEmployeeSchema } from "@/app/form_schema/addEmployee";
import { useEffect } from "react";
import { employeCode } from "../actions";

const Forms = () => {
  const {
    handleSubmit:submit,
    formState: { errors },
    watch,
    setValue,
    setError,
    control,
    register,
    getValues
  } = useForm<IfromState>({
    resolver:yupResolver(addEmployeeSchema),
    mode: "onChange",
    defaultValues: {
      mamberid: ".....",
    },
  });


  useEffect(() => {
    async function test() {
    const response = await employeCode<{code:string}>();
    if(response){
      setValue("mamberid", response?.code);
    }else{
      setValue("mamberid", '');
    }
    }
    test();
  }, []);

  async function handleSubmit(data:IfromState){
    let formData = new FormData();
    formData.append('profilePic',data.profilePic);
    formData.append('EmployeeCode',data.employeeID);
    formData.append('MemberId',data.mamberid);
    formData.append('PreferredName',data.preferedName);
    formData.append('FirstName',data.firstName);
    formData.append('LastName',data.lastName);
    formData.append('PersonalEmailAddress',data.personalEmail);
    formData.append('PersonalMobileNumber',data.contactNumber);
    formData.append('EmployeeContract',data.employeeContract);

    console.log(formData);
  }


  if(getValues("mamberid") == "") return 'Something Webt wrong';

  return (
    <form onSubmit={submit(handleSubmit)}>
      <BasicInforFrom register={register} control={control} error={errors} />
      <WorkInformation register={register} control={control} error={errors} />
      <HierarchyInformation
        register={register}
        control={control}
        error={errors}
      />
      <PersonalDetails register={register} control={control} error={errors} />
      <AddressDetails register={register} control={control} error={errors} />
      <PayslipAccount register={register} control={control} error={errors} />
    </form>
  );
};

export default Forms;
