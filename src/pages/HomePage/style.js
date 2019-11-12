/*
 * @Author: your name
 * @Date: 2019-10-22 13:39:39
 * @LastEditTime: 2019-10-28 15:57:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\123\Desktop\react_native_appc:\Users\123\Desktop\weekend_exhibition\src\pages\MinePage\style.js
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {greyBG,headerHeight,headerRightMarginRight,headerPaddingTop,ScreenHeight} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:greyBG,
        position: "relative"
    },
    headerConatiner:{
        height:headerHeight,
        paddingTop:headerPaddingTop,
        width:'100%',
        backgroundColor:"#fff",
        borderBottomWidth:1,
        borderBottomColor:'#F1EEE9',
        flexDirection: 'row',
        alignItems:"flex-end",
        justifyContent:"center"
    },
    classifyItem:{
        width:60,
        height:'100%',
        justifyContent:"flex-end",
        paddingBottom:10,
    },
    classifyItemText:{
        fontSize:18
    },
    InvitationContainer:{
        width:'100%',
        //paddingBottom:headerHeight
    },
    //数据为空
    ListEmptyContainer:{
        justifyContent:"center",
        alignItems:"center",
        height:ScreenHeight-headerHeight-80
    }
});
