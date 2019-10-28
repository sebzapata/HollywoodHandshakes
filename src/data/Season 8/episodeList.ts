import { Challenge } from "../../types/constants/Challenge";
import { Episode } from "../../types/Episode";
import { Season8Contestants } from "../../types/constants/Season8Contestants";
import Handshake12 from "../../images/handshakes/S08E01(1) - Steven.png"
import Handshake13 from "../../images/handshakes/S08E01(2) - Sophie.png"
import Handshake14 from "../../images/handshakes/S08E04 - Liam.png"
import Handshake15 from "../../images/handshakes/S08E05 (1) - Steven.png"
import Handshake16 from "../../images/handshakes/S08E05 (2) - Yan.png"
import Handshake17 from "../../images/handshakes/S08E05 (3) - Stacey.png"
import Handshake18 from "../../images/handshakes/S08E08 - Stacey.png"

export const episodeList: Episode[] = [
  {
    number: 1,
    handshakes: [
      {
        recipient: Season8Contestants.Steven,
        challenge: Challenge.Signature,
        position: 1,
        image: Handshake12
      },
      {
        recipient: Season8Contestants.Sophie,
        challenge: Challenge.Signature,
        position: 2,
        image: Handshake13
      }
    ]
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
    handshakes: [{
      recipient: Season8Contestants.Liam,
      challenge: Challenge.Signature,
      position: 1,
      image: Handshake14
    }]
  },
  {
    number: 5,
    handshakes: [
      {
        recipient: Season8Contestants.Steven,
        challenge: Challenge.Signature,
        position: 1,
        image: Handshake15
      },
      {
        recipient: Season8Contestants.Yan,
        challenge: Challenge.Signature,
        position: 2,
        image: Handshake16
      },
      {
        recipient: Season8Contestants.Stacey,
        challenge: Challenge.Signature,
        position: 3,
        image: Handshake17
      }
    ]
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
    handshakes: [{
      recipient: Season8Contestants.Stacey,
      challenge: Challenge.Signature,
      position: 1,
      image: Handshake18
    }]
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
