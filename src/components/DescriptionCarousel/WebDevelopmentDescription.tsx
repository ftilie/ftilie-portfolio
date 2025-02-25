import { Code, DesignServices } from "@mui/icons-material";
import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { DESCRIPTION_CARD_BACKGROUND_ICON, DESCRIPTION_CARD_HEIGHT, DESCRIPTION_CARD_MAX_WIDTH, DESCRIPTION_CARD_MIN_WIDTH, isMobile } from "~/utils/Constants";
import { mongoIcon, reactIcon, recoilIcon, tanStackIcon, typescriptIcon } from "~/utils/Icons";
import { DarkThemeHoveredCardColor, DarkThemeLightGrayAccentColor, WhiteBackgroundColor } from "~/utils/Theme";

const cardContainerStyles = {
    borderRadius: "20px",
    backgroundColor: DarkThemeHoveredCardColor,
    width: "100%",
    height: DESCRIPTION_CARD_HEIGHT,
};
const avatarGridItemStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
};

const recoilBadge = (
    <Box
        component="img"
        src={recoilIcon}
        alt="recoilBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "150px",
            height: "150px",
            transform: "rotate(60deg)",
            zIndex: 2,
            bottom: "-54px",
            right: "-40px",
        }}
    />
);

const firstReactBadge = (
    <Box
        component="img"
        src={reactIcon}
        alt="firstReactBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "100px",
            height: "100px",
            transform: "rotate(90deg)",
            zIndex: 1,
            bottom: "-27px",
            left: "55px",
        }}
    />
);

const secondReactBadge = (
    <Box
        component="img"
        src={reactIcon}
        alt="secondReactBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "50px",
            height: "50px",
            transform: "rotate(65deg)",
            zIndex: 1,
            bottom: "20px",
            left: "165px",
        }}
    />
);

const dotBadge = (
    <Box
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "18px",
            height: "18px",
            backgroundColor: "rgb(0, 216, 255)",
            borderRadius: "50%",
            zIndex: 3,
            bottom: "14px",
            left: "96px",
        }}
    />
);

const reactBadge = (
    <Box
        component="img"
        src={reactIcon}
        alt="reactBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "100px",
            height: "100px",
            transform: "rotate(20deg)",
            zIndex: 1,
            bottom: "49px",
            right: "-45px",
        }}
    />
);

const typescriptBadge = (
    <Box
        component="img"
        src={typescriptIcon}
        alt="typescriptBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "120px",
            height: "120px",
            transform: "rotate(330deg)",
            zIndex: 2,
            bottom: "-20px",
            left: "-20px",
        }}
    />
);

const firstMongoBadge = (
    <Box
        component="img"
        src={mongoIcon}
        alt="firstMongoBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "150px",
            height: "150px",
            transform: "rotate(190deg)",
            zIndex: 1,
            top: "15px",
            right: "-55px",
        }}
    />
);

const secondMongoBadge = (
    <Box
        component="img"
        src={mongoIcon}
        alt="secondMongoBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "100px",
            height: "100px",
            transform: "rotate(150deg)",
            zIndex: 1,
            top: "5px",
            right: "-75px",
        }}
    />
);

const thirdMongoBadge = (
    <Box
        component="img"
        src={mongoIcon}
        alt="thirdMongoBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "135px",
            height: "135px",
            transform: "rotate(285deg)",
            zIndex: 1,
            top: "-65px",
            right: "10px",
        }}
    />
);

const fourthMongoBadge = (
    <Box
        component="img"
        src={mongoIcon}
        alt="fourthMongoBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "50px",
            height: "50px",
            transform: "rotate(20deg)",
            zIndex: 1,
            top: "-70px",
            right: "-25px",
        }}
    />
);

const tanStackBadge = (
    <Box
        component="img"
        src={tanStackIcon}
        alt="tanStackBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "125px",
            height: "125px",
            transform: "rotate(190deg)",
            zIndex: 3,
            top: "-55px",
            right: "-50px",
        }}
    />
);

const WebDevelopmentDescription = (): JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Box sx={{ position: "relative", display: "inline-block", width: "100%", maxWidth: DESCRIPTION_CARD_MAX_WIDTH }}>
            {/* Top Left Corner Badge */}
            {/* Top Right Corner Badge */}
            {firstMongoBadge}
            {secondMongoBadge}
            {tanStackBadge}
            {thirdMongoBadge}
            {fourthMongoBadge}
            {/* Bottom Left Corner Badge */}
            {typescriptBadge}
            {firstReactBadge}
            {secondReactBadge}
            {dotBadge}
            {/* Bottom Right Corner Badge */}
            {recoilBadge}
            {reactBadge}

            <Box
                style={{
                    maxWidth: DESCRIPTION_CARD_MAX_WIDTH,
                    minWidth: DESCRIPTION_CARD_MIN_WIDTH,
                }}
            >
                <Grid container sx={{ ...cardContainerStyles, padding: 4, paddingLeft: 16, paddingRight: 16 }} alignItems="center" gap={16}>
                    {!isMobile && !isSmallScreen && (
                        <Grid item {...avatarGridItemStyles} sx={{ display: "flex", justifyContent: "start", alignItems: "end" }}>
                            <Code
                                sx={{
                                    color: DarkThemeLightGrayAccentColor,
                                    width: DESCRIPTION_CARD_BACKGROUND_ICON,
                                    height: DESCRIPTION_CARD_BACKGROUND_ICON,
                                    display: "flex",
                                    justifyContent: "start",
                                    alignItems: "end",
                                    overflow: "hidden",
                                }}
                            />
                        </Grid>
                    )}

                    <Grid
                        item
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%",
                            justifyContent: "space-between",
                            flex: 1,
                        }}
                    >
                        <Stack
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                background: DarkThemeHoveredCardColor,
                                textAlign: "center",
                                wordWrap: "break-word",
                                width: "100%",
                            }}
                        >
                            <Typography variant="h4" style={{ color: WhiteBackgroundColor }}>
                                Proficient in building dynamic and responsive web applications using the React framework. Skilled in creating reusable components, managing state with Redux or Context API, and integrating RESTful
                                APIs. Experienced in modern JavaScript (ES6+), HTML, and CSS, with a strong understanding of front-end best practices and performance optimization. Capable of translating design wireframes into
                                high-quality code and collaborating effectively within a team environment.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default WebDevelopmentDescription;
