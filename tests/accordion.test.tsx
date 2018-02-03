import * as React from 'react';
import { Accordion } from '../src/components/Accordion/index';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

type AccordionProps = {
  accordionGroups: { id: number; items: number[]; name: string }[];
};
let accordion: React.ReactElement<AccordionProps>, $accordion: Cheerio;

beforeEach(() => {
  accordion = (
    <Accordion accordionGroups={[{ items: [1, 2, 3], name: 'just a name' }]} />
  );
  $accordion = Enzyme.render(accordion);
});

test('Accordion should have only 3 li tags', () => {
  expect($accordion.find('li').length).toEqual(3);
  expect($accordion.find('div > ul > li').length).toBe(3);
});

test('Accordion li texts should be valid', () => {
  expect($accordion.find('li').text()).toEqual('item 1item 2item 3');
  expect(null).toBeDefined();
});
