import * as yup from "yup";
export const addEmployeeSchema = yup.object({
    profilePic: yup.string().required('this is required').length(10,'this is required'),
    employeeID: yup.string().required('this is required'),
    mamberid: yup.string().required('this is required'),
    preferedName: yup.string().required('this is required'),
    firstName: yup.string().required('this is required'),
    lastName: yup.string().required('this is required'),
    personalEmail: yup.string().required('this is required').email('this is required'),
    contactNumber: yup.string().required('this is required').matches(/^[0-9]{10}$/,'this is required'),
    employeeContract: yup.mixed().required('this is required'),
  })    