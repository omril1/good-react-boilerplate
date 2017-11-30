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
    // groupOpened: (id: number) => void;
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
        {/* <AccordionGroup labelClicked={this.labelClicked} /> */}
        {/* {this.state.groups} */}
        {
          this.props.accordionGroups.map(group => {
            return <AccordionGroup key={group.id} id={group.id} open={group.id == this.state.openedGroup} labelClicked={this.labelClicked} />
          })
        }
      </div>
    );
  }

  labelClicked = (id: number) => {
    const groupToOpenId = id == this.state.openedGroup ? -1 : id;
    // this.props.groupOpened(groupToOpenId);
    this.setState({
      openedGroup: groupToOpenId
    });
  }
}