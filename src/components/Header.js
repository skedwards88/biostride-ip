import React from "react";
import {displays} from "./App";

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

export default function Header({currentDisplay, setCurrentDisplay}) {
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
