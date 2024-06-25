import React, { useState } from "react";

export default function Toolbar() {

    const facts = [
        "$30 of raw popcorn translates into $3,000 in sales at movie theaters",
        "Barack Obama was born August 4 1961 and was the 44th President of the United States.",
        "'Bookkeeper' and 'bookkeeping' are the only 2 words in the English language with three consecutive double letters",
        "'Canberra' is the capital of 'Australia'.",
        "Coast Redwood tree is the world's tallest tree (371 ft) in Redwood National Park California United States",
        "'Dina Thanthi' was founded by S. P. Adithanar a lawyer trained in Britain and practised in Singapore with its first edition from Madurai in 194",
        "'fan' is short for 'fanatic'",
        "'High Street Phoenix' in mumbai is India's largest shopping mall with 3300000 sq ft whereas 'Express Avenue (Royapettah Chennai / Under construction)' will be the largest in south india with '1500000 sq ft'.",
        "'Jana Gana Mana' was officially adopted by the Constituent Assembly as the Indian national anthem on January 24 1952",
        "'Katharine Hepburn' has won four OSCAR awards which is more than any actor in the film industry.",
        "'King Cobra' is the National Reptile of India.",
        "'Mango' is india's national fruit.",
        "'Mother India' (1957) was the first indian film to be nominated in Oscars in the best Foreign film category.",
        "'Mudskipper' fish can use their pectoral fins to walk on land.",
        "'Mumbai' is called as the 'Business Capital' of India.",
        "'Nitrous Oxide' is called as Laughing Gas.",
        "'orology' is the study of mountains",
        "'Skype Limited' was founded in 2003 by Swedish-born entrepreneur Niklas Zennström and the Dane Janus Friis.",
        "'South China Sea' is the largest sea in the world (2974600 sq km)",
        "'Sri Dalada Maligawa' temple in Kandy Sri Lanka also be called as “The temple of the teeth”. Kumarasami Kamaraj was born on 15-July-1903 and was chief minister of Tamil Nadu during 1954-196",
        "'Topolino' is the name for Mickey Mouse Italy", "'underground' is the only word that begins and ends with the letters 'und'",
        "'Vinoo Mankad' is the only indian cricket player to bat in all positions (1 to 11).",
        "1 billion snails are served in restaurants each year"
    ];

    const handleAlert = () => (alert('You got this!'));

    const randomNumber = () => (
        Math.floor(Math.random() * (0 - 22 + 1) + 0) * (-1) - 1
    );

    function handleTellAFact() {
        alert(facts[randomNumber()]);
    }

    return (
        <div>
            <div className="button-div">
                <button onClick={handleTellAFact} className="buttons">Tell me a fact</button>
                <button onClick={handleAlert} className="buttons">Encouragement</button>
            </div>

        </div>

    );
}