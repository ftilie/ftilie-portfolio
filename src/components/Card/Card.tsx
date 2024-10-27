import { Stack } from "@mui/material";
import { DarkThemeCardColor, DarkThemeHoveredCardColor } from "~/utils/Theme";

export type CardProps = {
    children: JSX.Element;
    isInteractable?: boolean | undefined;
    isSelected?: boolean | undefined;
    styleOverrides?: React.CSSProperties | undefined;
};

const cardContainerOverrides = { ":hover": { backgroundColor: DarkThemeHoveredCardColor }, transition: "background-color 0.4s" };

const Card = (props: CardProps): JSX.Element => {
    const { children, isInteractable, isSelected, styleOverrides } = props;
    const cardContainerStyles = { ...styleOverrides, borderRadius: "10px", backgroundColor: DarkThemeCardColor };

    return (
        <Stack
            direction={"row"}
            alignItems={"stretch"}
            justifyContent={"flex-start"}
            padding={2}
            style={{ ...styleOverrides, height: "100%" }}
            sx={
                isInteractable
                    ? { ...cardContainerStyles, ...cardContainerOverrides, backgroundColor: isSelected ? DarkThemeHoveredCardColor : DarkThemeCardColor, cursor: isInteractable ? "pointer" : "default" }
                    : cardContainerStyles
            }
        >
            {children}
        </Stack>
    );
};

export default Card;
