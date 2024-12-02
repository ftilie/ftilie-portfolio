import { Avatar, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { AVATAR_SIZE, DESCRIPTION_CARD_HEIGHT, isMobile } from "~/utils/Constants";
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

const WebDevelopmentDescription = (): JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    return (
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
                        Proficient in building dynamic and responsive web applications using the React framework. Skilled in creating reusable components, managing state with Redux or Context API, and integrating RESTful APIs.
                        Experienced in modern JavaScript (ES6+), HTML, and CSS, with a strong understanding of front-end best practices and performance optimization. Capable of translating design wireframes into high-quality code
                        and collaborating effectively within a team environment.
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default WebDevelopmentDescription;
