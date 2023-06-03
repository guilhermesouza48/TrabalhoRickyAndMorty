import React, {Component} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ContainerPerfil,
  InformacoesPerson,
  Foto,
  Nome,
  Informacoes,
  Voltar,
  TextoVoltar,
} from './styles';

export default class Perfil extends Component {
  render() {
    const {route} = this.props;
    const {perfil} = route.params;
    // const navigation = useNavigation();

    return (
      <ContainerPerfil style={{backgroundColor: 'black'}}>
        <InformacoesPerson>
          <Nome>{perfil.name}</Nome>
          <Informacoes>
            {perfil.species} - {perfil.status}
          </Informacoes>
          <Informacoes>Location: {perfil.location}</Informacoes>
          <Informacoes>Episode: {perfil.episode}</Informacoes>
          <Foto source={{uri: perfil.avatar}} />
          {/* <Voltar
            onPress={() => {
                navigation.navigate('main');
            }}>
            <TextoVoltar>Voltar para as pesquisa</TextoVoltar>
          </Voltar> */}
        </InformacoesPerson>
      </ContainerPerfil>
    );
  }
}
