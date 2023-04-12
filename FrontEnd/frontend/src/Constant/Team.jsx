import React from 'react'
import { team } from './data'



const Team = () => {
    return (
        <section className='flex flex-col justify-center items-center '>
            <div className="grid lg:grid-cols-3 place-content-center w-3/4 lg:w-5/6 gap-4">
                {
                    team.map((value) => {
                        return (
                            <div key={value.name} class="flex shadow-lg rounded-md flex-col max-w-md p-6">
                                <img src={value.image} alt="" class="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                                <div>
                                    <h2 class="text-xl font-semibold">{value.name}</h2>
                                    <span class="block pb-2 text-sm dark:text-gray-400">{value.position} of Company Inc.</span>
                                    <p>{value.detail}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Team
