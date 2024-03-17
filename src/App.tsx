import { Suspense } from "react";
import AppWithRouterAccess from "./AppWithRouterAccess";
import { customMuiTheme } from "~/utils/Theme";
import { ThemeProvider } from "@mui/material";

function App(): JSX.Element {
    return (
        <ThemeProvider theme={customMuiTheme}>
            <Suspense fallback={<></>}>
                <AppWithRouterAccess />
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
