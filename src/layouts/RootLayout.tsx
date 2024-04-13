import { Outlet } from "react-router-dom";
import { Container, Paper, Stack } from "@mui/material";
import "~/App.css";
import Header from "~/components/Header/Header";

const RootLayout = (): JSX.Element => {
    const headerOffset = "71px";

    return (
        <div>
            <Paper>
                <Stack direction="column" spacing={0}>
                    <Header />
                    <Stack direction="row" spacing={0} sx={{ height: `calc(100vh - ${headerOffset})` }} alignItems="stretch">
                        <Container maxWidth={false} sx={{ padding: 8 }}>
                            <Outlet />
                        </Container>
                    </Stack>
                </Stack>
            </Paper>
        </div>
    );
};

export default RootLayout;
