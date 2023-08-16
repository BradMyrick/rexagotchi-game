import React, { useState, useEffect } from "react";

const HatchingRexAnimation = () => {
    const [loopCount, setLoopCount] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setLoopCount((prevLoopCount) => prevLoopCount + 1);
        }, 5000);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <>
            <img src="https://media.giphy.com/media/G8SxYxDJHqa1q/giphy.gif" alt="Hatching T-Rex Animation" key={loopCount} />
        </>
    );
}

export default HatchingRexAnimation;

