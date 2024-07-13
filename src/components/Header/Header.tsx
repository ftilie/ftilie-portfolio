import { Avatar, Box, Stack } from "@mui/material";
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
            <Box height={"4vh"} width={"4vh"}>
                <Avatar alt="Florin" src="\assets\images\Profile.png" sx={{ height: "4vh", width: "4vh" }} />
            </Box>
        </Stack>
    );

    const headerNavigation = (
        <Stack direction="row" alignItems="center" justifyContent="flex-start">
            {headerMenu}
        </Stack>
    );

    return (
        <>
            <Stack sx={{ backgroundColor: DarkThemeHeaderColor, zIndex: 1, height: "4vh", width: "95vw" }} padding={"1vh"}>
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
