import { GitHub, LinkedIn } from "@mui/icons-material";
import { Link, Stack } from "@mui/material";
import { DarkThemeLightGrayAccentColor, DarkThemeSideMenuColor } from "~/utils/Theme";

const SideMenu = (props: any): JSX.Element => {
    const sideMenuWidth = "35px";
    const githubLink = "https://github.com/ftilie";
    const linkedInLink = "https://www.linkedin.com/in/florin-tilie/";
    return (
        <Stack sx={{ backgroundColor: DarkThemeSideMenuColor, width: sideMenuWidth }} display={"flex"} alignItems={"center"} spacing={4} padding={4}>
            <Stack gap={4} justifyContent={"flex-end"} height={"100%"} sx={{ backgroundColor: DarkThemeSideMenuColor, overflow: "auto" }}>
                <Link href={githubLink} underline="none" rel="noopener noreferrer" target="_blank">
                    <GitHub fontSize={"large"} sx={{ color: DarkThemeLightGrayAccentColor }} />
                </Link>
                <Link href={linkedInLink} underline="none" rel="noopener noreferrer" target="_blank">
                    <LinkedIn fontSize={"large"} sx={{ color: DarkThemeLightGrayAccentColor }} />
                </Link>
            </Stack>
        </Stack>
    );
};

export default SideMenu;
