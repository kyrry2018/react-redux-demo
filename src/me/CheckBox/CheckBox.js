import React, { Component } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
import Head from '../../common/Head'
export default class CheckBoxExample extends Component {
  render() {
    return (
      <Container>
        <Head title='CheckBox' pushDetails = {() => {this.props.navigation.goBack();} }/>
        <Content>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
