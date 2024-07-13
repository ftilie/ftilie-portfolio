import * as MuiIcons from "@mui/icons-material";

const IconLookup = ({ icon, fontSize }: { icon: keyof typeof MuiIcons; fontSize?: "small" | "inherit" | "large" | "medium" }) => {
    const Icon = icon && MuiIcons[icon];

    return Icon ? <Icon fontSize={fontSize} /> : <></>;
};

export default IconLookup;