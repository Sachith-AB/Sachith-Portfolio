import React from 'react';

function Contact() {
    return (
        <section 
            id='contact'
            className="bg-dark py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
                <form className="max-w-lg mx-auto space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                    Send
                </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
