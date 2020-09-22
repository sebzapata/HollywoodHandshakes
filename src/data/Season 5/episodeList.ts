import {Episode} from "../../types/Episode";
import {Season5Contestants} from "../../types/constants/Season5Contestants";
import {Challenge} from "../../types/constants/Challenge";
import Handshake3Small from "../../images/handshakes/Small/S05E02 - Norman.jpg"
import Handshake3Medium from "../../images/handshakes/Medium/S05E02 - Norman.jpg"
import Handshake3Large from "../../images/handshakes/Large/S05E02 - Norman.jpg"
import Handshake4Small from "../../images/handshakes/Small/S05E03 - Luis.jpg"
import Handshake4Medium from "../../images/handshakes/Medium/S05E03 - Luis.jpg"
import Handshake4Large from "../../images/handshakes/Large/S05E03 - Luis.jpg"

export const episodeList: Episode[] = [
  {
    number: 1,
    handshakes: null
  },
  {
    number: 2,
    handshakes: [{
      recipient: Season5Contestants.Norman,
      position: 1,
      challenge: Challenge.Signature,
      image:{
        small: Handshake3Small,
        medium: Handshake3Medium,
        large: Handshake3Large,
      }
    }]
  },
  {
    number: 3,
    handshakes: [{
      recipient: Season5Contestants.Luis,
      position: 1,
      challenge: Challenge.Signature,
      image:{
        small: Handshake4Small,
        medium: Handshake4Medium,
        large: Handshake4Large,
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
