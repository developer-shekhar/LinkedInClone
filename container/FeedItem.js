import React from 'react';
import {Image} from 'react-native'
import  { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'

import {Images} from '../Theme'


class FeedItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            bookmark : false,
            like : false,
            comment : false,
            share : false
        }
    }

    render() {
      return (
        
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source  = {this.props.userImag}/>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                  <Text style = {{fontSize : 11}}>11h ago</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
                <Text>What can you do to make someone's day better?</Text>
            </CardItem>
            <CardItem cardBody>
              <Image source= {this.props.postImg} style={{height: 160, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
                <Body>
                <Text>Feel a bit stuck?</Text>
                <Text note style = {{fontSize:12}} >shashi26sharma.com</Text>
                </Body>
                <Right> 
                <Button transparent
                onPress = { () => this.setState({bookmark : !this.state.bookmark})}
                active = {this.state.bookmark}
                >
                  <Icon active = {this.state.bookmark} name="bookmark" />
                </Button>
                </Right>
            </CardItem>

            <CardItem>
              <Left>
                <Button 
                transparent 
                onPress = { () => this.setState({like : !this.state.like})}
                active = {this.state.like}
                >
                  <Icon active = {this.state.like}  name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent
                onPress = { () => this.setState({comment : !this.state.comment})}
                active = {this.state.comment}
                >
                  <Icon active = {this.state.comment}  name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent
              onPress = { () => this.setState({share : !this.state.share})}share
                active = {this.state.share}
                >
                  <Icon active = {this.state.share}  name="share" />
                  <Text>Share</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        
      );
    }
  }

  export default FeedItem 
  
  