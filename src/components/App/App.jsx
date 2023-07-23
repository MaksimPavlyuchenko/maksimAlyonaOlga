import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Header, SearchForm, Section, Text } from 'components';
import { getTodos } from 'redux/selectors';
import { TodoList } from 'components/TodoList/TodoList';

export const App = () => {
  const todos = useSelector(getTodos);

  // const [todos, setTodos] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('todos')) ?? [];
  // });

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));

  // }, [todos]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <TodoList />
        </Container>
      </Section>
    </>
  );
};
