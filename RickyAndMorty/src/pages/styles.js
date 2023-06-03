import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

// Perfil
export const InformacoesPerson = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Informacoes = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  color: #fff;
  text-align: center;
`;

export const ContainerPerfil = styled.View`
  backgroundColor: black,
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Nome = styled.Text`
  font-size: 40px;
  color: #3ae880;
  text-align: center;
`;

export const Foto = styled.Image`
  margin-top: 25px;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  background: #eee;
`;

export const Voltar = styled(RectButton)`
  margin-top: 75px;
  align-self: stretch;
  border-radius: 35px;
  background: #3ae880;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 250px;
`;

export const TextoVoltar = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
`;

// Main
export const Form = styled.View`
  margin-top: 5%;
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput`
    flex: 1;
    height: 40px;
    color: #e6e381; 
    borderWidth: 2,
    borderColor: '#3AE880',
    border-radius: 35px;
    padding: 0 15px;
    border: 1px solid #eee;
    margin: 2px;
`;

export const Descricao = styled.Text`
  font-size: 12px;
  color: #3ae880;
`;

export const Sobre = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  color: white;
`;

export const Pesquisar = styled(RectButton)`
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  background: #3ae880;
  border-radius: 35px;
  margin-left: 10px;
  padding: 8px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const Lista = styled.FlatList`
  margin-top: 20px;
`;

export const Cardzim = styled.View`
  margin: 0 20px 30px;
  border: 3px solid #3ae880;
  padding: 15px;
  border-radius: 35px;
`;

export const Avatar = styled.Image`
  flex: 0.5;
  width: 150px;
  height: 80px;
  border-radius: 180px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: #3ae880;
  font-weight: bold;
  margin-top: 4px;
`;
export const Btns = styled.View`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Botao = styled(RectButton)`
  border-radius: 35px;
  background: #3ae880;
  justify-content: center;
  align-items: center;
  height: 36px;
  margin-right: 10px;
  width: 150px;
`;

export const BotaoDelete = styled(RectButton)`
  border-radius: 80px;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 50px;
`;

export const BotaoText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;
