import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("please provide a valid email address")
    .required("email address is required"),
  password: yup
    .string()
    .min(6, "password should have a minimum length of 6")
    .max(20, "password should have a maximum length of 20")
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")])
    .required("confirm password is required"),
  Type: yup
    .string()
    .oneOf(["Male", "Female", "Rather not say"])
    .required("gender is required"),
  toggle: yup.boolean().oneOf([true], "Please toggle accept"),
  remember: yup.boolean()
});