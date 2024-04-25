import * as yup from 'yup'

export const userSchema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(8).required(),
});