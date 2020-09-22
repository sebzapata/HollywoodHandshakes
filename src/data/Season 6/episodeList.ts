import {Episode} from "../../types/Episode";
import {Season6Contestants} from "../../types/constants/Season6Contestants";
import {Challenge} from "../../types/constants/Challenge";
import Handshake5Small from "../../images/handshakes/Small/S06E03 - Paul.jpg"
import Handshake5Medium from "../../images/handshakes/Medium/S06E03 - Paul.jpg"
import Handshake5Large from "../../images/handshakes/Large/S06E03 - Paul.jpg"
import Handshake6Small from "../../images/handshakes/Small/S06E07 - Tamal.jpg"
import Handshake6Medium from "../../images/handshakes/Medium/S06E07 - Tamal.jpg"
import Handshake6Large from "../../images/handshakes/Large/S06E07 - Tamal.jpg"
import Handshake7Small from "../../images/handshakes/Small/S06E09 - Nadiya.jpg"
import Handshake7Medium from "../../images/handshakes/Medium/S06E09 - Nadiya.jpg"
import Handshake7Large from "../../images/handshakes/Large/S06E09 - Nadiya.jpg"

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
      image: {
        small: Handshake5Small,
        medium: Handshake5Medium,
        large: Handshake5Large,
      }
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
      image: {
        small: Handshake6Small,
        medium: Handshake6Medium,
        large: Handshake6Large,
      }
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
      image: {
        small: Handshake7Small,
        medium: Handshake7Medium,
        large: Handshake7Large,
      }
    }]
  },
  {
    number: 10,
    handshakes: null
  }
];
