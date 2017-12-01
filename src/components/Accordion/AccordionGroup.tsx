import * as React from 'react';
import * as style from './style.scss';
import { Collapseable } from '../Collapseable/index';
import { AccordionSubItem } from './AccordionSubItem';
import { MouseEvent } from 'react';

type AccordionGroupProps = {
  labelClicked: (index) => void;
  index: number;
  open?: boolean;
  name: string;
  items: any[];
}

export class AccordionGroup extends React.Component<AccordionGroupProps> {

  render() {
    const { items } = this.props;

    return (
      <div>
        <label className={style.accordionLabel} onClick={this.labelClicked}>
          <span>Click Me ({this.props.index})</span>
        </label>
        <Collapseable open={this.props.open} itemsCount={items.length}>
          {
            items.map(subItemsMapper)
          }
        </Collapseable>
      </div>
    );
  }

  labelClicked = (e: MouseEvent<HTMLElement>) => {
    console.log('index: ', this.props.index);
    this.props.labelClicked(this.props.index);
  }
}

function subItemsMapper (value, index) {
  return <AccordionSubItem key={index} text={'item ' + value} />;
}