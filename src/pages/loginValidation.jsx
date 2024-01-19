
import * as Yup from 'yup'

export const loginValidation = Yup.object({
    email: Yup.string().email("Please enter valid email").required("Please enter your emial"),
    password: Yup.string().min(6).required("Please enter your password")
})