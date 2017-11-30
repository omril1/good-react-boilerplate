import * as React from 'react';
import * as style from './style.scss';


type AccordionSubItemProps = {
  text: string;
}

export class AccordionSubItem extends React.PureComponent<AccordionSubItemProps> {

  render() {
    return <li className={style.AccordionSubItem}>{this.props.text}</li>;
  }
}