import { Avatar, Button, Fade, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const AboutPage = (): JSX.Element => {
    const profileImageDimentions = "350px";
    const textStyle = {
        fontFamily: "Public Sans",
        fontWeight: "bold",
        fontSize: 58,
    };
    const theme = useTheme();
    const skills = ["C#", "C/C++", ".NET Framework", "TypeScript", "Node.js", "React Framework", "Python"];

    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [transition, setTrantition] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTrantition(false);

            setTimeout(() => {
                setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
                setTrantition(true);
            }, 500);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div>
            <Grid container spacing={0} margin={4} direction="column" justifyContent="center">
                <Stack direction={"row"} alignItems={"center"} gap={8}>
                    <Stack>
                        <Avatar sx={{ width: profileImageDimentions, height: profileImageDimentions }} alt="Florin" src="/src/assets/images/Profile.jpg" />
                    </Stack>
                    <Stack direction={"column"} gap={2}>
                        <Typography style={textStyle}>Hi 👋</Typography>
                        <Stack direction={"row"} gap={2}>
                            <Typography style={textStyle}>I'm</Typography>
                            <Typography
                                style={textStyle}
                                sx={{
                                    background: "linear-gradient(to right, rgb(222, 91, 181), rgb(145, 70, 255))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Florin
                            </Typography>
                        </Stack>
                        <Typography style={textStyle}>Software Engineer</Typography>
                        <Fade in={transition}>
                            <Typography
                                style={{
                                    fontFamily: "Public Sans",
                                    fontWeight: "bold",
                                    fontSize: 32,
                                }}
                                color={theme.palette.grey[500]}
                            >
                                {`${skills[currentSkillIndex]}`}
                            </Typography>
                        </Fade>
                    </Stack>
                </Stack>
            </Grid>
            <Outlet />
        </div>
    );
};

export default AboutPage;
