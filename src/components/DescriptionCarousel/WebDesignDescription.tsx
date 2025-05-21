import { Architecture } from "@mui/icons-material";
import { Avatar, Box, Grid, Grow, Slide, Stack, Typography, useMediaQuery, useTheme, Zoom } from "@mui/material";
import { useRef } from "react";
import {
    ANIMATION_BOTTOM_RIGHT_STYLE,
    ANIMATION_TIMEOUT,
    ANIMATION_TOP_LEFT_STYLE,
    AVATAR_SIZE,
    DESCRIPTION_CARD_BACKGROUND_ICON,
    DESCRIPTION_CARD_HEIGHT,
    DESCRIPTION_CARD_MAX_WIDTH,
    DESCRIPTION_CARD_MIN_WIDTH,
    isMobile,
} from "~/utils/Constants";
import { figmaIcon, materialUiIcon, typescriptIcon } from "~/utils/Icons";
import { DarkThemeHoveredCardColor, DarkThemeLightGrayAccentColor, WhiteBackgroundColor } from "~/utils/Theme";
import { DescriptionProps } from "~/utils/Types";

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

const figmaBadge = (
    <Box
        component="img"
        src={figmaIcon}
        alt="figmaBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "150px",
            height: "150px",
            transform: "rotate(15deg)",
            zIndex: 2,
            bottom: "-60px",
            right: "-20px",
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
            width: "100px",
            height: "100px",
            transform: "rotate(340deg)",
            zIndex: 1,
            bottom: "60px",
            right: "-30px",
        }}
    />
);

const firstDotBadge = (
    <Box
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "50px",
            height: "50px",
            backgroundColor: "rgb(10, 207, 131)",
            borderRadius: "50%",
            zIndex: 1,
            bottom: "-10px",
            right: "135px",
        }}
    />
);

const secondDotBadge = (
    <Box
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "30px",
            height: "30px",
            backgroundColor: "rgb(242, 78, 30)",
            borderRadius: "50%",
            zIndex: 1,
            bottom: "40px",
            right: "125px",
        }}
    />
);

const thirdDotBadge = (
    <Box
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "20px",
            height: "20px",
            backgroundColor: "rgb(26, 188, 254)",
            borderRadius: "50%",
            zIndex: 1,
            bottom: "130px",
            right: "-55px",
        }}
    />
);

const firstMaterialUiBadge = (
    <Box
        component="img"
        src={materialUiIcon}
        alt="firstMaterialUiBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "125px",
            height: "125px",
            transform: "rotate(350deg)",
            zIndex: 1,
            top: "-40px",
            left: "-45px",
        }}
    />
);

const secondMaterialUiBadge = (
    <Box
        component="img"
        src={materialUiIcon}
        alt="secondMaterialUiBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "100px",
            height: "100px",
            transform: "rotate(50deg)",
            zIndex: 2,
            top: "-10px",
            left: "70px",
        }}
    />
);

const thirdMaterialUiBadge = (
    <Box
        component="img"
        src={materialUiIcon}
        alt="thirdMaterialUiBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "75px",
            height: "75px",
            transform: "rotate(350deg)",
            zIndex: 2,
            top: "49px",
            left: "16px",
        }}
    />
);

const WebDesignDescription = ({ isActive }: DescriptionProps): JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const containerRef = useRef<HTMLElement>(null);
    return (
        <Box sx={{ position: "relative", display: "inline-block", width: "100%", maxWidth: DESCRIPTION_CARD_MAX_WIDTH }}>
            {/* Top Left Corner Badge */}
            <Zoom in={isActive} timeout={ANIMATION_TIMEOUT}>
                <Box
                    sx={{
                        ...ANIMATION_TOP_LEFT_STYLE,
                        zIndex: 1,
                    }}
                >
                    {firstMaterialUiBadge}
                </Box>
            </Zoom>
            <Slide in={isActive} direction="left" timeout={ANIMATION_TIMEOUT} container={containerRef.current}>
                <Box
                    sx={{
                        ...ANIMATION_TOP_LEFT_STYLE,
                        zIndex: 2,
                    }}
                >
                    {secondMaterialUiBadge}
                </Box>
            </Slide>
            <Slide in={isActive} direction="up" timeout={ANIMATION_TIMEOUT} container={containerRef.current}>
                <Box
                    sx={{
                        ...ANIMATION_TOP_LEFT_STYLE,
                        zIndex: 2,
                    }}
                >
                    {thirdMaterialUiBadge}
                </Box>
            </Slide>
            {/* Top Right Corner Badge */}
            {/* Bottom Left Corner Badge */}
            {/* Bottom Right Corner Badge */}
            <Slide in={isActive} direction="down" timeout={ANIMATION_TIMEOUT} container={containerRef.current}>
                <Box
                    sx={{
                        ...ANIMATION_BOTTOM_RIGHT_STYLE,
                        zIndex: 2,
                    }}
                >
                    {figmaBadge}
                </Box>
            </Slide>
            <Zoom in={isActive} timeout={ANIMATION_TIMEOUT} style={{ transitionDelay: "500ms" }}>
                <Box
                    sx={{
                        ...ANIMATION_BOTTOM_RIGHT_STYLE,
                        zIndex: 1,
                    }}
                >
                    {typescriptBadge}
                </Box>
            </Zoom>
            <Zoom in={isActive} timeout={ANIMATION_TIMEOUT}>
                <Box
                    sx={{
                        ...ANIMATION_BOTTOM_RIGHT_STYLE,
                        zIndex: 1,
                    }}
                >
                    {firstDotBadge}
                    {secondDotBadge}
                    {thirdDotBadge}
                </Box>
            </Zoom>

            <Box
                style={{
                    maxWidth: DESCRIPTION_CARD_MAX_WIDTH,
                    minWidth: DESCRIPTION_CARD_MIN_WIDTH,
                }}
                ref={containerRef}
            >
                <Grid container sx={{ ...cardContainerStyles, padding: 4, paddingLeft: 16, paddingRight: 16 }} alignItems="center" gap={16}>
                    {!isMobile && !isSmallScreen && (
                        <Grid item {...avatarGridItemStyles} sx={{ display: "flex", justifyContent: "start", alignItems: "end" }}>
                            <Architecture
                                sx={{
                                    color: DarkThemeLightGrayAccentColor,
                                    width: DESCRIPTION_CARD_BACKGROUND_ICON,
                                    height: DESCRIPTION_CARD_BACKGROUND_ICON,
                                    display: "flex",
                                    justifyContent: "start",
                                    alignItems: "end",
                                    overflow: "hidden",
                                    rotate: "30deg",
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
                                A software engineer with a strong passion for crafting intuitive and visually compelling experiences. With keen attention to detail, creating sustainable and versatile designs that adapt seamlessly
                                across platforms.
                            </Typography>
                            <br />
                            <Typography variant="h4" style={{ color: WhiteBackgroundColor }}>
                                Proficient in Figma, bringing ideas to life with precision, ensuring both aesthetics and functionality work hand in hand.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default WebDesignDescription;
