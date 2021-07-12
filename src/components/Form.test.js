import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Form from './Form';
import TodoList from './TodoList';
import Todo from './Todo';

Enzyme.configure({ adapter : new EnzymeAdapter() });

test('renders add button', () => {
    const wrapper = shallow(<Form />);
    const button = wrapper.find("[data-test='add-button']");
    expect(button.length).toBe(1);
  });

test('renders select dropdown', () => {
    const wrapper = shallow(<Form />);
    const button = wrapper.find("[data-test='select-dropdown']");
    expect(button.length).toBe(1);
  }); 

test('Checking button click', () => {
    const wrapper = shallow(<Form />);
    const button = wrapper.find("[data-test='add-button']");
    button.simulate('click');

    //need to check after button click, new todo div added or not 
    const wrapperOne = shallow(<Todo />)
    const todoDiv = wrapperOne.find("[data-test='todo']")
    expect(todoDiv.length).toBe(1);
    });  