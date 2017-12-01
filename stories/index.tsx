import '../src/commonStyles/globals.scss';
import * as React from 'react';
import * as style from './style.scss';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { Accordion } from '../src/components';


const accordionGroups = [
  { id: 1, name: 'group 1', items: [1, 2, 3] },
  { id: 2, name: 'group 2', items: [4, 5, 6] },
  { id: 3, name: 'group 3', items: [7, 8, 9] },
]
storiesOf('Accordion', module).add('to Accordion', () => <Accordion accordionGroups={accordionGroups} />);

const accordionGroups2 = [
  { id: 1, name: 'group 1', items: [1, 2, 3, 2, 3] },
  { id: 2, name: 'group 2', items: [4, 5, 6, 5, 6] },
  { id: 3, name: 'group 3', items: [7, 8, 9, 8, 9] },
  { id: 3, name: 'group 3', items: [7, 8, 9, 8, 9] },
]
storiesOf('Accordion', module).add('another Accordion', () => <Accordion accordionGroups={accordionGroups2} />);








storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
