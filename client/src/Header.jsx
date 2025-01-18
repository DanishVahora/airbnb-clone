import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);
    const openLoginModal = () => setLoginModalOpen(true);
    const closeLoginModal = () => setLoginModalOpen(false);

    return (
        <>
            <header className="flex justify-between items-center  ">
                <a href="/" className="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 text-primary"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                        />
                    </svg>
                    <span className="font-bold text-xl text-primary">હવા bnb</span>
                </a>

                <div className="flex border gap-2 shadow-md shadow-gray-300 border-gray-300 rounded-full py-3 px-4">
                    <div>Anywhere</div>
                    <div className="border-l border-gray-300 px-2"></div>
                    <div>Any Week</div>
                    <div className="border-l border-gray-300 px-2"></div>
                    <div>Add Guests</div>
                    <button className="bg-primary p-1 rounded-full hover:bg-primary-dark">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </button>
                </div>

                <div onClick={toggleMenu} className="flex border gap-2 border-gray-300 rounded-full py-2 px-4 items-center">
                    
                    <svg

                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 rounded-full bg-gray-500 text-white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </header>

            {isMenuOpen && (
                <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg w-64 p-4 z-20">
                    <button
                        onClick={openLoginModal}
                        className="block text-gray-700 hover:bg-gray-100 p-2 rounded-md w-full text-left"
                    >
                        Log in
                    </button>
                    <Link
                        to={'/signup'}
                        className="block text-gray-700 hover:bg-gray-100 p-2 rounded-md w-full"
                    >
                        Sign up
                    </Link>
                    <hr className="my-2" />
                    <Link
                        to={'/airbnb-your-home'}
                        className="block text-gray-700 hover:bg-gray-100 p-2 rounded-md w-full"
                    >
                        Airbnb your home
                    </Link>
                    <Link
                        to={'/help-center'}
                        className="block text-gray-700 hover:bg-gray-100 p-2 rounded-md w-full"
                    >
                        Help Centre
                    </Link>
                </div>
            )}

            {isLoginModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
                    <div className="bg-white rounded-lg shadow-lg w-80 p-6 relative">
                        <h2 className="text-xl font-semibold text-center mb-4">
                            Log in or sign up
                        </h2>
                        <button
                            onClick={closeLoginModal}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-primary text-white w-full py-2 rounded-md hover:bg-primary-dark"
                            >
                                Log in
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
