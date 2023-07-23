import { Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';
import { getTodos } from 'redux/selectors';

export const TodoList = () => {
  const todos = useSelector(getTodos);

  return (
    <Grid>
      {todos.length > 0 &&
        todos.map(({ id, text }, index) => (
          <GridItem key={id}>
            <Todo id={id} text={text} counter={index + 1} />
          </GridItem>
        ))}
    </Grid>
  );
};
