import {Episode} from "../../types/Episode";
import {Season4Contestants} from "../../types/constants/Season4Contestants";
import {Challenge} from "../../types/constants/Challenge";
import Handshake2 from "../../images/handshakes/S04E09 - Frances.png"

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
    handshakes: [{
      recipient: Season4Contestants.Frances,
      position: 1,
      challenge: Challenge.Signature,
      image: Handshake2
    }]
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
    handshakes: null
  },
  {
    number: 10,
    handshakes: null
  }
];
