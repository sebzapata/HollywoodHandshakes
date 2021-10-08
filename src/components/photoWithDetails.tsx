import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import Image from 'next/image';

import { Handshake } from "../types/Handshake";
import { Episode } from "../types/Episode";
import { Season } from "../types/Season";

import styles from './photoWithDetails.module.scss';

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

  const renderHandshake = (clickable: boolean, isLarge: boolean) => {
    return (
      <div ref={ref} className={classNames(styles.handshake, {[styles.handshakeLarge]: isLarge})} onClick={(e) => clickable && toggleImage(e)}>
        <div className={styles.handshake__content}>
          <Image
            src={isIntersecting ? handshake.image.large : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="}
            alt={`Paul Hollywood giving a handshake to ${handshake.recipient} on season ${season.number}, episode ${episode.number} of The Great British Bake Off`}
            width={1920}
            height={1080}
            layout="responsive"
            unoptimized
          />
          <p className={styles.handshake__content__watermark}>{`© ${season.network}`}</p>
        </div>
        <p className={styles.handshake__description}>{`Episode ${episode.number}, ${handshake.recipient}, ${handshake.challenge}`}</p>
      </div>
    )
  };

  const renderModal = (isOpen: boolean) => {
    if (!isOpen) return null;

    return (
      <div className={styles.modal} onClick={(e) => toggleImage(e, styles.modal)}>
        {renderHandshake(false, true)}
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
      {renderHandshake(true, false)}
      {renderModal(isOpen)}
    </React.Fragment>
  )
};
