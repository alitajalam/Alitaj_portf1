import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ucwzpbl",
        "template_lt3vc4b",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "T1vzIYw3oMBqSXGyt"
      )
      .then(() => {
        alert("Message Sent Successfully");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      });
  };

  const handleLocationClick = () => {
    setError("");
    setLocation(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported in this browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        setError("Permission denied or unable to get location");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-dark-200 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Contact <span className="text-purple">Me</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Feel free to contact me for projects,
            internships, collaborations,
            or opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
          bg-dark-300
          rounded-3xl
          shadow-xl
          p-10
          grid
          md:grid-cols-2
          gap-10
          "
        >

          {/* Contact Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>
              <label className="block text-gray-300 mb-2 text-sm">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="
                w-full
                h-12
                px-4
                rounded-lg
                bg-dark-200
                border
                border-gray-700
                text-white
                focus:outline-none
                focus:border-purple
                "
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 text-sm">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="
                w-full
                h-12
                px-4
                rounded-lg
                bg-dark-200
                border
                border-gray-700
                text-white
                focus:outline-none
                focus:border-purple
                "
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 text-sm">
                Your Message
              </label>

              <textarea
                rows="5"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="
                w-full
                p-4
                rounded-lg
                bg-dark-200
                border
                border-gray-700
                text-white
                resize-none
                focus:outline-none
                focus:border-purple
                "
              />
            </div>

            <button
              type="submit"
              className="
              w-full
              bg-purple
              hover:bg-purple-700
              text-white
              py-3
              rounded-lg
              font-semibold
              transition
              duration-300
              "
            >
              Send Message
            </button>

          </form>

          {/* Contact Info */}

          <div className="flex flex-col justify-center">

            {/* Location */}

            <div className="flex items-start gap-4 mb-8">

              <div
                onClick={handleLocationClick}
                className="
                bg-dark-200
                p-3
                rounded-full
                text-purple
                cursor-pointer
                hover:scale-110
                transition
                "
              >
                <FaMapMarkerAlt size={18} />
              </div>

              <div>

                <h4 className="text-white font-semibold">
                  Location
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  West Champaran, Bihar
                </p>

                {location && (
                  <p className="text-white text-sm mt-2">
                    📍 Lat:
                    {location.latitude}

                    <br />

                    📍 Lng:
                    {location.longitude}
                  </p>
                )}

                {error && (
                  <p className="text-red-400 text-sm mt-2">
                    {error}
                  </p>
                )}

              </div>

            </div>

            {/* Email */}

            <div className="flex items-start gap-4 mb-8">

              <div className="bg-dark-200 p-3 rounded-full text-purple">
                <FaEnvelope size={18} />
              </div>

              <div>

                <h4 className="text-white font-semibold">
                  Email
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  alitajalam645@gmail.com
                </p>

              </div>

            </div>

            {/* Phone */}

            <div className="flex items-start gap-4 mb-10">

              <div className="bg-dark-200 p-3 rounded-full text-purple">
                <FaPhoneAlt size={18} />
              </div>

              <div>

                <h4 className="text-white font-semibold">
                  Phone
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  +91 7250302680
                </p>

              </div>

            </div>

            {/* Social Icons */}

            <div>

              <h4 className="text-white font-semibold mb-5">
                Follow Me
              </h4>

              <div className="flex gap-4">

                <a
                  href="https://github.com/alitajalam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  bg-dark-200
                  p-3
                  rounded-full
                  text-white
                  hover:text-purple
                  hover:scale-110
                  transition
                  duration-300
                  "
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/alitajalam645/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  bg-dark-200
                  p-3
                  rounded-full
                  text-white
                  hover:text-purple
                  hover:scale-110
                  transition
                  duration-300
                  "
                >
                  <FaLinkedinIn size={22} />
                </a>

                <a
                  href="https://x.com/AlamAlitaj11825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  bg-dark-200
                  p-3
                  rounded-full
                  text-white
                  hover:text-purple
                  hover:scale-110
                  transition
                  duration-300
                  "
                >
                  <FaTwitter size={22} />
                </a>

                <a
                  href="https://www.instagram.com/alitaj_00/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  bg-dark-200
                  p-3
                  rounded-full
                  text-white
                  hover:text-purple
                  hover:scale-110
                  transition
                  duration-300
                  "
                >
                  <FaInstagram size={22} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  bg-dark-200
                  p-3
                  rounded-full
                  text-white
                  hover:text-purple
                  hover:scale-110
                  transition
                  duration-300
                  "
                >
                  <FaFacebook size={22} />
                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;