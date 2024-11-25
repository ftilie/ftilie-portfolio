import { Grid, Typography } from "@mui/material";
import InfoChip from "../InfoChip/InfoChip";
import { DarkThemeLightGrayAccentColor } from "~/utils/Theme";
import { PersonalInterests } from "~/utils/Types";

type InterestTabsProps = {
    interests: PersonalInterests[];
};

const InterestTabs = (props: InterestTabsProps): JSX.Element => {
    const { interests } = props;
    return (
        <Grid container sx={{ padding: 4, paddingLeft: 16, paddingRight: 16 }} alignItems="center" gap={16}>
            <Grid item xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }}>
                <Typography variant="h4" style={{ color: DarkThemeLightGrayAccentColor }}>
                    Other Interests:
                </Typography>
                {interests.map((interest) => (
                    <InfoChip text={interest.skill} />
                ))}
            </Grid>
        </Grid>
    );
};

export default InterestTabs;
