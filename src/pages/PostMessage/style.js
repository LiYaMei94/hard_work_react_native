/*
 * @Author: your name
 * @Date: 2019-10-24 11:33:09
 * @LastEditTime: 2019-10-25 14:47:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\pages\MyPublish\style.js
 */


import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {greyBG,headerHeight,headerRightMarginRight,headerPaddingTop,borderColor,ScreenWidth,themeColor} from '../../assets/css/common';
const uploadSize=(ScreenWidth-2*3-30)/3;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:greyBG,
        position: "relative"
    },
    //头部标题栏
    headerRightButtonBox: {
        marginRight: headerRightMarginRight,
        width: 100,
        height: headerHeight-headerPaddingTop,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    headerRightButton:{
        fontSize:18,
        color:themeColor
    },
    //文本框
    TextInputContainer:{
        marginTop:10,
        width:'100%',
        backgroundColor:'#fff',
        paddingLeft:headerRightMarginRight,
        paddingRight:headerRightMarginRight,
        position:"relative",
        alignItems:"center",
        minHeight:200,
        textAlignVertical:"top",
        fontSize:15
    },
    ButtonLineContainer:{
        width:'100%',
        justifyContent:"center",
        backgroundColor:"#fff",
        marginTop:10,
        paddingLeft:headerRightMarginRight,
        paddingRight:headerRightMarginRight,
        marginBottom:10
    },
    buttonLine:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomColor:borderColor,
        borderBottomWidth:1
    },
    right_arrow_icon:{
        width: 25,
        height: 50,
        color: '#D5D5D5',
        fontSize: 22,
        fontFamily:"iconfont",
        textAlign:"right",
        textAlignVertical:"center",
        fontFamily: "iconfont",
    },
    uploadContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        backgroundColor:"#fff",
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:headerRightMarginRight,
        paddingRight:headerRightMarginRight,
    },
    uploadImgBox:{
        borderRadius:12,
        justifyContent:"center",
        alignItems:"center",
        borderColor:borderColor,
        borderWidth:1,
        borderStyle:"dashed",
        width:uploadSize,
        height:uploadSize,
        marginTop:3
    },
    uploadImg:{
        width:'100%',
        height:'100%',
        borderRadius:12,
    },
    //上传图片的按钮
    uploadButton:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:themeColor,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:"auto",
        marginRight:'auto',
        marginBottom:20
        /*position:"absolute",
        //right:headerRightMarginRight,
        bottom:20,
        left:'50%',
        transform:[
            {translateX:-25}
        ]
        //elevation:10*/
    },
    uploadButtonIcon:{
        color:'#fff',
        fontSize:28,
        fontFamily:"iconfont",
    }
});
