/*
 * @Author: your name
 * @Date: 2019-10-24 11:11:42
 * @LastEditTime: 2019-10-28 16:18:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\pages\MinePage\html.js
 */



import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    ScrollView, 
    View, 
    TouchableHighlight, 
    Dimensions, 
    Animated, 
    DeviceEventEmitter, 
    FlatList,
    ImageBackground,
    NativeModules } from 'react-native';
import { styles } from './style';
import {themeColor,headerHeight} from '../../assets/css/common';
import HeadPortraits from '../../components/head_portraits';
import ViewPager from '@react-native-community/viewpager';
import DataEmpty from '../../pages/SystemPromptPage/DataEmpty';
const tab = ['消息', '通知'];

export default class MessagePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            classifyIndex:0,
            messageArr:[{
                titile:'心凉新闻稿',
                content:"张巡的严酷，不仅仅针对部下，也对他自己。因为这个缘故，他的部下对他始终不弃不离，忠心耿耿。",
            },
            {
                titile:'流水星晨',
                content:"在令狐潮出城巡查的时候，一百多名唐军俘虏发起暴动，杀了看守的士兵。令狐潮见事不妙，抛下妻子儿女逃跑。张巡和贾贲利用这个机会，进入雍丘县城。他们把令狐潮的妻子儿女押上城墙，支解而死。",
            }],
            noticeArr:[{
                titile:'系统通知',
                content:"发帖时的图片最多可以选择九张啦！",
            }]
        }
    }
    componentDidMount() {
        
    }
    messageRender({item,index}){
        //console.log(index)
        const {classifyIndex}=this.state;
        //console.log(item)
        return(
            <TouchableHighlight>
                <View style={[styles.messageItem,{marginTop:index==0?10:0}]}>
                    {
                        classifyIndex==0?<HeadPortraits 
                                            navigation={this.props.navigation} 
                                            width={50} 
                                            height={50}
                                            header_img={''} 
                                            iconStyleFontSize={25}></HeadPortraits>:
                                        <Text style={styles.noticeIcon}>{'\ue61c'}</Text>
                    }
                    <View style={styles.messageItemRight}>
                        <View style={{flex:1,flexDirection: 'row',alignItems:"center"}}>
                            <Text numberOfLines={1} style={styles.nickname}>{item.titile}</Text>
                            <Text style={styles.messageDate}>2019/10/25</Text>
                        </View>
                        <Text numberOfLines={1} style={styles.messageContent}>{item.content}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    render() {
        const {classifyIndex,messageArr,noticeArr}=this.state;
        
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    {
                        tab.map((item, index) => {
                            return (
                                <TouchableHighlight
                                    underlayColor='#fff'
                                    onPress={()=>{
                                        this.setState({
                                            classifyIndex:index
                                        })
                                        this.ViewPage.setPage(index);
                                    }}
                                    key={index}
                                >
                                    <View style={styles.classifyItem}>
                                        <Text style={[styles.classifyItemText, { }]}>{item}</Text>
                                        {
                                            classifyIndex==index? <Text style={styles.bottomBar}></Text>:null
                                        }
                                        {
                                            //classifyIndex!=1? <Text style={styles.messageTag}></Text>:null
                                        }
                                    </View>
                                </TouchableHighlight>
                            )
                        })
                    }
                </View>
                <ViewPager style={{flex:1}} 
                    initialPage={classifyIndex} 
                    onPageSelected={(e)=>{
                        this.setState({
                            classifyIndex:e.nativeEvent.position
                        })
                    }}
                    ref={(ref)=>this.ViewPage=ref}>
                    {
                        tab.map((item, index) => {
                            /*if(messageArr.length==0&&classifyIndex==0||noticeArr.length==0&&classifyIndex==1){
                                return(
                                    <View key={index} style={[{justifyContent:"center",alignItems:"center",flex:1}]}>
                                        <Text style={{fontSize:45,fontFamily:"iconfont",color:themeColor,marginBottom:10}}>{'\ue6dc'}</Text>
                                        <Text style={{fontSize:15}}>你很低调，一条消息都没有~</Text>
                                    </View>
                                )
                            }*/

                            return (
                                <View style={styles.messageContainer} key={index}> 
                                    <FlatList
                                        data={classifyIndex==0?messageArr:noticeArr}
                                        renderItem={this.messageRender.bind(this)}
                                        keyExtractor={(item, index) => index + ''}
                                        showsVerticalScrollIndicator={false}
                                        ListEmptyComponent={<DataEmpty promptText='你很低调，一条消息都没有~'></DataEmpty>}
                                    >

                                    </FlatList>
                                </View>
                            )
                        })
                    }
                </ViewPager>
            </View>

        );
    }
}

