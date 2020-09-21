import { Episode } from "../../types/Episode";
import { Season3Contestants } from "../../types/constants/Season3Contestants";
import { Challenge } from "../../types/constants/Challenge";
import Handshake1Small from "../../images/handshakes/Small/S03E07 - Ryan.jpg"
import Handshake1Medium from "../../images/handshakes/Medium/S03E07 - Ryan.jpg"
import Handshake1Large from "../../images/handshakes/Large/S03E07 - Ryan.jpg"

export const episodeList: Episode[] = [
  {
    number: 1,
    handshakes: null
  },
  {
    number: 2,
    handshakes: null
  },
  {
    number: 3,
    handshakes: null
  },
  {
    number: 4,
    handshakes: null
  },
  {
    number: 5,
    handshakes: null
  },
  {
    number: 6,
    handshakes: null
  },
  {
    number: 7,
    handshakes: [{
      recipient: Season3Contestants.Ryan,
      position: 1,
      challenge: Challenge.Signature,
      image: {
        small: Handshake1Small,
        medium: Handshake1Medium,
        large: Handshake1Large,
      }
    }]
  },
  {
    number: 8,
    handshakes: null
  },
  {
    number: 9,
    handshakes: null
  },
  {
    number: 10,
    handshakes: null
  }
];
