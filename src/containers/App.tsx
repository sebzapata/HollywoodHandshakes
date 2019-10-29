import React from 'react';
import './App.css';
import {Header} from "../components/header";
import {AccordionItem} from "../components/accordionItem";
import {Accordion} from "../components/accordion";
import { Data } from "../data/data";
import { Season } from "../types/Season";


const App: React.FC = () => {
  const getHandshakes = (season: Season) => {
    const handshakes = season.episodes.map(e => e.handshakes);

    if(handshakes.every(h => h === null)) {
      return <p>{`No handshakes were given out in season ${season.number}`}</p>
    }

    return handshakes.map(x => {
      if (!x) return null;

      return x.map(y => <img className="handshake__image" src={y.image} alt={`Handshake being given to ${y.recipient}`} key={y.image}/>)
    })
  };

  const renderAccordions = () => {
    return Data.map(x => (
      <AccordionItem title={`Season ${x.number} (${x.network})`} key={`Season${x.number}`}>
        {getHandshakes(x)}
      </AccordionItem>
    ))
  };

  return (
    <div className="page">
      <Header/>
      <Accordion>
        {renderAccordions()}
      </Accordion>
    </div>
  );
};

export default App;
