import {Episode} from "../../types/Episode";
import {Season6Contestants} from "../../types/constants/Season6Contestants";
import {Challenge} from "../../types/constants/Challenge";
import Handshake5 from "../../images/handshakes/S06E03 - Paul.png"
import Handshake6 from "../../images/handshakes/S06E07 - Tamal.png"
import Handshake7 from "../../images/handshakes/S06E09 - Nadiya.png"

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
    handshakes: [{
      recipient: Season6Contestants.Paul,
      position: 1,
      challenge: Challenge.Signature,
      image: Handshake5
    }]
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
      recipient: Season6Contestants.Tamal,
      challenge: Challenge.Signature,
      position: 1,
      image: Handshake6
    }]
  },
  {
    number: 8,
    handshakes: null
  },
  {
    number: 9,
    handshakes: [{
      recipient: Season6Contestants.Nadiya,
      challenge: Challenge.Signature,
      position: 1,
      image: Handshake7
    }]
  },
  {
    number: 10,
    handshakes: null
  }
];
