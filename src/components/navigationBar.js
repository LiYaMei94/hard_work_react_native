/*
 * @Author: your name
 * @Date: 2019-10-24 11:43:26
 * @LastEditTime: 2019-10-24 11:44:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\components\navigationBar.js
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import {headerHeight,headerPaddingTop,routeActiveTintColor,routeInactiveTintColor} from '../assets/css/globalCss';
export default class NavigationBar extends Component{
    static defaultProps={
        backgroundColor:'#fff',
        headerRightTextColor:"#009285",
        isHeaderLeftImg:false,
        headerLeftText:'取消',
        headerRightText:'保存',
        headerTitle:'添加新日子',
        optionStyle:{}
    }
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
    }
    render() {
        const {
            backgroundColor,
            headerRightTextColor,
            isHeaderLeftImg,
            headerLeftText,
            headerRightText,
            headerTitle,
            navigation,
            optionStyle
        }=this.props;
        return (
            <View style={[styles.container,{backgroundColor:backgroundColor},optionStyle]}>
                <TouchableHighlight
                    style={styles.NavigationBarItem}
                    underlayColor='transparent'
                    onPress={()=>navigation.goBack()}
                >   
                    <View>
                        {
                            isHeaderLeftImg?
                            <Text style={[styles.NavigationBarItem,styles.iconFont,{textAlign:"left",fontSize:24,color:'#fff'}]}>{'\ue74a'}</Text>
                            :<Text style={[styles.NavigationBarItemText,{textAlign:"left"}]}>{headerLeftText}</Text>
                        }
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[styles.NavigationBarItem,{flex:1}]}
                    underlayColor='transparent'
                >
                    <Text style={[styles.NavigationBarItemText,{textAlign:"center",fontSize:16}]}>{headerTitle}</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.NavigationBarItem}
                    underlayColor='transparent'
                    onPress={()=>this.props.headerRigthPress()}
                >
                    <Text style={[styles.NavigationBarItemText,{textAlign:"right",color:headerRightTextColor}]}>{headerRightText}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}



export const styles = StyleSheet.create({
    container: {
        height:headerHeight,
        paddingTop:headerPaddingTop,
        borderBottomWidth:1,
        borderBottomColor:'#F7F7F7',
        marginBottom:10,
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:15,
        paddingRight:15
    },
    headerOperationButText:{
        width:70,
        alignItems:"center"
    },
    NavigationBarItemText:{
        width:'100%',
        fontSize:16
        
    },
    iconFont:{
        fontFamily:'iconfont'
    }
 });