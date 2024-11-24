import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, IconButton, MobileStepper, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { description } from "~/utils/Constants";
import { DarkThemeHoveredCardColor, WhiteBackgroundColor } from "~/utils/Theme";

const cardContainerStyles = { borderRadius: "20px", backgroundColor: DarkThemeHoveredCardColor, minHeight: "300px", width: "100%" };
const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

const DescriptionCarousel = (): JSX.Element => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const getValueAtPosition = (obj: Record<string, string>, position: number): string | undefined => {
        const entries = Object.entries(obj);
        return entries[position]?.[1];
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Grid container sx={{ ...cardContainerStyles, padding: 8 }}>
            {!isMobile && (
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
            )}

            <Grid item xs={isMobile ? 12 : 10} direction={"column"} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                <Box width={"100%"}>
                    <Typography variant="h4" style={{ color: WhiteBackgroundColor, textAlign: "center", wordWrap: "break-word" }}>
                        {getValueAtPosition(description, activeStep)}
                    </Typography>
                    <MobileStepper
                        variant="dots"
                        steps={Object.keys(description).length}
                        position="static"
                        activeStep={activeStep}
                        style={{ backgroundColor: DarkThemeHoveredCardColor }}
                        nextButton={
                            <IconButton size="small" onClick={handleNext} disabled={activeStep === Object.keys(description).length - 1}>
                                {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            </IconButton>
                        }
                        backButton={
                            <IconButton size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            </IconButton>
                        }
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

export default DescriptionCarousel;
