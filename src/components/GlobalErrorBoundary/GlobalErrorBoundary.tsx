import { Grid, IconButton, Stack, Typography, useTheme } from "@mui/material";
import "./GlobalErrorBoundary.css";
import { BugReport } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { DarkThemeLightPurpleAccentColor } from "~/utils/Theme";

const GlobalErrorBoundary = (): JSX.Element => {
    const theme = useTheme();
    const location = useLocation();
    const fullURL = `${window.location.origin}${location.pathname}${location.search}`;

    const LinkedInProfile = "https://www.linkedin.com/in/florin-tilie/";

    return (
        <div className="boundaryContainer">
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }}>
                <Stack direction={"row"} alignItems={"center"}>
                    <Stack>
                        <IconButton disabled>
                            <BugReport fontSize="large" sx={{ width: "200px", height: "200px" }} />
                        </IconButton>
                    </Stack>
                    <Stack direction={"column"} maxWidth={"500px"} gap={2}>
                        <Stack direction={"column"} gap={0}>
                            <Typography variant="h1">Unable to reach</Typography>
                            <Typography variant="h3">{fullURL}</Typography>
                        </Stack>
                        <Stack direction={"column"} gap={0}>
                            <Typography variant="h5" color={theme.palette.grey[500]} style={{ textAlign: "justify", wordWrap: "break-word" }}>
                                I admire your curious nature, it's what's brought you this far.
                            </Typography>
                            <Typography variant="h5" color={theme.palette.grey[500]} style={{ textAlign: "justify", wordWrap: "break-word" }}>
                                Consider this a strategically placed bug, just waiting to meet fellow curious minds like yours.{" "}
                                <a href={LinkedInProfile} target="_blank" style={{ color: DarkThemeLightPurpleAccentColor }}>
                                    Let's have a chat!
                                </a>
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>
        </div>
    );
};

export default GlobalErrorBoundary;
