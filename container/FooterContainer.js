import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Footer,
    FooterTab,
    Text,
    Body,
    Left,
    Right,
    Icon,
    Badge
  } from "native-base";

  class FooterContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false,
        tab5: false
      };
    }
    toggleTab1() {
      this.setState({
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false,
        tab5: false
      });
    }
    toggleTab2() {
      this.setState({
        tab1: false,
        tab2: true,
        tab3: false,
        tab4: false,
        tab5: false
      });
    }
    toggleTab3() {
      this.setState({
        tab1: false,
        tab2: false,
        tab3: true,
        tab4: false,
        tab5: false
      });
    }
    toggleTab4() {
      this.setState({
        tab1: false,
        tab2: false,
        tab3: false,
        tab4: true,
        tab5: false
      });
    }
    toggleTab5() {
      this.setState({
        tab1: false,
        tab2: false,
        tab3: false,
        tab4: false,
        tab5: true
      });
    }
    render() {
      return (
        <FooterTab>
        <Button
          active={this.state.tab1}
          onPress={() => this.toggleTab1()}
          vertical
        >
          <Icon active={this.state.tab1} name="ios-home" />
          { this.state.tab1 &&  <Text>Home</Text> }
        </Button>
        <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
          <Icon type="FontAwesome" active={this.state.tab2} name="users" />
          { this.state.tab2 &&   <Text style={{fontSize:12}}>Networks</Text> }
         
        </Button>
        <Button
          active={this.state.tab3}
          onPress={() => this.toggleTab3()}
          vertical
          badge
        >
          <Badge style={{ backgroundColor: "green" }}>
            <Text>51</Text>
          </Badge>
          <Icon type="FontAwesome" active={this.state.tab3} name="comments" />
          { this.state.tab3 && <Text>Messaging</Text>}
        </Button>

        <Button 
          active={this.state.tab4} 
          onPress={() => this.toggleTab4()}
          vertical 
          badge
        >
          <Badge>
              <Text>2</Text>
            </Badge>  
          <Icon type="FontAwesome" active={this.state.tab4} name="bell" />
          { this.state.tab4 &&  <Text>Notification</Text>}
        </Button>

        <Button 
          active={this.state.tab5} 
          onPress={() => this.toggleTab5()}
          vertical
          >
           <Icon type="FontAwesome" active={this.state.tab5} name="briefcase" />
          { this.state.tab5 &&  <Text>Jobs</Text> }
        </Button>

      </FooterTab>
      );
    }
  }
  
  export default FooterContainer;