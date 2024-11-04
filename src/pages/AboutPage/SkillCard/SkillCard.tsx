import { Box, Grid, Stack, Typography, Zoom } from "@mui/material";
import Card from "~/components/Card/Card";
import InfoChip from "~/components/InfoChip/InfoChip";
import { cppIcon, csharpIcon, mongoIcon, pythonIcon, typescriptIcon } from "~/utils/Icons";
import { Skill } from "~/utils/Enums";
import { cppDescription, csharpDescription, mongoDescription, pythonDescription, typescriptDescription } from "~/utils/Constants";
import { DarkThemeLightGrayAccentColor, WhiteBackgroundColor } from "~/utils/Theme";
import { CSSProperties, useState } from "react";

const getSkill = (skill: Skill): { iconPath: string; description: string; additionalIconPaths?: string[]; extendedDescription?: string } => {
    switch (skill) {
        case Skill.Csharp:
            return { iconPath: csharpIcon, description: csharpDescription };
        case Skill.Typescript:
            return { iconPath: typescriptIcon, description: typescriptDescription };
        case Skill.Database:
            return { iconPath: mongoIcon, description: mongoDescription };
        case Skill.Python:
            return { iconPath: pythonIcon, description: pythonDescription };
        case Skill.Cpp:
            return { iconPath: cppIcon, description: cppDescription };
    }
};

const styleOverrides: CSSProperties = { maxWidth: "500px", cursor: "default", display: "flex", alignItems: "center", height: "250px" };

/* Skill card width is set to 350px so in order to accomodate the rendering of all substituteBoxes on smaller screens 
the icon size had to be adjusted*/
const ICON_SIZE = 55;

type SkillCardProps = {
    skill: Skill;
};

const SkillCard = ({ skill }: SkillCardProps): JSX.Element => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = (value: boolean) => {
        setIsHovered(value);
    };

    const substituteBox = (
        <Box
            style={{
                width: isHovered ? 0 : ICON_SIZE,
                height: isHovered ? 0 : ICON_SIZE,
                transition: "width 0.35s ease",
                overflow: "hidden",
            }}
        ></Box>
    );

    return (
        <Box padding={2} height={250}>
            <Box onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} style={{ display: "flex", justifyContent: "center" }}>
                <Card isInteractable styleOverrides={styleOverrides}>
                    <Grid container style={{ height: "100%" }}>
                        <Grid item xs={12} container alignItems={"center"} spacing={4} style={{ height: "100%" }}>
                            <Grid item xs={12} display={"flex"} justifyContent={"center"} style={{ height: "50%" }} alignItems={"center"}>
                                <Stack direction={"row"} style={{ backgroundColor: "inherit", display: "flex", alignItems: "center", height: "80px" }}>
                                    {substituteBox}
                                    {substituteBox}

                                    <Box
                                        component="img"
                                        src={getSkill(skill).iconPath}
                                        alt={"skill"}
                                        style={{
                                            width: isHovered ? ICON_SIZE : 80,
                                            height: isHovered ? ICON_SIZE : 80,
                                            marginRight: isHovered ? 20 : 0,
                                            transition: "transform 0.35s ease",
                                        }}
                                    />

                                    {!isHovered ? (
                                        substituteBox
                                    ) : (
                                        <Zoom in={isHovered} style={{ transitionDelay: isHovered ? "250ms" : "0ms" }}>
                                            <Box component="img" src={getSkill(skill).iconPath} alt={"skill"} style={{ width: ICON_SIZE, height: ICON_SIZE, marginRight: isHovered ? 20 : 0 }} />
                                        </Zoom>
                                    )}
                                    {!isHovered ? (
                                        substituteBox
                                    ) : (
                                        <Zoom in={isHovered} style={{ transitionDelay: isHovered ? "350ms" : "0ms" }}>
                                            <Box component="img" src={getSkill(skill).iconPath} alt={"skill"} style={{ width: ICON_SIZE, height: ICON_SIZE }} />
                                        </Zoom>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} display={"flex"} justifyContent={"center"} style={{ height: "20%" }}>
                                <InfoChip text={skill} isActive={isHovered} />
                            </Grid>
                            <Grid item xs={12} display={"flex"} justifyContent={"center"} textAlign={"center"} style={{ height: "30%" }}>
                                <Typography variant="h4" style={{ color: isHovered ? WhiteBackgroundColor : DarkThemeLightGrayAccentColor }}>
                                    {getSkill(skill).description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </Box>
    );
};

export default SkillCard;
