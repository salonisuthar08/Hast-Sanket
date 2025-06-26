
import React from "react";
import  "./App.css";

function HowItWorks () {
    return (
        <section id="how-it-works" className="section">
            <h2> How It Works</h2>
            <div className="steps">
                <div className="step">📷 Open webcam</div>
                <div className="step">🧠 Model detects ISL gesture</div>
                <div className="step">📝 Show text output</div>
                <div className="step">🔊 Speak it out with TTS</div>
                 </div>

        </section>
    );
    
}
export default HowItWorks;