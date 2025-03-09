import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { HEADER_HEIGHT, RESUME_PATH } from "~/utils/Constants";
import PDFViewer from "./PDFViewer/PDFViewer";

const ExperiencePage = (): JSX.Element => {
    const theme = useTheme();
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
