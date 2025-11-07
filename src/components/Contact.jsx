import React, { useState } from 'react';

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "fa13cb88-1d2e-4837-ab48-d9d3578ecde1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Your message has been sent successfully!");
      event.target.reset(); // ✅ clear form after success
    } else {
      setResult("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-[url('/assets/header-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      {/* Section Heading */}
      <h4 className="text-center mb-6">
        <span className="inline-block border-b-2 border-gray-400 pb-1 px-2">
          Connect with Me
        </span>
      </h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-700">
        I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.
      </p>

      {/* Contact Form */}
      <form className="max-w-2xl mx-auto font-ovo" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400 shadow-sm transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400 shadow-sm transition"
          />
        </div>

        <textarea
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400 mb-6 shadow-sm transition"
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-lime-400 hover:text-black transition duration-300 shadow-[2px_2px_0_#000]"
          >
            Submit now
          </button>
        </div>

        {/* Subtle Feedback */}
        {result && (
          <p
            className={`mt-6 text-center font-medium ${
              result.includes("successfully")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {result}
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
