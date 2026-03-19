import * as yup from "yup"

export const passwordSchema = yup.string().when("age", {
    is: (age) => age >= 18,
    then: (schema) =>
        schema
            .required("Password is required")
            .min(6, "password minimum 3 or greater "),
    otherwise: (schema) => schema.notRequired(),
})
