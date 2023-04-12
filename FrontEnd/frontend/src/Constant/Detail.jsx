import React from 'react'
import { detail } from './data'
import CropText from './CropText'


const Detail = () => {
    return (
        <div>
            <div className="grid place-content-center">
                <div className="grid gap-4 place-content-center md:grid-cols-3">
                    {
                        detail.map((value) => {
                            return (
                                <div key={value.title} className="">
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                        <img className="w-full h-48" src={value.image} alt={value.image} />
                                        <div className="px-6 py-4">
                                            <h1 className="font-bold capitalize text-xl mb-2">{value.title}</h1>
                                            <p className="text-gray-700 text-base">
                                                <CropText text={value.detail} />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Detail