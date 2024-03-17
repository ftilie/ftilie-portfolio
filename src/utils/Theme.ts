import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

//VARIANTS DECLARATIONS
declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        contextualMenu: true;
        action: true;
        launch: true;
    }
}

declare module "@mui/material/Chip" {
    interface ChipPropsVariantOverrides {
        filledChip: true;
    }
}

//THEME COLOURS
//Each theme will have its own set of colors

//LIGHT THEME

//DARK THEME

export const DarkThemeBackgroundColor = "#141414";
export const DarkThemePurpleAccentColor = "#BB86FC";




export const BaseColorNavy = "#141724";
export const LighterBaseColorBlue = "#162256";
export const AccentColorRed = "#ff4747";
export const AccentColorOrange = "#ff5959";
export const LighterAccentColorOrange = "#ff7c5f";
export const IconColorBlue = "#3d79fc";
export const BackgroundColorGrey = "#908e97";
export const DefaultBackgroundColor = "#ffffff";

export const BackgroundColor = "#272727";
export const HeaderColor = "#1E1E1E";
export const SidebarColor = "#252525";
export const CardColor = "#3E3E3E";
export const HoveredCardColor = "rgba(38, 38, 38, 1)";
export const CardLabelColor = "#5A5A5A";
export const CancelLabelColor = "#FF858B";
export const HighlightedCardColor = "rgba(75, 75, 75, 1)";

export const PendingDeploymentState = "#808080";
export const InProgressDeploymentState = "#FCAE1E";
export const CompletedDeploymentState = "#268E6C";
export const PartialDeploymentState = "#FFF";
export const FailedDeploymentState = "#D7373F";
export const CancelledDeploymentState = "#7C0A02";

export const TargetStatusOnline = "#268E6C";
export const TargetStatusOffline = "#D7373F";
export const TargetStatusBusy = "#DA7B11";
export const TargetStatusDisabled = "#6E6E6E";

export const OutdatedAgentBannerBgColor = "#912f20";

// TODO: Remove this
// export const overrideMenuTheme = {
//     "& .MuiPaper-root": {
//         backgroundColor: BaseColorNavy,
//         color: DefaultBackgroundColor,

//         border: "1px solid" + LighterBaseColorBlue,
//     },
// };

export const customMuiTheme = createTheme({
    shape: {
        borderRadius: 3,
    },
    spacing: 4,
    palette: {
        background: {
            default: BackgroundColor,
            paper: BackgroundColor,
        },
        primary: {
            main: AccentColorRed,
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
            fontFamily: "EA Text",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.33,
            fontVariant: "none",

            /*alignmentBaseline?: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" |
        "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit" | undefined;*/
        },
        h1: {
            fontFamily: "EA Display",
            fontWeight: "bold",
            fontSize: 28,
        },
        h2: {
            fontFamily: "EA Display",
            fontWeight: "bold",
            fontSize: 18,
        },
        h3: {
            fontFamily: "EA Display",
            fontWeight: "bold",
            fontSize: 16,
        },
        h4: {
            fontFamily: "EA Display",
            fontWeight: "bold",
            fontSize: 14,
        },
        h5: {
            fontFamily: "EA Display",
            fontWeight: "normal",
            fontSize: 14,
            lineHeight: "18.2px",
        },
        h6: { fontFamily: "EA Display", fontWeight: "bold", fontSize: 15 },
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
            color: DefaultBackgroundColor,
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
                        backgroundColor: "rgb(255, 71, 71)",
                        "&:hover": { backgroundColor: "rgb(255, 89, 89)" },
                    },
                },
                {
                    props: { variant: "action" },
                    style: {
                        color: "white",
                        backgroundColor: "rgb(255, 71, 71)",
                        width: 200,
                        "&:hover": { backgroundColor: "rgb(255, 89, 89)" },
                    },
                },
                {
                    props: { variant: "launch" },
                    style: {
                        color: "white",
                        backgroundColor: "rgb(255, 71, 71)",
                        width: 64,
                        height: 24,
                        "&:hover": { backgroundColor: "rgb(255, 89, 89)" },
                    },
                },
                {
                    props: { variant: "outlined" },
                    style: {
                        color: "white",
                        backgroundColor: "none",
                        border: "1px solid",
                        borderColor: "white",
                        "&:hover": { borderColor: AccentColorRed },
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
                    fontFamily: "EA Display",
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
                    color: BackgroundColorGrey,
                    borderColor: LighterAccentColorOrange,
                },
            },
        },
        MuiInput: {
            defaultProps: {
                disableUnderline: true,
            },
            styleOverrides: {
                root: {
                    color: BackgroundColorGrey,
                    borderColor: LighterAccentColorOrange,
                },
            },
        },
        MuiOutlinedInput: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    focused: {
                        color: BackgroundColorGrey,
                        borderColor: LighterAccentColorOrange,
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
                    color: DefaultBackgroundColor,
                    backgroundColor: AccentColorRed,
                },
            },
        },
        MuiTooltip: {
            defaultProps: {
                placement: "top",
                followCursor: true,
            },
            styleOverrides: {
                tooltip: {
                    backgroundColor: HeaderColor,
                    maxWidth: 500,
                },
                arrow: {
                    color: HeaderColor,
                },
            },
        },
        MuiCircularProgress: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    color: AccentColorRed,
                },
            },
        },
    },
});

export const ThemeDefaultMargin = "16px";
