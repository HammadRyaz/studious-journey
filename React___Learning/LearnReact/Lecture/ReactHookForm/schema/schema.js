import * as yup from "yup";
import { emailSchema } from "./email.schema";
import { passwordSchema } from './pass.schema';

export const formSchema = yup.object({
    age: yup.number().required("Age is required").min(18, "Minimum is 18 "),
    username: yup.string().when("age", {
        is: (age) => age >= 18,
        then: (schema) =>
            schema
                .required("Username is required")
                .min(3, "Username minimum 3 or greater ")
                .test("non-admin", "Admin not allow", (value) => value !== "admin")
                .trim()
                .lowercase(),
        otherwise: (schema) => schema.notRequired(),
    }),
    email: emailSchema,
    password: passwordSchema,
    confirmpassword: yup.string().when("age", {
        is: (age) => age >= 18,
        then: (schema) =>
            schema
                .required("Confirm Password is required")
                .oneOf([yup.ref("password")], "Password Not Match"),
        otherwise: (schema) => schema.notRequired(),
    }),
    agree: yup
        .array()
        .of(yup.string())
        .min(2, "Check Both For Register")
});
