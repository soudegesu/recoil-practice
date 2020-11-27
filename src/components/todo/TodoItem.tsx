import { Box, Button, Checkbox, TextField } from '@material-ui/core';
import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../state/Atoms';
import { Todo } from "../../state/Atoms";

interface Props {
  todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  const [todoList, setTodoList] = useRecoilState<Todo[]>(todoListState);
  const index = todoList.findIndex((listItem) => listItem === todo)

  const editItemText = (e: any) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todo,
      text: e.target.value,
    });
    setTodoList(newList);
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todo,
      isComplete: !todo.isComplete,
    })
    setTodoList(newList);
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  }

  return (
    <Box>
      <TextField type='text' value={todo.text} onChange={editItemText}/>
      <Checkbox checked={todo.isComplete} onChange={toggleItemCompletion} />
      <Button onClick={deleteItem}>X</Button>
    </Box>
  )
}

const replaceItemAtIndex = (arr: Todo[], index: number, newValue: Todo) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

const removeItemAtIndex = (arr: Todo[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem;