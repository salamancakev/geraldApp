import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Screens from './src/screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

const AppDrawer = createDrawerNavigator();

const AppBottomTab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

const DrawerView = (props: any) => {
  const progress = useDrawerProgress();
  const scale = interpolate(progress.value, [0, 1], [1, 0.8]);

  // @ts-ignore
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{scale}],
    };
  });

  return (
    <Animated.View style={[animatedStyles, {flex: 1}]}>
      {props.children}
    </Animated.View>
  );
};

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Screens.Home}
        options={({navigation}) => ({
          headerTitleStyle: {
            color: '#b3b3b3',
            fontWeight: '400',
            letterSpacing: 4,
            textTransform: 'uppercase',
          },
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <SimpleLineIcon
                  name="menu"
                  style={{marginRight: 15}}
                  size={25}
                  color={'#d9d9d9'}
                />
              </TouchableOpacity>
            );
          },
        })}
      />
      <HomeStack.Screen
        name="Cart"
        component={Screens.Cart}
        options={() => ({
          headerTitleStyle: {
            color: '#b3b3b3',
            fontWeight: '400',
            letterSpacing: 4,
            textTransform: 'uppercase',
          },
        })}
      />
      <HomeStack.Screen
        name="Orders"
        component={Screens.Orders}
        options={() => ({
          headerTitleStyle: {
            color: '#b3b3b3',
            fontWeight: '400',
            letterSpacing: 4,
            textTransform: 'uppercase',
          },
        })}
      />
    </HomeStack.Navigator>
  );
};
const ContactStack = createNativeStackNavigator();

const ContactStackScreens = () => {
  return (
    <DrawerView>
      <ContactStack.Navigator
        screenOptions={({navigation}) => ({
          headerTitleStyle: {
            color: '#b3b3b3',
            fontWeight: '400',
            letterSpacing: 4,
            textTransform: 'uppercase',
          },
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <SimpleLineIcon
                  name="menu"
                  style={{marginRight: 15}}
                  size={25}
                  color={'#d9d9d9'}
                />
              </TouchableOpacity>
            );
          },
        })}>
        <ContactStack.Screen name="Contact" component={Screens.Contact} />
      </ContactStack.Navigator>
    </DrawerView>
  );
};

const AppBottomTabScreens = () => {
  return (
    <AppBottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <AppBottomTab.Screen
        name="Home"
        component={HomeStackScreens}
        options={{
          tabBarIcon: () => <AntDesignIcon name="home" size={25} />,
        }}
      />
      <AppBottomTab.Screen
        name="Contact"
        component={ContactStackScreens}
        options={{
          tabBarIcon: () => <AntDesignIcon name="mail" size={25} />,
        }}
      />
    </AppBottomTab.Navigator>
  );
};

const DrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{flex: 1, paddingTop: 0}}>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Contact"
        onPress={() => props.navigation.navigate('Contact')}
      />
    </DrawerContentScrollView>
  );
};

const AppDrawerScreens = () => {
  return (
    <AppDrawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}>
      <AppDrawer.Screen name="Home" component={AppBottomTabScreens} />
      <AppDrawer.Screen name="Contact" component={ContactStackScreens} />
    </AppDrawer.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppDrawerScreens />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
