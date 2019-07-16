import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import ProjectScreen from './ProjectScreen'
import NavScreen from './NavScreen'
import MeScreen from './MeScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react'
const home = createStackNavigator({
    home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation, screenProps }) => ({
            headerTitle: '首页',
        })
    }
})
const project = createStackNavigator({
    project: {
        screen: ProjectScreen,
        navigationOptions: ({ navigation, screenProps }) => ({

            headerTitle: '项目'
        })
    }
})
const nav = createStackNavigator({
    nav: {
        screen: NavScreen,
        navigationOptions: ({ navigation, screenProps }) => ({
            headerTitle: '导航'
        })
    }
})
const me = createStackNavigator({
    me: {
        screen: MeScreen,
        navigationOptions: ({ navigation, screenProps }) => ({
            headerTitle: '我的',
        })
    }
})
const BottomTabNavigator = createBottomTabNavigator({
    home: {
        screen: home, navigationOptions: {
            tabBarLabel: '首页'
        }
    },
    project: {
        screen: project, navigationOptions: {
            tabBarLabel: '项目',
        }
    },
    nav: {
        screen: nav,
        navigationOptions: {
            tabBarLabel: '导航',
        }
    },
    me: {
        screen: me, navigationOptions: {
            tabBarLabel: '我的',
        }
    },
}, {
        initialRouteName: 'home',
        defaultNavigationOptions: ({ navigation, screenProps }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                let theme;
                if (routeName === 'home') {
                    iconName = 'md-home';
                } else if (routeName === 'project') {
                    iconName = 'md-code';
                } else if (routeName === 'nav') {
                    iconName = 'md-compass'
                } else {
                    iconName = 'md-person'
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
            tabBarOptions: {
                activeTintColor: '#88c542',
                inactiveTintColor: '#525252',
                showIcon: true,
                showLabel: true,
                position: 'bottom',
                allowFontScaling: true,
                labelStyle: {
                    fontWeight: 'bold',
                    marginTop: 0,
                    paddingTop: 0,
                },
                iconStyle: {
                    marginBottom: 0,
                    paddingBottom: 0,
                },
                style: {
                    height: 48,
                    paddingBottom: 5,
                },
            }
        })
    })
const AppNavigator = createStackNavigator({
    main: {
        screen: BottomTabNavigator,
        navigationOptions: { header: null }
    }

}, {
        initialRouteName: 'main',
    })



export default createAppContainer(AppNavigator);
