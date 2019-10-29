import React from "react";
import plusIcon from "../images/miscellaneous/iconmonstr-plus-1.svg";
import minusIcon from "../images/miscellaneous/iconmonstr-minus-1.svg";
interface Props {
  title: string;
}

interface State {
  accordionOpen: boolean;
}
export class AccordionItem extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      accordionOpen: false
    }
  }

  render() {
    return (
      <div className="accordion__section">
        <div className="accordion__section__header" onClick={() => this.setState({accordionOpen: !this.state.accordionOpen})}>
          <button className="accordion__section__header__title">{this.props.title}</button>
          <img className="accordion__section__header__icon" src={this.state.accordionOpen ? minusIcon : plusIcon} alt={this.state.accordionOpen ? "Close accordion" : "Open accordion"}/>
        </div>
        {this.state.accordionOpen && <div className="accordion__section__panel">
          {this.props.children}
        </div>}
      </div>
    )
  }
}
