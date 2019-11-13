import React from 'react';
import './App.scss';
import {Header} from "../components/header";
import {AccordionItem} from "../components/accordionItem";
import {Accordion} from "../components/accordion";
import { Data } from "../data/data";
import { Season } from "../types/Season";
import { PhotoWithDetails } from "../components/photoWithDetails";


const App: React.FC = () => {
  const getHandshakes = (season: Season) => {
    const handshakes = season.episodes.map(e => e.handshakes);

    if(handshakes.every(h => h === null)) {
      return <p className="handshake__description__text">{`No handshakes were given out in season ${season.number}`}</p>
    }

    return season.episodes.map(e => {
      if (!e.handshakes) return null;

      return e.handshakes.map(handshake => <PhotoWithDetails handshake={handshake} episode={e} season={season}/>)
    });
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
