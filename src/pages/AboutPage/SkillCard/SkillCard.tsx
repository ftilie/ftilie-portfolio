import { Grid, Typography } from "@mui/material";
import Card from "~/components/Card/Card";
import InfoChip from "~/components/InfoChip/InfoChip";
import { cppIcon, csharpIcon, mongoIcon, pythonIcon, typescriptIcon } from "~/utils/Icons";
import { Skill } from "~/utils/Enums";
import { cppDescription, csharpDescription, mongoDescription, pythonDescription, typescriptDescription } from "~/utils/Constants";
import { DarkThemeLightGrayAccentColor, WhiteBackgroundColor } from "~/utils/Theme";
import { useState } from "react";

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

type SkillCardProps = {
    skill: Skill;
};

const SkillCard = ({ skill }: SkillCardProps): JSX.Element => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div onMouseEnter={handleHover} onMouseLeave={handleHover} style={{ height: "100%" }}>
            <Card isInteractable>
                <Grid container>
                    <Grid item xs={12} container alignItems={"center"} spacing={4}>
                        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                            <img src={getSkill(skill).iconPath} alt={"C#"} style={{ width: 80, height: "auto" }} />
                        </Grid>
                        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                            <InfoChip text={skill} isActive={isHovered} />
                        </Grid>
                        <Grid item xs={12} display={"flex"} justifyContent={"center"} textAlign={"center"}>
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
