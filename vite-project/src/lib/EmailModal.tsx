import React, { useState } from "react";

interface EmailModalProps {
  onClose: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Simulate sending an email
    console.log(`Email sent to sample@gmail.com from ${email}`);
    alert(`Request sent from ${email}`);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-32 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-xl mb-4">Request CV</h2>
        <input
          type="email"
          className="border p-2 mb-4 w-full"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <div className="flex justify-end">
          <button className="bg-gray-300 p-2 rounded mr-2" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
