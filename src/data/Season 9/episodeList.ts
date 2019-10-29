import { Challenge } from "../../types/constants/Challenge";
import { Episode } from "../../types/Episode";
import { Season9Contestants } from "../../types/constants/Season9Contestants";
import Handshake19 from "../../images/handshakes/S09E02 (1) - Dan.png"
import Handshake20 from "../../images/handshakes/S09E02 (2) - Rahul.png"
import Handshake21 from "../../images/handshakes/S09E02 (3) - Ruby.png"
import Handshake22 from "../../images/handshakes/S09E03 - Dan.png"
import Handshake23 from "../../images/handshakes/S09E04 (1) - Dan.png"
import Handshake24 from "../../images/handshakes/S09E04 (2) - Jon.png"
import Handshake25 from "../../images/handshakes/S09E05 (1) - Rahul.png"
import Handshake26 from "../../images/handshakes/S09E05 (2) - Kim-Joy.png"
import Handshake27 from "../../images/handshakes/S09E05 (3) - Manon.png"
import Handshake28 from "../../images/handshakes/S09E06 (1) - Ruby.png"
import Handshake29 from "../../images/handshakes/S09E06 (2) - Rahul.png"
import Handshake30 from "../../images/handshakes/S09E07 (1) - Kim-Joy.png"

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
        image: Handshake19
      },
      {
        recipient: Season9Contestants.Rahul,
        challenge: Challenge.Showstopper,
        position: 2,
        image: Handshake20
      },
      {
        recipient: Season9Contestants.Ruby,
        challenge: Challenge.Showstopper,
        position: 3,
        image: Handshake21
      }
    ]
  },
  {
    number: 3,
    handshakes: [{
      recipient: Season9Contestants.Dan,
      challenge: Challenge.Signature,
      position: 1,
      image: Handshake22
    }]
  },
  {
    number: 4,
    handshakes: [
      {
        recipient: Season9Contestants.Dan,
        challenge: Challenge.Signature,
        position: 1,
        image: Handshake23
      },
      {
        recipient: Season9Contestants.Jon,
        challenge: Challenge.Signature,
        position: 2,
        image: Handshake24
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
        image: Handshake25
      },
      {
        recipient: Season9Contestants.KimJoy,
        challenge: Challenge.Signature,
        position: 2,
        image: Handshake26
      },
      {
        recipient: Season9Contestants.Manon,
        challenge: Challenge.Signature,
        position: 3,
        image: Handshake27
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
        image: Handshake28
      },
      {
        recipient: Season9Contestants.Rahul,
        challenge: Challenge.Signature,
        position: 2,
        image: Handshake29
      }
    ]
  },
  {
    number: 7,
    handshakes: [{
      recipient: Season9Contestants.KimJoy,
      challenge: Challenge.Signature,
      position: 1,
      image: Handshake30
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
