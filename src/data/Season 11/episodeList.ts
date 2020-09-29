import { Episode } from "../../types/Episode";
import { Season11Contestants } from "../../types/constants/Season11Contestants";
import Handshake35Large from "../../images/handshakes/Large/S11E02 - Lottie.png"
import Handshake35Medium from "../../images/handshakes/Medium/S11E02 - Lottie.png"
import Handshake35Small from "../../images/handshakes/Small/S11E02 - Lottie.png"
import { Challenge } from "../../types/constants/Challenge";


export const episodeList: Episode[] = [
  {
    number: 1,
    handshakes: null
  },
  {
    number: 2,
    handshakes: [{
      recipient: Season11Contestants.Lottie,
      challenge: Challenge.Signature,
      position: 1,
      image: {
        small: Handshake35Small,
        medium: Handshake35Medium,
        large: Handshake35Large,
      }
    }]
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
