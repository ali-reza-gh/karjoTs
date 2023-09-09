import * as yup from "yup";

export const userSchema = yup.object().shape({
    email: yup.string()
        .email("please provide a valid email address")
        .required("email address is required"),
    password: yup
        .string()
        .min(6)
        .max(20)
        .required("password is required"),
    remember: yup
        .boolean()

})
