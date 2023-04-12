import React from 'react'
import aside_img from '../assets/aside_img.jpg'

const AboutHero = () => {
    return (
        <section className="flex lg:flex-row flex-col items-center lg:items-start gap-4 justify-center mt-24">
            <main className="flex justify-center items-center">
                <div className=" shadow-md bg-slate-50 w-3/4 lg:w-[60vw] p-10">
                    <h1 className="text-3xl mb-4 font-bold">About Us</h1>
                    <p className="">
                        We are an IT and software development company based in India. We have been in the industry since 2022 and have worked with Many clients.
                        Mr. Mohd Moizuddin, Mr. Mohd Moinuddin & Mr. L. Narayan Tiwari founder of the company and Start Designs to accomplish their vision to provide affordable IT services for everyone to achieve long-term business success.
                        Our team is a powerhouse of logical thinking, creative minds, and problem-solving skills. Since starting, we have added 50+ skillful, experienced, tech-savvy, enthusiastic experts and professionals to our family. Who are committed to providing the most appropriate solutions, consultation, and guidance according to industry standards so our clients can achieve their business goals.
                        we are fast growing company in IT and software sector. Each & every solution that we produce is worth multiple awards, but the biggest award of them all is seeing our clients satisfied & successful.
                    </p>
                </div>
            </main>
            <aside className="h-full flex justify-center items-center">
                <div className="w-3/4 lg:w-[30vw] shadow-md bg-slate-50">
                    <img src={aside_img} alt="" className="" />
                    <div className=" p-4">
                        <h3 className=" text-xl font-semibold">How we work</h3>
                        <p className="">
                            We work on Costumer requirements, have a positive attitude towards our work, take criticism well, Practice self-motivation, learn from your mistakes, develop strong communication skills, don’t be afraid to ask questions, be adaptable & be an effective teammate. This is how we work as a team.
                        </p>
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default AboutHero
