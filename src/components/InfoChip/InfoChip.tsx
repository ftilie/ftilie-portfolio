import { Chip } from "@mui/material";
import { DarkThemeGrayAccentColor, DarkThemeLightGrayAccentColor, DarkThemeLightPurpleAccentColor } from "~/utils/Theme";

const InfoChip = ({ text, isActive }: { text: string | undefined; isActive?: boolean }): JSX.Element => {
    return <Chip size="small" variant={isActive ? "filledChip" : "outlinedChip"} label={text} style={{ backgroundColor: isActive ? DarkThemeLightPurpleAccentColor : "inherit", borderWidth: 2, borderColor: DarkThemeGrayAccentColor, color: DarkThemeLightGrayAccentColor }} />;
};

export default InfoChip;