/*
 * @Author: your name
 * @Date: 2019-10-24 11:13:00
 * @LastEditTime: 2019-10-25 16:36:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\pages\SystemPage\AboutPage.js
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    DeviceEventEmitter,
    View,
    Image
} from 'react-native';
import {styles} from '../MinePage/style';
import {greyBG} from '../../assets/css/common';
const lineData=[
    {
        name:"用户协议",
        route:'UserAgreement'
    },
    {
        name:"联系我们",
        route:''
    }
]
export default class AboutPage extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    componentDidMount() {
        
    }
    
    render() {
        return (
            <View style={css.container}>
                <View style={css.appInfo}>
                    <Image style={css.ic_launcher} source={require('../../assets/images/male_portrait.jpg')}></Image>
                    <View style={css.appInfoText}>
                        <Text style={css.appName}>勤学儿</Text>
                        <Text >Android版 版本号:V1.0(最新版)</Text>
                    </View>
                </View>
                <Text style={css.appDesc}>在这里您可以发布您的想法、难题、也可以发泄自己的不开心，也可以</Text>
                <View style={[styles.mine_content_wrap]}>
                    {
                        lineData.map((item,index)=>{
                            return <Line item={item} index={index} navigation={this.props.navigation} key={index}></Line>
                        })
                    }
                </View>
            </View>
        );
    }
}
class Line extends Component {
    render(){
        const {item,index,navigation}=this.props;
        //console.log(this.props)
        return(
            <TouchableHighlight style={[styles.mine_content_line,{borderBottomWidth:index==lineData.length-1?0:1,}]} onPress={()=>navigation.push(item.route,{})} underlayColor='white'>
                <View style={styles.mine_content_line_wrap}>
                    <Text style={styles.mine_content_line_text}>{item.name}</Text>
                    <Text style={[styles.iconStyle, styles.mine_content_line_icon]}> {'\ue74b'}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: greyBG,
        alignItems:"center",
        paddingTop:20,
        
    },
    appInfo:{
        width:'100%',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    ic_launcher:{
        width:50,
        height:50,
        marginRight:10
    },
    appInfoText:{
    },
    appName:{
        fontSize:24,
        color:"#666"
    },
    appDesc:{
        fontSize:16,
        marginTop:20,
        lineHeight:22,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20
    }
    
});
