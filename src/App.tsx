import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import TodoList from './components/todo/TodoList';

const App: React.FC = () => {

  const numOfTodoList = 4;

  return (
    <RecoilRoot>
      <Container>
        <Box marginTop={10}>
          <Box>Recoil Sample</Box>
            <Grid container spacing={2}>
            { [...Array(numOfTodoList)].map((_, i) => <RecoilRoot key={i}><Grid ><TodoList/></Grid></RecoilRoot>)}
            </Grid>
        </Box>
      </Container>
    </RecoilRoot>
  );
}

export default App;
