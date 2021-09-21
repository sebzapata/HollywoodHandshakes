import { Season } from "../../types/Season";
import { Networks } from "../../types/constants/Networks";
import { episodeList } from "./episodeList";


export const season12: Season = {
  network: Networks.Channel4,
  number: 12,
  episodes: episodeList,
  active: true,
};
