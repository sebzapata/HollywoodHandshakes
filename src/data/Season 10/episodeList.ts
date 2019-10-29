import { Challenge } from "../../types/constants/Challenge";
import { Episode } from "../../types/Episode";
import { Season10Contestants } from "../../types/constants/Season10Contestants";
import Handshake31 from "../../images/handshakes/S10E03 - Michael.png"
import Handshake32 from "../../images/handshakes/S10E05 - David.png"
import Handshake33 from "../../images/handshakes/S10E07 (1) - Steph.png"
import Handshake34 from "../../images/handshakes/S10E07 (2) - Henry.png"

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
      image: Handshake31
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
      image: Handshake32
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
        image: Handshake33
      },
      {
        recipient: Season10Contestants.Henry,
        challenge: Challenge.Signature,
        position: 2,
        image: Handshake34
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
