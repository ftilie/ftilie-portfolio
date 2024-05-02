import { useEffect, useState } from "react";
import { Avatar, Box, Button, Fade, Stack } from "@mui/material";
import { DarkThemeHeaderColor } from "~/utils/Theme";
import { useMatches } from "react-router-dom";

const Header = (): JSX.Element => {
    const matches = useMatches();

    const skills = ["C#", "C/C++", ".NET Framework", "TypeScript", "Node.js", "React Framework", "Python"];

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

    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [transition, setTrantition] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTrantition(false);

            setTimeout(() => {
                setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
                setTrantition(true);
            }, 500);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const headerLogo = (
        <Stack direction="row" alignItems="center" justifyContent="flex-start">
            <Box ml={1}>
                <Avatar alt="Florin" src="/src/assets/images/Profile.JPG" />
            </Box>
            <Box ml={4}>
                <Stack direction={"row"}>
                    <Stack>
                        <Button size="large" disabled variant="text" sx={{ width: "100%", color: "inherit" }}>
                            {`Software Engineer |`}
                        </Button>
                    </Stack>
                    <Stack>
                        <Fade in={transition}>
                            <Button size="large" disabled variant="text" sx={{ width: "100%", color: "inherit" }}>
                                {`${skills[currentSkillIndex]}`}
                            </Button>
                        </Fade>
                    </Stack>
                </Stack>
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
