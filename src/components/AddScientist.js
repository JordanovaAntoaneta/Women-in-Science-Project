import React, { useState, useEffect } from "react";

function AddScientist() {

    // const initialSuggestions = JSON.parse(window.localStorage.getItem('suggestions')) || [];
    // const initialIndex = initialSuggestions.length ? initialSuggestions[initialSuggestions.length - 1].id + 1 : 0;

    const [index, setIndex] = useState(0);
    const [fullname, setFullName] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // useEffect(() => {
    //     window.localStorage.setItem('suggestions', JSON.stringify(suggestions));
    // }, [suggestions]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedSuggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
            setSuggestions(storedSuggestions);
            const newIndex = storedSuggestions.length ? storedSuggestions[storedSuggestions.length - 1].id + 1 : 0;
            setIndex(newIndex);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('suggestions', JSON.stringify(suggestions));
        }
    }, [suggestions]);

    function handleAddSuggestion() {

        setFullName('');

        //setSuggestions([suggestions.push(index, fullname)]);
        setSuggestions([...suggestions, { id: index, name: fullname }]);

        setIndex(index + 1);

    }

    function handleValChange(e) {
        e.stopPropagation();
        setFullName(e.target.value);
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="Enter a full name"
                value={fullname}
                className="inp2"
                onChange={handleValChange}
            />
            <button
                className="button"
                onClick={handleAddSuggestion}
            >
                Add
            </button>
            <div>
                <ul className="list">
                    {suggestions.map((suggestion) => (
                        <li key={suggestion.id}>{suggestion.name}</li>
                    ))}
                </ul>
            </div>

        </form>
    );
}

export default AddScientist;