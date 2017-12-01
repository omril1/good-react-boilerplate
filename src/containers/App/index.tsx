import * as React from 'react';
import * as style from './style.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import { Accordion } from '../../components/index';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
  }

  export interface State {
    /* empty */
  }
}

const accordionGroups = [
  { id: 1, name: 'group 1', items: [1, 2, 3] },
  { id: 2, name: 'group 2', items: [4, 5, 6] },
  { id: 3, name: 'group 3', items: [7, 8, 9] },
]
@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, App.State> {

  render() {
    return (
      <div className={style.normal}>
        <Accordion accordionGroups={accordionGroups}/>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}
