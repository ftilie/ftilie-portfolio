import { Engineering } from "@mui/icons-material";
import { Box, Grid, Slide, Stack, Typography, useMediaQuery, useTheme, Zoom } from "@mui/material";
import { useRef } from "react";
import {
    ANIMATION_BOTTOM_LEFT_STYLE,
    ANIMATION_TIMEOUT,
    ANIMATION_TOP_RIGHT_STYLE,
    DESCRIPTION_CARD_BACKGROUND_ICON,
    DESCRIPTION_CARD_HEIGHT,
    DESCRIPTION_CARD_MAX_WIDTH,
    DESCRIPTION_CARD_MIN_WIDTH,
    isMobile,
} from "~/utils/Constants";
import { csharpIcon, dotNetIcon, mongoIcon, pythonIcon, typescriptIcon } from "~/utils/Icons";
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
            transform: "rotate(15deg)",
            zIndex: 1,
            top: "-60px",
            right: "50px",
        }}
    />
);

const csharpBadge = (
    <Box
        component="img"
        src={csharpIcon}
        alt="csharpBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "175px",
            height: "175px",
            transform: "rotate(350deg)",
            zIndex: 2,
            top: "-90px",
            right: "-90px",
        }}
    />
);

const pythonBadge = (
    <Box
        component="img"
        src={pythonIcon}
        alt="pythonBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "110px",
            height: "110px",
            transform: "rotate(45deg)",
            zIndex: 3,
            top: "60px",
            right: "-60px",
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
            width: "200px",
            height: "200px",
            transform: "rotate(0deg)",
            zIndex: 2,
            bottom: "-15px",
            left: "-100px",
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
            width: "150px",
            height: "150px",
            transform: "rotate(315deg)",
            zIndex: 1,
            bottom: "-30px",
            left: "-120px",
        }}
    />
);

const dotNetBadge = (
    <Box
        component="img"
        src={dotNetIcon}
        alt="dotNetBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "75px",
            height: "75px",
            transform: "rotate(315deg)",
            zIndex: 3,
            bottom: "-15px",
            left: "-20px",
        }}
    />
);

const SoftwareEngineerDescription = ({ isActive }: DescriptionProps): JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const containerRef = useRef<HTMLElement>(null);
    return (
        <Box sx={{ position: "relative", display: "inline-block", width: "100%", maxWidth: DESCRIPTION_CARD_MAX_WIDTH }}>
            {/* Top Left Corner Badge */}
            {/* Top Right Corner Badge */}
            <Slide in={isActive} direction="right" timeout={ANIMATION_TIMEOUT} container={containerRef.current}>
                <Box
                    sx={{
                        ...ANIMATION_TOP_RIGHT_STYLE,
                        zIndex: 1,
                    }}
                >
                    {typescriptBadge}
                </Box>
            </Slide>
            <Zoom in={isActive} timeout={ANIMATION_TIMEOUT}>
                <Box
                    sx={{
                        ...ANIMATION_TOP_RIGHT_STYLE,
                        zIndex: 2,
                    }}
                >
                    {csharpBadge}
                </Box>
            </Zoom>
            <Slide in={isActive} direction="up" timeout={ANIMATION_TIMEOUT} container={containerRef.current}>
                <Box
                    sx={{
                        ...ANIMATION_TOP_RIGHT_STYLE,
                        zIndex: 3,
                    }}
                >
                    {pythonBadge}
                </Box>
            </Slide>
            {/* Bottom Left Corner Badge */}
            <Slide in={isActive} direction="down" timeout={1500} container={containerRef.current}>
                <Box
                    sx={{
                        ...ANIMATION_BOTTOM_LEFT_STYLE,
                        zIndex: 3,
                    }}
                >
                    {firstMongoBadge}
                </Box>
            </Slide>
            <Slide in={isActive} direction="down" timeout={ANIMATION_TIMEOUT} container={containerRef.current}>
                <Box
                    sx={{
                        ...ANIMATION_BOTTOM_LEFT_STYLE,
                        zIndex: 3,
                    }}
                >
                    {secondMongoBadge}
                </Box>
            </Slide>
            <Zoom in={isActive} timeout={ANIMATION_TIMEOUT}>
                <Box
                    sx={{
                        ...ANIMATION_BOTTOM_LEFT_STYLE,
                        zIndex: 3,
                    }}
                >
                    {dotNetBadge}
                </Box>
            </Zoom>
            {/* Bottom Right Corner Badge */}
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
                            <Engineering
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
                                A highly skilled and versatile Full-Stack Software Engineer with extensive experience in C# and TypeScript. Proficient in Python and C/C++, with a strong background in building and maintaining
                                robust applications. Adept at using React for front-end development and well-versed in .NET for back-end services. Demonstrates comprehensive expertise in database management, optimization, and
                                MongoDB aggregation pipelines. Known for effectively querying databases and enhancing data management systems to improve performance and scalability. Passionate about solving complex problems and
                                delivering high-quality software solutions.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default SoftwareEngineerDescription;
