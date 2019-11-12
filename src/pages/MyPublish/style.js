/*
 * @Author: your name
 * @Date: 2019-10-24 11:33:09
 * @LastEditTime: 2019-10-25 17:32:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\pages\MyPublish\style.js
 */


import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {greyBG,headerHeight,headerRightMarginRight,borderColor} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:greyBG,
        position: "relative"
    },
    headerRightButtonBox:{
        marginRight:headerRightMarginRight,
        flexDirection: 'row',
        alignItems:"center",
        borderWidth:1,
        borderColor:borderColor,
        justifyContent:"center",
        width:110,
        height:30,
        borderRadius:12
    },
    headerRightButtonText:{
        flex:1,
        fontSize:14,
        textAlign:"right",
    },
    headerRightButtonIcon:{
        fontFamily:"iconfont",
        fontSize:26,
        width:28,
        textAlign:"left",
    }
});
