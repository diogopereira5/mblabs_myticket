import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  TouchableOpacity,
  Text
} from "react-native";

import Background from '../../components/Background';
import EventCard from '../../components/EventCard';
import Header from '../../components/Header';
import Search from '../../components/Search';

import { Container } from './styles';

const Home: React.FC = () => {

  const navigation: any = useNavigation();

  return (
    <Background>

      <Header />

      <Container>
        <Search />
        <EventCard />
      </Container>

    </Background>
  );
}

export default Home;