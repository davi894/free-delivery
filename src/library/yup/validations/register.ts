import * as yup from "yup";

const registerValidation = yup.object().shape({
    name: yup
        .string()
        .required(),
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .required()
        .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
        .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
        .matches(/(\d)/, "Deve conter ao menos um número")
        .matches(/(\W)|_/, "Deve conter um caracter especial")
        .required("Preenchimento da senha obrigatório")
        .min(8, "no mínimo 8 caracteres"),
    confirmPassword: yup
        .string()
        .required()
        .oneOf([yup.ref("password")], "senhas não iguais"),
});

export default registerValidation;