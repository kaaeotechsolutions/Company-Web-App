import React from 'react'
import { service } from './data'
import { NavLink, useNavigate } from 'react-router-dom'

const Cards = () => {
    const navigate = useNavigate();

    return (
        <div className='flex my-4 justify-center items-center'>
            <div className="grid w-5/6 place-content-center gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    service.map((data, index) => {
                        return (
                            <div key={index} className="">
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <img className="w-full h-48" src={data.image} alt="Sunset in the mountains" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2 capitalize">{data.title}</div>
                                        <p className="text-gray-700 text-base">
                                            {data.detail}
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <button onClick={() => navigate(data.btn)} className='my-4 w-36 h-12 bg-purple-800 rounded-lg text-gray-50 shadow-md hover:text-purple-800 hover:bg-gray-50'>
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards