import {Episode} from "../../types/Episode";
import {Season5Contestants} from "../../types/constants/Season5Contestants";
import {Challenge} from "../../types/constants/Challenge";
import Handshake3 from "../../images/handshakes/S05E02 - Norman.png"
import Handshake4 from "../../images/handshakes/S05E03 - Luis.png"

export const episodeList: Episode[] = [
  {
    number: 1,
    handshakes: null
  },
  {
    number: 2,
    handshakes: [{
      recipient: Season5Contestants.Norman,
      position: 1,
      challenge: Challenge.Signature,
      image: Handshake3
    }]
  },
  {
    number: 3,
    handshakes: [{
      recipient: Season5Contestants.Luis,
      position: 1,
      challenge: Challenge.Signature,
      image: Handshake4
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
