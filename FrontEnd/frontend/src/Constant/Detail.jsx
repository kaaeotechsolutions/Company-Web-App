import React from 'react'

const Detail = () => {
    return (
        <div>
            <div className="grid place-content-center">
                <h2 className='text-2xl text-center my-4'>Who We Are</h2>
                <div className="grid gap-4 place-content-center md:grid-cols-3">
                    {/* -----1---- */}
                    <div className="">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full h-48" src="https://www.lundbeck.com/content/dam/lundbeck-com/masters/global-site/images/page-top-images/about-us/our-strategy-page-header.jpg" alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Our Strategy</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* -----2---- */}
                    <div className="">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full h-48" src="https://www.shoutmeloud.com/wp-content/uploads/2010/11/Goal-Setting-For-Success-in-Blogging-550x412.jpg" alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Our Goals</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* -----3---- */}
                    <div className="">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full h-48" src="https://static1.gensler.com/uploads/hero_element/15775/thumb_mobile/thumbs/blog_01_APME-WFH-Survey_2000x1125_1588203980_508x286.jpg" alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Our Works</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail