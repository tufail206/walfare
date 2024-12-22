import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Footer Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Us Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">About Us</h3>
                        <p className="text-sm text-gray-200">
                            Ummat Welfare Organization is dedicated to serving humanity through education, healthcare, and social welfare. We focus on helping orphans, widows, and underprivileged communities to empower them for a better future.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-200 hover:text-white">Home</a></li>
                            <li><a href="#about" className="text-gray-200 hover:text-white">About Us</a></li>
                            <li><a href="#services" className="text-gray-200 hover:text-white">Our Services</a></li>
                            <li><a href="#donate" className="text-gray-200 hover:text-white">Donate</a></li>
                            <li><a href="#contact" className="text-gray-200 hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Information Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Contact Info</h3>
                        <p className="text-sm text-gray-200">
                            Address: Gilgit-Baltistan, Pakistan
                        </p>
                        <p className="text-sm text-gray-200">
                            Email: <a href="mailto:info@ummatwelfare.org" className="text-gray-200 hover:text-white">info@ummatwelfare.org</a>
                        </p>
                        <p className="text-sm text-gray-200">
                            Phone: +92 123 456 7890
                        </p>
                    </div>

                    {/* Social Media Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link to={'/'} className="text-gray-200 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to={'/'} className="text-gray-200 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link to={'/'} className="text-gray-200 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link to={'/'} className="text-gray-200 hover:text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="mt-12 border-t border-gray-700 pt-6 text-center">
                    <p className="text-sm text-gray-200">
                        © 2024 Ummat Welfare Organization. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-200">
                        Designed by <a href="https://yourportfolio.com" className="text-gray-200 hover:text-white">Your Name</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};



export default Footer
