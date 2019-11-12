/*
 * @Author: your name
 * @Date: 2019-10-24 16:26:14
 * @LastEditTime: 2019-10-24 17:29:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\pages\InvitationDetail\style.js
 */


import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {greyBG,headerHeight,headerRightMarginRight,headerPaddingTop, borderColor} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container: {
        backgroundColor:greyBG,
        position: "relative",
        paddingBottom:45
    },
    centerText:{
        marginBottom:10
    },
    bottom:{
        position:"absolute",
        bottom:0,
        backgroundColor:"#fff"
    },
    //评论
    article_comments: {
        paddingBottom: 45,
        backgroundColor:"#fff",
        paddingLeft:headerRightMarginRight,
        paddingRight:headerRightMarginRight
    },
    article_comments_top_bar:{
        height:45,
        fontSize: 17, 
        color: '#000', 
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
        textAlignVertical:"center"
    },
    comment_item: {
        marginTop: 20
    },
    add_comment_button: {
        color: '#B9B9B9',
        fontSize: 13,
    },
    comment_text: {
        fontSize: 14,
        color: '#272727',
        lineHeight: 24,
        marginTop: 5
    },
});
