import { JSONSchema7 } from "json-schema";

export const ContactPageShema: JSONSchema7 = {
    type: "object",
    required: ["name", "email", "message"],
    properties: {
        name: {
            type: "string",
        },
        email: {
            type: "string",
        },
        message: {
            type: "string",
        },
    },
};
