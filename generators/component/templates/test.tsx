import * as React from 'react';
import { <%=capitalizedName%> as Component } from './';
import Enzyme, { ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

let component: ShallowWrapper;

beforeEach(() => {
  component = Enzyme.shallow(<Component />);
});

it('should render <%=componentName%> and not crash', () => {
  expect(component).not.toThrow();
});
