import React from 'React';
import ReactDOM from 'react-dom';
import { Categories } from './Categories';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Categories/>', () => {
  const handleToggleDialog = jest.fn();
  const handleConfirmDialog = jest.fn();
  const handleChange = jest.fn();
  const handleSelectedTag = jest.fn();

  it('should render the page', () => {
    const wrapper = shallow(<Categories />);
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Categories />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call handleToggleDialog once', () => {
    const wrapper = shallow(<Categories />);
    console.log(wrapper.debug());
  });
});
