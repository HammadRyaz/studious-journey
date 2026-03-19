import * as yup from "yup";

export const emailSchema = yup.string()
    .when("age", {
        is: (age) => age >= 18,
        then: (schema) =>
            schema.required("Email is required").email("Invalid email enterd"),
        otherwise: (schema) => schema.notRequired(),
    })

