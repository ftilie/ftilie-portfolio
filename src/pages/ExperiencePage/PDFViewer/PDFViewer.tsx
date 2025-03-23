import { Viewer } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import * as pdfjsLib from "pdfjs-dist";
import "./PDFViewer.css";
import { Fab, Stack } from "@mui/material";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.js", import.meta.url).toString();

type PDFViewerProps = {
    pdfPath: string;
};

const PDFViewer = ({ pdfPath }: PDFViewerProps) => {
    const zoomPluginInstance = zoomPlugin();
    return (
        <Stack style={{ height: "100%", width: "100%", zIndex: 2 }}>
            <Viewer fileUrl={pdfPath} plugins={[zoomPluginInstance]} defaultScale={1.5} />
        </Stack>
    );
};

export default PDFViewer;
