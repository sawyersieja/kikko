"use client"; //Needed for form state in Next.js App Router

import { useState } from "react";

const ContactForm = () => {
    
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
            <form onSubmit={handleSubmit}>
                    <label className="block font-medium mb-2">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 border border-gray-300 rounded-md transition-all duration-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:ring-opacity-50" />

                    <label className="block font-medium mt-4 mb-2">Message:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required className="w-full p-2 border border-gray-300 rounded-md h-50 transition-all duration-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:ring-opacity-50"></textarea>

                    <button type="submit" className="mt-6 mb-10 font-medium bg-blue-600 text-white px-4 py-2 rounded-md">Send</button>
                </form>

                {status && <p className="mb-10 text-sm text-green-600">{status}</p>} {/* Show status message */}
        </>
    );
};

export default ContactForm;