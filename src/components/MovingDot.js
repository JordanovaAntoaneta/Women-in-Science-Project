import React from "react";
import { useState } from "react";
import { GiMaterialsScience } from "react-icons/gi";

function MovingDot() {

    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    return (
        <div className="dot-wrapper" onPointerMove={e => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            });
        }}>
            <GiMaterialsScience
                className="dot"
                style={{
                    position: 'absolute',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: -10,
                    top: -10,
                    width: 20,
                    height: 20,
                }}
            />
        </div>
    );
}

export default MovingDot;