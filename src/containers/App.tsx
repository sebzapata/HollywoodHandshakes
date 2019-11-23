import React from 'react';
import './App.scss';
import {Accordion} from "../components/accordion";
import {AccordionItem} from "../components/accordionItem";
import {Header} from "../components/header";
import { Footer } from "../components/footer";
import { PhotoWithDetails } from "../components/photoWithDetails";
import { Data } from "../data/data";
import { Season } from "../types/Season";


const App: React.FC = () => {
  const getHandshakes = (season: Season) => {
    const handshakes = season.episodes.map(e => e.handshakes);

    if(handshakes.every(h => h === null)) {
      return <p className="handshake__description__text">No <i>Hollywood Handshakes</i> were given out in season {season.number}</p>
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

  const links = [
    {
      text: `© ${new Date().getFullYear()} hollywoodhandshakes.com`,
      route: "https://www.hollywoodhandshakes.com"
    },
    {
      text: "About",
      route: "https://github.com/sebzapata/HollywoodHandshakes"
    }
  ];

  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <div className="page">
      <Header/>
      <div className="page__content">
        <Accordion>
          {renderAccordions()}
        </Accordion>
      </div>
      <Footer links={links}/>
    </div>
  );
};

export default App;
