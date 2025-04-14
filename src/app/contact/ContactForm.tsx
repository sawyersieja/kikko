"use client"; //Needed for form state in Next.js App Router

import { useState } from "react";

const ContactForm = () => {
    
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<string | null>(null); // Fix later for status usage.

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevents page reload
        
        const formData = new FormData(e.currentTarget);

        const body = new URLSearchParams(
            Array.from(formData.entries()) as [string,string][]).toString();
        
        try {
            await fetch("/__forms.html", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body,
            });

            setStatus("Message submitted successfully!");

            // Reset form fields after submission.
            setEmail("");
            setSubject("");
            setMessage("");

        } catch (error) {
            setStatus("There was an error submitting the form.");
            console.error(error);
        }

    };
    
    return (
        <>
            <form 
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="text-foreground"
            >
                <input type="hidden" name="form-name" value="contact" />

                <p className="hidden">
                    <label>
                        Don&apos;t fill this out if you&apos;re human: {" "}
                        <input name="bot-field" />
                    </label>
                </p>

                <label className="block font-medium mb-2">Email:</label>
                <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 bg-card text-foreground border border-border rounded-md transition-all duration-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent focus:ring-opacity-50"
                />

                <label className="block font-medium mt-4 mb-2">Subject:</label>
                <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full p-2 bg-card text-foreground border border-border rounded-md transition-all duration-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent focus:ring-opacity-50"
                />

                <label className="block font-medium mt-4 mb-2">Message:</label>
                <textarea 
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full p-2 bg-card text-foreground border border-border rounded-md h-50 transition-all duration-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent focus:ring-opacity-50"
                />

                <button 
                    type="submit"
                    className="mt-6 mb-10 font-medium bg-primary text-white px-4 py-2 rounded-md hover:bg-accent transition-colors"
                >
                    Send
                </button>

            </form>

            {status && <p className="mb-10 text-sm text-green-600 dark:text-green-400">{status}</p>} {/* Show status message */}
        </>
    );
};

export default ContactForm;