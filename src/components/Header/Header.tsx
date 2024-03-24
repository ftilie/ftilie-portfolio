import { useEffect, useRef, useState } from "react";
import { Avatar, Box, Chip, Divider, Stack, Typography } from "@mui/material";
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
            <Box ml={1}>
                {/* <Typography variant="h1">Florin</Typography> */}
                <Avatar alt="Florin" src="/src/assets/images/Profile.jpg" />
            </Box>
        </Stack>
    );

    const headerNavigation = (
        <Stack direction="row" alignItems="center" justifyContent="flex-start" marginLeft={10}>
            {headerMenu}
        </Stack>
    );

    return (
        <>
            <Stack sx={{ backgroundColor: DarkThemeHeaderColor, zIndex: 1, height: "40px" }} p={4}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" height="100%">
                    <Stack direction="row" alignItems="center" justifyContent="left" height="100%">
                        {headerLogo}
                    </Stack>
                    {headerNavigation}
                </Stack>
            </Stack>
            {/* <Stack sx={{ zIndex: 1 }} paddingLeft={4} paddingRight={4}>
                <Divider />
            </Stack> */}
        </>
    );
};

export default Header;
