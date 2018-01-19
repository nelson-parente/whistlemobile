import React, { Component } from 'react';
import { StackNavigator, TabNavigator, NavigationActions} from 'react-navigation';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Alert, TouchableOpacity, Image } from 'react-native';
import CalendarScreen from './CalendarScreen';
import ContentLoader from 'react-native-content-loader';
import { Circle, Rect } from 'react-native-svg';

export default class SettingsScreen extends Component {
    static navigationOptions = {
      title: 'SETTINGS',
      tabBarLabel: 'Settings',
      headerTintColor: 'black',
      tabBarIcon : ({tintColor}) => ( tintColor == 'white' ?
        <Image source={require('./ScreenImages/settings.png')}
                style={{width: 22, height: 22}}/>
        :
        <Image source={require('./ScreenImages/inactivesettings.png')}
                style={{width: 22, height: 22}}/>
      ),
      headerStyle: {
        backgroundColor: '#FFCC00'
      },
      headerTitleStyle : {
        color : '#000',
        textAlign : 'center'
      }
    };
    constructor(props) {
      super(props);
      this.state = {text: 'settings',
                    loading: true};

    } 
  
    render() {
      return (
        <View style={styles.container}>
          <Text There is a blue square
          />
        </View>);
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFF'
    },
  })
