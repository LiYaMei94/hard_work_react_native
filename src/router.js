/*
 * @Author: your name
 * @Date: 2019-10-24 10:52:26
 * @LastEditTime: 2019-10-28 16:31:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\router.js
 */


import React, { Component } from 'react';
import { Easing, Animated,Text,StyleSheet } from "react-native";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { STATUS_BAR_HEIGHT,headerPaddingTop,headerHeight } from './assets/css/common';



//路由文件
import HomePage from './pages/HomePage/html';
import MinePage from './pages/MinePage/html';
import MyPublish from './pages/MyPublish/html';
import PostMessage from './pages/PostMessage/html';
import InvitationDetail from './pages/InvitationDetail/html';
import MessagePage from './pages/MessagePage/html';

import AboutPage from './pages/SystemPage/AboutPage';
import UserAgreement from './pages/SystemPage/UserAgreement';
import SettingPage from './pages/SystemPage/SettingPage';

import DataLoadFailure from './pages/SystemPromptPage/DataLoadFailure';

import  Test from './pages/test';
//路由组件
import Tab from './components/tabbar';

//底部tabbar的图标
const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let iconName;
    if (routeName === '勤学儿') {
        iconName = '\ue61b';
    }else if (routeName === '其他') {
        iconName = '\ue607';
    }else if (routeName === '发布') {
        iconName = '';
    }else if (routeName === '消息') {
        iconName = '\ue7ba';
    }else if (routeName === '我的') {
        iconName = '\ue605';
    }
    return <Text style={[styles.iconStyle,{color:tintColor}]}>{iconName}</Text>;
};


//底部tabbar
const TabNavigator = createBottomTabNavigator(
    {
        勤学儿: createStackNavigator(
            {
                HomePage: {
                    screen: HomePage,
                    navigationOptions: {
                        header: null,
                    },
                }
            }
        ),
        其他: createStackNavigator(
            {
                HomePage: {
                    screen: HomePage,
                    navigationOptions: {
                        header: null,
                    },
                }
            }
        ),
        发布: createStackNavigator(
            {
                PostMessageTab: {
                    screen: PostMessage,
                    navigationOptions: {
                        
                    },
                }
            }
        ),
        消息: createStackNavigator(
            {
                MessagePage: {
                    screen: MessagePage,
                    navigationOptions: {
                        header: null,
                    },
                }
            }
        ),
        我的: createStackNavigator(
            {
                MinePage: {
                    screen: MinePage,
                    navigationOptions: {
                        header: null,
                    },
                }
            }
        ),
    },
    {
        defaultNavigationOptions: ({ navigation }) => (
            {
                tabBarIcon: ({ focused, tintColor }) =>
                    getTabBarIcon(navigation, focused, tintColor),
                    
            }
        ),
        tabBarComponent:Tab,
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: '#989898',
            style: {
                backgroundColor: '#ffffff',
                borderTopColor: "transparent",
                borderTopWidth:1,
                borderTopColor:'#F1EEE9'
            },
        },
    }
);

//创建全局导航器createStackNavigator
export const router = createStackNavigator(
    {
        bottomTabNavigator: {
            screen: TabNavigator,
            navigationOptions: {
                header: null,
            },
        },
        MyPublish:{
            screen: MyPublish,
            navigationOptions: {
                title: '我的发布',
            },
        },
        InvitationDetail:{
            screen: InvitationDetail,
            navigationOptions: {
                title: '帖子正文',
            },
        },
        PostMessage:{
            screen: PostMessage,
            navigationOptions: {
            },
        },
        DataLoadFailure:{
            screen: DataLoadFailure,
            navigationOptions: {
                header: null,
            },
        },
        AboutPage:{
            screen: AboutPage,
            navigationOptions: {
                title: '关于 | 勤学儿',
            },
        },
        UserAgreement:{
            screen: UserAgreement,
            navigationOptions: {
                title: '用户协议',
            },
        },
        SettingPage:{
            screen: SettingPage,
            navigationOptions: {
                title: '设置',
            },
        },
        Test:Test
        
    },
    {
        initialRouteName: "bottomTabNavigator",
        mode: 'modal',
        defaultNavigationOptions: {
            headerStyle: {
                height: headerHeight,
                paddingTop: headerPaddingTop,
                elevation: 0,  // android去除阴影
                backgroundColor:"#fff",
                borderBottomWidth:1,
                borderBottomColor:'#F1EEE9'
            },
            headerTitleStyle: {
                fontWeight: 'normal',
                fontSize:15
            },
            headerTintColor: '#666',
        },
    }
)

const styles = StyleSheet.create({
    iconStyle:{
        fontFamily: "iconfont",
        fontSize: 25,
    }
})

