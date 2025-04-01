import { ChevronRight, Clear, Close, Mail, Send } from "@mui/icons-material";
import { Avatar, Button, Chip, Grid, IconButton, InputAdornment, Snackbar, SnackbarCloseReason, Stack, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Fragment, useState } from "react";
import InfoChip from "~/components/InfoChip/InfoChip";
import { HEADER_HEIGHT } from "~/utils/Constants";
import { DarkThemePurpleAccentColor } from "~/utils/Theme";

const FIELD_WIDTH = 400;
const FIELD_MIN_WIDTH = 300;
const AVATAR_SIZE = 100;

const ContactPage = (): JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
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
            <Grid item direction={"column"} display={"flex"} justifyContent={"start"} alignItems={"start"} gap={2} style={{ width: 2 * FIELD_WIDTH }}>
                <Grid item xs={12}>
                    <Chip variant="messageBubble" label="Hi there!👋" />
                </Grid>
                <Grid item xs={12}>
                    <Chip variant="messageBubble" label="I'd love to hear from you! Leave me a message below." style={{ textWrap: "wrap" }} />
                </Grid>
            </Grid>
        </Grid>
    );

    const nameField = (
        <TextField
            id="name-field"
            label="Full name"
            placeholder="e.g. John Doe"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
            InputProps={{
                endAdornment: name && (
                    <InputAdornment position="end">
                        <Clear style={{ cursor: "pointer" }} onClick={() => setName("")} />
                    </InputAdornment>
                ),
            }}
        />
    );

    const emailField = (
        <TextField
            id="email-field"
            label="Email"
            placeholder="jdoe@example.com"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            InputProps={{
                endAdornment: email && (
                    <InputAdornment position="end">
                        <Clear style={{ cursor: "pointer" }} onClick={() => setEmail("")} />
                    </InputAdornment>
                ),
            }}
        />
    );

    const messageField = (
        <TextField id="message-field" placeholder="e.g. Hi there! I'd like to get in touch with you." variant="outlined" multiline rows={8} fullWidth value={message} onChange={(event) => setMessage(event.target.value)} />
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
                <Grid item container xs={12} spacing={4} direction={isSmallScreen ? "column" : "row"} alignItems={"center"} justifyContent={"center"} style={{ flexWrap: isSmallScreen ? "wrap" : "nowrap" }}>
                    <Grid item xs={isSmallScreen ? 12 : 6} style={isSmallScreen ? { width: "100%" } : { minWidth: FIELD_MIN_WIDTH, maxWidth: FIELD_WIDTH }}>
                        {nameField}
                    </Grid>
                    <Grid item xs={isSmallScreen ? 12 : 6} style={isSmallScreen ? { width: "100%" } : { minWidth: FIELD_MIN_WIDTH, maxWidth: FIELD_WIDTH }}>
                        {emailField}
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ minWidth: FIELD_MIN_WIDTH, maxWidth: 2 * FIELD_WIDTH }}>
                    {messageField}
                </Grid>

                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Button
                        variant="animated"
                        onClick={() => {
                            setName("");
                            setEmail("");
                            setMessage("");
                            handleClick();
                        }}
                    >
                        <Mail />
                        <Typography padding={2}>Send</Typography>
                    </Button>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message="Note archived" action={action} />
        </Stack>
    );
};

export default ContactPage;
