import React from "react";
import { Handshake } from "../types/Handshake";
import { Episode } from "../types/Episode";
import { Season } from "../types/Season";

interface Props {
  handshake: Handshake
  episode: Episode
  season: Season
}

interface State {
  isOpen: boolean;
}

export class PhotoWithDetails extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  componentDidMount(): void {
    document.addEventListener("keydown", this.escapeKeyDown);
  }

  componentWillUnmount(): void {
    document.removeEventListener("keydown", this.escapeKeyDown);
  }

  render() {
    return (
      <React.Fragment>
        {this.renderHandshake(true)}
        {this.renderModal(this.state.isOpen)}
      </React.Fragment>
    )
  }

  toggleImage = (event: React.MouseEvent<HTMLElement>, limitClickTo?: string) => {
    if (!limitClickTo || ((event.target as HTMLElement).className === limitClickTo)) {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  };

  renderHandshake = (clickable: boolean, className?: string) => {
    const { handshake, season, episode } = this.props;

    return (
      <div className={`handshake ${className}`} onClick={(e) => clickable && this.toggleImage(e)}>
        <img className="handshake__image" src={handshake.image} alt={`Paul Hollywood giving a handshake to ${handshake.recipient} on season ${season.number}, episode ${episode.number} of The Great British Bake Off`} key={handshake.image}/>
        <p className="handshake__description__text">{`Episode ${episode.number}, ${handshake.recipient}, ${handshake.challenge}`}</p>
      </div>
    )
  };

  renderModal = (isOpen: boolean) => {
    if (!isOpen) return null;

    return (
      <div className="modal" onClick={(e) => this.toggleImage(e, "modal")}>
        {this.renderHandshake(false, "handshake--large")}
      </div>
    )
  };

  escapeKeyDown = (event: KeyboardEvent ) => {
    if (event.code === "Escape") {
      this.setState({
        isOpen: false
      })
    }
  }
}