import React, {useState, useEffect} from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Form from './Form';
import TodoList from './TodoList';

Enzyme.configure({ adapter : new EnzymeAdapter() });

//rather than using React.useState we should destructure useState and use it in Form component,To make jest.fn() work we need to use this code
const mockSetInputText = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState : (initialState) => [initialState, mockSetInputText]
}));

const defaultProps = {todos : [], setTodos(){() => [] }, setStatus:"all"};
const defProps = {filteredTodos : [], setTodos(){() => [] }, setStatus:"all"};

const setupTodo = (props={}) => {
  const setupProps = {...defProps, ...props};
  return shallow(<TodoList {...setupProps} />);
}

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<Form {...setupProps} />);
}

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

describe('state controlled input field', () => {
  test('state update when input field value changes', () => {
    //React.useState = jest.fn(() => ["", mockSetInputText]);

    const wrapper = shallow(<Form />);
    const inputField = wrapper.find("[data-test='input-field']");

    const mockEvent = {target : {value : 'test 1'}};
    inputField.simulate("change", mockEvent);

    expect(mockSetInputText).toHaveBeenCalledWith('test 1');
  }); 
});

describe('Add button simulation', () => {
  test('Checking button click', () => {
    const wrapper = setup();
    const button = wrapper.find("[data-test='add-button']");
    button.simulate('click');

    //need to check after button click, new todo div added or not 
    const wrapperOne = setupTodo();
    const todoDiv = wrapperOne.find("[data-test='todo']");
    expect(todoDiv.length).toBe(1);
  });
});
