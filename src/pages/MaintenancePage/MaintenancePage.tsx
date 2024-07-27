import { Grid, IconButton, Stack, Typography, useTheme } from "@mui/material";
import "./MaintenancePage.css";
import { Construction, Engineering, SquareFoot } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { DarkThemeLightPurpleAccentColor } from "~/utils/Theme";

const MaintenancePage = (): JSX.Element => {
    const theme = useTheme();
    const location = useLocation();
    const fullURL = `${window.location.origin}${location.pathname}${location.search}`;

    const LinkedInProfile = "https://www.linkedin.com/in/florin-tilie/";

    return (
        <div className="boundaryContainer">
            <Grid container spacing={0} direction={"column"}>
                <Stack direction={"column"} display={"flex"} alignItems={"center"} justifyContent={"center"} style={{ height: "80vh" }}>
                    <Stack>
                        <IconButton disabled>
                            <Construction fontSize="large" sx={{ width: "15vw", height: "15vw" }} />
                            <Engineering fontSize="large" sx={{ width: "15vw", height: "15vw" }} />
                            <SquareFoot fontSize="large" sx={{ width: "15vw", height: "15vw" }} />
                        </IconButton>
                    </Stack>
                    <Stack direction={"column"} maxWidth={"45vw"} gap={2}>
                        <Stack direction={"row"}>
                            <Stack direction={"column"} gap={0}>
                                <Typography variant="h1">Under maintenance</Typography>
                                <Typography variant="h3">{fullURL}</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction={"column"} gap={0}>
                            <Typography variant="h5" color={theme.palette.grey[500]} style={{ textAlign: "justify", wordWrap: "break-word" }}>
                                This page is currently under maintenance and will be back online as soon as possible. In the meantime, for any inquiries, please reach out via{" "}
                                <a href={LinkedInProfile} target="_blank" style={{ color: DarkThemeLightPurpleAccentColor }}>
                                    LinkedIn
                                </a>
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>
        </div>
    );
};

export default MaintenancePage;
