import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); // Success/Error message

    const registerUser = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4000/register", {
                name,
                email,
                password,
                username,
            });

            setMessage("User registered successfully! Redirecting to login...");
            setTimeout(() => {
                window.location.href = "/login"; // Redirect after registration
            }, 2000);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setMessage(error.response.data.error);
            } else {
                setMessage("An unexpected error occurred.");
            }
        }
    };

    return (
        <div className="grow flex items-center mt-4 justify-around">
            <div>
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto mb-4" onSubmit={registerUser}>
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="your@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="primary">Register</button>
                    {message && (
                        <div className={`text-center py-2 ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                            {message}
                        </div>
                    )}
                    <div className="text-center py-2 text-gray-500">
                        Already have an account?{" "}
                        <Link className="underline text-black" to="/login">
                            Login Now
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
