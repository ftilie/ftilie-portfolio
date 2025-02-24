import { AccessTime } from "@mui/icons-material";
import { Avatar, Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { AVATAR_SIZE, DESCRIPTION_CARD_HEIGHT, DESCRIPTION_CARD_MAX_WIDTH, DESCRIPTION_CARD_MIN_WIDTH, isMobile } from "~/utils/Constants";
import { accessTimeIcon, autoAwesomeIcon, historyIcon, mongoIcon } from "~/utils/Icons";
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

const watchBadge = (
    <Box
        component="img"
        src={accessTimeIcon}
        alt="autoAwesomeBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "100px",
            height: "100px",
            transform: "rotate(340deg)",
            zIndex: 4,
            bottom: "-60px",
            right: "-20px",
        }}
    />
);

const historyBadge = (
    <Box
        component="img"
        src={historyIcon}
        alt="historyBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "75px",
            height: "75px",
            transform: "rotate(50deg)",
            zIndex: 3,
            bottom: "16px",
            right: "10px",
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
            transform: "rotate(45deg)",
            zIndex: 2,
            bottom: "-10px",
            right: "-110px",
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
            width: "250px",
            height: "250px",
            transform: "rotate(20deg)",
            zIndex: 1,
            bottom: "-5px",
            right: "-150px",
        }}
    />
);

const firstAutoAwesomeBadge = (
    <Box
        component="img"
        src={autoAwesomeIcon}
        alt="firstAutoAwesomeBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "75px",
            height: "75px",
            transform: "rotate(0deg)",
            zIndex: 2,
            bottom: "-25px",
            right: "80px",
        }}
    />
);

const secondAutoAwesomeBadge = (
    <Box
        component="img"
        src={autoAwesomeIcon}
        alt="secondAutoAwesomeBadge"
        sx={{
            position: "absolute" as const,
            userSelect: "none",
            width: "150px",
            height: "150px",
            transform: "rotate(135deg)",
            zIndex: 2,
            top: "-50px",
            right: "-50px",
        }}
    />
);

const FunFactDescription = (): JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Box sx={{ position: "relative", display: "inline-block", width: "100%", maxWidth: DESCRIPTION_CARD_MAX_WIDTH }}>
            {/* Top Left Corner Badge */}
            {/* Top Right Corner Badge */}
            {secondAutoAwesomeBadge}
            {/* Bottom Left Corner Badge */}
            {/* Bottom Right Corner Badge */}
            {watchBadge}
            {historyBadge}
            {firstAutoAwesomeBadge}
            {firstMongoBadge}
            {secondMongoBadge}

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
                            <Stack style={{ backgroundColor: DarkThemeHoveredCardColor }}>
                                <Typography variant="h4" style={{ color: WhiteBackgroundColor }}>
                                    "Time control is the best super power."
                                </Typography>
                                <Typography variant="h4" style={{ color: DarkThemeLightGrayAccentColor, display: "flex", justifyContent: "end" }}>
                                    ~Florin
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default FunFactDescription;
