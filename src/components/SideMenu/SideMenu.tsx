import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Button, Link, Stack } from "@mui/material";
import { DarkThemeLightGrayAccentColor, DarkThemeSideMenuColor } from "~/utils/Theme";

const SideMenu = (props: any): JSX.Element => {
    const githubLink = "https://github.com/ftilie";
    const linkedInLink = "https://www.linkedin.com/in/florin-tilie/";

    return (
        <Stack sx={{ backgroundColor: DarkThemeSideMenuColor }} display={"flex"} alignItems={"center"}>
            <Stack gap={2} justifyContent={"flex-end"} height={"100%"} sx={{ backgroundColor: DarkThemeSideMenuColor, overflow: "auto" }}>
                {/* <Link href={githubLink} underline={"none"} rel={"noopener noreferrer"} target={"_blank"}>
                    <Button disabled size={"large"} id={"label"} variant={"text"} sx={{ width: "100%" }}>
                        <Box>
                            <Stack direction="row" gap={1}>
                                <GitHub fontSize={"large"} sx={{ color: DarkThemeLightGrayAccentColor }} />
                            </Stack>
                        </Box>
                    </Button>
                </Link> */}
                <Link href={linkedInLink} underline={"none"} rel={"noopener noreferrer"} target={"_blank"}>
                    <Button
                        size={"large"}
                        id={"label"}
                        variant={"text"}
                        sx={{
                            width: "100%",
                            color: DarkThemeLightGrayAccentColor,
                            "&:hover": {
                                color: "#ffffff",
                            },
                        }}
                    >
                        <Box>
                            <Stack direction="row" gap={1}>
                                <LinkedIn fontSize={"large"} />
                            </Stack>
                        </Box>
                    </Button>
                </Link>
            </Stack>
        </Stack>
    );
};

export default SideMenu;
