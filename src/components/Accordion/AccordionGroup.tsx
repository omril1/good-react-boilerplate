import * as React from 'react';
import * as style from './style.scss';
import { Collapseable } from '../Collapseable/index';
import { AccordionSubItem } from './AccordionSubItem';

type AccordionGroupProps = {
  labelClicked: (id) => void;
  id: number;
  open?: boolean;
}

export class AccordionGroup extends React.Component<AccordionGroupProps> {

  render() {
    return (
      <div>
        <label className={style.accordionLabel} onClick={this.labelClicked}>Click Me ({this.props.id})</label>
        <Collapseable open={this.props.open}>
          <AccordionSubItem text={'item 1!'}/>
        </Collapseable>
      </div>
    );
  }
  
  labelClicked = (e) => {
    this.props.labelClicked(this.props.id);
  }
}