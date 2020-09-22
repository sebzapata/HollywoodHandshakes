import {Episode} from "./Episode";

interface Season {
  episodes: Episode[];
  number: number;
  network: string;
  active?: boolean;
}
