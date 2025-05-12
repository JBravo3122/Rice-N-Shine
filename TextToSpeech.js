import React from "react";

function TextToSpeech(){
    const handleClick = () => {
        const text = "Hello this is a test"

        const value = new SpeechSynthesisUtterance(text);

        window.speechSynthesis.speak(value);
    }
    return(
        <div>TTS Test</div>
    )
}

export default TextToSpeech;