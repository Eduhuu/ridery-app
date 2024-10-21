import * as Yup from "yup";

const yearRangeMessage = `El año del vehículo debe estar entre 1900 y ${new Date().getFullYear()}`;
const stateOptionsMessage = 'State debe de ser un valor entre "disponible" o "mantenimiento"';

const validateYear = Yup.number()
    .integer()
    .min(1900, yearRangeMessage)
    .max(new Date().getFullYear(), yearRangeMessage)

const validateState = Yup.string()
    .oneOf(['disponible', 'mantenimiento'], stateOptionsMessage);

export const vehicleSchema = Yup.object({
    brand: Yup.string().required("Marca es requerida."),
    model: Yup.string().required("Modelo es requerido"),
    year: validateYear.required("Año es requerido"),
    state: validateState
});

export const vehicleSchemaForPatch = Yup.object({
    // _id: Yup.string().required("No se pudo identificar el vehiculo."),
    brand: Yup.string(),
    model: Yup.string(),
    year: validateYear,
    state: validateState
});
