import { Box, Grid, Stack, Typography, Zoom } from "@mui/material";
import Card from "~/components/Card/Card";
import InfoChip from "~/components/InfoChip/InfoChip";
import { cppIcon, csharpIcon, mongoIcon, pythonIcon, typescriptIcon } from "~/utils/Icons";
import { Skill } from "~/utils/Enums";
import { cppDescription, csharpDescription, mongoDescription, pythonDescription, typescriptDescription } from "~/utils/Constants";
import { DarkThemeLightGrayAccentColor, WhiteBackgroundColor } from "~/utils/Theme";
import { CSSProperties, useState } from "react";

const getSkill = (skill: Skill): { iconPath: string; description: string } => {
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

const styleOverrides: CSSProperties = { maxWidth: "500px", cursor: "default" };

type SkillCardProps = {
    skill: Skill;
};

const SkillCard = ({ skill }: SkillCardProps): JSX.Element => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div onMouseEnter={handleHover} onMouseLeave={handleHover} style={{ height: "100%", width: "500px", display: "flex", justifyContent: "center" }}>
            <Card isInteractable styleOverrides={styleOverrides}>
                <Grid container style={{ height: "100%" }}>
                    <Grid item xs={12} container alignItems={"center"} spacing={4} style={{ height: "100%" }}>
                        <Grid item xs={12} display={"flex"} justifyContent={"center"} style={{ height: "50%" }} alignItems={"center"}>
                            <Stack direction={"row"} style={{ backgroundColor: "inherit" }}>
                                <div
                                    style={{
                                        width: isHovered ? 0 : 80,
                                        height: isHovered ? 0 : 80,
                                        transition: "width 0.3s ease",
                                        overflow: "hidden",
                                    }}
                                ></div>

                                <Box
                                    component="img"
                                    src={getSkill(skill).iconPath}
                                    alt={"skill"}
                                    style={{
                                        width: 80,
                                        height: 80,
                                        marginRight: isHovered ? 20 : 0,
                                    }}
                                />

                                {!isHovered ? (
                                    <div
                                        style={{
                                            width: isHovered ? 0 : 80,
                                            height: isHovered ? 0 : 80,
                                            transition: "width 0.3s ease",
                                            overflow: "hidden",
                                        }}
                                    ></div>
                                ) : (
                                    <Zoom in={isHovered} style={{ transitionDelay: isHovered ? "250ms" : "0ms" }}>
                                        <Box component="img" src={getSkill(skill).iconPath} alt={"skill"} style={{ width: 80, height: 80 }} />
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
        </div>
    );
};

export default SkillCard;
