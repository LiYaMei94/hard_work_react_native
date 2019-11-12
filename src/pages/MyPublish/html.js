/*
 * @Author: your name
 * @Date: 2019-10-24 11:33:09
 * @LastEditTime: 2019-10-28 16:25:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\pages\MyPublish\html.js
 */


import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    ScrollView, 
    View, 
    TouchableHighlight, 
    FlatList, 
    Animated, 
    DeviceEventEmitter, 
    PanResponder,
    ImageBackground,
    NativeModules } from 'react-native';
import { styles } from './style';
import InvitationItem from '../../components/invitationItem';
import { ScreenWidth, headerHeight, headerPaddingTop, headerRightMarginRight } from '../../assets/css/common';
import DataEmpty from '../../pages/SystemPromptPage/DataEmpty';
import BubbleBox from '../../components/bubble_box';
class HeaderComponent extends React.Component{
    render(){
        const {navigation}=this.props;
        return(
            <TouchableHighlight
                onPress={() => navigation.state.params.navigatePress()}
                underlayColor='#fff'
            >
                <View style={[styles.headerRightButtonBox]}>
                    <Text style={[styles.headerRightButtonText]}>按时间排序</Text>
                    <Text style={[styles.headerRightButtonIcon]} >{'\ue62a'}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}
export default class MyPublish extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `我的发布`,
        headerStyle: {
            height: headerHeight,
            paddingTop:headerPaddingTop,
            elevation: 0,  // android去除阴影
            borderBottomWidth:1,
            borderBottomColor:'#F1EEE9'
        },
        headerRight: <HeaderComponent navigation={navigation} ></HeaderComponent>,
        headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 18
        },
    })
    constructor(props) {
        super(props);
        this.state={
            publishData:[
                /*{
                    title:'300年前, 如果满清没有统一中国, 现今, 中国将非常危险',
                    content:'我们知道，满清进入中原时，也是经历了一个长期的过程，一步一步的攻打，最终才得以入主中原。然后开展了一系列的统一战争，最终统一了天下。',
                    img:[
                        require('../../assets/images/list11.jpg'),
                        require('../../assets/images/list12.jpg'),
                        require('../../assets/images/list13.jpg'),
                    ]
                },
                {
                    title:'300年前, 如果满清没有统一中国, 现今, 中国将非常危险',
                    content:'10月23日，华为在深圳召开发布会，推出了Mate 30系列手机5G版本，但是在此次发布会还公布了一款重磅的产品，那就是此前在MWC中亮相过的折叠屏手机Mate X。',
                    img:[
                        require('../../assets/images/InvitationImg1.jpg'),
                        require('../../assets/images/InvitationImg2.jpg'),
                        require('../../assets/images/InvitationImg3.jpg'),
                    ]
                }*/
            ]
        }
    }
    componentDidMount() {
        
    }
    
    render() {
        const {publishData}=this.state;
        return (
            <View style={styles.container}>
                <BubbleBox></BubbleBox>
                <View style={styles.InvitationContainer} >
                    <FlatList
                        data={publishData}
                        renderItem={(item, index) => <InvitationItem item={item} navigation={this.props.navigation}></InvitationItem>}
                        keyExtractor={(item, index) => index + ''}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={<DataEmpty navigation={this.props.navigation} promptText='你还有发帖哦~'></DataEmpty>}
                    >

                    </FlatList>

                </View>
            </View>

        );
    }
}

