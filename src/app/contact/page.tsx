import ContactForm from "./ContactForm";

const Contact = () => {

    return (
            <>
                <h1 className="text-4xl font-bold pb-6">Contact Me</h1>
                <p className="text-gray-300 mb-4">Fill out the form below to send me a message.</p>

                <ContactForm />
            </>
    );
};

export default Contact;