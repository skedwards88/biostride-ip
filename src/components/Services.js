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
        "Invention Harvesting",
        "Patentability Assessment",
        "Patent Drafting",
        "Strategic Prosecution",
      ],
    },
    {
      header: "IP Portfolio Assessment",
      items: ["TODO"],
    },
    {
      header: "Patent Licensing",
      items: [
        "IP Acquisition Search",
        "Infringement Assessment",
        "Licensing Strategy",
      ],
    },
    {
      header: "Freedom to Operate",
      items: [
        "Patent Landscapes",
        "Invalidating Art Search",
        "Invalidity Charts",
      ],
    },
  ];

  return (
    <div className="content" id="services">
      <div className="pcontent">
        <h2>Trailblazing paths through biotech landscapes</h2>
        <p>
          Partnering with your IP counsel to provide technical IP work products.
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
