import { GitHub, LinkedIn } from "@mui/icons-material";
import { Link, Stack } from "@mui/material";
import { DarkThemeLightGrayAccentColor, DarkThemeSideMenuColor } from "~/utils/Theme";

const SideMenu = (props: any): JSX.Element => {
    const sideMenuWidth = "4vh";
    const imageDimentions = "4vh";
    const githubLink = "https://github.com/ftilie";
    const linkedInLink = "https://www.linkedin.com/in/florin-tilie/";
    return (
        <Stack sx={{ backgroundColor: DarkThemeSideMenuColor, width: sideMenuWidth }} display={"flex"} alignItems={"center"} spacing={4} padding={"1vh"}>
            <Stack gap={4} justifyContent={"flex-end"} height={"100%"} sx={{ backgroundColor: DarkThemeSideMenuColor, overflow: "auto" }}>
                <Link href={githubLink} underline="none" rel="noopener noreferrer" target="_blank">
                    <GitHub sx={{ height: imageDimentions, width: imageDimentions, color: DarkThemeLightGrayAccentColor }} />
                </Link>
                <Link href={linkedInLink} underline="none" rel="noopener noreferrer" target="_blank">
                    <LinkedIn sx={{ height: imageDimentions, width: imageDimentions, color: DarkThemeLightGrayAccentColor }} />
                </Link>
            </Stack>
        </Stack>
    );
};

export default SideMenu;
