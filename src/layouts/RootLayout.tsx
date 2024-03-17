import { Outlet, useLocation } from "react-router-dom";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "~/App.css";
import { DarkThemeBackgroundColor, DarkThemePurpleAccentColor } from "~/utils/Theme";

const RootLayout = (): JSX.Element => {
    const headerOffset = "71px";
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);

    return (
        <div>
            <Paper>
                <Stack direction="column" spacing={0}>
                    <Paper sx={{ width: "100%", overflowY: "auto" }}>
                        <Box height="100px" width="100px" color={DarkThemeBackgroundColor} />
                        <Box height="100px" width="100px" color={DarkThemePurpleAccentColor} />
                    </Paper>
                    <Typography>Test</Typography>
                    {/* <Header /> */}
                </Stack>
            </Paper>
        </div>
    );
};

export default RootLayout;
