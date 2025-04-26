import { BorderColor } from "@mui/icons-material";
import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

//VARIANTS DECLARATIONS
declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        contextualMenu: true;
        action: true;
        launch: true;
        animated: true;
    }
}

declare module "@mui/material/Chip" {
    interface ChipPropsVariantOverrides {
        filledChip: true;
        outlinedChip: true;
        messageBubble: true;
    }
}

//THEME COLOURS
//Each theme will have its own set of colors
export const WhiteBackgroundColor = "#FFFFFF";
export const RedAccentColor = "#FF4747";

//LIGHT THEME

//DARK THEME

//Accent Colors
export const DarkThemeLightPurpleAccentColor = "#BB86FC";
export const DarkThemePurpleAccentColor = "#9146FF";
export const DarkThemeDarkPurpleAccentColor = "#6D2AFF";
export const DarkThemeGrayAccentColor = "#323232";
export const DarkThemeLightGrayAccentColor = "#525252";

//Components
export const DarkThemeBackgroundColor = "#141414";
export const DarkThemeHeaderColor = "#141414";
export const DarkThemeSideMenuColor = "#141414";
export const DarkThemeCardColor = "#141414";
export const DarkThemeHoveredCardColor = "#323232";

export const customMuiTheme = createTheme({
    shape: {
        borderRadius: 3,
    },
    spacing: 4,
    palette: {
        background: {
            default: DarkThemeBackgroundColor,
            paper: DarkThemeBackgroundColor,
        },
        primary: {
            main: DarkThemePurpleAccentColor,
        },
        secondary: {
            main: "rgb(20, 23, 36)",
        },
        text: {
            primary: "rgb(255, 255, 255)",
            secondary: "rgb(144, 141, 146)",
        },
        grey: {
            50: grey[50],
            100: grey[100],
            200: grey[200],
            300: grey[300],
            400: grey[400],
            500: grey[500],
            600: grey[600],
            700: grey[700],
            800: grey[800],
            900: grey[900],
            A100: grey["A100"],
            A200: grey["A200"],
            A400: grey["A400"],
            A700: grey["A700"],
        },
        mode: "dark",
    },
    typography: {
        allVariants: {
            color: "#FFF",
            fontFamily: "Public Sans",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.33,
            fontVariant: "none",

            /*alignmentBaseline?: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" |
        "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit" | undefined;*/
        },
        h1: {
            fontFamily: "Public Sans",
            fontWeight: "bold",
            fontSize: 28,
        },
        h2: {
            fontFamily: "Public Sans",
            fontWeight: "bold",
            fontSize: 18,
        },
        h3: {
            fontFamily: "Public Sans",
            fontWeight: "bold",
            fontSize: 16,
        },
        h4: {
            fontFamily: "Public Sans",
            fontWeight: "bold",
            fontSize: 14,
        },
        h5: {
            fontFamily: "Public Sans",
            fontWeight: "normal",
            fontSize: 14,
            lineHeight: "18.2px",
        },
        h6: { fontFamily: "Public Sans", fontWeight: "bold", fontSize: 15 },
        body1: {
            fontSize: 12,
        },
        body2: {
            fontSize: 11,
        },

        subtitle1: {
            color: "#E3E3E3",
            fontSize: 11,
        },
        subtitle2: {
            color: DarkThemeBackgroundColor,
            fontSize: 7,
        },
    },
    components: {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    whiteSpace: "normal",
                },
            },
        },
        MuiFormControlLabel: {
            defaultProps: {
                sx: { color: "#FFF" },
            },
        },
        MuiDrawer: {
            defaultProps: {
                disableEnforceFocus: true,
            },
        },
        MuiLink: {
            defaultProps: {
                variant: "inherit",
                underline: "none",
            },
        },

        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiDivider: {
            defaultProps: {
                sx: { borderBottomWidth: 3 },
            },
        },
        MuiStack: {
            styleOverrides: {
                root: {
                    backgroundColor: DarkThemeBackgroundColor,
                },
            },
        },
        MuiCard: {
            defaultProps: {
                sx: { borderRadius: 4, width: 400, maxWidth: 400 },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: "contained",
                sx: { textTransform: "none", fontSize: 14 },
            },
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    border: "0px solid",
                    borderColor: "none",
                },
            },
            variants: [
                {
                    props: { variant: "contained" },
                    style: {
                        color: "white",
                        backgroundColor: "rgb(145, 70, 255)",
                        "&:hover": { backgroundColor: "rgb(127, 52, 255)" },
                    },
                },
                {
                    props: { variant: "action" },
                    style: {
                        color: "white",
                        backgroundColor: "rgb(145, 70, 255)",
                        width: 200,
                        "&:hover": { backgroundColor: "rgb(127, 52, 255)" },
                    },
                },
                {
                    props: { variant: "launch" },
                    style: {
                        color: "white",
                        backgroundColor: "rgb(145, 70, 255)",
                        width: 64,
                        height: 24,
                        "&:hover": { backgroundColor: "rgb(127, 52, 255)" },
                    },
                },
                {
                    props: { variant: "outlined" },
                    style: {
                        color: "white",
                        backgroundColor: "none",
                        border: "1px solid",
                        borderColor: "white",
                        "&:hover": { borderColor: DarkThemePurpleAccentColor },
                    },
                },
                {
                    props: { variant: "animated" },
                    style: {
                        position: "relative",
                        color: "white",
                        backgroundColor: "transparent",
                        border: "1px solid",
                        borderRadius: 8, // Outer border radius of the button
                        borderColor: "white",
                        overflow: "hidden",

                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "0%", // Start with zero width
                            height: "100%",
                            backgroundColor: "rgb(145, 70, 255)", // Hover fill color
                            transition: "width 0.3s ease-in-out, border-radius 0.3s ease-in-out",
                            zIndex: 1, // Ensure it appears behind the text
                            borderRadius: "8px 24px 24px 8px", // Rounder on right to create animation effect
                        },

                        "&:hover::before": {
                            width: "100%", // Expands from left to right
                            borderRadius: "8px", // Fully rounded corners when the fill reaches 100%
                        },

                        "&:hover": {
                            color: "white", // Ensure text remains visible
                            borderColor: "rgb(145, 70, 255)",
                        },

                        "& > *": {
                            position: "relative",
                            zIndex: 2, // Ensure the text stays above the hover effect
                        },
                    },
                },
                {
                    props: { variant: "text" },
                    style: {
                        color: "white",
                        backgroundColor: "none",
                        "&:hover": { backgroundColor: "transparent" },
                    },
                },
                {
                    props: { variant: "contextualMenu" },
                    style: {
                        color: "white",
                        maxWidth: "40px",
                        maxHeight: "40px",
                        minWidth: "40px",
                        minHeight: "40px",
                        padding: "0px",
                        borderWidth: "0px",
                    },
                },
            ],
        },

        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontFamily: "Public Sans",
                    fontWeight: 700,
                    fontSize: 14,
                    lineHeight: "18.2px",
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: "outlined",
            },
            styleOverrides: {
                root: {
                    color: DarkThemeBackgroundColor,
                    borderColor: DarkThemePurpleAccentColor,
                },
            },
        },
        MuiInput: {
            defaultProps: {
                disableUnderline: true,
            },
            styleOverrides: {
                root: {
                    color: DarkThemeBackgroundColor,
                    borderColor: DarkThemePurpleAccentColor,
                },
            },
        },
        MuiOutlinedInput: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    focused: {
                        color: DarkThemeBackgroundColor,
                        borderColor: DarkThemePurpleAccentColor,
                    },
                },
            },
        },

        MuiChip: {
            defaultProps: {
                variant: "filledChip",
                sx: { borderRadius: 4 },
            },
            styleOverrides: {
                root: {
                    color: "#FFFFFF",
                    backgroundColor: DarkThemeLightPurpleAccentColor,
                },
            },
            variants: [
                {
                    props: { variant: "outlinedChip" },
                    style: {
                        color: "white",
                        backgroundColor: "none",
                        border: "1px solid",
                        borderColor: "white",
                        "&:hover": { borderColor: DarkThemeLightPurpleAccentColor },
                    },
                },
                {
                    props: { variant: "messageBubble" },
                    style: {
                        color: "white",
                        fontSize: 16,
                        backgroundColor: DarkThemePurpleAccentColor,
                        "&:hover": { borderColor: DarkThemePurpleAccentColor },
                    },
                },
            ],
        },
        MuiTooltip: {
            defaultProps: {
                placement: "top",
                followCursor: false,
            },
            styleOverrides: {
                tooltip: {
                    backgroundColor: DarkThemeHeaderColor,
                    maxWidth: 500,
                },
                arrow: {
                    color: DarkThemeHeaderColor,
                },
            },
        },
        MuiCircularProgress: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    color: DarkThemePurpleAccentColor,
                },
            },
        },
    },
});

export const ThemeDefaultMargin = "16px";
