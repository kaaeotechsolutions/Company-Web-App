import { useState } from "react";

const CropText = ({ text }) => {
    const [showMore, setShowMore] = useState(false);
    const words = text.split(" ");

    const first100Words = words.slice(0, 30).join(" ");
    const remainingWords = words.slice(30).join(" ");

    return (
        <div>
            <p>{showMore ? `${first100Words} ${remainingWords}` : first100Words}</p>
            {words.length > 30 && (
                <button className=" hover:text-purple-800" onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show less" : "Show more"}
                </button>
            )}
        </div>
    );
}


export default CropText;