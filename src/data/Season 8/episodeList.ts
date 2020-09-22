import { Challenge } from "../../types/constants/Challenge";
import { Episode } from "../../types/Episode";
import { Season8Contestants } from "../../types/constants/Season8Contestants";
import Handshake12Small from "../../images/handshakes/Small/S08E01(1) - Steven.jpg"
import Handshake12Medium from "../../images/handshakes/Medium/S08E01(1) - Steven.jpg"
import Handshake12Large from "../../images/handshakes/Large/S08E01(1) - Steven.jpg"
import Handshake13Small from "../../images/handshakes/Small/S08E01(2) - Sophie.jpg"
import Handshake13Medium from "../../images/handshakes/Medium/S08E01(2) - Sophie.jpg"
import Handshake13Large from "../../images/handshakes/Large/S08E01(2) - Sophie.jpg"
import Handshake14Small from "../../images/handshakes/Small/S08E04 - Liam.jpg"
import Handshake14Medium from "../../images/handshakes/Medium/S08E04 - Liam.jpg"
import Handshake14Large from "../../images/handshakes/Large/S08E04 - Liam.jpg"
import Handshake15Small from "../../images/handshakes/Small/S08E05 (1) - Steven.jpg"
import Handshake15Medium from "../../images/handshakes/Medium/S08E05 (1) - Steven.jpg"
import Handshake15Large from "../../images/handshakes/Large/S08E05 (1) - Steven.jpg"
import Handshake16Small from "../../images/handshakes/Small/S08E05 (2) - Yan.jpg"
import Handshake16Medium from "../../images/handshakes/Medium/S08E05 (2) - Yan.jpg"
import Handshake16Large from "../../images/handshakes/Large/S08E05 (2) - Yan.jpg"
import Handshake17Small from "../../images/handshakes/Small/S08E05 (3) - Stacey.jpg"
import Handshake17Medium from "../../images/handshakes/Medium/S08E05 (3) - Stacey.jpg"
import Handshake17Large from "../../images/handshakes/Large/S08E05 (3) - Stacey.jpg"
import Handshake18Small from "../../images/handshakes/Small/S08E08 - Stacey.jpg"
import Handshake18Medium from "../../images/handshakes/Medium/S08E08 - Stacey.jpg"
import Handshake18Large from "../../images/handshakes/Large/S08E08 - Stacey.jpg"

export const episodeList: Episode[] = [
  {
    number: 1,
    handshakes: [
      {
        recipient: Season8Contestants.Steven,
        challenge: Challenge.Signature,
        position: 1,
        image: {
          small: Handshake12Small,
          medium: Handshake12Medium,
          large: Handshake12Large,
        }
      },
      {
        recipient: Season8Contestants.Sophie,
        challenge: Challenge.Signature,
        position: 2,
        image: {
          small: Handshake13Small,
          medium: Handshake13Medium,
          large: Handshake13Large,
        }
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
      image: {
        small: Handshake14Small,
        medium: Handshake14Medium,
        large: Handshake14Large,
      }
    }]
  },
  {
    number: 5,
    handshakes: [
      {
        recipient: Season8Contestants.Steven,
        challenge: Challenge.Signature,
        position: 1,
        image: {
          small: Handshake15Small,
          medium: Handshake15Medium,
          large: Handshake15Large,
        }
      },
      {
        recipient: Season8Contestants.Yan,
        challenge: Challenge.Signature,
        position: 2,
        image: {
          small: Handshake16Small,
          medium: Handshake16Medium,
          large: Handshake16Large,
        }
      },
      {
        recipient: Season8Contestants.Stacey,
        challenge: Challenge.Signature,
        position: 3,
        image: {
          small: Handshake17Small,
          medium: Handshake17Medium,
          large: Handshake17Large,
        }
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
      image: {
        small: Handshake18Small,
        medium: Handshake18Medium,
        large: Handshake18Large,
      }
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
