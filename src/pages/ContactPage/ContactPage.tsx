import { CheckCircleOutline, Close, Mail } from "@mui/icons-material";
import { Avatar, Button, Chip, Grid, IconButton, Snackbar, SnackbarCloseReason, SnackbarContent, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Fragment, useState } from "react";
import { EMAIL_JS_PUBLIC_KEY, EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, HEADER_HEIGHT } from "~/utils/Constants";
import { DarkThemeGrayAccentColor, DarkThemeHoveredCardColor, DarkThemePurpleAccentColor, WhiteBackgroundColor } from "~/utils/Theme";
import emailjs from "@emailjs/browser";
import { InputWrapper } from "~/components/FormWidgets/InputWrapper";
import { TextAreaWrapper } from "~/components/FormWidgets/TextAreaWrapper";
import { ObjectFieldTemplate } from "~/components/FormWidgets/ObjectFieldTemplate";
import { ContactPageShema } from "./FormSchemas/ContactPageSchema";
import { contactPageUISchema } from "./FormSchemas/ContactPageUISchema";
import { ContactPageFormData } from "~/models/ContactPageFormData";
import { IChangeEvent } from "@rjsf/core";
import { generateForm } from "@rjsf/mui";
import { FormValidation } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

type EmailParams = {
    name: string;
    email: string;
    message: string;
};

const FIELD_WIDTH = 400;
const FIELD_MIN_WIDTH = 300;
const AVATAR_SIZE = 100;

const ContactPageForm = generateForm<any, any, ContactPageFormData>();

const ContactPage = (): JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [notification, setNotification] = useState(false);
    const [hasConfirmation, setHasConfirmation] = useState(false);
    const [formData, setFormData] = useState<ContactPageFormData | undefined>({
        name: "",
        email: "",
        message: "",
    });
    const [hasErrorDialog, setHasErrorDialog] = useState<boolean>(false);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === "clickaway") {
            return;
        }

        setNotification(false);
    };

    const reSendMessage = () => {
        setHasConfirmation(false);
        setFormData({ name: "", email: "", message: "" } as ContactPageFormData);
    };

    const sendEmail = async (name: string, email: string, message: string): Promise<void> => {
        const templateParams: EmailParams = {
            name: name,
            email: email,
            message: message,
        };
        try {
            await emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams, EMAIL_JS_PUBLIC_KEY);
            setNotification(true);
        } catch (error) {
            setHasErrorDialog(true);
        }
        setFormData({
            name: "",
            email: "",
            message: "",
        } as ContactPageFormData);
    };

    const handleFormChange = (event: IChangeEvent<ContactPageFormData | undefined>) => {
        setFormData(event.formData);
        if (!event.formData) {
            return;
        }
    };

    const onSubmit = async ({ formData }: any) => {
        try {
            await sendEmail(formData.name, formData.email, formData.message);
            setHasConfirmation(true);
        } catch (e: any) {
            document.getElementById("contactPageFormContainer")!.scrollIntoView({ behavior: "smooth" });
        }
    };

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const contactPageFormValidator = (formData: any, errors: FormValidation<any>) => {
        if (!formData) {
            return errors;
        }

        if (!formData.name) {
            errors.name?.addError("Please specify your full name.");
        } else if (!(formData.name.length > 2)) {
            errors.name?.addError("Your name must be at least 3 characters long.");
        }

        if (!formData.email) {
            errors.email?.addError("Please specify your email address.");
        } else if (!isValidEmail(formData.email)) {
            errors.email?.addError("Please enter a valid email address.");
        }

        if (!formData.message) {
            errors.message?.addError("Please enter your message.");
        } else if (!(formData.message.length > 2)) {
            errors.message?.addError("Your message must be at least 3 characters long.");
        }

        return errors;
    };

    const action = (
        <Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <Close fontSize="small" />
            </IconButton>
        </Fragment>
    );

    const greeting = (
        <Grid container spacing={4} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={4} gap={4}>
            <Grid item container xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Avatar
                        alt="Profile Avatar"
                        src="/assets/images/Profile.png"
                        sx={{
                            maxWidth: AVATAR_SIZE,
                            maxHeight: AVATAR_SIZE,
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                        }}
                    />
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Typography variant="h4">Florin Tilie</Typography>
                </Grid>
            </Grid>
            <Grid item container direction={"column"} display={"flex"} justifyContent={"start"} alignItems={"start"} gap={2} style={{ width: 2 * FIELD_WIDTH }}>
                <Grid item xs={12}>
                    <Chip variant="messageBubble" label="Hi there!👋" />
                </Grid>
                <Grid item xs={12}>
                    <Chip variant="messageBubble" label="I'd love to hear from you! Leave me a message below." style={{ textWrap: "wrap" }} />
                </Grid>
            </Grid>
        </Grid>
    );

    const confirmation = (
        <Grid container spacing={4} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={4} gap={4}>
            <Grid item container xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <CheckCircleOutline
                        sx={{
                            color: DarkThemeGrayAccentColor,
                            maxWidth: AVATAR_SIZE,
                            maxHeight: AVATAR_SIZE,
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                        }}
                    />
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Typography variant="h5">Thank you for reaching out! I appreciate your interest in my work.</Typography>
                </Grid>

                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Stack>
                        <Typography variant="h5">
                            I will get back to you as soon as possible — or you can send me&nbsp;
                            <Button variant="text" onClick={reSendMessage} sx={{ padding: 0, minWidth: 0 }}>
                                <Typography variant="h5" color={DarkThemePurpleAccentColor}>
                                    another message.
                                </Typography>
                            </Button>
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    );

    const templates = {
        ObjectFieldTemplate: ObjectFieldTemplate,
    };

    const widgets = {
        Input: InputWrapper,
        TextArea: TextAreaWrapper,
    };

    const contactPageForm = (
        <ContactPageForm
            id={"contactPageForm"}
            templates={templates}
            widgets={widgets}
            schema={ContactPageShema}
            uiSchema={contactPageUISchema}
            onSubmit={onSubmit}
            formData={formData}
            formContext={formData}
            onChange={handleFormChange}
            validator={validator}
            customValidate={contactPageFormValidator}
            onError={() => setHasErrorDialog(true)}
            showErrorList={false}
        >
            <Grid item xs={12} display={"flex"} justifyContent={"center"} padding={8}>
                <Button variant="animated" type="submit">
                    <Mail />
                    <Typography padding={2}>Send</Typography>
                </Button>
            </Grid>
        </ContactPageForm>
    );

    return (
        <Stack
            display={"flex"}
            // justifyContent={"center"}
            alignItems={"center"}
            sx={{
                height: `calc(100vh - ${HEADER_HEIGHT})`,
            }}
        >
            <Grid container spacing={4} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={4} style={{ width: "100%" }}>
                <Grid item xs={12}>
                    {greeting}
                </Grid>

                {!hasConfirmation ? (
                    <Grid item xs={12} style={{ minWidth: FIELD_MIN_WIDTH, maxWidth: 2 * FIELD_WIDTH }}>
                        {contactPageForm}
                    </Grid>
                ) : (
                    <Grid item xs={12} style={{ minWidth: FIELD_MIN_WIDTH, maxWidth: 2 * FIELD_WIDTH }}>
                        {confirmation}
                    </Grid>
                )}
            </Grid>
            <Snackbar open={notification} autoHideDuration={6000} onClose={handleClose}>
                <SnackbarContent message="Message sent!" action={action} style={{ background: DarkThemeHoveredCardColor, color: WhiteBackgroundColor }} />
            </Snackbar>
        </Stack>
    );
};

export default ContactPage;
