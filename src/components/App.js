import React from "react";

const displays = {
  services: {
    label: "Services",
    component: <Services />,
  },
  about: {
    label: "About",
    component: <div>About content here</div>,
  },
  contact: {
    label: "Contact",
    component: <div>Contact info here</div>,
  },
};

function HeaderButton({setCurrentDisplay, currentDisplay, buttonDisplay}) {
  return (
    <button
      onClick={() => setCurrentDisplay(buttonDisplay)}
      className={currentDisplay === buttonDisplay ? "activeButton" : ""}
    >
      {buttonDisplay}
    </button>
  );
}

function Header({currentDisplay, setCurrentDisplay}) {
  const sections = [
    displays.services.label,
    displays.about.label,
    displays.contact.label,
  ];

  return (
    <div id="header">
      <div id="logo"></div>
      <h1 id="company">
        Bio<i>Stride</i> IP
      </h1>
      <div id="menu">
        {sections.map((buttonDisplay) => (
          <HeaderButton
            key={buttonDisplay}
            setCurrentDisplay={setCurrentDisplay}
            currentDisplay={currentDisplay}
            buttonDisplay={buttonDisplay}
          ></HeaderButton>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <div id="services">
      <h2>Trailblazing new paths through biotech landscapes</h2>
      <p>
        Partnering with your IP counsel to provide technical IP work products.
      </p>
      <p>
        Specialized in biotech research tools across the multiomics, spatial,
        single cell, and next generation sequencing space.
      </p>
      <div className="boxes">
        <div className="box">
          <h2>IP Portfolio Development</h2>
          <ul>
            <li>Invention Harvesting</li>
            <li>Patentability Assessment</li>
            <li>Patent Drafting</li>
            <li>Strategic Prosecution</li>
          </ul>
        </div>

        <div className="box">
          <h2>IP Portfolio Assessment</h2>
          <ul>
            <li>TODO</li>
          </ul>
        </div>

        <div className="box">
          <h2>Patent Licensing</h2>
          <ul>
            <li>IP Acquisition Search</li>
            <li>Infringement Assessment</li>
            <li>Licensing Strategy</li>
          </ul>
        </div>

        <div className="box">
          <h2>Freedom to Operate</h2>
          <ul>
            <li>Patent Landscapes</li>
            <li>Invalidating Art Search</li>
            <li>Invalidity Charts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentDisplay, setCurrentDisplay] = React.useState(
    displays.services.label,
  );

  let content;
  switch (currentDisplay) {
    case displays.about.label:
      content = displays.about.component;
      break;

    case displays.contact.label:
      content = displays.contact.component;
      break;

    default:
      content = displays.services.component;
      break;
  }

  return (
    <div className="App">
      <Header
        setCurrentDisplay={setCurrentDisplay}
        currentDisplay={currentDisplay}
      ></Header>
      {content}
    </div>
  );
}
