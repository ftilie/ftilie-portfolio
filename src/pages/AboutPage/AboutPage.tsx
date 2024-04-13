import { Avatar, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const AboutPage = (): JSX.Element => {
    const profileImageDimentions = "400px";
    return (
        <>
            <Box>
                <Avatar sx={{ width: profileImageDimentions, height: profileImageDimentions }} alt="Florin" src="/src/assets/images/Profile.jpg" />
            </Box>
            <Outlet />
        </>
    );
};

export default AboutPage;
