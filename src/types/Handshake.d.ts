import {Challenge} from "./constants/Challenge";

interface Handshake {
  recipient: string;
  challenge: Challenge;
  image: {
    small: StaticImageData;
    medium: StaticImageData;
    large: StaticImageData;
  };
  position: number;
}
