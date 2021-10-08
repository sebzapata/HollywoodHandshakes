import { NextPage } from 'next';
import { Data } from "../data/data";
import { Accordion } from '../components/accordion';
import { AccordionItem } from '../components/accordionItem';
import { PhotoWithDetails } from '../components/photoWithDetails';
import { Season } from '../types/Season';

import styles from './index.module.scss';

const Home: NextPage = () => {
  const getHandshakes = (season: Season) => {
    const handshakes = season.episodes.map(e => e.handshakes);

    if (handshakes.every(h => h === null)) {
      if (season.active) {
        return <p className={styles.handshake__description}>No <i>Hollywood Handshakes</i> have been given out in season {season.number} yet</p>
      }

      return <p className={styles.handshake__description}>No <i>Hollywood Handshakes</i> were given out in season {season.number}</p>
    }

    return season.episodes.map(e => {
      if (!e.handshakes) return null;

      return e.handshakes.map(handshake => <PhotoWithDetails handshake={handshake} episode={e} season={season} key={`S${season}E${e.number}`}/>)
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

export default Home
