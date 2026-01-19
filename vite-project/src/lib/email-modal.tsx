import React, { useState } from "react";
import emailjs from "emailjs-com";

const EmailModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_evw1btq", // EmailJS service ID
        "template_6i6yssp", // EmailJS template ID
        { from_name: email, message: message }, // The data sent in the email
        "KCt55wwXb0bNKhXCr" // EmailJS user ID
      );
      alert("Email submitted successfully!");
    } catch (error) {
      console.error("Failed to send email", error);
      alert("There was an error. Please try again.");
    }

    setEmail(""); // Clear input after submission
    onClose(); // Close the modal
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0  opacity-75"></div>
            </div>

            <div className="bg-[var(--bg-color)] text-[var(--text-color)] rounded-lg overflow-hidden shadow-xl transform transition-all w-[30%] h-[15%] p-6 flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-2">Submit Your Email</h2>
              <form
                onSubmit={handleEmailSubmit}
                className="flex flex-col h-full"
              >
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className=" p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Enter your email"
                />

                {/* Optional Message Area */}
                <label htmlFor="message" className="block text-sm font-medium">
                  Optional Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Enter a message (optional)"
                ></textarea>

                <div className="mt-auto flex justify-end">
                  <button
                    type="button"
                    className="bg-gray-300 px-4 py-2 rounded-md mr-2"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailModal;
