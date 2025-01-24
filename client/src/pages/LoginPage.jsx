import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); // To show success or error messages
    const navigate = useNavigate(); // For navigation after login

    const loginUser = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            // Make a POST request to your backend login endpoint
            const response = await axios.post("http://localhost:4000/login", {
                email,
                password,
            });

            if (response.status === 200) {
                setMessage("Login successful!");
                // Save user details or token in localStorage if required
                localStorage.setItem("userToken", response.data.token);
                localStorage.setItem("userId", response.data.userId);

                // Navigate to a different page after successful login
                navigate("/");
            }
        } catch (error) {
            // Handle errors (e.g., invalid credentials)
            setMessage(
                error.response?.data?.error || "Login failed. Please try again."
            );
        }
    };

    return (
        <div className="grow flex items-center mt-4 justify-around">
            <div>
                <h1 className="text-4xl text-center mb-4">Login Page</h1>
                <form
                    className="max-w-md mx-auto mb-4"
                    onSubmit={loginUser} // Form submission handler
                >
                    <input
                        type="email"
                        placeholder="your@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state
                        required
                    />
                    <input
                        type="password"
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update password state
                        required
                    />
                    <button className="primary">Login</button>
                    {message && (
                        <div className="text-center py-2 text-red-500">{message}</div>
                    )}
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account?{" "}
                        <Link className="underline text-black" to={"/register"}>
                            Register Now
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
