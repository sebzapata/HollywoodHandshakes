import {Challenge} from "./constants/Challenge";

interface Handshake {
  recipient: string;
  challenge: Challenge;
  image: string;
  position: number;
}
