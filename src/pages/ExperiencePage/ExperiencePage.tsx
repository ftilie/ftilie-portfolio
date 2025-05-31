import { SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, useMediaQuery, useTheme } from "@mui/material";
import { HEADER_HEIGHT, RESUME_PATH } from "~/utils/Constants";
import PDFViewer from "./PDFViewer/PDFViewer";
import { Close, Download, OpenInNew } from "@mui/icons-material";
import { DarkThemeHoveredCardColor, DarkThemePurpleAccentColor } from "~/utils/Theme";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const ExperiencePage = (): JSX.Element => {
    const theme = useTheme();
    const isXlScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [open, setOpen] = useState(false);

    const floatingButtonStyle = {
        transition: "background-color 0.4s",
        position: "fixed",
        bottom: 50,
        right: 50,
        zIndex: 3,
    };

    const actions = [
        {
            icon: <Download />,
            name: "Download",
            onclick: () => {
                const link = document.createElement("a");
                link.href = RESUME_PATH;
                link.download = "Florin_Tilie_Resume.pdf";
                link.click();
            },
        },
        {
            icon: <OpenInNew />,
            name: "Open in new tab",
            onclick: () => {
                window.open(RESUME_PATH, "_blank"), setOpen(!open);
            },
        },
    ];
    return (
        <>
            <SpeedDial
                ariaLabel="resume-actions"
                open={open}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onClick={() => setOpen(!open)}
                sx={floatingButtonStyle}
                icon={<SpeedDialIcon icon={<MenuIcon />} openIcon={<Close />} />}
                FabProps={{
                    sx: {
                        bgcolor: open ? DarkThemeHoveredCardColor : DarkThemePurpleAccentColor,
                        "&:hover": {
                            bgcolor: open ? DarkThemeHoveredCardColor : DarkThemePurpleAccentColor,
                        },
                    },
                }}
            >
                {actions.map((action) => (
                    <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={action.onclick} />
                ))}
            </SpeedDial>
            <Stack
                direction={"row"}
                sx={{
                    zIndex: 0,
                    ...(isXlScreen
                        ? {
                              height: `calc(100vh - ${HEADER_HEIGHT})`,
                          }
                        : undefined),
                }}
            >
                <PDFViewer pdfPath={RESUME_PATH} />
            </Stack>
        </>
    );
};

export default ExperiencePage;
