import { Avatar, Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { AVATAR_SIZE, DESCRIPTION_CARD_HEIGHT, DESCRIPTION_CARD_MAX_WIDTH, DESCRIPTION_CARD_MIN_WIDTH, isMobile } from "~/utils/Constants";
import { figmaIcon, materialUiIcon, typescriptIcon } from "~/utils/Icons";
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

const figmaBadge = (
    <Box
        component="img"
        src={figmaIcon}
        alt="figmaBadge"
        sx={{
            position: "absolute" as const,
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
            position: "absolute",
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
            position: "absolute",
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
            position: "absolute",
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
            width: "125px",
            height: "125px",
            transform: "rotate(170deg)",
            zIndex: 2,
            top: "-50px",
            left: "65px",
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
            width: "85px",
            height: "85px",
            transform: "rotate(348deg)",
            zIndex: 2,
            top: "-26px",
            left: "180px",
        }}
    />
);

const fourthMaterialUiBadge = (
    <Box
        component="img"
        src={materialUiIcon}
        alt="fourthMaterialUiBadge"
        sx={{
            position: "absolute" as const,
            width: "75px",
            height: "75px",
            transform: "rotate(350deg)",
            zIndex: 2,
            top: "49px",
            left: "16px",
        }}
    />
);

const WebDesignDescription = (): JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Box sx={{ position: "relative", display: "inline-block", width: "100%", maxWidth: DESCRIPTION_CARD_MAX_WIDTH }}>
            {/* Top Left Corner Badge */}
            {firstMaterialUiBadge}
            {secondMaterialUiBadge}
            {thirdMaterialUiBadge}
            {fourthMaterialUiBadge}
            {/* Top Right Corner Badge */}

            {/* Bottom Left Corner Badge */}

            {/* Bottom Right Corner Badge */}
            {figmaBadge}
            {typescriptBadge}
            {firstDotBadge}
            {secondDotBadge}
            {thirdDotBadge}

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
