import React, { Component } from 'react';
import { map } from 'lodash';
import {
  StyleSheet,
  View,
  Image,
  Alert
} from 'react-native';
import Swiper from 'react-native-swiper';

const IMAGES = {
  o1: require('./imgs/1.jpg'),
  o2: require('./imgs/2.jpg'),
  o3: require('./imgs/3.jpg'),
  o4: require('./imgs/4.jpg'),
  o5: require('./imgs/5.jpg'),
  o6: require('./imgs/6.jpg'),
  o7: require('./imgs/7.jpg'),
  o8: require('./imgs/8.jpg'),
  o9: require('./imgs/9.jpg'),
  o10: require('./imgs/10.jpg'),
};

export default class App extends Component {
  state = {
    count: 0,
  };

  handleIndexChange = index => {
    const { count } = this.state;
    if( count >= 5 ) {
      this.showAd();
      this.resetState();
    } else {
      this.setState({
        count: this.state.count + 1,
      });
    }
  };

  showAd = () => {
    Alert.alert('ad show');
  };

  resetState = () => {
    this.setState({
      count: 0,
    })
  };

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        loop={false}
        showsPagination={false}
        onIndexChanged={this.handleIndexChange}
      >
          {
              map(IMAGES, (value, key) => {
                  return <View style={styles.slide1}>
                    <Image source={IMAGES[`o${value}`]} />
                  </View>
              })
          }
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});