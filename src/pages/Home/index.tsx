import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Background from '../../components/Background';
import EventCard from '../../components/EventCard';
import Header from '../../components/Header';
import Search from '../../components/Search';

import { Container } from './styles';
import { FlatList } from 'react-native';

const Home: React.FC = () => {

  const navigation: any = useNavigation();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("api/events")
      .then((res) => setEvents(res.data.events))
      .catch((err) => console.log(err))
  }, [])

  const renderItem = ({ item }) => (
    <EventCard
      title={item.title}
      desc={item.description}
      locale={item.locale}
      image={item.image}
    />
  );

  return (
    <Background>

      <Header />

      <Container>
        <Search />
        <FlatList
          data={events}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingVertical: 20, marginTop: 10 }}
        />

      </Container>

    </Background>
  );
}

export default Home;