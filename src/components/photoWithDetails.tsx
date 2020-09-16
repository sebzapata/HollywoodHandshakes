import React, { useEffect, useState } from "react";
import { Handshake } from "../types/Handshake";
import { Episode } from "../types/Episode";
import { Season } from "../types/Season";

interface Props {
  handshake: Handshake
  episode: Episode
  season: Season
}

export const PhotoWithDetails: React.FunctionComponent<Props> = ({ handshake, episode, season }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", escapeKeyDown);

    return () => {
      document.removeEventListener("keydown", escapeKeyDown);
    }
  });


  const toggleImage = (event: React.MouseEvent<HTMLElement>, limitClickTo?: string) => {
    if (!limitClickTo || ((event.target as HTMLElement).className === limitClickTo)) {
      setIsOpen(!isOpen)
    }
  };

  const renderHandshake = (clickable: boolean, className?: string) => {
    return (
      <div className={`handshake ${className}`} onClick={(e) => clickable && toggleImage(e)}>
        <div className="handshake__content">
          <img className="handshake__content__image" src={handshake.image} alt={`Paul Hollywood giving a handshake to ${handshake.recipient} on season ${season.number}, episode ${episode.number} of The Great British Bake Off`} key={handshake.image} />
          <p className="handshake__content__watermark">{`© ${season.network}`}</p>
        </div>
        <p className="handshake__description">{`Episode ${episode.number}, ${handshake.recipient}, ${handshake.challenge}`}</p>
      </div>
    )
  };

  const renderModal = (isOpen: boolean) => {
    if (!isOpen) return null;

    return (
      <div className="modal" onClick={(e) => toggleImage(e, "modal")}>
        {renderHandshake(false, "handshake--large")}
      </div>
    )
  };

  const escapeKeyDown = (event: KeyboardEvent ) => {
    if (event.code === "Escape") {
      setIsOpen(false)
    }
  };

  return (
    <React.Fragment>
      {renderHandshake(true)}
      {renderModal(isOpen)}
    </React.Fragment>
  )
};
