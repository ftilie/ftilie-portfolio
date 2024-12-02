import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Avatar, Box, Grid, IconButton, MobileStepper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { DarkThemeHoveredCardColor } from "~/utils/Theme";
import Card from "../Card/Card";
import Slider from "react-slick";
const AVATAR_SIZE = 200;
const DESCRIPTION_CARD_HEIGHT = 400;
const cardContainerStyles = {
    //borderRadius: "20px",
    //backgroundColor: DarkThemeHoveredCardColor,
    width: "100%",
    height: DESCRIPTION_CARD_HEIGHT,
};
const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

const avatarGridItemStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
};

type CardStackProps = {
    children: JSX.Element[];
};

const CardStack = ({ children }: CardStackProps): JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Grid container alignItems="center">
            <Grid
                xs={12}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "400px",
                    width: "1000px",
                    alignItems: "center",
                }}
            >
                {children.map((child, index) => {
                    const isActive = child === children[activeStep];
                    const cardH = 100 - (activeStep - index) * 20;
                    return isActive ? (
                        <Card
                            isSelected
                            isInteractable
                            key={index}
                            styleOverrides={{
                                cursor: "default",
                                maxWidth: "1000px",
                                height: "400px",
                                zIndex: isActive ? 1 : 0,
                                backgroundColor: isActive ? "red" : "blue",
                            }}
                        >
                            <Typography>test</Typography>
                        </Card>
                    ) : (
                        <Box
                            key={index}
                            sx={{
                                cursor: "default",
                                width: "20px",
                                height: `${400 - 1.5 * Math.abs(activeStep - index) * 20}px`,
                                backgroundColor: "blue",
                                borderRadius: `${index < activeStep ? "20px 0px 0px 20px" : index > activeStep ? "0px 20px 20px 0px" : "0px"}`,
                            }}
                        ></Box>
                    );
                })}
            </Grid>

            <Grid xs={12} style={{ display: "flex", justifyContent: "center" }}>
                <Stack sx={{ width: "20%" }}>
                    <MobileStepper
                        variant="dots"
                        steps={children.length}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <IconButton size="small" onClick={handleNext} disabled={activeStep === children.length - 1}>
                                {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            </IconButton>
                        }
                        backButton={
                            <IconButton size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            </IconButton>
                        }
                    />
                </Stack>
            </Grid>
        </Grid>
    );
};

export default CardStack;
