
import * as Yup from 'yup'

export const signUpValidation = Yup.object({
    name: Yup.string().min(3).required("Please enter your name"),
    mobile:Yup.number().min(10).required("Please enter your mobile no"),
    email: Yup.string().email("Please enter valid email").required("Please enter your emial"),
    password: Yup.string().min(6).required("Please enter your password"),
    cpassword: Yup.string().oneOf([Yup.ref("password")], "Password not matched").required("Please confirm your password")
})


  