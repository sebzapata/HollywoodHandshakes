import { Challenge } from "../../types/constants/Challenge";
import { Season14Contestants } from "../../types/constants/Season14Contestants";
import { Episode } from "../../types/Episode";
import Handshake49Large from "../../../public/handshakes/Large/S14E02 - Tasha.jpg";
import Handshake50Large from "../../../public/handshakes/Large/S14E02 - Josh.jpg";
import Handshake51Large from "../../../public/handshakes/Large/S14E05 - Cristy.jpg";

export const episodeList: Episode[] = [
  {
    number: 1,
    handshakes: null,
  },
  {
    number: 2,
    handshakes: [
      {
        recipient: Season14Contestants.Tasha,
        challenge: Challenge.Signature,
        position: 1,
        image: {
          large: Handshake49Large,
        },
      },
      {
        recipient: Season14Contestants.Josh,
        challenge: Challenge.Showstopper,
        position: 2,
        image: {
          large: Handshake50Large,
        },
      },
    ],
  },
  {
    number: 5,
    handshakes: [
      {
        recipient: Season14Contestants.Cristy,
        challenge: Challenge.Signature,
        position: 2,
        image: {
          large: Handshake51Large,
        },
      },
    ],
  },
];
