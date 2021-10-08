import { Challenge } from '../../types/constants/Challenge';
import { Season12Contestants } from '../../types/constants/Season12Contestants';
import { Episode } from "../../types/Episode";
import Handshake38Large from "../../../public/handshakes/Large/S12E03 - Giuseppe.jpg"

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
      recipient: Season12Contestants.Giuseppe,
      challenge: Challenge.Signature,
      position: 1,
      image: {
        large: Handshake38Large,
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
