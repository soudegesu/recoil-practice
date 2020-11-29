import { Container } from '@material-ui/core';
import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import TopPage from './pages/TopPage';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Container>
        <TopPage />
      </Container>
    </RecoilRoot>
  );
}

export default App;
