import React from "react";

export default function About() {
  return (
    <div className="content" id="about">
      <div className="leftBar">
        <h2>Colin Thom</h2>
        <h3>Senior Patent Agent</h3>
        <button id="resumeButton">View Full Resume</button>
      </div>
      <div className="blurb">
        <p>
          I am a life sciences patent agent with more than 10 years of in-house
          experience developing portfolios and navigating patent landscapes in
          the NGS, genomics, proteomics, spatial omics, and single cell analysis
          space. By engaging deeply with R&D, I have developed a strong
          understanding of optics, fluidics, biochemistry, and many other fields
          that are integrated in cutting edge research tools. I am excited to
          leverage my industry experience to cultivate innovation, aggressively
          develop patent portfolios, and navigate existing patent landscapes to
          help shape the next generation of research tools.
        </p>
      </div>
    </div>
  );
}
