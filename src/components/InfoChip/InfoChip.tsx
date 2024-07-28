import { Chip } from "@mui/material";
import { DarkThemeLightPurpleAccentColor } from "~/utils/Theme";

export const InfoChip = ({ text, isActive }: { text: string | undefined; isActive?: boolean }): JSX.Element => {
    return <Chip size="small" variant={isActive ? "filledChip" : "outlinedChip"} label={text} style={{ backgroundColor: isActive ? DarkThemeLightPurpleAccentColor : "inherit" }} />;
};
