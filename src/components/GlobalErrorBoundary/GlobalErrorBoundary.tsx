import { Grid, Typography } from "@mui/material";
//import { TryoutsSupportSlackChannel } from "../../utils/Constants";
import "./GlobalErrorBoundary.css";

const GlobalErrorBoundary = (): JSX.Element => {
    return (
        <>
            <div className="boundaryContainer">
                <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }}>
                    <Grid item xs={3}>
                        <Typography>Ooops!</Typography>
                        <Typography>Something went wrong...</Typography>
                        <p>Our team has been alerted to the issue and will investigate a solution, please refresh to try again.</p>
                        {/* <p>
                            {" "}
                            If this error continues to occur please reach out to the team using{" "}
                            <a href={TryoutsSupportSlackChannel} target="_blank">
                                #tryouts-support
                            </a>{" "}
                            on Slack
                        </p> */}
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default GlobalErrorBoundary;
