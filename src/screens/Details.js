import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getAstroidInfo} from '../common/functions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFF',
  },
  itemVIew: {
    paddingVertical: 20,
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  contentText: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#000',
    // marginBottom: 20,
  },
});

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      astroidId: 0,
      data: {},
    };
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener(
      'focus',
      this.onFocus,
    );
  }

  componentWillUnmount() {
    if (this.focusListener) {
      this.focusListener();
    }
  }

  onFocus = () => {
    console.log('onFocus');
    const {route} = this.props;
    const {astroidId} = route.params;
    this.setState({astroidId}, this.getData);
  };

  getData = async () => {
    try {
      const {astroidId} = this.state;
      const response = await getAstroidInfo(astroidId);
      console.log(response);
      this.setState({data: response});
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.itemVIew}>
          <Text style={styles.mainText}>Name</Text>
          <Text style={styles.contentText}>{data.name}</Text>
        </View>
        <View style={styles.itemVIew}>
          <Text style={styles.mainText}>NASA JPL URL</Text>
          <Text style={styles.contentText}>{data.nasa_jpl_url}</Text>
        </View>
        <View style={styles.itemVIew}>
          <Text style={styles.mainText}>is potentially hazardous asteroid ?</Text>
          <Text style={styles.contentText}>{data.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</Text>
        </View>
      </View>
    );
  }
}

export default Details;
