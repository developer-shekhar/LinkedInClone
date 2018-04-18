import React from 'react';
import { View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import FooterContainer from './FooterContainer'
import HeaderContainer from './HeaderContainer'
import HomeContainer from './HomeContainer'
class RootContainer extends React.Component {
    render() {
      return (
        <Container>
          <HeaderContainer />
        <Content>
          <HomeContainer />
        </Content>
        <Footer>
          <FooterContainer />
        </Footer>
      </Container>
      );
    }
  }

  export default RootContainer 
  
  