import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodos, updateTodo } from 'redux/todoSlice';
import { useState } from 'react';

export const Todo = ({ text, counter, id }) => {
  const [updateText, setUpdateText] = useState(text);
  const dispatch = useDispatch();

  const deleteTodo = () => {
    dispatch(deleteTodos(id));
  };
  const handleUpdate = () => {
    dispatch(updateTodo({ id, text: updateText }));
  };
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={deleteTodo}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <input
          type="text"
          value={updateText}
          onChange={e => {
            setUpdateText(e.target.value);
          }}
        />
        <button type="button" onClick={handleUpdate}>
          UPDATE
        </button>
      </TodoWrapper>
    </>
  );
};
