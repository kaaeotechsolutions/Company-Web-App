import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavLink, useParams } from 'react-router-dom';
import { service } from './data';
// import ServiceImage from '';

const ServiceDetail = () => {
    const link = useParams();
    const id = link.service;
    const data = service && service.filter(value => value.btn === `/${id}`)[0]

    return (
        <section className=" scroll-m-0">
            <Navbar />
            <div className="flex -mt-7 flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
                {/* Service Image, Title, and Description */}
                <div className="max-w-xl mx-auto mb-8">
                    <img src={data.image} alt="Service" className="rounded-lg shadow-lg" />
                    <h1 className="text-3xl capitalize font-bold mt-4 mb-2">{data.title}</h1>
                    <p className="text-gray-700 leading-relaxed">
                        {data.detail}
                    </p>
                </div>

                {/* Pricing Section */}
                {/* <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        data.plan.map((value) => {
                            return (
                                <div key={value.detail} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="px-6 py-4">
                                        <h2 className="text-lg capitalize font-bold text-gray-800">{value.title}</h2>
                                        <p className="text-gray-600 mt-2">{value.detail}.</p>
                                        <h3 className="text-3xl font-bold mt-4">{value.price}₹</h3>
                                        <button className='my-4 w-24 h-10 text-sm bg-purple-800 rounded-lg text-gray-50 shadow-md hover:text-purple-800 hover:bg-gray-50'>
                                            <NavLink to="/contact">
                                                Contact Now
                                            </NavLink>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> */}
                <button className='my-4 w-36 h-12 bg-purple-800 rounded-lg text-gray-50 shadow-md hover:text-purple-800 hover:bg-gray-50'>
                    <NavLink to="/contact">
                        Contact Now
                    </NavLink>
                </button>
            </div>
            <Footer />
        </section>
    );
}

export default ServiceDetail;
