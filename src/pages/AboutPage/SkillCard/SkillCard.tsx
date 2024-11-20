import { Box, Grid, Stack, Tooltip, Typography, Zoom } from "@mui/material";
import Card from "~/components/Card/Card";
import InfoChip from "~/components/InfoChip/InfoChip";
import { SkillEnum } from "~/utils/Enums";
import { DarkThemeLightGrayAccentColor, WhiteBackgroundColor } from "~/utils/Theme";
import { CSSProperties, useState } from "react";
import { Skill } from "~/utils/Types";
import { cppSkill, csharpSkill, databaseSkill, pythonSkill, typescriptSkill } from "~/utils/Constants";

const getSkill = (skill: SkillEnum): Skill => {
    switch (skill) {
        case SkillEnum.Csharp:
            return csharpSkill;
        case SkillEnum.Typescript:
            return typescriptSkill;
        case SkillEnum.Database:
            return databaseSkill;
        case SkillEnum.Python:
            return pythonSkill;
        case SkillEnum.Cpp:
            return cppSkill;
    }
};

const styleOverrides: CSSProperties = { maxWidth: "500px", cursor: "default", display: "flex", alignItems: "center" };

/* Skill card width is set to 350px so in order to accomodate the rendering of all substituteBoxes on smaller screens 
the icon size had to be adjusted*/
const ICON_SIZE = 60;

type SkillCardProps = {
    skill: SkillEnum;
};

const SkillCard = ({ skill }: SkillCardProps): JSX.Element => {
    const [isHovered, setIsHovered] = useState(false);
    const [infoChipText, setInfoChipText] = useState(getSkill(skill).tooltip);
    const [isInfoChipUpdating, setIsInfoChipUpdating] = useState(false);

    const handleImageHover = (text: string) => {
        setIsInfoChipUpdating(true);
        setTimeout(() => {
            setInfoChipText(text);
            setIsInfoChipUpdating(false);
        }, 200);
    };

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
        <Box padding={2} width={"100%"} maxWidth={"500px"}>
            <Box onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} style={{ display: "flex", justifyContent: "center" }}>
                <Card isInteractable styleOverrides={styleOverrides}>
                    <Grid container style={{ height: "100%", width: "100%" }}>
                        <Grid item xs={12} container alignItems={"center"} padding={2} gap={4} style={{ height: "100%" }}>
                            <Grid
                                item
                                xs={12}
                                display={"flex"}
                                justifyContent={"center"}
                                style={{
                                    height: "50%",
                                    width: `${(1 + (getSkill(skill)?.additionalIconPaths?.length ?? 0)) * 100}px`,
                                }}
                                alignItems={"center"}
                            >
                                <Stack direction={"row"} style={{ backgroundColor: "inherit" }}>
                                    {/* To help center the main icon when the card is not selected */}
                                    {getSkill(skill).additionalIconPaths?.map((value, index) => <Box key={index}>{substituteBox}</Box>)}

                                    {/* Not yet sold on the tooltips */}
                                    {/* <Tooltip title={getSkill(skill).tooltip}> */}
                                    <Box
                                        component="img"
                                        src={getSkill(skill).iconPath}
                                        alt="skill"
                                        style={{
                                            width: ICON_SIZE,
                                            height: ICON_SIZE,
                                            paddingRight: (getSkill(skill).additionalIconPaths?.length ?? 0) > 0 && isHovered ? 20 : 0,
                                        }}
                                    />
                                    {/* </Tooltip> */}

                                    {getSkill(skill).additionalIconPaths?.map((value, index) =>
                                        !isHovered ? (
                                            <Box key={index}>{substituteBox}</Box>
                                        ) : (
                                            <Zoom key={index} in={isHovered} style={{ transitionDelay: isHovered ? `${250 + index * 100}ms` : "0ms" }}>
                                                <Box
                                                    component="img"
                                                    src={value.path}
                                                    alt="skill"
                                                    onMouseEnter={() => handleImageHover(value.tooltip)}
                                                    onMouseLeave={() => handleImageHover(getSkill(skill).tooltip)}
                                                    style={{
                                                        width: ICON_SIZE,
                                                        height: ICON_SIZE,
                                                        /* We prefer using padding instead of margin here to include the the added area
                                                        in the same bounding box that triggers the onEnter/onLeave changes */
                                                        paddingRight: (getSkill(skill).additionalIconPaths?.length ?? 0) !== index + 1 && isHovered ? 20 : 0,
                                                    }}
                                                />
                                            </Zoom>
                                        )
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} display={"flex"} justifyContent={"center"} style={{ height: "20%" }}>
                                <Box
                                    style={{
                                        transition: "opacity 0.5s, transform 0.5s",
                                        opacity: isInfoChipUpdating ? 0 : 1,
                                        transform: isInfoChipUpdating ? "scale(0.8)" : "scale(1)",
                                    }}
                                >
                                    <InfoChip text={infoChipText} isActive={isHovered} />
                                </Box>
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
