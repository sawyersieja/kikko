import AboutSummary from "./AboutSummary";
import CTA from "./CTA";
import Highlights from "./Highlights";
import Skills from "./Skills";

const About = () => {
    return(
        <>    
            <h1 className="text-4xl font-fold mt-10 mb-6">About Me</h1>
            <AboutSummary />
            <Skills />
            <Highlights />
            <CTA />
        </>
    );
};

export default About;