import { Suspense } from "react";
import AppWithRouterAccess from "./AppWithRouterAccess";
import { muiTheme } from "~/utils/MuiTheme";
import { ThemeProvider } from "@mui/material";

function App(): JSX.Element {
    return (
        <ThemeProvider theme={muiTheme}>
            <Suspense fallback={<></>}>
                <AppWithRouterAccess />
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
