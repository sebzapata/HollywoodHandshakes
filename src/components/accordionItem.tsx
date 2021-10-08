import React, { useState } from "react";
import plusIcon from "../images/miscellaneous/iconmonstr-plus-1.svg";
import minusIcon from "../images/miscellaneous/iconmonstr-minus-1.svg";
import Image from 'next/image'

import styles from './accordionItem.module.scss';

interface Props {
  title: string;
}

export const AccordionItem: React.FunctionComponent<Props> = ({ title, children }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className={styles.accordion__section}>
      <div className={styles.accordion__section__header} onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
        <button className={styles.accordion__section__header__title}>{title}</button>
        <div className={styles.accordion__section__header__icon}>
          <Image src={isAccordionOpen ? minusIcon : plusIcon} alt={isAccordionOpen ? "Close accordion" : "Open accordion"} unoptimized />
        </div>
      </div>
      {isAccordionOpen && <div className={styles.accordion__section__panel}>
        {children}
      </div>}
    </div>
  )
};
