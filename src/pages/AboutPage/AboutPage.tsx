import { Typography } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const AboutPage = (): JSX.Element => {
    // useEffect(() => {
    //     // Initialize GSAP animation inside useEffect hook
    //     gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

    //     // Create GSAP animation with ScrollTrigger
    //     gsap.from(".logo", {
    //         y: "50vh",
    //         scale: 4,
    //         yPercent: -50,
    //         scrollTrigger: {
    //             scrub: true,
    //             trigger: ".container-2",
    //             start: "top bottom",
    //             endTrigger: ".container-2",
    //             end: "top center",
    //             markers: true,
    //             pin: true,
    //             pinSpacing: false,
    //         },
    //     });
    // }, []); // Make sure to include an empty dependency array to run the effect only once

    return (
        <>
            <Typography variant="h1">About</Typography>
            <Outlet />
        </>
    );
};

export default AboutPage;
