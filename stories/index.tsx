import * as React from 'react';
import * as style from './style.scss';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

class NewComponent extends React.Component {
  render() {
    return (
      <div className={style.someStyle}> This is just a test !!! </div>
    );
  }
}

storiesOf('NewComponent', module).add('to NewComponent', () => <NewComponent />);











storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
