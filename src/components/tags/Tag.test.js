import React from 'React';
import ReactDOM from 'react-dom';
import { Tags } from './Tags';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Tags/>', () => {
  const data = {
    tags: [
      { id: 1, color: '#e91e63', selected: false },
      { id: 2, color: '#2196f3', selected: false },
      { id: 3, color: '#8bc34a', selected: false },
      { id: 4, color: '#ff5722', selected: false },
    ],
    doneChange: jest.fn(),
  };
  it('should render Tags', () => {
    const wrapper = shallow(
      <Tags tags={data.tags} onSelected={data.doneChange} />
    );
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(
      <Tags tags={data.tags} onSelected={data.doneChange} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call the function on click', () => {
    const wrapper = mount(
      <Tags tags={data.tags} onSelected={data.doneChange} />
    );
    const span = wrapper.find('span').at(0);
    span.simulate('click');
    expect(data.doneChange).toHaveBeenCalledTimes();
  });
  // These tests are probably not required I leave here for reference
  // maybe to remove?
  it('should contains 4 elements', () => {
    const wrapper = mount(<Tags tags={data.tags} />);
    expect(wrapper.find('span').length).toBe(4);
  });

  it('should contains 3 properties', () => {
    const wrapper = mount(<Tags tags={data.tags} />);
    const firstSpan = wrapper.find('span').at(0);
    expect(firstSpan.prop('id')).toBeDefined();
    expect(firstSpan.prop('color')).toBeDefined();
    expect(firstSpan.prop('selected')).toBeDefined();
  });

  it('should contains the passed value for each property', () => {
    const wrapper = mount(<Tags tags={data.tags} />);
    const firstSpan = wrapper.find('span').at(0);
    expect(firstSpan.prop('id')).toBe(1);
    expect(firstSpan.prop('color')).toBe('#e91e63');
    expect(firstSpan.prop('selected')).toBe(false);
  });
});
