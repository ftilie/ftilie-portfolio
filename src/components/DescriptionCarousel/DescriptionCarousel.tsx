import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, IconButton, MobileStepper, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { DESCRIPTION_CARD_PADDING_HEIGHT, DESCRIPTION_CAROUSEL_MAX_WIDTH, DESCRIPTION_CAROUSEL_MIN_WIDTH } from "~/utils/Constants";

type DescriptionCarouselProps = {
    children: JSX.Element[];
};

const DescriptionCarousel = ({ children }: DescriptionCarouselProps): JSX.Element => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (activeStep < children.length - 1) {
            setActiveStep((prevStep) => prevStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prevStep) => prevStep - 1);
        }
    };

    return (
        <Box
            sx={{
                overflow: "hidden",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Carousel Content */}
            <Box
                sx={{
                    overflow: "hidden",
                    maxWidth: DESCRIPTION_CAROUSEL_MAX_WIDTH,
                    minWidth: DESCRIPTION_CAROUSEL_MIN_WIDTH,
                    width: "100%",
                    margin: "0 auto",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        transition: "transform 0.35s ease-in-out",
                        transform: `translateX(-${activeStep * 100}%)`,
                        width: "100%",
                    }}
                >
                    {children.map((child, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: "0 0 100%",
                                maxWidth: DESCRIPTION_CAROUSEL_MAX_WIDTH,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: DESCRIPTION_CARD_PADDING_HEIGHT,
                                boxSizing: "border-box",
                                padding: 2,
                            }}
                        >
                            {child}
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Mobile Stepper */}
            <Stack sx={{ width: "20%", mt: 2 }}>
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
        </Box>
    );
};

export default DescriptionCarousel;
