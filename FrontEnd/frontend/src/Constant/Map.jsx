import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const Map = () => {
    return (
        <div className="py-4 px-4 overflow-hidden sm:px-6 lg:px-8">
            <div className="relative max-w-xl mx-auto">
                <div className="rounded-lg h-[40rem] bg-white shadow-xl overflow-hidden">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Contact Us
                            </h3>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center">
                                <FaPhone className="flex-shrink-0 h-6 w-6 text-gray-400" />
                                <div className="ml-3 text-base font-medium text-gray-700">
                                    +91 9700836220
                                </div>
                            </div>
                            <div className="mt-2 flex items-center">
                                <FaEnvelope className="flex-shrink-0 h-6 w-6 text-gray-400" />
                                <div className="ml-3 text-base font-medium text-gray-700">
                                    kaaeotechsolutions@gmail.com
                                </div>
                            </div>
                            <div className="mt-2 flex items-center">
                                <FaMapMarkerAlt className="flex-shrink-0 h-6 w-6 text-gray-400" />
                                <div className="ml-3 text-base font-medium text-gray-700">
                                    6-3-657/p1, Kapadia Ln, Somajiguda, Hyderabad, Telangana 500082
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="rounded-lg overflow-hidden">
                                    <iframe
                                        title="Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.414052101616!2d78.4573105!3d17.4208978!2m3!1f0!2f16.75!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97f03fbcdf63%3A0x9911d3001d853b8b!2sKaaeotech%20Solutions!5e0!3m2!1sen!2sin!4v1651661120004!5m2!1sen!2sin"
                                        width="600"
                                        height="450"
                                        allowFullScreen={true}
                                        style={{ border: "0" }}
                                        loading="lazy"
                                        className="w-full h-96"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map


