import React from 'react';
import {Accordion} from "../components/accordion";
import {AccordionItem} from "../components/accordionItem";
import { PhotoWithDetails } from "../components/photoWithDetails";
import { Data } from "../data/data";
import { Season } from "../types/Season";

export const Handshakes = () => {
  const getHandshakes = (season: Season) => {
    const handshakes = season.episodes.map(e => e.handshakes);

    if(handshakes.every(h => h === null)) {
      return <p className="handshake__description">No <i>Hollywood Handshakes</i> were given out in season {season.number}</p>
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
      <Accordion>
        {renderAccordions()}
      </Accordion>
    );
};

