import * as yup from "yup"

/*
  - 1 number
  - 1 uppercase letter
  - 1 lowercase letter
  - 1 special character
  - 8-16 characters
*/
export const loginSchema = yup.object().shape({
  username: yup
    .number("Username must be a number")
    .moreThan(99999, "Username must be 6 digits")
    .required("Username is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
})
