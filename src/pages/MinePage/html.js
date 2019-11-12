/*
 * @Author: your name
 * @Date: 2019-10-24 11:11:42
 * @LastEditTime: 2019-10-25 16:36:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\pages\MinePage\html.js
 */



import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    ScrollView, 
    View, 
    TouchableHighlight, 
    Dimensions, 
    Animated, 
    DeviceEventEmitter, 
    PanResponder,
    ImageBackground,
    NativeModules } from 'react-native';
import { styles } from './style';
import {themeColor} from '../../assets/css/common';
import HeadPortraits from '../../components/head_portraits';
const lineData=[
    {
        name:'我的发布',
        route:'MyPublish',
        icon:'\ue64c'
    },
    {
        name:"关于",
        route:'AboutPage',
        icon:'\ue638'
    },
    /*{
        name:"用户、隐私协议",
        route:'ReadCalendar'
    },*/
    {
        name:"设置",
        route:'SettingPage',
        icon:'\ue64e'
    }
]
export default class MinePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isLogin:true
        }
    }
    componentDidMount() {
        
    }
    
    render() {
        const {isLogin}=this.state;
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/images/mineTopBg1.jpg')} style={styles.mine_top}>
                    <HeadPortraits style={{marginRight:'auto',marginLeft:'auto'}} navigation={this.props.navigation} width={70} height={70} header_img={''} iconStyleFontSize={45}></HeadPortraits>
                    {
                        isLogin ?
                            <View style={styles.mine_top_left}>
                                <Text style={styles.mine_nickname}>辣辣的草莓酱</Text>
                                <Text style={styles.mine_like}>189****7639</Text>
                            </View> :
                            <TouchableHighlight
                                underlayColor='transparent'
                                onPress={() => this.props.navigation.push('Login')}
                                style={[styles.mine_top_left, { justifyContent: "center", }]}
                            >
                                <Text style={[styles.mine_nickname]}>去登录</Text>
                            </TouchableHighlight>
                    }
                </ImageBackground>
                <View style={[styles.mine_content_wrap]}>
                    {
                        lineData.map((item,index)=>{
                            return <Line item={item} index={index} navigation={this.props.navigation} key={index}></Line>
                        })
                    }
                </View>
            </View>

        );
    }
}

class Line extends Component {
    render(){
        const {item,index,navigation}=this.props;
        //console.log(this.props)
        return(
            <TouchableHighlight style={[styles.mine_content_line,{borderBottomWidth:index==lineData.length-1?0:1,}]} onPress={()=>navigation.push(item.route,{})} underlayColor='white'>
                <View style={styles.mine_content_line_wrap}>
                    <Text style={[styles.mine_content_line_icon,{textAlign:"left",color:themeColor}]}>{item.icon}</Text>
                    <Text style={styles.mine_content_line_text}>{item.name}</Text>
                    <Text style={[styles.mine_content_line_icon]}> {'\ue74b'}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}