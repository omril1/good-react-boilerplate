import * as React from 'react';
import * as style from './style.scss';


type AccordionSubItemProps = {
  text: string;
  onItemClicked?: React.MouseEventHandler<HTMLLIElement>;
}

export class AccordionSubItem extends React.PureComponent<AccordionSubItemProps> {
  static defaultProps: AccordionSubItemProps = {
    text: '',
    onItemClicked: () => {}
  }

  render() {
    return <li className={style.AccordionSubItem} onClick={this.props.onItemClicked}>{this.props.text}</li>;
  }
}