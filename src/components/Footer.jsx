import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left section - Company description */}
          <div>
            <p className="mb-4">
              We make onboarding new employees ridiculously easy. On day one,
              they're ready to go. And retaining them is easier.
            </p>
            <p>Follow us on:</p>
            <div className="flex justify-center md:justify-start mt-2 space-x-4">
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Middle section - Navigation links */}
          <div className="flex justify-center md:justify-start">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Deals
                </a>
              </li>
            </ul>
          </div>

          {/* Right section - More Navigation links */}
          <div className="flex justify-center md:justify-start">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Plan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
