import React, { FC } from 'react'
import { useRecoilValue } from 'recoil';
import { Todo, todoListState } from '../state/Atoms';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';

const TodoList: FC = () => {

  const todoList = useRecoilValue<Todo[]>(todoListState);

  return (
    <>
      <TodoItemCreator />
      {
        todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      }
    </>
  )
}

export default TodoList;
