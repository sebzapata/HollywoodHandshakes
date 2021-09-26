import { Challenge } from "../../types/constants/Challenge";
import { Episode } from "../../types/Episode";
import { Season9Contestants } from "../../types/constants/Season9Contestants";
import Handshake19Small from "../../../public/handshakes/Small/S09E02 (1) - Dan.jpg"
import Handshake19Medium from "../../../public/handshakes/Medium/S09E02 (1) - Dan.jpg"
import Handshake19Large from "../../../public/handshakes/Large/S09E02 (1) - Dan.jpg"
import Handshake20Small from "../../../public/handshakes/Small/S09E02 (2) - Rahul.jpg"
import Handshake20Medium from "../../../public/handshakes/Medium/S09E02 (2) - Rahul.jpg"
import Handshake20Large from "../../../public/handshakes/Large/S09E02 (2) - Rahul.jpg"
import Handshake21Small from "../../../public/handshakes/Small/S09E02 (3) - Ruby.jpg"
import Handshake21Medium from "../../../public/handshakes/Medium/S09E02 (3) - Ruby.jpg"
import Handshake21Large from "../../../public/handshakes/Large/S09E02 (3) - Ruby.jpg"
import Handshake22Small from "../../../public/handshakes/Small/S09E03 - Dan.jpg"
import Handshake22Medium from "../../../public/handshakes/Medium/S09E03 - Dan.jpg"
import Handshake22Large from "../../../public/handshakes/Large/S09E03 - Dan.jpg"
import Handshake23Small from "../../../public/handshakes/Small/S09E04 (1) - Dan.jpg"
import Handshake23Medium from "../../../public/handshakes/Medium/S09E04 (1) - Dan.jpg"
import Handshake23Large from "../../../public/handshakes/Large/S09E04 (1) - Dan.jpg"
import Handshake24Small from "../../../public/handshakes/Small/S09E04 (2) - Jon.jpg"
import Handshake24Medium from "../../../public/handshakes/Medium/S09E04 (2) - Jon.jpg"
import Handshake24Large from "../../../public/handshakes/Large/S09E04 (2) - Jon.jpg"
import Handshake25Small from "../../../public/handshakes/Small/S09E05 (1) - Rahul.jpg"
import Handshake25Medium from "../../../public/handshakes/Medium/S09E05 (1) - Rahul.jpg"
import Handshake25Large from "../../../public/handshakes/Large/S09E05 (1) - Rahul.jpg"
import Handshake26Small from "../../../public/handshakes/Small/S09E05 (2) - Kim-Joy.jpg"
import Handshake26Medium from "../../../public/handshakes/Medium/S09E05 (2) - Kim-Joy.jpg"
import Handshake26Large from "../../../public/handshakes/Large/S09E05 (2) - Kim-Joy.jpg"
import Handshake27Small from "../../../public/handshakes/Small/S09E05 (3) - Manon.jpg"
import Handshake27Medium from "../../../public/handshakes/Medium/S09E05 (3) - Manon.jpg"
import Handshake27Large from "../../../public/handshakes/Large/S09E05 (3) - Manon.jpg"
import Handshake28Small from "../../../public/handshakes/Small/S09E06 (1) - Ruby.jpg"
import Handshake28Medium from "../../../public/handshakes/Medium/S09E06 (1) - Ruby.jpg"
import Handshake28Large from "../../../public/handshakes/Large/S09E06 (1) - Ruby.jpg"
import Handshake29Small from "../../../public/handshakes/Small/S09E06 (2) - Rahul.jpg"
import Handshake29Medium from "../../../public/handshakes/Medium/S09E06 (2) - Rahul.jpg"
import Handshake29Large from "../../../public/handshakes/Large/S09E06 (2) - Rahul.jpg"
import Handshake30Small from "../../../public/handshakes/Small/S09E07 (1) - Kim-Joy.jpg"
import Handshake30Medium from "../../../public/handshakes/Medium/S09E07 (1) - Kim-Joy.jpg"
import Handshake30Large from "../../../public/handshakes/Large/S09E07 (1) - Kim-Joy.jpg"

export const episodeList: Episode[] = [
  {
    number: 1,
    handshakes: null
  },
  {
    number: 2,
    handshakes: [
      {
        recipient: Season9Contestants.Dan,
        challenge: Challenge.Signature,
        position: 1,
        image: {
          small: Handshake19Small,
          medium: Handshake19Medium,
          large: Handshake19Large,
        }
      },
      {
        recipient: Season9Contestants.Rahul,
        challenge: Challenge.Showstopper,
        position: 2,
        image: {
          small: Handshake20Small,
          medium: Handshake20Medium,
          large: Handshake20Large,
        }
      },
      {
        recipient: Season9Contestants.Ruby,
        challenge: Challenge.Showstopper,
        position: 3,
        image: {
          small: Handshake21Small,
          medium: Handshake21Medium,
          large: Handshake21Large,
        }
      }
    ]
  },
  {
    number: 3,
    handshakes: [{
      recipient: Season9Contestants.Dan,
      challenge: Challenge.Signature,
      position: 1,
      image: {
        small: Handshake22Small,
        medium: Handshake22Medium,
        large: Handshake22Large,
      }
    }]
  },
  {
    number: 4,
    handshakes: [
      {
        recipient: Season9Contestants.Dan,
        challenge: Challenge.Signature,
        position: 1,
        image: {
          small: Handshake23Small,
          medium: Handshake23Medium,
          large: Handshake23Large,
        }
      },
      {
        recipient: Season9Contestants.Jon,
        challenge: Challenge.Signature,
        position: 2,
        image: {
          small: Handshake24Small,
          medium: Handshake24Medium,
          large: Handshake24Large,
        }
      }
    ]
  },
  {
    number: 5,
    handshakes: [
      {
        recipient: Season9Contestants.Rahul,
        challenge: Challenge.Signature,
        position: 1,
        image: {
          small: Handshake25Small,
          medium: Handshake25Medium,
          large: Handshake25Large,
        }
      },
      {
        recipient: Season9Contestants.KimJoy,
        challenge: Challenge.Signature,
        position: 2,
        image: {
          small: Handshake26Small,
          medium: Handshake26Medium,
          large: Handshake26Large,
        }
      },
      {
        recipient: Season9Contestants.Manon,
        challenge: Challenge.Signature,
        position: 3,
        image: {
          small: Handshake27Small,
          medium: Handshake27Medium,
          large: Handshake27Large,
        }
      }
    ]
  },
  {
    number: 6,
    handshakes: [
      {
        recipient: Season9Contestants.Ruby,
        challenge: Challenge.Signature,
        position: 1,
        image: {
          small: Handshake28Small,
          medium: Handshake28Medium,
          large: Handshake28Large,
        }
      },
      {
        recipient: Season9Contestants.Rahul,
        challenge: Challenge.Signature,
        position: 2,
        image: {
          small: Handshake29Small,
          medium: Handshake29Medium,
          large: Handshake29Large,
        }
      }
    ]
  },
  {
    number: 7,
    handshakes: [{
      recipient: Season9Contestants.KimJoy,
      challenge: Challenge.Signature,
      position: 1,
      image: {
        small: Handshake30Small,
        medium: Handshake30Medium,
        large: Handshake30Large,
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
