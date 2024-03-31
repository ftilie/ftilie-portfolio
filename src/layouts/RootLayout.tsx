import { Outlet, useLocation } from "react-router-dom";
import { Box, Button, Container, Divider, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "~/App.css";
import { DarkThemeBackgroundColor, DarkThemeHeaderColor, DarkThemePurpleAccentColor } from "~/utils/Theme";
import { red } from "@mui/material/colors";
import Header from "~/components/Header/Header";

const RootLayout = (): JSX.Element => {
    const headerOffset = "71px";
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);

    return (
        <div>
            <Paper>
                <Stack direction="column" spacing={0}>
                    <Header />
                    <Stack direction="row" spacing={0} sx={{ height: `calc(100vh - ${headerOffset})` }} alignItems="stretch">
                        <Container sx={{ padding: 8 }}>
                            <Outlet />
                        </Container>
                    </Stack>
                </Stack>
            </Paper>
        </div>
    );
};

export default RootLayout;
