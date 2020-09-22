import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
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
  const { ref, inView } = useInView({rootMargin: '0px 0px 200px 0px'});
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", escapeKeyDown);

    return () => {
      document.removeEventListener("keydown", escapeKeyDown);
    }
  });

  useEffect(() => {
    if (inView) setIsIntersecting(true);
  }, [inView]);


  const toggleImage = (event: React.MouseEvent<HTMLElement>, limitClickTo?: string) => {
    if (!limitClickTo || ((event.target as HTMLElement).className === limitClickTo)) {
      setIsOpen(!isOpen)
    }
  };

  const renderHandshake = (clickable: boolean, className?: string) => {
    return (
      <div ref={ref} className={`handshake ${className}`} onClick={(e) => clickable && toggleImage(e)}>
        <div className="handshake__content">
          <img className="handshake__content__image" srcSet={isIntersecting ? `${handshake.image.large} 1920w, ${handshake.image.medium} 989w, ${handshake.image.small} 425w` : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="} src={isIntersecting ? handshake.image.small : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="} alt={`Paul Hollywood giving a handshake to ${handshake.recipient} on season ${season.number}, episode ${episode.number} of The Great British Bake Off`} key={handshake.image.small} />
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
