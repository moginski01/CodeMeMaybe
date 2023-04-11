import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await signup(email, password)
        // console.log("Email:", email);
        // console.log("Password:", password);
        // console.log("Confirm Password:", confirmPassword);
    };

    return (
        <div className="h-screen flex flex-col items-center mt-20">
            <h1 className="text-4xl font-bold mb-10">Sign up</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-10 rounded-lg shadow-lg w-80 sm:w-96"
            >
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block text-gray-800 font-bold mb-2"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="border rounded-lg py-2 px-3 w-full"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-gray-800 font-bold mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="border rounded-lg py-2 px-3 w-full"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-gray-800 font-bold mb-2"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        className="border rounded-lg py-2 px-3 w-full"
                        required
                    />
                </div>
                <button
                    disabled={isLoading}
                    type="submit"
                    className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-400"
                >
                    Sign up
                </button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default Signup;