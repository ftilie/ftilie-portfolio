import { NavLink, Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useLocation, useNavigate } from "react-router-dom";
import { lazy, useEffect, useRef } from "react";
import { Box, Button, Divider, Stack, Theme, useMediaQuery, useTheme } from "@mui/material";
import GlobalErrorBoundary from "~/components/GlobalErrorBoundary/GlobalErrorBoundary";
import MaintenancePage from "./pages/MaintenancePage/MaintenancePage";
import IconLookup from "~/utils/IconLookup";

const RootLayout = lazy(() => import("~/layouts/RootLayout"));
const AboutPage = lazy(() => import("~/pages/AboutPage/AboutPage"));

const headerMenuLinks = [
    { label: "About", to: "/about", icon: "Home", divider: false },
    { label: "Experience", to: "/experience", icon: "Article", divider: false },
    { label: "Contact", to: "/contact", icon: "AlternateEmail", divider: true },
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

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        if (prevPathname.current !== location.pathname) {
            prevPathname.current = location.pathname;
        }
    }, [location]);

    return (
        <>
            {headerMenuLinks.map(({ label, to, icon, divider }, id) => (
                <div key={id}>
                    <Box display="flex" alignItems="center">
                        {divider && <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 3, marginLeft: "4vw" }} />}
                        <Box ml={divider ? "4vw" : "0vw"} key={to}>
                            <NavLink key={to} style={({ isActive }) => navLinkStyle({ isActive, theme })} to={to} onClick={() => navigate(to)}>
                                {({ isActive }) => (
                                    <Button size={"large"} id={label} variant={"text"} sx={{ width: "100%", color: isActive ? theme.palette.primary.main : theme.palette.text.primary }}>
                                        <Stack direction="row" gap={1}>
                                            {isSmallScreen ? (
                                                <IconLookup icon={icon} />
                                            ) : (
                                                <Button variant={"text"} startIcon={<IconLookup icon={icon} />} sx={{ color: isActive ? theme.palette.primary.main : theme.palette.text.primary }}>
                                                    {label}
                                                </Button>
                                            )}
                                        </Stack>
                                    </Button>
                                )}
                            </NavLink>
                        </Box>
                    </Box>
                </div>
            ))}
        </>
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={<RootLayout />}
                errorElement={<GlobalErrorBoundary />}
                handle={{
                    headerMenu: () => <RootNavLinks />,
                }}
            >
                <Route index element={<Navigate to="/about" />} />

                {/* <Route path="about" element={<AboutPage />} /> */}
                <Route path="about" element={<MaintenancePage />} />

                {/* <Route path="experience" element={<></>} /> */}
                <Route path="experience" element={<MaintenancePage />} />

                {/* <Route path="contact" element={<></>} /> */}
                <Route path="contact" element={<MaintenancePage />} />
            </Route>
        </>
    )
);

const AppWithRouterAccess = (): JSX.Element => {
    return <RouterProvider router={router} />;
};

export default AppWithRouterAccess;
