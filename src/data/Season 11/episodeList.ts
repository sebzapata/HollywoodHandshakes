import { Challenge } from "../../types/constants/Challenge";
import { Episode } from "../../types/Episode";
import { Season11Contestants } from "../../types/constants/Season11Contestants";
import Handshake35Small from "../../images/handshakes/Small/S11E02 - Lottie.jpg"
import Handshake35Medium from "../../images/handshakes/Medium/S11E02 - Lottie.jpg"
import Handshake35Large from "../../images/handshakes/Large/S11E02 - Lottie.jpg"
import Handshake36Small from "../../images/handshakes/Small/S11E03 - Hermine.jpg"
import Handshake36Medium from "../../images/handshakes/Medium/S11E03 - Hermine.jpg"
import Handshake36Large from "../../images/handshakes/Large/S11E03 - Hermine.jpg"
import Handshake37Small from "../../images/handshakes/Small/S11E09 - Peter.jpg"
import Handshake37Medium from "../../images/handshakes/Medium/S11E09 - Peter.jpg"
import Handshake37Large from "../../images/handshakes/Large/S11E09 - Peter.jpg"

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
    handshakes: [{
      recipient: Season11Contestants.Hermine,
      challenge: Challenge.Signature,
      position: 1,
      image: {
        small: Handshake36Small,
        medium: Handshake36Medium,
        large: Handshake36Large,
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
      recipient: Season11Contestants.Peter,
      challenge: Challenge.Signature,
      position: 1,
      image: {
        small: Handshake37Small,
        medium: Handshake37Medium,
        large: Handshake37Large,
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
