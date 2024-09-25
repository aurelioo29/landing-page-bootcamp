import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-600 text-black py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left section - Company Info */}
          <div>
            <img
              src={Logo}
              alt="Company Logo"
              className="mb-4 mx-auto md:mx-0"
            />
            <p className="mb-2">PT. Lifelong Learning (Multimatics)</p>
            <p className="text-sm">
              Address: AXA Tower 37th Floor
              <br />
              Jln. Prof. Dr. Satrio Kav. 18, Setiabudi, Kuningan South Jakarta
              <br />
              12940 Indonesia
            </p>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
                <FaLinkedin />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-400"
              >
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-400">
                <FaYoutube />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold mb-4">CONTACT US</h4>
            <p className="mb-2">Email: info@multimatics.co.id</p>
            <p className="mb-2">Phone: +6221 300 56 123</p>
            <p>Fax: +6221 300 56 124</p>
          </div>

          {/* Downloads & Others */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#program" className="hover:underline">
                  Programs
                </Link>
                {/* <a href="#" className="hover:underline">
                  Programs
                </a> */}
              </li>
              <li>
                <Link to="/#faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:underline">
                  Our Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Multimatics. All rights reserved.
            |{" "}
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
