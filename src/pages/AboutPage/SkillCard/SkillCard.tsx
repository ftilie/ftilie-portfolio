import { Box, Grid, Stack, Typography, Zoom } from "@mui/material";
import Card from "~/components/Card/Card";
import InfoChip from "~/components/InfoChip/InfoChip";
import { cIcon, cppIcon, csharpIcon, dotNetIcon, mongoIcon, protobufIcon, pythonIcon, pytorchIcon, reactIcon, sqlIcon, tanStackIcon, tensorflowIcon, typescriptIcon } from "~/utils/Icons";
import { Skill } from "~/utils/Enums";
import { cppDescription, csharpDescription, mongoDescription, pythonDescription, typescriptDescription } from "~/utils/Constants";
import { DarkThemeLightGrayAccentColor, WhiteBackgroundColor } from "~/utils/Theme";
import { CSSProperties, useState } from "react";

const getSkill = (skill: Skill): { iconPath: string; description: string; additionalIconPaths?: { path: string; tooltip: string }[]; extendedDescription?: string } => {
    switch (skill) {
        case Skill.Csharp:
            return {
                iconPath: csharpIcon,
                description: csharpDescription,
                additionalIconPaths: [
                    {
                        path: dotNetIcon,
                        tooltip: "dotNet",
                    },
                    {
                        path: protobufIcon,
                        tooltip: "Protobuf",
                    },
                ],
            };
        case Skill.Typescript:
            return {
                iconPath: typescriptIcon,
                description: typescriptDescription,
                additionalIconPaths: [
                    {
                        path: reactIcon,
                        tooltip: "React",
                    },
                    {
                        path: tanStackIcon,
                        tooltip: "TanStack",
                    },
                ],
            };
        case Skill.Database:
            return {
                iconPath: mongoIcon,
                description: mongoDescription,
                additionalIconPaths: [
                    {
                        path: sqlIcon,
                        tooltip: "SQL",
                    },
                ],
            };
        case Skill.Python:
            return {
                iconPath: pythonIcon,
                description: pythonDescription,
                additionalIconPaths: [
                    {
                        path: tensorflowIcon,
                        tooltip: "Tensorflow",
                    },
                    {
                        path: pytorchIcon,
                        tooltip: "Pytorch",
                    },
                ],
            };
        case Skill.Cpp:
            return {
                iconPath: cppIcon,
                description: cppDescription,
                additionalIconPaths: [
                    {
                        path: cIcon,
                        tooltip: "C",
                    },
                ],
            };
    }
};

const styleOverrides: CSSProperties = { maxWidth: "500px", cursor: "default", display: "flex", alignItems: "center", height: "250px" };

/* Skill card width is set to 350px so in order to accomodate the rendering of all substituteBoxes on smaller screens 
the icon size had to be adjusted*/
const ICON_SIZE = 60;

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
                                <Stack direction={"row"} style={{ backgroundColor: "inherit" }}>
                                    {getSkill(skill).additionalIconPaths?.map((value, index) => <Box key={index}>{substituteBox}</Box>)}

                                    <Box
                                        component="img"
                                        src={getSkill(skill).iconPath}
                                        alt="skill"
                                        style={{
                                            width: ICON_SIZE,
                                            height: ICON_SIZE,
                                            marginRight: (getSkill(skill).additionalIconPaths?.length ?? 0) > 0 && isHovered ? 20 : 0,
                                        }}
                                    />

                                    {getSkill(skill).additionalIconPaths?.map((value, index) =>
                                        !isHovered ? (
                                            <Box key={index}>{substituteBox}</Box>
                                        ) : (
                                            <Zoom key={index} in={isHovered} style={{ transitionDelay: isHovered ? `${250 + index * 100}ms` : "0ms" }}>
                                                <Box
                                                    component="img"
                                                    src={value.path}
                                                    alt="skill"
                                                    style={{
                                                        width: ICON_SIZE,
                                                        height: ICON_SIZE,
                                                        marginRight: (getSkill(skill).additionalIconPaths?.length ?? 0) !== index + 1 && isHovered ? 20 : 0,
                                                    }}
                                                />
                                            </Zoom>
                                        )
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
