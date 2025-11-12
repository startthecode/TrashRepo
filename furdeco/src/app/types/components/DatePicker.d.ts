import { DatePickerProps } from "react-datepicker";
import {
  ControllerFieldState,
  ControllerRenderProps,
  ErrorOption,
  Field,
  FieldErrors,
} from "react-hook-form";

export interface DatePickerC extends DatePickerProps {
  errors?: string;
}
