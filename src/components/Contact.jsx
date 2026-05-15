import React, { useState } from "react";
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

  const handleLocationClick = () => {
    setError("");
    setLocation(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported in this browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Location received:", position);

        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        console.log("Location error:", err);
        setError("Permission denied or unable to get location");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  };

  return (
    <section id="contact" className="py-24 bg-dark-200 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
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
            Feel free to contact me for projects, internships,
            collaborations, or any opportunities.
          </p>
        </motion.div>

        {/* Main Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-dark-300 rounded-3xl shadow-xl p-10 grid md:grid-cols-2 gap-10"
        >

          {/* FORM */}
          <form
            action="https://formsubmit.co/alitajalam645@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:5173/" />

            <div>
              <label className="block text-gray-300 mb-2 text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full h-12 px-4 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-purple"
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
                className="w-full h-12 px-4 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-purple"
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
                className="w-full p-4 rounded-lg bg-dark-200 border border-gray-700 text-white resize-none focus:outline-none focus:border-purple"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* INFO SIDE */}
          <div className="flex flex-col justify-center">

            {/* Location */}
            <div className="flex items-start gap-4 mb-8">

              {/* CLICKABLE ICON */}
              <div
                onClick={handleLocationClick}
                className="bg-dark-200 p-3 rounded-full text-purple cursor-pointer hover:scale-110 transition"
              >
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  Location
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  West Champaran, Bihar
                </p>

                {/* SHOW LOCATION */}
                {location && (
                  <p className="text-white text-sm mt-2">
                    📍 Lat: {location.latitude} <br />
                    📍 Lng: {location.longitude}
                  </p>
                )}

                {/* ERROR */}
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
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-gray-400 text-sm mt-1">
                  alitajalam645@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-10">
              <div className="bg-dark-200 p-3 rounded-full text-purple">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-white font-semibold">Phone</h4>
                <p className="text-gray-400 text-sm mt-1">
                  +91 7250302680
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold mb-5">
                Follow Me
              </h4>

              <div className="flex gap-4">

                <a href="https://github.com/alitajalam"
                  className="w-11 h-11 rounded-full bg-dark-200 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition">
                  <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/alitajalam645/"
                  className="w-11 h-11 rounded-full bg-dark-200 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition">
                  <FaLinkedinIn />
                </a>

                <a href="https://x.com/AlamAlitaj11825"
                  className="w-11 h-11 rounded-full bg-dark-200 flex items-center justify-center text-sky-400 hover:bg-sky-400 hover:text-white transition">
                  <FaTwitter />
                </a>

                <a href="https://www.instagram.com/alitaj_00/"
                  className="w-11 h-11 rounded-full bg-dark-200 flex items-center justify-center text-pink-400 hover:bg-pink-400 hover:text-white transition">
                  <FaInstagram />
                </a>

                <a href="https://www.facebook.com/profile.php?id=100090441086984"
                  className="w-11 h-11 rounded-full bg-dark-200 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition">
                  <FaFacebook />
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