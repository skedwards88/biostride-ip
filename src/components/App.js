import React from "react";
import Header from "./Header";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

export const displays = {
  services: {
    label: "Services",
    component: <Services />,
  },
  about: {
    label: "About",
    component: <About />,
  },
  contact: {
    label: "Contact",
    component: <Contact />,
  },
};

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
    <div className={`App ${currentDisplay}`}>
      <Header
        setCurrentDisplay={setCurrentDisplay}
        currentDisplay={currentDisplay}
      ></Header>
      {content}
    </div>
  );
}
