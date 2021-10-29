import { Challenge } from '../../types/constants/Challenge';
import { Season12Contestants } from '../../types/constants/Season12Contestants';
import { Episode } from "../../types/Episode";
import Handshake38Large from "../../../public/handshakes/Large/S12E03 - Giuseppe.jpg"
import Handshake39Large from "../../../public/handshakes/Large/S12E04 - Chigs.jpg"
import Handshake40Large from "../../../public/handshakes/Large/S12E05 - Jurgen.jpg"
import Handshake41Large from "../../../public/handshakes/Large/S12E06 - Crystelle.jpg"

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
    handshakes: [{
      recipient: Season12Contestants.Chigs,
      challenge: Challenge.Signature,
      position: 1,
      image: {
        large: Handshake39Large,
      }
    }]
  },
  {
    number: 5,
    handshakes: [{
      recipient: Season12Contestants.Jurgen,
      challenge: Challenge.Signature,
      position: 1,
      image: {
        large: Handshake40Large,
      }
    }]

  },
  {
    number: 6,
    handshakes: [{
      recipient: Season12Contestants.Crystelle,
      challenge: Challenge.Showstopper,
      position: 1,
      image: {
        large: Handshake41Large,
      }
    }]

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
