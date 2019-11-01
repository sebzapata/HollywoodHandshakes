import React from "react";
import { Handshake } from "../types/Handshake";
import { Episode } from "../types/Episode";
import { Season } from "../types/Season";

interface Props {
  handshake: Handshake
  episode: Episode
  season: Season
}

export const PhotoWithDetails = (props: Props) => {
  return (
    <div className="handshake">
      <img className="handshake__image" src={props.handshake.image} alt={`Handshake being given to ${props.handshake.recipient}`} key={props.handshake.image}/>
      <p className="handshake__description__text">{`Episode ${props.episode.number}, ${props.handshake.recipient}, ${props.handshake.challenge}`}</p>
    </div>
  )
};
