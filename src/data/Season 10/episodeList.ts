import { Challenge } from "../../types/constants/Challenge";
import { Episode } from "../../types/Episode";
import { Season10Contestants } from "../../types/constants/Season10Contestants";
import Handshake31Small from "../../images/handshakes/Small/S10E03 - Michael.jpg"
import Handshake31Medium from "../../images/handshakes/Medium/S10E03 - Michael.jpg"
import Handshake31Large from "../../images/handshakes/Large/S10E03 - Michael.jpg"
import Handshake32Small from "../../images/handshakes/Small/S10E05 - David.jpg"
import Handshake32Medium from "../../images/handshakes/Medium/S10E05 - David.jpg"
import Handshake32Large from "../../images/handshakes/Large/S10E05 - David.jpg"
import Handshake33Small from "../../images/handshakes/Small/S10E07 (1) - Steph.jpg"
import Handshake33Medium from "../../images/handshakes/Medium/S10E07 (1) - Steph.jpg"
import Handshake33Large from "../../images/handshakes/Large/S10E07 (1) - Steph.jpg"
import Handshake34Small from "../../images/handshakes/Small/S10E07 (2) - Henry.jpg"
import Handshake34Medium from "../../images/handshakes/Medium/S10E07 (2) - Henry.jpg"
import Handshake34Large from "../../images/handshakes/Large/S10E07 (2) - Henry.jpg"

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
      recipient: Season10Contestants.Michael,
      challenge: Challenge.Signature,
      position: 1,
      image: {
        small: Handshake31Small,
        medium: Handshake31Medium,
        large: Handshake31Large,
      }
    }]
  },
  {
    number: 4,
    handshakes: null
  },
  {
    number: 5,
    handshakes: [{
      recipient: Season10Contestants.David,
      challenge: Challenge.Signature,
      position: 1,
      image: {
        small: Handshake32Small,
        medium: Handshake32Medium,
        large: Handshake32Large,
      }
    }]
  },
  {
    number: 6,
    handshakes: null
  },
  {
    number: 7,
    handshakes: [
      {
        recipient: Season10Contestants.Steph,
        challenge: Challenge.Signature,
        position: 1,
        image: {
          small: Handshake33Small,
          medium: Handshake33Medium,
          large: Handshake33Large,
        }
      },
      {
        recipient: Season10Contestants.Henry,
        challenge: Challenge.Signature,
        position: 2,
        image: {
          small: Handshake34Small,
          medium: Handshake34Medium,
          large: Handshake34Large,
        }
      }
    ]
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
