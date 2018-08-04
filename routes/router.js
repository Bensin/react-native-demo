import { StackNavigator,TabNavigator } from 'react-navigation';
import {Icon } from 'react-native-elements';

import Settings from '../pages/Settings';
import Home from '../pages/Home';

// const Navigator = StackNavigator({
//     SettingScreen : { screen: Settings},
//     HomeScreen : { screen: Home},    
// });

const Navigator  = TabNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon:({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
        }
   },
   Settings:{
        screen:Settings,
        navigationOptions:{
            tabBarLabel:'Settings',
            tabBarIcon:({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        }
   }
});

export default Navigator;