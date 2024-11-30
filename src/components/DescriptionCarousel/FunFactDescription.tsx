import { Stack, Typography } from "@mui/material";
import { DarkThemeHoveredCardColor, DarkThemeLightGrayAccentColor, WhiteBackgroundColor } from "~/utils/Theme";

const FunFactDescription = (): JSX.Element => {
    return (
        <Stack style={{ backgroundColor: DarkThemeHoveredCardColor }}>
            <Typography variant="h4" style={{ color: WhiteBackgroundColor }}>
                "Time control is the best super power."
            </Typography>
            <Typography variant="h4" style={{ color: DarkThemeLightGrayAccentColor, display: "flex", justifyContent: "end" }}>
                ~Florin
            </Typography>
        </Stack>
    );
};

export default FunFactDescription;
