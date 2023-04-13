import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //pamiętać by dodać useLogin()!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password)
        // console.log("Email:", email);
        // console.log("Password:", password);
    };

    return (
        <div className="h-screen flex flex-col items-center mt-20">
            <h1 className="text-4xl font-bold mb-10">Log in</h1>
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
                <button
                    type="submit"
                    className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-400"
                >
                    Log in
                </button>
            </form>
        </div>
    );
};

export default Login;