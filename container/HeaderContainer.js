import React from 'react';
import { View } from 'react-native';
import {  Header, Title, Content,  Button, Left, Right, Body, Icon, Text, Item,Input  } from 'native-base';
import FooterContainer from './FooterContainer'

class HeaderContainer extends React.Component {
    render() {
      return (
        <Header searchBar rounded>
            <Button transparent>
                <Icon type="FontAwesome" name='user-circle' />
            </Button>
            <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            </Item>
            <Button transparent>
            <Icon name='menu' />
            </Button>
        
        </Header>
        
      );
    }
  }

  export default HeaderContainer 
  
          
        
        
        