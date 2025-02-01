import { Avatar, Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { AVATAR_SIZE, DESCRIPTION_CARD_HEIGHT, DESCRIPTION_CARD_MAX_WIDTH, DESCRIPTION_CARD_MIN_WIDTH, isMobile } from "~/utils/Constants";
import { csharpIcon, dotNetIcon, mongoIcon, pythonIcon, typescriptIcon } from "~/utils/Icons";
import { DarkThemeHoveredCardColor, WhiteBackgroundColor } from "~/utils/Theme";

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
            width: "175px",
            height: "175px",
            transform: "rotate(-10deg)",
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
        alt="thirdMongoBadge"
        sx={{
            position: "absolute" as const,
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
            width: "150px",
            height: "150px",
            transform: "rotate(-45deg)",
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
            width: "75px",
            height: "75px",
            transform: "rotate(-45deg)",
            zIndex: 3,
            bottom: "-15px",
            left: "-20px",
        }}
    />
);

const SoftwareEngineerDescription = (): JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Box sx={{ position: "relative", display: "inline-block0", width: "100%", maxWidth: DESCRIPTION_CARD_MAX_WIDTH }}>
            {/* Top Left Corner Badge */}

            {/* Top Right Corner Badge */}
            {typescriptBadge}
            {csharpBadge}
            {pythonBadge}

            {/* Bottom Left Corner Badge */}
            {firstMongoBadge}
            {secondMongoBadge}
            {dotNetBadge}

            {/* Bottom Right Corner Badge */}

            <Box
                style={{
                    maxWidth: DESCRIPTION_CARD_MAX_WIDTH,
                    minWidth: DESCRIPTION_CARD_MIN_WIDTH,
                }}
            >
                <Grid container sx={{ ...cardContainerStyles, padding: 4, paddingLeft: 16, paddingRight: 16 }} alignItems="center" gap={16}>
                    {!isMobile && !isSmallScreen && (
                        <Grid item {...avatarGridItemStyles} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Avatar
                                alt="Profile Avatar"
                                src="/assets/images/Profile.png"
                                sx={{
                                    maxWidth: AVATAR_SIZE,
                                    maxHeight: AVATAR_SIZE,
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%",
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
