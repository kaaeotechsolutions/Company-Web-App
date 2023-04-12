import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonial } from './data';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../App.css'
// import required modules
import { Autoplay } from "swiper";


const Testimonial = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            className="h-[300px] mt-4 w-[60vw]">
            {
                testimonial.map((value) => {
                    return (
                        <SwiperSlide key={value.name}>
                            <div
                                class="m-4 block rounded-lg bg-slate-50 p-6 shadow-sm">
                                <div class="md:flex md:flex-row">
                                    <div
                                        class="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                                        <img
                                            src={value.image}
                                            class="rounded-full shadow-md"
                                            alt="woman avatar" />
                                    </div>
                                    <div class="md:ml-6">
                                        <p class="mb-6 font-light text-neutral-500">
                                            {value.detail}
                                        </p>
                                        <p class="mb-2 text-xl font-semibold text-neutral-800">
                                            {value.name}
                                        </p>
                                        <p class="mb-0 font-semibold text-neutral-500">
                                            {value.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>

    )
}

export default Testimonial
