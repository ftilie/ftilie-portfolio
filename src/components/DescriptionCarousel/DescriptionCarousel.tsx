import { Avatar, Box, Button, Grid, Stack } from "@mui/material";
import { DarkThemeHoveredCardColor } from "~/utils/Theme";

const cardContainerStyles = { borderRadius: "10px", backgroundColor: DarkThemeHoveredCardColor, minHeight: "300px" };

const DescriptionCarousel = (): JSX.Element => {
    return (
        <Grid container sx={{ ...cardContainerStyles }}>
            <Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                    <Avatar
                        alt="Florin"
                        src="\assets\images\Profile.png"
                        sx={{
                            width: "80%",
                            height: "80%",
                            borderRadius: "50%",
                        }}
                    />
                </Box>
            </Grid>

            <Grid item xs={10}>
                item 2
            </Grid>
        </Grid>
    );
};

export default DescriptionCarousel;
