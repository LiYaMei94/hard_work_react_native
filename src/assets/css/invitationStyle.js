/*
 * @Author: your name
 * @Date: 2019-10-24 16:30:36
 * @LastEditTime: 2019-10-24 17:37:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\assets\css\invitationStyle.js
 */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {greyBG,headerHeight,headerRightMarginRight,headerPaddingTop,themeColor} from '../css/common';
export const invitationStyle = StyleSheet.create({
    invitationContainer: {
        position: "relative",
        width:'100%',
        paddingLeft:headerRightMarginRight,
        paddingRight:headerRightMarginRight,
        paddingTop:10,
        marginBottom:10,
        backgroundColor:'#fff',
    },
    top:{
        flexDirection:"row",
        alignItems:"center"
    },
    nickname:{
        color:themeColor,
        fontSize:18
    },
    time:{
        color:'#828282',
        fontSize:14
    },
    closeButton:{
        fontFamily:"iconfont",
        color:"#C8C8C8",
        fontSize:18
    },
    center:{
        marginTop:5
    },
    centerText:{
        color:'#3F3F3F',
        fontSize:15,
        lineHeight:22
    },
    centerImg:{
        flexDirection:"row",
        flexWrap:"wrap"
    },
    centerImgItem:{
        marginTop:5
    },
    
    
});
