import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';

import Main from './src/component/main';
import { ScrollView } from 'react-native-gesture-handler';

const WINDOW_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <View style={{ flex: 1, backgroundColor: '#43484d' }}>
      <View
        style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
      >
      </View>
      <View style={{ marginLeft: 10 }}>
        <DrawerItems {...props} />
      </View>
    </View>
  </ScrollView>
);


const MainRoot = createAppContainer(createDrawerNavigator(
  {
    Main: {
      path: '/main',
      screen: Main,
    },

  },

  {
    initialRouteName: 'Main',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: Math.min(WINDOW_WIDTH * 0.8, 300),
    contentComponent: CustomDrawerContentComponent,
  }
));

export default class AppContainer extends React.Component {

  render() {

    return <MainRoot />;
  }
}
