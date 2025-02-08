import { AccessTime } from "@mui/icons-material";
import { Avatar, Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { AVATAR_SIZE, DESCRIPTION_CARD_HEIGHT, DESCRIPTION_CARD_MAX_WIDTH, DESCRIPTION_CARD_MIN_WIDTH, isMobile } from "~/utils/Constants";
import { autoAwesomeIcon } from "~/utils/Icons";
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
    <Box>
        <AccessTime
            sx={{
                position: "absolute" as const,
                width: "175px",
                height: "175px",
                transform: "rotate(-10deg)",
                zIndex: 2,
                bottom: "-90px",
                right: "-90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        />
    </Box>
);

const autoAwesomeBadge = (
    <Box
        component="img"
        src={autoAwesomeIcon}
        alt="autoAwesomeBadge"
        sx={{
            position: "absolute" as const,
            width: "175px",
            height: "175px",
            transform: "rotate(350deg)",
            zIndex: 2,
            top: "-90px",
            right: "-90px",
        }}
    />
);

const FunFactDescription = (): JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Box sx={{ position: "relative", display: "inline-block", width: "100%", maxWidth: DESCRIPTION_CARD_MAX_WIDTH }}>
            {/* Top Left Corner Badge */}
            {/* {watchBadge}
            {autoAwesome} */}
            {/* Top Right Corner Badge */}

            {/* Bottom Left Corner Badge */}

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
