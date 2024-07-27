import { Outlet } from "react-router-dom";
import { Container, Paper, Stack } from "@mui/material";
import "~/App.css";
import Header from "~/components/Header/Header";
import SideMenu from "~/components/SideMenu/SideMenu";

const RootLayout = (): JSX.Element => {
    const headerOffset = "6vh";

    return (
        <div>
            <Paper>
                <Stack direction="column">
                    <Header />
                    <Stack direction="row" sx={{ height: `calc(100vh - ${headerOffset})` }} alignItems="stretch">
                        <SideMenu />
                        <Paper elevation={0} sx={{ width: "100%", overflowY: "auto" }}>
                            <Container maxWidth={false} sx={{ padding: 8 }}>
                                <Outlet />
                            </Container>
                        </Paper>
                    </Stack>
                </Stack>
            </Paper>
        </div>
    );
};

export default RootLayout;
