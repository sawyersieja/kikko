import AboutSummary from "./AboutSummary";
import CTA from "./CTA";
import Experience from "./Experience";
import Skills from "./Skills";

const About = () => {
    return(
        <main className="max-w-3xl mx-auto p-8">
            <h1 className="text-4xl font-fold pb-6">About Me</h1>
            <AboutSummary />
            <Skills />
            <Experience />
            <CTA />
        </main>
    );
};

export default About;