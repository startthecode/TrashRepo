import {
  Control,
  ErrorOption,
  FieldErrors,
  RegisterOptions,
  UseFormRegister,
  UseFormStateProps,
} from "react-hook-form";


export interface BasicInforForm {
  profilePic: any;
  employeeID: string;
  mamberid:string;
  preferedName: string;
  firstName: string;
  lastName: string;
  personalEmail: string;
  contactNumber: string;
  employeeContract: any;
}

export interface IfromState extends BasicInforForm {}

export interface childFormProps {
  register: UseFormRegister<IfromState>;
  control: any;
  error: any;
}
