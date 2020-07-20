import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
} from 'native-base';
import {getRandomAstroidId} from '../common/functions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFF',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  Item: {
    paddingVertical: 15,
  },
  button: {
    marginVertical: 10,
  },

  input: {
    fontSize: 15,
    color: '#000',
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    // marginVertical: 15,
    padding: 5,
    marginLeft: 0,
  },
  buttonContainer: {marginTop: 50},
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      astroidId: '2162038',
    };
  }

  onChangeText = (val) => {
    this.setState({astroidId: val});
  };

  submit = () => {
    const {astroidId} = this.state;
    const {navigation} = this.props;
    navigation.navigate('Details', {astroidId});
  };

  onRandom = async () => {
    const {navigation} = this.props;
    navigation.navigate('List');
  };

  render() {
    const {astroidId} = this.state;
    return (
      <Container style={styles.container}>
        {/* <Header /> */}
        <Content>
          <Form>
            <Item floatingLabel style={styles.Item}>
              {/* <Label>Astroid ID</Label> */}
              <Input
                placeholder="Enter Asteroid ID"
                value={astroidId}
                onChangeText={this.onChangeText}
                style={styles.input}
              />
            </Item>
          </Form>
          <View style={styles.buttonContainer}>
            <Button
              full
              primary
              rounded
              onPress={this.submit}
              style={styles.button}
              disabled={!astroidId || astroidId.trim() === ''}>
              <Text style={styles.buttonText}>Submit</Text>
            </Button>

            <Button
              full
              style={styles.button}
              primary
              rounded
              onPress={this.onRandom}>
              <Text style={styles.buttonText}>Random Asteroid</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Home;
