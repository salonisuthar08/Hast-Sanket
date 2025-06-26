
import React from "react";
import "./App.css"

function Team() {
    return(
        <section id="team" className="section">
     <h2>Our Team</h2>
     <p>Meet the contributors behind this project</p>
      <ul className="team-list">
        <li>
            <strong>Saloni Suthar</strong><br />
          <a href="https://github.com/salonisuthar08" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://www.linkedin.com/in/saloni-suthar-b614b1319" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
        <strong>Priyanka Bhandari</strong><br />
          <a href="https://github.com/priyankabhandari22" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://www.linkedin.com/in/pr-bhandari" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
        <strong>Sahil</strong><br />
          <a href="https://github.com/sahildev109" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://www.linkedin.com/in/sahil-salap-1877712b8" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
      </ul>
        </section>
    )
}
export default Team;