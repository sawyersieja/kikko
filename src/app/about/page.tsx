import { Metadata } from "next";
import AboutSummary from "./AboutSummary";
import CTA from "./CTA";
import Highlights from "./Highlights";
import Skills from "./Skills";

export const metadata: Metadata = {
    title: "About Sawyer - Software Engineer",
    description: "Learn more about Sawyer — a developer passionate about building interactive experiences and thoughtful digital solutions.",
};

const About = () => {
    return(
        <>    
            <h1 className="text-4xl text-foreground font-bold mt-10 mb-6">About Me</h1>
            <AboutSummary />
            <Skills />
            <Highlights />
            <CTA />
        </>
    );
};

export default About;