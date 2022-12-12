import React from 'react';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Search from '../../components/Search';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Background>

      <Container>
        <Header />
        <Search />
      </Container>

    </Background>
  );
}

export default Home;