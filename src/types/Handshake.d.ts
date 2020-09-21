import {Challenge} from "./constants/Challenge";

interface Handshake {
  recipient: string;
  challenge: Challenge;
  image: {
    small: string;
    medium: string;
    large: string;
  };
  position: number;
}
