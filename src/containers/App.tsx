import React from 'react';
import './App.css';
import {Header} from "../components/header";
import {AccordionItem} from "../components/accordionItem";
import {Accordion} from "../components/accordion";

const App: React.FC = () => {
  return (
    <div className="page">
      <Header/>
      <Accordion>
        <AccordionItem title="Season 1">
          <p>These are some handshakes</p>
        </AccordionItem>
        <AccordionItem title="Season 2">
          <p>These are some more handshakes</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default App;
