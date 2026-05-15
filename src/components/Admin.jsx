import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";

const Admin = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = (e) => {
    e.preventDefault();

    // Dummy Authentication
    if (
    email === "admin@gmail.com" &&
    password === "admin123"
    ) {
    alert("Login Successful ✅");
    } else {
    alert("Invalid Email or Password ❌");
    }
};

return (
    <section className="min-h-screen flex items-center justify-center bg-dark-200 px-6">

    <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-dark-300 rounded-3xl shadow-2xl p-8"
    >

        {/* Heading */}
        <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-2">
            Admin <span className="text-purple">Login</span>
        </h2>

        <p className="text-gray-400">
            Enter your credentials to continue
        </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">

          {/* Email */}
        <div>
            <label className="block text-gray-300 mb-2 text-sm">
            Email Address
            </label>

            <div className="flex items-center bg-dark-200 border border-gray-700 rounded-lg px-4">
            <Mail className="text-purple mr-3" size={18} />

            <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 bg-transparent text-white focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
        </div>

          {/* Password */}
        <div>
            <label className="block text-gray-300 mb-2 text-sm">
            Password
            </label>

            <div className="flex items-center bg-dark-200 border border-gray-700 rounded-lg px-4">
            <Lock className="text-purple mr-3" size={18} />

            <input
                type="password"
                placeholder="Enter your password"
                className="w-full h-12 bg-transparent text-white focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
        </div>

          {/* Button */}
        <button
            type="submit"
            className="w-full bg-purple hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
            Login
        </button>

        </form>

    </motion.div>
    </section>
);
};

export default Admin;