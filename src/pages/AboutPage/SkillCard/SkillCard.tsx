import { Box, Grid, Slide, Typography, Zoom } from "@mui/material";
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
                        <Grid item xs={12} display={"flex"} justifyContent={"center"} style={{ height: "50%" }} gap={8} alignItems={"center"}>
                            {isHovered && (
                                <Zoom in={isHovered} style={{ transitionDelay: "150ms" }}>
                                    <Box component="img" src={getSkill(skill).iconPath} alt={"skill"} style={{ width: 80, height: 80 }} />
                                </Zoom>
                            )}

                            <Box component="img" src={getSkill(skill).iconPath} alt={"skill"} style={{ width: 80, height: 80 }} />

                            {isHovered && (
                                <Zoom in={isHovered} style={{ transitionDelay: "250ms" }}>
                                    <Box component="img" src={getSkill(skill).iconPath} alt={"skill"} style={{ width: 80, height: 80 }} />
                                </Zoom>
                            )}
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
