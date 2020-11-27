import { Box, Container } from '@material-ui/core';
import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Container>
        <Box marginTop={10}>
          <Box>Recoil Sample</Box>
          <TodoList></TodoList>
        </Box>
      </Container>
    </RecoilRoot>
  );
}

export default App;
