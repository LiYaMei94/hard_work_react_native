
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 16:03:17
 * @LastEditTime: 2019-10-28 17:12:54
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    TouchableHighlight, 
    View, 
    Image, 
    LayoutAnimation,
    Modal, 
    UIManager,
    Animated } from 'react-native';

import {ScreenWidth,ScreenHeight,greyBG,themeColor,headerHeight} from '../../assets/css/common';
import Loading from '../../components/loading';

export default class ListFooterComponent extends React.Component {
    static defaultProps = {
        isLoadMore:false
    }
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
        
    }
    render() {
        const {isLoadMore,navigation}=this.props;
        if(isLoadMore){
            return (
                <View style={styles.container} >
                    <Loading spinkerSize={25} spinkerColor='#666'></Loading>
                </View>
            );
        }else{
            return null;
        }
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent:"flex-start",
        alignItems:"center",
        width:ScreenWidth,
        paddingBottom:25,
    },
    Icon:{
        fontFamily: 'iconfont',
        fontSize:24,
        color:'#666'
    }
});