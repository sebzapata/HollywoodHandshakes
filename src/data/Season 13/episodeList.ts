import { Challenge } from "../../types/constants/Challenge";
import { Season13Contestants } from "../../types/constants/Season13Contestants";
import { Episode } from "../../types/Episode";
import Handshake45Large from "../../../public/handshakes/Large/S13E02 - Dawn.jpg";
import Handshake46Large from "../../../public/handshakes/Large/S13E02 - Maxy.jpg";
import Handshake47Large from "../../../public/handshakes/Large/S13E06 - Maxy.png";
import Handshake48Large from "../../../public/handshakes/Large/S13E06 - Syabira.png";

export const episodeList: Episode[] = [
  {
    number: 1,
    handshakes: null,
  },
  {
    number: 2,
    handshakes: [
      {
        recipient: Season13Contestants.Dawn,
        challenge: Challenge.Signature,
        position: 1,
        image: {
          large: Handshake45Large,
        },
      },
      {
        recipient: Season13Contestants.Maxy,
        challenge: Challenge.Signature,
        position: 1,
        image: {
          large: Handshake46Large,
        },
      },
    ],
  },
  {
    number: 6,
    handshakes: [
      {
        recipient: Season13Contestants.Maxy,
        challenge: Challenge.Signature,
        position: 1,
        image: {
          large: Handshake47Large,
        },
      },
      {
        recipient: Season13Contestants.Syabira,
        challenge: Challenge.Signature,
        position: 2,
        image: {
          large: Handshake48Large,
        },
      },
    ],
  },
];
