import React from 'react';
import {Image, View} from 'react-native'
import  { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Fab } from 'native-base'

import FeedItem from './FeedItem'
import {Images} from '../Theme'


const imgUri = {uri: "https://thumbs.dreamstime.com/b/blue-polygonal-geometric-d-surface-abstract-background-computer-generated-render-84296403.jpg"} 

const imgUri2 = {uri: "https://www.hdwallpaperhub.com/wp-content/uploads/Material/4/HD%20Material%20Design%20Wallpaper%200154.jpg"} 

const userImg = Images.user1


class HomeContainer extends React.Component {
    render() {
      return (
        <Container>
        <Content style={{padding : 8}}>
          <FeedItem userImag = {userImg} postImg =  {imgUri}/>
          <FeedItem userImag = {userImg} postImg = {imgUri2}/>
          <FeedItem userImag = {userImg} postImg = {imgUri}/>
          <FeedItem userImag = {userImg} postImg = {imgUri2}/>
          <FeedItem userImag = {userImg} postImg = {imgUri}/>
        </Content>
       
        <Fab
          active={true}
          direction="up"
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          >
          <Icon type="FontAwesome" name="edit" />
        </Fab>
     
      </Container>
      );
    }
  }

  export default HomeContainer 
  
  