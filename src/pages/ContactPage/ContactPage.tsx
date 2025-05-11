import { AddCircleOutline, AttachFile, CheckCircleOutline, Close, Mail } from "@mui/icons-material";
import { Avatar, Badge, Box, Button, Chip, Fade, Grid, Grow, IconButton, Snackbar, SnackbarCloseReason, SnackbarContent, Stack, Typography, useMediaQuery, useTheme, Zoom } from "@mui/material";
import { Fragment, useState } from "react";
import { EMAIL_JS_PUBLIC_KEY, EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, GOFILE_GET_SERVER_URL, HEADER_HEIGHT } from "~/utils/Constants";
import { DarkThemeGrayAccentColor, DarkThemeHoveredCardColor, DarkThemeLightGrayAccentColor, DarkThemeLightPurpleAccentColor, DarkThemePurpleAccentColor, RedAccentColor, WhiteBackgroundColor } from "~/utils/Theme";
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
const BOX_SIZE = 40;

const ContactPageForm = generateForm<any, any, ContactPageFormData>();

const ContactPage = (): JSX.Element => {
    const [notification, setNotification] = useState(false);
    const [hasConfirmation, setHasConfirmation] = useState(false);
    const [formData, setFormData] = useState<ContactPageFormData | undefined>({
        name: "",
        email: "",
        message: "",
    } as ContactPageFormData);
    const [attachment, setAttachment] = useState<File | null>(null);
    const [hasSubmissionError, setHasSubmissionError] = useState<boolean>(false);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setAttachment(file);
        }
    };

    const handleRemoveFile = () => {
        setAttachment(null);
    };

    const getUploadServer = async () => {
        const response = await fetch(GOFILE_GET_SERVER_URL);
        const data = await response.json();
        return data.data.servers[0].name;
    };

    const uploadToGofile = async (file: File) => {
        const server = await getUploadServer();
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(`https://${server}.gofile.io/uploadfile`, {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        if (result.status === "ok") {
            return result.data.downloadPage;
        } else {
            throw new Error("Upload failed");
        }
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === "clickaway") {
            return;
        }

        setNotification(false);
    };

    const reSendMessage = () => {
        setHasConfirmation(false);
        setHasSubmissionError(false);
        setFormData({ name: "", email: "", message: "" } as ContactPageFormData);
        setAttachment(null);
        setNotification(false);
        setIsProcessing(false);
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
            setHasConfirmation(true);
            setIsProcessing(false);
        } catch (error) {
            setHasSubmissionError(true);
            setHasConfirmation(false);
            setIsProcessing(false);
        }
    };

    const handleFormChange = (event: IChangeEvent<ContactPageFormData | undefined>) => {
        setFormData(event.formData);
        if (!event.formData) {
            return;
        }
    };

    const onSubmit = async ({ formData }: any) => {
        setIsProcessing(true);
        try {
            if (attachment) {
                const downloadLink = await uploadToGofile(attachment);
                await sendEmail(formData.name, formData.email, `${formData.message} \n\nAttachment: ${downloadLink}`);
            } else {
                await sendEmail(formData.name, formData.email, formData.message);
            }
        } catch (e: any) {
            setHasSubmissionError(true);
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
        <Grid container spacing={4} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={16} gap={8}>
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
            {hasConfirmation && (
                <Grow in={hasConfirmation} style={{ transformOrigin: "bottom right" }} {...(hasConfirmation ? { timeout: 1000 } : {})}>
                    <Grid item container direction={"column"} display={"flex"} justifyContent={"end"} alignItems={"end"} gap={2} style={{ width: 2 * FIELD_WIDTH }}>
                        {formData && (
                            <Grid item xs={12}>
                                <Typography variant="h4" style={{ color: DarkThemeLightGrayAccentColor }}>
                                    {formData.name} ({formData.email})
                                </Typography>
                            </Grid>
                        )}
                        <Grid item xs={12}>
                            <Chip variant="messageBubble" label={formData?.message} style={{ textWrap: "wrap", backgroundColor: DarkThemeGrayAccentColor }} />
                        </Grid>
                        {attachment && (
                            <Grid item xs={12}>
                                <Typography variant="h5" style={{ color: DarkThemeLightGrayAccentColor }}>
                                    {attachment.name}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </Grow>
            )}
        </Grid>
    );

    const confirmation = (
        <Grid container spacing={4} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={4} gap={4}>
            <Grid item container xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Fade in={hasConfirmation} timeout={500}>
                        <CheckCircleOutline
                            sx={{
                                color: WhiteBackgroundColor,
                                maxWidth: AVATAR_SIZE,
                                maxHeight: AVATAR_SIZE,
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                            }}
                        />
                    </Fade>
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

    const submissionError = (
        <Grid container spacing={4} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={4} gap={4}>
            <Grid item container xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Fade in={hasSubmissionError} timeout={500}>
                        <AddCircleOutline
                            sx={{
                                color: RedAccentColor,
                                maxWidth: AVATAR_SIZE,
                                maxHeight: AVATAR_SIZE,
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                transform: "rotate(45deg)",
                            }}
                        />
                    </Fade>
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Stack>
                        <Typography variant="h5">
                            Something went wrong while sending your message.&nbsp;
                            <Button variant="text" onClick={reSendMessage} sx={{ padding: 0, minWidth: 0 }}>
                                <Typography variant="h5" color={DarkThemePurpleAccentColor}>
                                    Try again.
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
            showErrorList={false}
        >
            {attachment ? (
                <Box height={BOX_SIZE}>
                    <Grid item xs={12} display={"flex"} justifyContent={"space-between"} alignItems={"center"} paddingTop={2} gap={8}>
                        <Typography variant="h5" sx={{ color: DarkThemeLightGrayAccentColor }}>
                            {attachment?.name}
                        </Typography>
                        <IconButton
                            disabled={isProcessing}
                            component="label"
                            sx={{
                                borderRadius: "50%",
                            }}
                            onClick={handleRemoveFile}
                        >
                            <Close fontSize="small" sx={{ color: DarkThemeLightGrayAccentColor }} />
                        </IconButton>
                    </Grid>
                </Box>
            ) : (
                <Box height={BOX_SIZE} />
            )}
            <Grid item xs={12} display={"flex"} justifyContent={"center"} paddingTop={16} paddingBottom={16} gap={8}>
                <Box width={BOX_SIZE} justifyContent={"start"} display={"flex"} alignItems={"center"}>
                    <IconButton
                        disabled={isProcessing}
                        component="label"
                        sx={{
                            borderRadius: "50%",
                            "&:hover": {
                                backgroundColor: DarkThemeGrayAccentColor,
                            },
                        }}
                    >
                        <Badge badgeContent={attachment ? 1 : 0} color="primary">
                            <AttachFile />
                        </Badge>

                        <input type="file" hidden onChange={handleFileSelection} />
                    </IconButton>
                </Box>
                <Button type="submit" variant="animated" disabled={isProcessing}>
                    <Mail sx={{ color: isProcessing ? DarkThemeLightPurpleAccentColor : WhiteBackgroundColor }} />
                    <Typography padding={2} color={isProcessing ? DarkThemeLightPurpleAccentColor : WhiteBackgroundColor}>
                        Send
                    </Typography>
                </Button>

                <Box width={BOX_SIZE} />
            </Grid>
        </ContactPageForm>
    );

    return (
        <Stack
            display={"flex"}
            alignItems={"center"}
            sx={{
                height: `calc(100vh - ${HEADER_HEIGHT})`,
            }}
        >
            <Grid container spacing={4} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={4} style={{ width: "100%" }}>
                <Grid item xs={12}>
                    {greeting}
                </Grid>
                {hasSubmissionError && (
                    <Grid item xs={12} style={{ minWidth: FIELD_MIN_WIDTH, maxWidth: 2 * FIELD_WIDTH }}>
                        {submissionError}
                    </Grid>
                )}
                {hasConfirmation && (
                    <Grid item xs={12} style={{ minWidth: FIELD_MIN_WIDTH, maxWidth: 2 * FIELD_WIDTH }}>
                        {confirmation}
                    </Grid>
                )}
                {!hasConfirmation && !hasSubmissionError ? (
                    <Grid item xs={12} style={{ minWidth: FIELD_MIN_WIDTH, maxWidth: 2 * FIELD_WIDTH }}>
                        {contactPageForm}
                    </Grid>
                ) : null}
            </Grid>
            <Snackbar open={notification} autoHideDuration={5000} onClose={handleClose}>
                <SnackbarContent message="Message sent!" action={action} style={{ background: DarkThemeHoveredCardColor, color: WhiteBackgroundColor }} />
            </Snackbar>
        </Stack>
    );
};

export default ContactPage;
