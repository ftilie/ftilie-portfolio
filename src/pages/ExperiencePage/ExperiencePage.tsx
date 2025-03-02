import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { DarkThemeGrayAccentColor, WhiteBackgroundColor } from "~/utils/Theme";
import { HEADER_HEIGHT, RESUME_PATH, SIDE_PADDING } from "~/utils/Constants";
import PDFViewer from "./PDFViewer/PDFViewer";
import SideMenu from "~/components/SideMenu/SideMenu";
const MIN_SKILL_CARD_WIDTH = 350;
const MAX_SKILL_CARD_WIDTH = 500;
const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

const ExperiencePage = (): JSX.Element => {
    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isXlScreen = useMediaQuery(theme.breakpoints.up("xl"));

    return (
        <Stack
            direction={"row"}
            sx={
                isXlScreen
                    ? {
                          height: `calc(100vh - ${HEADER_HEIGHT})`,
                      }
                    : undefined
            }
        >
            <PDFViewer pdfPath={RESUME_PATH} />
        </Stack>
    );
};

export default ExperiencePage;
