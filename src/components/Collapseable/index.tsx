import * as React from 'react';
import * as style from './style.scss';
import { AccordionSubItem } from '../Accordion/AccordionSubItem';

type CollapseableProps = {
  open?: boolean;
}

export class Collapseable extends React.Component<CollapseableProps> {
  render() {
    return (
      <ul className={style.Collapseable} style={{maxHeight: this.props.open ? '100px' : '0px'}}>
        {this.props.children}
      </ul>
    );
  }
}