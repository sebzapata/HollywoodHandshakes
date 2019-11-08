import {Episode} from "../../types/Episode";
import {Season7Contestants} from "../../types/constants/Season7Contestants";
import {Challenge} from "../../types/constants/Challenge";
import Handshake8 from "../../images/handshakes/S07E02 - Tom.jpg"
import Handshake9 from "../../images/handshakes/S07E04 - Selasi.jpg"
import Handshake10 from "../../images/handshakes/S07E10(1) - Candice.jpg"
import Handshake11 from "../../images/handshakes/S07E10(2) - Jane.jpg"

export const episodeList: Episode[] = [
  {
    number: 1,
    handshakes: null
  },
  {
    number: 2,
    handshakes: [{
      recipient: Season7Contestants.Tom,
      challenge: Challenge.Signature,
      position: 1,
      image: Handshake8
    }]
  },
  {
    number: 3,
    handshakes: null
  },
  {
    number: 4,
    handshakes: [{
      recipient: Season7Contestants.Selasi,
      challenge: Challenge.Signature,
      position: 1,
      image: Handshake9
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
    handshakes: [
      {
        recipient: Season7Contestants.Candice,
        challenge: Challenge.Signature,
        position: 1,
        image: Handshake10
      },
      {
        recipient: Season7Contestants.Jane,
        challenge: Challenge.Signature,
        position: 2,
        image: Handshake11
      }
    ]
  }
];
