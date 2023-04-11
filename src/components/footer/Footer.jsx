/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-2 sm:mt-10 fixed bottom-0 w-full relative xs:mt-40">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
                <div className="md:flex md:items-center md:justify-between mx-auto">
                    <div className="footer-left flex flex-col md:flex-row justify-between items-center min-w-0">
                        <p className="text-gray-400 text-sm mr-10 md:text-center">
                            © 2021 - 2022 Company Name. All rights reserved.
                        </p>
                        <div className="mt-4 md:mt-0 flex">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-gray-300 mr-4"
                            >
                                <FontAwesomeIcon
                                    className="text-xl"
                                    icon={faFacebook}
                                />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-gray-300 mr-4"
                            >
                                <FontAwesomeIcon
                                    className="text-xl"
                                    icon={faTwitter}
                                />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-gray-300"
                            >
                                <FontAwesomeIcon
                                    className="text-xl"
                                    icon={faInstagram}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="footer-right mt-4 md:mt-0 md:ml-4 px-4 flex flex-col md:flex-row md:justify-center md:items-center">
                        <div className="flex flex-col md:flex-row mx-auto">
                            <Link
                                to="/privacy-policy"
                                className="text-gray-400 hover:text-gray-300 mx-4 whitespace-nowrap"
                            >
                                Privacy Policy
                            </Link>
                            {/* <Link
                                to="/cookies-policy"
                                className="text-gray-400 hover:text-gray-300 mx-4 whitespace-nowrap"
                            >
                                Cookies Policy
                            </Link> */}
                            <Link
                                to="/terms-and-conditions"
                                className="text-gray-400 hover:text-gray-300 mx-4 whitespace-nowrap"
                            >
                                Terms and Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
