import ContactForm from "./ContactForm";

const Contact = () => {

    return (
            <>
                <h1 className="text-4xl font-bold mt-10 mb-6 text-foreground">Contact Me</h1>
                <p className="text-muted font-medium text-base mb-6">Fill out the form below to send me a message.</p>

                <ContactForm />
            </>
    );
};

export default Contact;