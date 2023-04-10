import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

const Loading = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <PropagateLoader
                color="rgba(71, 162, 162, 0.95)"
                cssOverride={{}}
                loading
                size={15}
                speedMultiplier={1}
            />
        </div>
    )
}

export default Loading
