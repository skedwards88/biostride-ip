import React from "react";

function Box({header, items}) {
  return (
    <div className="box">
      <h3>{header}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default function Services() {
  const boxContent = [
    {
      header: "IP Portfolio Development",
      items: [
        "Invention harvesting",
        "Patentability assessment",
        "Patent drafting",
        "Strategic prosecution",
      ],
    },
    {
      header: "IP Portfolio Assessment",
      items: [
        "Portfolio presentation (for VC round or acquisition)",
        "Portfolio pruning",
        "Third party portfolio review",
      ],
    },
    {
      header: "Patent Licensing",
      items: [
        "Patent acquisition search",
        "Infringement assessment",
        "Licensing strategy",
      ],
    },
    {
      header: "Patent Landscaping",
      items: [
        "Competitor patent search",
        "Patent invalidation art search",
        "Invalidity charts",
      ],
    },
  ];

  return (
    <div className="content" id="services">
      <div className="blurb">
        <h2>Trailblazing paths through biotech landscapes</h2>
        <p>
            Providing technical work products to inform IP counsel decisions.
        </p>
        <p>
          Specialized in biotech research tools across the multiomics, spatial,
          single cell, and next generation sequencing space.
        </p>
      </div>
      <div className="boxes">
        {boxContent.map((content) => (
          <Box
            key={content.header}
            header={content.header}
            items={content.items}
          ></Box>
        ))}
      </div>
    </div>
  );
}
