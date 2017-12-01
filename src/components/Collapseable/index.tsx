import * as React from 'react';
import * as style from './style.scss';
import { AccordionSubItem } from '../Accordion/AccordionSubItem';

type CollapseableProps = {
  open?: boolean;
  itemsCount: number;
}

export class Collapseable extends React.Component<CollapseableProps> {
  render() {
    const itemsCount = this.props.itemsCount || 0;
    const maxHeight = itemsCount * 30 + 'px';

    return (
      <ul className={style.Collapseable} style={{ maxHeight: this.props.open ? maxHeight : '0' }}>
        {this.props.children}
      </ul>
    );
  }
}