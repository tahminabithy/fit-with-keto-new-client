import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookMessenger } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          {/* Contact Methods */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <a
              href="tel:+1234567890"
              className="flex flex-col items-center text-gray-700 hover:text-baseColor"
            >
              <FaPhoneAlt className="w-8 h-8 mb-2" />
              <span>+1 (234) 567-890</span>
            </a>
            <a
              href="mailto:tahmin.akter9519@gmail.com"
              className="flex flex-col items-center text-gray-700 hover:text-baseColor"
            >
              <FaEnvelope className="w-8 h-8 mb-2" />
              <span>tahmin.akter9519@gmail.com</span>
            </a>
            <a
              href="https://m.me/YourFacebookPage"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-700 hover:text-baseColor"
            >
              <FaFacebookMessenger className="w-8 h-8 mb-2" />
              <span>Message on Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
