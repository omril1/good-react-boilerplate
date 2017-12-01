import * as React from 'react';
import * as style from './style.scss';
import { Collapseable } from '../Collapseable';
import { AccordionGroup } from './AccordionGroup';

namespace Accordion {
  export type accordionGroup = {
    id: number;
    name: string;
    items: any[];
  };
  export type Props = {
    accordionGroups: accordionGroup[];
  }
  export type State = {
    openedGroup: number;
  }
}

export class Accordion extends React.Component<Accordion.Props, Accordion.State> {
  state = {
    openedGroup: -1
  };

  render() {
    return (
      <div className={style.accordion}>
        {
          this.props.accordionGroups.map(this.accordionGroupMapper, this)
        }
      </div>
    );
  }

  labelClicked = (id: number) => {
    const groupToOpenId = id == this.state.openedGroup ? -1 : id;

    this.setState({
      openedGroup: groupToOpenId
    });
  }

  accordionGroupMapper(group, index) {
    return <AccordionGroup key={index} id={index} items={group.items} name={group.name} open={group.id == this.state.openedGroup} labelClicked={this.labelClicked} />
  }
}