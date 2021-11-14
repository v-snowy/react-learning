/**
 * @jest-environment jsdom
 */
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Dropdown } from '../Dropdown';

describe('Dropdown', () => {
  test('should render', () => {
    const wrapper: ShallowWrapper = shallow(<Dropdown children={ <div /> } button={ <button /> } />);

    expect(wrapper).toBeDefined();
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  });

/*  test('should render (snapshot)', () => {
    const wrapper: ShallowWrapper = shallow(<Dropdown children={ <div /> } button={ <button /> } />);

    expect(wrapper).toMatchSnapshot();
  })*/
})