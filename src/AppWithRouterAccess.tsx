import { NavLink, Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useLocation, useNavigate } from "react-router-dom";
import { lazy, useEffect, useRef } from "react";
import { Box, Button, Divider, Stack, Theme, useMediaQuery, useTheme } from "@mui/material";
import GlobalErrorBoundary from "~/components/GlobalErrorBoundary/GlobalErrorBoundary";
import IconLookup from "~/utils/IconLookup";

const RootLayout = lazy(() => import("~/layouts/RootLayout"));
const MaintenancePage = lazy(() => import("~/pages/MaintenancePage/MaintenancePage"));
const AboutPage = lazy(() => import("~/pages/AboutPage/AboutPage"));
const ExperiencePage = lazy(() => import("~/pages/ExperiencePage/ExperiencePage"));
const ContactPage = lazy(() => import("~/pages/ContactPage/ContactPage"));

const headerMenuLinks = [
    { label: "About", to: "/about", icon: "Home" },
    { label: "Experience", to: "/experience", icon: "Article" },
    { label: "Contact", to: "/contact", icon: "AlternateEmail" },
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
            {headerMenuLinks.map(({ label, to, icon }, id) => (
                <div key={id}>
                    <Box display="flex" alignItems="center">
                        <Box key={to}>
                            <NavLink key={to} style={({ isActive }) => navLinkStyle({ isActive, theme })} to={to} onClick={() => navigate(to)}>
                                {({ isActive }) => (
                                    <Button size="large" id={label} variant="text" sx={{ width: "100%", color: isActive ? theme.palette.primary.main : theme.palette.text.primary }}>
                                        <Box>
                                            <Stack direction="row" gap={1} alignItems="center" padding={2}>
                                                <IconLookup icon={icon} />
                                                {!isSmallScreen && label}
                                            </Stack>
                                            {isActive && <Divider flexItem sx={{ borderBottomWidth: 2, borderColor: theme.palette.primary.main }} />}
                                        </Box>
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
                <Route path="about" element={<AboutPage />} />
                <Route path="experience" element={<ExperiencePage />} />
                <Route path="contact" element={<ContactPage />} />
            </Route>
        </>
    )
);

const AppWithRouterAccess = (): JSX.Element => {
    return <RouterProvider router={router} />;
};

export default AppWithRouterAccess;
