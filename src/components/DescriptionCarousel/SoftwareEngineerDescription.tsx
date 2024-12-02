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

const SoftwareEngineerDescription = (): JSX.Element => {
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
                        A highly skilled and versatile Full-Stack Software Engineer with extensive experience in C# and TypeScript. Proficient in Python and C/C++, with a strong background in building and maintaining robust
                        applications. Adept at using React for front-end development and well-versed in .NET for back-end services. Demonstrates comprehensive expertise in database management, optimization, and MongoDB aggregation
                        pipelines. Known for effectively querying databases and enhancing data management systems to improve performance and scalability. Passionate about solving complex problems and delivering high-quality
                        software solutions.
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default SoftwareEngineerDescription;
