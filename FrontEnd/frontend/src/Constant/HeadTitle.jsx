import React from 'react'

const HeadTitle = ({name}) => {
    return (
        <div className="flex my-4 flex-col w-full justify-center items-center">
            <h2 className=' capitalize font-medium text-lg lg:text-xl'>{name}</h2>
            <hr className='my-2 rounded-md w-36' />
        </div>
    )
}

export default HeadTitle
