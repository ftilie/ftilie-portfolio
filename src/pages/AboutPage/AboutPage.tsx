import { Avatar, Button, Fade, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Card from "~/components/Card/Card";
import { csharpIcon } from "~/utils/Icons";
import { DarkThemeGrayAccentColor, WhiteBackgroundColor } from "~/utils/Theme";

const csharp = (
    <Grid container>
        <Grid item xs={12} container alignItems={"center"}>
            <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                <img src={csharpIcon} alt="C#" style={{ width: "8vw", height: "auto" }} />
            </Grid>
            <Grid item xs={4}>
                y
            </Grid>
            <Grid item xs={4}>
                z
            </Grid>
        </Grid>
    </Grid>
);

const AboutPage = (): JSX.Element => {
    const profileImageDimentions = "25vh";

    const whiteTextStyle = {
        fontFamily: "Public Sans",
        fontWeight: "bold",
        color: WhiteBackgroundColor,
    };

    const grayTextStyle = {
        fontFamily: "Public Sans",
        fontWeight: "bold",
        color: DarkThemeGrayAccentColor,
    };

    const pageHeading = (
        <Grid container justifyContent={"center"} direction={"row"} alignItems={"center"} spacing={2}>
            <Grid item xs={2} />
            <Grid item container xs={4} direction={"column"}>
                <Grid item xs={6} container direction={"row"} display={"flex"} justifyContent={"end"}>
                    <Stack direction={"row"} spacing={2}>
                        <Typography style={grayTextStyle} fontSize={"8vw"}>
                            C#
                        </Typography>
                        <Stack direction={"column"}>
                            <Typography style={grayTextStyle} fontSize={"4vw"} display={"flex"} justifyContent={"end"}>
                                Type
                            </Typography>
                            <Typography style={grayTextStyle} fontSize={"4vw"} display={"flex"} justifyContent={"end"}>
                                Script
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={6} container direction={"row"} display={"flex"} justifyContent={"end"}>
                    <Stack direction={"row"} spacing={2}>
                        <Typography style={grayTextStyle} fontSize={"4vw"}>
                            Python
                        </Typography>
                        <Typography style={grayTextStyle} fontSize={"4vw"}>
                            C/C++
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Grid item xs={6} container direction={"column"}>
                <Typography style={whiteTextStyle} fontSize={"4vw"}>
                    Hi 👋
                </Typography>
                <Stack direction={"row"} gap={2}>
                    <Typography style={whiteTextStyle} fontSize={"4vw"}>
                        I'm
                    </Typography>
                    <Typography
                        style={whiteTextStyle}
                        fontSize={"4vw"}
                        sx={{
                            background: "linear-gradient(to right, rgb(222, 91, 181), rgb(145, 70, 255))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Florin
                    </Typography>
                </Stack>
                <Typography style={whiteTextStyle} fontSize={"4vw"}>
                    Software Engineer
                </Typography>
            </Grid>
        </Grid>
    );

    const skills = (
        <Grid container justifyContent={"center"} alignItems={"center"} padding={12}>
            <Grid item xs={12} container>
                <Grid item xs={4}>
                    <Card isInteractable>{csharp}</Card>
                </Grid>
                <Grid item xs={4}>
                    <Card isInteractable>{csharp}</Card>
                </Grid>
                <Grid item xs={4}>
                    <Card isInteractable>{csharp}</Card>
                </Grid>
            </Grid>
            <Grid item xs={12} container justifyContent={"space-evenly"}>
                <Grid item xs={4}>
                    <Card isInteractable>{csharp}</Card>
                </Grid>
                <Grid item xs={4}>
                    <Card isInteractable>{csharp}</Card>
                </Grid>
            </Grid>
        </Grid>
    );

    return (
        <div>
            {pageHeading}
            {skills}
            <Outlet />
        </div>
    );
};

export default AboutPage;
