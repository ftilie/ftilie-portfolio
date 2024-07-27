import { Avatar, Box, Button, Stack } from "@mui/material";
import { DarkThemeHeaderColor } from "~/utils/Theme";
import { useMatches } from "react-router-dom";

const Header = (): JSX.Element => {
    const matches = useMatches();

    const headerMenu = matches
        .filter((match: any) => Boolean(match.handle?.headerMenu))
        .map((match: any) => {
            const menu = match.handle.headerMenu(match.data);
            return (
                <Stack direction={"row"} key={match.id}>
                    {menu}
                </Stack>
            );
        });

    const headerLogo = (
        <Stack direction="row" alignItems="center" justifyContent="flex-start">
            <Button disabled size={"large"} id={"label"} variant={"text"} sx={{ width: "100%" }}>
                <Box>
                    <Stack direction="row" gap={1}>
                        <Avatar alt="Florin" src="\assets\images\Profile.png" />
                    </Stack>
                </Box>
            </Button>
        </Stack>
    );

    const headerNavigation = (
        <Stack direction="row" alignItems="center" justifyContent="flex-start">
            {headerMenu}
        </Stack>
    );

    return (
        <>
            <Stack sx={{ backgroundColor: DarkThemeHeaderColor, zIndex: 1, height: "6vh", width: "100vw" }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" justifyContent="left">
                        {headerLogo}
                    </Stack>
                    {headerNavigation}
                </Stack>
            </Stack>
        </>
    );
};

export default Header;
