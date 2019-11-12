/*
 * @Author: your name
 * @Date: 2019-10-25 14:54:38
 * @LastEditTime: 2019-10-25 16:14:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\pages\messagePage\style.js
 */


import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {greyBG,headerHeight,headerPaddingTop,themeColor,headerRightMarginRight,signColor,borderColor} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:greyBG,
        position: "relative"
    },
    headerContainer:{
        height:headerHeight,
        paddingTop:headerPaddingTop,
        width:'100%',
        backgroundColor:'#FAFAFA',
        borderBottomWidth:1,
        borderBottomColor:'#F1EEE9',
        flexDirection: 'row',
        alignItems:"flex-end",
        justifyContent:"center",
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'#F1EEE9'
    },
    classifyItem:{
        width:80,
        height:'100%',
        justifyContent:"flex-end",
        alignItems:"center",
        position:"relative",
        
    },
    classifyItemText:{
        fontSize:18,
        color:"#000"
    },
    bottomBar:{
        width:30,
        height:3,
        borderRadius:10,
        backgroundColor:signColor,
        marginTop:5,
        position:"absolute",
        bottom:-7
    },
    messageTag:{
        width:6,
        height:6,
        borderRadius:50,
        backgroundColor:signColor,
        position:"absolute",
        right:18,
        top:10
    },
    //消息列表
    messageContainer:{
    },
    messageItem:{
        borderBottomWidth:1,
        borderBottomColor:borderColor,
        backgroundColor:'#FAFAFA',
        paddingLeft: headerRightMarginRight,
        paddingRight: headerRightMarginRight,
        flexDirection: 'row',
        paddingBottom:10,
        paddingTop:10
    },
    noticeIcon:{
        width:50,
        height:50,
        borderRadius:50,
        color:'#fff',
        backgroundColor:themeColor,
        fontFamily: 'iconfont',
        fontSize:28,
        textAlign:"center",
        textAlignVertical:"center",
        marginRight: 15,
    },
    messageItemRight:{
        flex:1
    },
    messageContent:{
        color:'#949494',
        fontSize:15
    },
    nickname:{
        fontSize:16,
        flex:1,
        color:'#000'
    },
    messageDate:{
        fontSize:13,
        color:'#949494'
    }
});
