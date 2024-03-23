import { Outlet, useLocation } from "react-router-dom";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
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
                        {/* <SideMenu />
                        <Paper sx={{ width: "100%", overflowY: "auto" }}>
                            <OutdatedAgentBanner />
                            <OutdatedAgentModal
                                icon={
                                    <Box alignSelf={"center"}>
                                        <WarningTwoTone color="error" fontSize="medium" />
                                    </Box>
                                }
                            />
                            <Container sx={{ padding: 8 }}>
                                <Outlet />
                            </Container>
                            <AgentDrawer open={drawerState.isAgentDrawerOpen} />
                            <PlaytestDrawer open={drawerState.isPlaytestDrawerOpen} />
                            <PlaytestSubscriptionDrawer open={drawerState.isPlaytestSubscriptionDrawerOpen} />
                        </Paper> */}
                        <Typography color={"#6d2aff"}>Test</Typography>
                            <Typography color={"#9146ff"}>Test</Typography>
                    </Stack>
                </Stack>
            </Paper>
        </div>
    );
};

export default RootLayout;
