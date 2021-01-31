import {Episode} from "../../types/Episode";
import {Season4Contestants} from "../../types/constants/Season4Contestants";
import {Challenge} from "../../types/constants/Challenge";
import Handshake2Small from "../../images/handshakes/Small/S04E09 - Frances.jpg"
import Handshake2Medium from "../../images/handshakes/Medium/S04E09 - Frances.jpg"
import Handshake2Large from "../../images/handshakes/Large/S04E09 - Frances.jpg"

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
    handshakes: null,
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
    handshakes: null
  },
  {
    number: 8,
    handshakes: null
  },
  {
    number: 9,
    handshakes: [{
      recipient: Season4Contestants.Frances,
      position: 1,
      challenge: Challenge.Signature,
      image: {
        small: Handshake2Small,
        medium: Handshake2Medium,
        large: Handshake2Large,
      }
    }]
  },
  {
    number: 10,
    handshakes: null
  }
];
