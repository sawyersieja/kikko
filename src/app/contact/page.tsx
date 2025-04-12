import ContactForm from "./ContactForm";

const Contact = () => {

    return (
            <>
                <h1 className="text-4xl font-bold mt-10 mb-6">Contact Me</h1>
                <p className="text-gray-300 font-medium text-base mb-6">Fill out the form below to send me a message.</p>

                {/* Static fallback form for Netlify */}
                <form name="contact" method="POST" data-netlify="true" hidden>
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="email" name="email" />
                    <textarea name="message"></textarea>
                </form>

                <ContactForm />
            </>
    );
};

export default Contact;