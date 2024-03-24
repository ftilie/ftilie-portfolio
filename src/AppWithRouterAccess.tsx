import { NavLink, Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useLocation, useNavigate } from "react-router-dom";
import { lazy, useEffect, useRef } from "react";
import { Box, Button, Divider, Stack, Theme, useTheme } from "@mui/material";
import GlobalErrorBoundary from "~/components/GlobalErrorBoundary/GlobalErrorBoundary";

const RootLayout = lazy(() => import("~/layouts/RootLayout"));
const AboutPage = lazy(() => import("~/pages/AboutPage/AboutPage"));

const headerMenuLinks = [
    { label: "About", to: "/about" },
    { label: "Experience", to: "/experience" },
    { label: "Contact", to: "/contact" },
] as const;

export const navLinkStyle = ({ isActive, theme }: { isActive: boolean; theme: Theme }): { textDecoration: string; color: string } => {
    return {
        textDecoration: "none",
        color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
    };
};

const RootNavLinks = (): JSX.Element => {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const prevPathname = useRef(location.pathname);

    useEffect(() => {
        if (prevPathname.current !== location.pathname) {
            prevPathname.current = location.pathname;
        }
    }, [location]);

    return (
        <>
            {headerMenuLinks.map(({ label, to }) => (
                <>
                    {label === "Contact" ? (
                        <Box display="flex" alignItems="center">
                            <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 3, marginLeft: 12 }} />
                            <Box ml={12} key={to}>
                                <NavLink key={to} style={({ isActive }) => navLinkStyle({ isActive, theme })} to={to} onClick={() => navigate(to)}>
                                    <Button size="large" id={label} variant="text" sx={{ width: "100%", color: "inherit" }}>
                                        <Stack direction={"row"} gap={1}>
                                            {label}
                                        </Stack>
                                    </Button>
                                </NavLink>
                            </Box>
                        </Box>
                    ) : (
                        <Box ml={4} key={to}>
                            <NavLink key={to} style={({ isActive }) => navLinkStyle({ isActive, theme })} to={to} onClick={() => navigate(to)}>
                                <Button size="large" id={label} variant="text" sx={{ width: "100%", color: "inherit" }}>
                                    <Stack direction={"row"} gap={1}>
                                        {label}
                                    </Stack>
                                </Button>
                            </NavLink>
                        </Box>
                    )}
                </>
            ))}
        </>
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            //TODO: remove
            {/* <Route
                path="authorization-code/callback"
                Component={() => {
                    return (
                        <SecurityWrapper>
                            <LoginCallback />
                        </SecurityWrapper>
                    );
                }}
            /> */}
            <Route
                path="/"
                Component={() => {
                    return <RootLayout />;
                }}
                errorElement={<GlobalErrorBoundary />}
                handle={{
                    headerMenu: () => <RootNavLinks />,
                }}
            >
                <Route index element={<Navigate to="/about" />} />
                <Route path="about" element={<AboutPage />} />

                <Route path="experience" element={<AboutPage />} />
            </Route>
        </>
    )
);

const AppWithRouterAccess = (): JSX.Element => {
    return <RouterProvider router={router} />;
};

export default AppWithRouterAccess;
