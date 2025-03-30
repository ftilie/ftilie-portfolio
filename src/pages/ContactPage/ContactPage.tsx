import { Clear } from "@mui/icons-material";
import { Button, Grid, InputAdornment, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

const FIELD_WIDTH = 400;
const FIELD_MIN_WIDTH = 300;

const ContactPage = (): JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

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

    const messageField = <TextField id="message-field" placeholder="e.g. Hi there! I'd like to get in touch with you." variant="outlined" multiline rows={8} fullWidth onChange={(event) => setMessage(event.target.value)} />;

    return (
        <Grid container spacing={4} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={4}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center">
                    Contact
                </Typography>
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
        </Grid>
    );
};

export default ContactPage;
