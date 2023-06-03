import React, {Component} from 'react';
import {Keyboard, ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import {
  Btns,
  Botao,
  BotaoDelete,
  BotaoText,
  Container,
  Form,
  Input,
  Pesquisar,
  Lista,
  Cardzim,
  Avatar,
  Name,
  Sobre,
  Descricao,
} from './styles';

export default class Main extends Component {
  state = {
    Cartao: '',
    cards: [],
    loading: false,
  };

  async componentDidMount() {
    const cards = await AsyncStorage.getItem('cards');

    if (cards) {
      this.setState({cards: JSON.parse(cards)});
    }
  }

  async componentDidUpdate(_, prevState) {
    const {cards} = this.state;

    if (prevState.cards !== cards) {
      await AsyncStorage.setItem('cards', JSON.stringify(cards));
    }
  }

  removeCard = async id => {
    const {cards} = this.state;
    cards.splice(id, 1);
    this.setState({cards: cards});
  };

  handleNovoCartao = async () => {
    const {cards, Cartao} = this.state;

    this.setState({loading: true});

    try {
      const response = await api.get(
        `https://rickandmortyapi.com/api/character/?name=${Cartao}`,
      );
      this.setState({loading: false});
      for (let i = 0; i <= response.data.info.count; i++) {
        if (!response.data.results[i]?.name && response.data.info.next) {
         
          continue;
        }
        const episode = await api.get(response.data.results[i].episode[0]);
        const location = await api.get(response.data.results[i].location.url);
        const data = {
          id: response.data.results[i].id,
          name: response.data.results[i].name,
          species: response.data.results[i].species,
          avatar: response.data.results[i].image,
          status: response.data.results[i].status,
          episode: episode.data.name,
          location: location.data.name,
        };
        cards.push(data);
      }

      this.setState({
        cards: cards,
        loading: false,
      });
    } catch (error) {
      this.setState({loading: false});
    }

    Keyboard.dismiss();
  };

  render() {
    let {cards, Cartao, loading} = this.state;
    const uniqueItems = [
      ...new Map(cards.map(item => [item.id, item])).values(),
    ];
    cards = uniqueItems;

    return (
      <Container style={{backgroundColor: 'black'}}>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Pesquisa do Universo"
            placeholderTextColor={'white'}
            value={Cartao}
            onChangeText={text => this.setState({Cartao: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleNovoCartao}
          />
          <Pesquisar loading={loading} onPress={this.handleNovoCartao}>
            {loading ? (
              <ActivityIndicator color="black" />
            ) : (
              <Icon name="add" size={20} color="black" />
            )}
          </Pesquisar>
        </Form>
        <Lista
          showVerticalScrollIndicator={false}
          data={cards}
          keyExtractor={card => card.id.toString()}
          renderItem={({item}) => (
            <Cardzim>
              <View style={{flexDirection: 'row'}}>
                <Avatar source={{uri: item.avatar}} />
                <View style={{marginLeft: 10}}>
                  <Name>{item.name}</Name>
                  <Sobre>
                    {item.species} - {item.status}
                  </Sobre>
                  <Descricao>Visto por último em:</Descricao>
                  <Sobre>{item.episode}</Sobre>
                  <Descricao>Apareceu primeiro no episódio:</Descricao>
                  <Sobre>{item.location}</Sobre>
                </View>
              </View>

              <Btns style={{flexDirection: 'row'}}>
              <Botao
                onPress={() => {
                  this.props.navigation.navigate('perfil', {perfil: item});
                }}>
                <BotaoText>Ver</BotaoText>
              </Botao>

              <BotaoDelete
                onPress={() => {
                  this.removeCard(cards.indexOf(item));
                }}
                style={{backgroundColor: '#FA5F57'}}>
                <BotaoText>
                  <Icon name="delete" size={20} />
                </BotaoText>
              </BotaoDelete>
              </Btns>

              
            </Cardzim>
          )}
        />
      </Container>
    );
  }
}
