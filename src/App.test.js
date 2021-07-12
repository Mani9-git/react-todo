// import { render, screen } from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter : new EnzymeAdapter() });

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders non empty component without crashing', () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});

test('renders without error', () => {
  const wrapper = setup();
  //const appComponent = wrapper.find("[data-test='component-app']");
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test('renders todo app title', () => {
  const wrapper = setup();
  const title = findByTestAttr(wrapper, "todo-title");
  expect(title.length).toBe(1);
});

