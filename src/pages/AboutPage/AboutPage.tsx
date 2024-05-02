import { Avatar, Button, Fade, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const AboutPage = (): JSX.Element => {
    const profileImageDimentions = "350px";
    const textStyle = {
        fontFamily: "Public Sans",
        fontWeight: "bold",
        fontSize: 64,
    };

    return (
        <div>
            <Grid container direction={"column"} justifyContent={"center"}>
                <Stack direction={"row"} alignItems={"center"} gap={8}>
                    <Stack>
                        <Avatar sx={{ width: profileImageDimentions, height: profileImageDimentions }} alt="Florin" src="/src/assets/images/Profile.png" />
                    </Stack>
                    <Stack direction={"column"} gap={2}>
                        <Typography style={textStyle}>Hi 👋</Typography>
                        <Stack direction={"row"} gap={2}>
                            <Typography style={textStyle}>I'm</Typography>
                            <Typography
                                style={textStyle}
                                sx={{
                                    background: "linear-gradient(to right, rgb(222, 91, 181), rgb(145, 70, 255))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Florin
                            </Typography>
                        </Stack>
                        <Typography style={textStyle}>Software Engineer</Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Outlet />
        </div>
    );
};

export default AboutPage;
