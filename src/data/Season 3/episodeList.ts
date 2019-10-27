import { Episode } from "../../types/Episode";
import { Season3Contestants } from "../../types/constants/Season3Contestants";
import { Challenge } from "../../types/constants/Challenge";
import Handshake1 from "../../images/handshakes/S03E07 - Ryan.png"

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
      image: Handshake1
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
