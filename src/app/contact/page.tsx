"use client"; //Needed for form state in Next.js App Router

import { useState } from "react";

const Contact = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<string | null>(null); // Fix later for status usage.

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevents page reload
        
        // Simulating form capture without sending an email yet.
        console.log("Email:", email);
        console.log("Message:", message);
        
        setStatus("Message captured! (Email sending not implemented yet)");
        
        // Reset form fields after submission.
        setEmail("");
        setMessage("");
    };

    return (
    <>
        <main className="max-w-md mx-auto p-8">
            <h1 className="text-3xl font-bold">Contact Me</h1>
            <p className="text-gray-600">Fill out the form below to send me a message.</p>

            <form onSubmit={handleSubmit} className="mt-4">
                <label className="block mb-2">Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 border rounded-md" />

                <label className="block mt-4 mb-2">Message:</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required className="w-full p-2 border rounded-md"></textarea>

                <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Send</button>
            </form>

            {status && <p className="mt-4 text-sm text-green-600">{status}</p>} {/* Show status message */}
        </main>
    </>
    );
};

export default Contact;