import { Box, Button, TextField } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Todo, todoListState } from '../../state/Atoms';

const TodoItemCreator: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const setTodoList = useSetRecoilState<Todo[]>(todoListState)

  const addItem = () => {
    setTodoList((oldTodoList) => [...oldTodoList, {
      id: getId(),
      text: inputValue,
      isComplete: false,
    }]);
    setInputValue('')
  }

  const onChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <Box>
      <TextField type='text' value={inputValue} onChange={onChange}></TextField>
      <Button variant='outlined' onClick={addItem}>Add</Button>
    </Box>
  )
}

let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
