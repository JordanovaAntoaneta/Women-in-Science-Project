import React from "react";
import { useState } from "react";

function Panels({
    title,
    children,
    isActive,
    onShow
}) {

    return (
        <div>
            <section className="panel" style={{
                margin: 20,
                border: "thick solid lightpink",
                //borderColor: "lightpink",
                color: "white",
                padding: 30,
                fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
            }}>
                <h3>{title}</h3>
                {isActive ? (
                    <p>{children}</p>
                ) : (
                    <button className="buttons" onClick={onShow}>
                        Show
                    </button>
                )}
            </section>
        </div>
    );
}

export default Panels;