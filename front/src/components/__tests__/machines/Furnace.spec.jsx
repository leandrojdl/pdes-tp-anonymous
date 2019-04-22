import React from 'react';
import { shallow, mount } from 'enzyme';
import Furnace from '../../machines/Furnace';

describe('Furnace Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Furnace />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an machine className', () => {
    const component = mount(<Furnace />);
    expect(component.find('img').hasClass('machine')).toBeTruthy();
  });
});