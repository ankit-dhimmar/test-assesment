import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
// import {ListItem} from 'native-base';
import {getRandomAstroidId} from '../common/functions';

const styles = StyleSheet.create({
  item: {
    height: 50,
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
      page: 1,
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
    this.getData();
  };

  onPressItem = (item) => () => {
    const {navigation} = this.props;
    navigation.navigate('Details', {astroidId: item.id});
  };

  getData = async () => {
    try {
      const response = await getRandomAstroidId();
      console.log(response);
      if (
        response &&
        response.near_earth_objects &&
        response.near_earth_objects.length
      ) {
        this.setState({data: response.near_earth_objects});
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {data} = this.state;
    return (
      <FlatList
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={this.onPressItem(item)}
              style={styles.item}>
              <Text style={styles.itemText}>{item.id}</Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  }
}

export default List;
