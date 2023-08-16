'use client'
import React, { useState, useEffect } from "react";
const hatching_rex_animation = () => {
    const [hatching, setHatching] = useState(true);
    const [hatch, setHatch] = useState(false);
    
    useEffect(() => {
        const intervalID = setInterval(() => {
        if (hatching) {
            setHatching(false);
            setHatch(true);
        }
        }, 5000);
        
        return () => clearInterval(intervalID);
    }, [hatching]);
    
    return (
        <>v0.1.0</>
    );
    
}

export default hatching_rex_animation;