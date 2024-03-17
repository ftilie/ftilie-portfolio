import { Outlet, useLocation } from "react-router-dom";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "~/App.css";
import { DarkThemeBackgroundColor, DarkThemePurpleAccentColor } from "~/utils/Theme";
import { red } from "@mui/material/colors";

const RootLayout = (): JSX.Element => {
    const headerOffset = "71px";
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);

    return (
        <div>
            <Paper>
                <Stack direction="column" spacing={0}>
                    <Paper sx={{ width: "100%", overflowY: "auto" }}>
                        <Paper sx={{ width: "100px", height: "100px", overflowY: "auto", backgroundColor: DarkThemeBackgroundColor }}>
                            <Typography color={DarkThemePurpleAccentColor}>Test</Typography>
                            <Typography color={"#6d2aff"}>Test</Typography>
                            <Typography color={"#9146ff"}>Test</Typography>

                            <Typography fontSize={16} color={DarkThemePurpleAccentColor}>{"<FLORIN />"}</Typography>
                        </Paper>
                        <Paper sx={{ width: "100px", height: "100px", overflowY: "auto", backgroundColor: DarkThemePurpleAccentColor }} />
                        <Paper sx={{ width: "100px", height: "100px", overflowY: "auto", backgroundColor: "#6d2aff" }} />
                        <Paper sx={{ width: "100px", height: "100px", overflowY: "auto", backgroundColor: "#9146ff" }} />
                    </Paper>
                    <Typography>Test</Typography>
                    {/* <Header /> */}
                </Stack>
            </Paper>
        </div>
    );
};

export default RootLayout;
