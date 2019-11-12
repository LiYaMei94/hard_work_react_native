

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 16:03:17
 * @LastEditTime: 2019-10-28 16:31:15
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

import {ScreenWidth,ScreenHeight,greyBG,themeColor,headerHeight} from '../assets/css/common';
export default class BubbleBox extends React.Component {
    static defaultProps = {
        visible:false
    }
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
        
    }
    render() {
        const {navigation,visible}=this.props;
        return (
            <Modal
                visible={visible}
                transparent={true} >
                <View style={styles.container}>

                </View>
            </Modal>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems:"center",
        height:'100%',
        width:'100%',
        //backgroundColor:"rgba(0,0,0,0.5)"
    },
    
});
