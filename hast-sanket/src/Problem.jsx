
import React from "react";
import "./App.css";

function Problem() {
    const problems=[
     { title: "No ISL Support",
      text: "Most tools only support ASL, not Indian Sign Language.",
   }, 
    {
     title: "Few Interpreters",
      text: "India has under 300 certified ISL interpreters for millions.",
    },
    {
      title: "Low Awareness",
      text: "ISL is often misunderstood, causing exclusion.",
    },
    {
      title: "Education Gap",
      text: "Lack of ISL content limits learning for deaf students.",
    },
    
];
return (
    <section id="problem" className="problem-section">
   <h2>The Problem</h2>
    <p>
        Over <strong>63 million Indians</strong> experience hearing loss, yet
        most assistive tech only supports American Sign Language.
      </p>
      <div className="problem-grid">
        {problems.map((p, index) => (
          <div key={index} className="problem-card">
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
)

}
export default Problem;