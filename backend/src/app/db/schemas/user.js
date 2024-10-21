import * as Yup from "yup"
export const userSchema = Yup.object({
    email: Yup.string()
        .required("El correo es un campo requerido.")
        .email("Correo invalido."),
    password: Yup.string()
        .required("La contraseña es un campo requerido.")
        .min(4),
});