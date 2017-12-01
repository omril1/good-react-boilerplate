import * as React from 'react';
import * as style from './style.scss';
import { Collapseable } from '../Collapseable';
import { AccordionGroup } from './AccordionGroup';


type accordionGroup = {
  name: string;
  items: any[];
};

namespace Accordion {
  export type Props = {
    accordionGroups: accordionGroup[];
  }
  export type State = {
    openedGroup: number;
  }
}

export class Accordion extends React.Component<Accordion.Props, Accordion.State> {
  constructor(props) {
    super(props);
    this.state = {
      openedGroup: -1
    };

    this.labelClicked = this.labelClicked.bind(this);
  }

  render() {
    return (
      <div className={style.accordion}>
        {
          this.props.accordionGroups.map(this.accordionGroupMapper, this)
        }
      </div>
    );
  }

  labelClicked(id: number) {
    console.log('this.state', this.state);
    
    const groupToOpenIndex = id == this.state.openedGroup ? -1 : id;
    console.log('groupToOpenIndex: ', groupToOpenIndex);
    
    this.setState({
      openedGroup: groupToOpenIndex
    });
  }

  accordionGroupMapper(group: accordionGroup, index: number) {
    return <AccordionGroup key={index} index={index} items={group.items} name={group.name} open={index == this.state.openedGroup} labelClicked={this.labelClicked} />
  }
}