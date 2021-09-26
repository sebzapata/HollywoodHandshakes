import {Episode} from "../../types/Episode";
import {Season7Contestants} from "../../types/constants/Season7Contestants";
import {Challenge} from "../../types/constants/Challenge";
import Handshake8Small from "../../../public/handshakes/Small/S07E02 - Tom.jpg"
import Handshake8Medium from "../../../public/handshakes/Medium/S07E02 - Tom.jpg"
import Handshake8Large from "../../../public/handshakes/Large/S07E02 - Tom.jpg"
import Handshake9Small from "../../../public/handshakes/Small/S07E04 - Selasi.jpg"
import Handshake9Medium from "../../../public/handshakes/Medium/S07E04 - Selasi.jpg"
import Handshake9Large from "../../../public/handshakes/Large/S07E04 - Selasi.jpg"
import Handshake10Small from "../../../public/handshakes/Small/S07E10(1) - Candice.jpg"
import Handshake10Medium from "../../../public/handshakes/Medium/S07E10(1) - Candice.jpg"
import Handshake10Large from "../../../public/handshakes/Large/S07E10(1) - Candice.jpg"
import Handshake11Small from "../../../public/handshakes/Small/S07E10(2) - Jane.jpg"
import Handshake11Medium from "../../../public/handshakes/Medium/S07E10(2) - Jane.jpg"
import Handshake11Large from "../../../public/handshakes/Large/S07E10(2) - Jane.jpg"

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
      image: {
        small: Handshake8Small,
        medium: Handshake8Medium,
        large: Handshake8Large,
      }
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
      image: {
        small: Handshake9Small,
        medium: Handshake9Medium,
        large: Handshake9Large,
      }
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
        image: {
          small: Handshake10Small,
          medium: Handshake10Medium,
          large: Handshake10Large,
        }
      },
      {
        recipient: Season7Contestants.Jane,
        challenge: Challenge.Signature,
        position: 2,
        image: {
          small: Handshake11Small,
          medium: Handshake11Medium,
          large: Handshake11Large,
        }
      }
    ]
  }
];
