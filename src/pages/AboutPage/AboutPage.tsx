import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { DarkThemeGrayAccentColor, WhiteBackgroundColor } from "~/utils/Theme";
import SkillCard from "./SkillCard/SkillCard";
import { Skill } from "~/utils/Enums";

const whiteTextStyle: React.CSSProperties = {
    fontFamily: "Public Sans",
    fontWeight: "bold",
    fontSize: 32,
    color: WhiteBackgroundColor,
};

const grayTextStyle: React.CSSProperties = {
    fontFamily: "Public Sans",
    fontWeight: "bold",
    color: DarkThemeGrayAccentColor,
    userSelect: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
};

const AboutPage = (): JSX.Element => {
    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isXlScreen = useMediaQuery(theme.breakpoints.up('xl'));
    const pageHeading = (
        <Grid container justifyContent={"center"} direction={"row"} alignItems={"center"} spacing={2}>
            {isSmScreen ? (
                <></>
            ) : (
                <Grid item container xs={6} direction={"column"}>
                    <Grid item xs={6} container direction={"row"} display={"flex"} justifyContent={"end"}>
                        <Stack direction={"row"} spacing={2}>
                            <Box
                                component="span"
                                style={{
                                    fontSize: 64,
                                    transform: "scale(1.4, 1.4)",
                                    textAlign: "center",
                                    whiteSpace: "nowrap",
                                    marginRight: 4,
                                }}
                            >
                                <Typography style={grayTextStyle} fontSize={64}>
                                    C#
                                </Typography>
                            </Box>
                            <Stack direction={"column"}>
                                <Typography style={grayTextStyle} fontSize={32} display={"flex"} justifyContent={"end"}>
                                    Type
                                </Typography>
                                <Typography style={grayTextStyle} fontSize={32} display={"flex"} justifyContent={"end"}>
                                    Script
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} container direction={"row"} display={"flex"} justifyContent={"end"}>
                        <Stack direction={"row"} spacing={2}>
                            <Typography style={grayTextStyle} fontSize={32}>
                                Python
                            </Typography>
                            <Typography style={grayTextStyle} fontSize={32}>
                                C/C++
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            )}
            <Grid item xs={isSmScreen ? 12 : 6} container direction={"column"}>
                <Typography style={whiteTextStyle}>Hi 👋</Typography>
                <Stack direction={"row"} gap={2}>
                    <Typography style={whiteTextStyle}>I'm</Typography>
                    <Typography
                        style={whiteTextStyle}
                        sx={{
                            background: "linear-gradient(to right, rgb(222, 91, 181), rgb(145, 70, 255))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Florin
                    </Typography>
                </Stack>
                <Typography style={whiteTextStyle}>Software Engineer</Typography>
            </Grid>
        </Grid>
    );

    const skills = (
        <Grid container justifyContent={"center"} alignItems={"center"} padding={8} gap={8}>
            <Grid item xs={12} container spacing={4}>
                <Grid item display={"flex"} justifyContent={isXlScreen ? "end": "center"} xs={12} sm={12} md={4} lg={4} xl={4}>
                    <SkillCard skill={Skill.Csharp} />
                </Grid>
                <Grid item display={"flex"} justifyContent={"center"} xs={12} sm={12} md={4} lg={4} xl={4}>
                    <SkillCard skill={Skill.Typescript} />
                </Grid>
                <Grid item display={"flex"} justifyContent={isXlScreen ? "start": "center"} xs={12} sm={12} md={4} lg={4} xl={4}>
                    <SkillCard skill={Skill.Database} />
                </Grid>
            </Grid>
            <Grid item xs={12} container justifyContent={"center"} spacing={4}>
                <Grid item display={"flex"} justifyContent={"center"} xs={12} sm={12} md={4} lg={4} xl={4}>
                    <SkillCard skill={Skill.Python} />
                </Grid>
                <Grid item display={"flex"} justifyContent={"center"} xs={12} sm={12} md={4} lg={4} xl={4}>
                    <SkillCard skill={Skill.Cpp} />
                </Grid>
            </Grid>
        </Grid>
    );

    return (
        <Stack gap={16}>
            {pageHeading}
            {skills}
            <Outlet />
        </Stack>
    );
};

export default AboutPage;
