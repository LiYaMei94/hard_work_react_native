/*
 * @Author: your name
 * @Date: 2019-10-24 17:31:10
 * @LastEditTime: 2019-10-25 14:29:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\components\userAction.js
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableHighlight
} from 'react-native';
import {borderColor} from '../assets/css/common';
export default class UserAction extends Component {
    static defaultProps = {
        propsStyles:{}
    }
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    componentDidMount(){
        
    }
    
    render() {
        const {propsStyles}=this.props;
        return (
            <View style={[styles.bottom, propsStyles.bottom]}>
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={() => { }}
                        style={{ flex: 1 }}
                    >
                        <View style={styles.userAction}>
                            <Text style={styles.userActionIcon}>{'\ue602'}</Text>
                            <Text style={styles.userActionText}>0</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={() => { }}
                        style={{ flex: 1 }}
                    >
                        <View style={styles.userAction}>
                            <Text style={styles.userActionIcon}>{'\ue60f'}</Text>
                            <Text style={styles.userActionText}>1</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={() => { }}
                        style={{ flex: 1 }}
                    >
                        <View style={styles.userAction}>
                            <Text style={styles.userActionIcon}>{'\ue63b'}</Text>
                            <Text style={styles.userActionText}>1</Text>
                        </View>
                    </TouchableHighlight>
                </View>
        );
    }

};

const styles = StyleSheet.create({
    bottom:{
        width:'100%',
        height:45,
        borderTopWidth:1,
        borderTopColor:'#F1EEE9',
        marginTop:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    userAction:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    userActionIcon:{
        fontFamily:"iconfont",
        marginRight:5,
        fontSize:18
    },
    userActionText:{
        fontSize:19
    },
});

