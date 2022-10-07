import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(40)
    .required("Name is a required field"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is a required field"),
  services: yup.string().required(),
  phoneNumber: yup
    .string(/^[0-9][0-9 -]*$/, "Phone number must be integer")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number must be greater than 8 or equal to 8"
    ),
  how_you_find_us: yup.string().required(),
  message: yup.string(),
});
