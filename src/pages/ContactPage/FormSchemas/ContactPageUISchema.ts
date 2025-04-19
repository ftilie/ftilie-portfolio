export const contactPageUISchema: any = {
    name: {
        "ui:widget": "Input",
        "ui:options": {
            dividerIcon: "AlternateEmail",
            dividerTitle: "Get in touch!",
            widgetTitle: "Full Name",
            gridSize: 6,
        },
    },
    email: {
        "ui:widget": "Input",
        "ui:options": {
            widgetTitle: "Email",
            gridSize: 6,
        },
    },
    message: {
        "ui:widget": "TextArea",
        "ui:options": {
            widgetTitle: "Message",
            gridSize: 12,
            multiline: true,
            rows: 4,
        },
    },
};
