import { Season } from "../../types/Season";
import { Networks } from "../../types/constants/Networks";
import { episodeList } from "./episodeList";

export const season13: Season = {
  network: Networks.Channel4,
  number: 13,
  episodes: episodeList,
  active: true,
};
