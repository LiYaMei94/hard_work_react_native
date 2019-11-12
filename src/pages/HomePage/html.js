/*
 * @Author: your name
 * @Date: 2019-10-24 11:11:42
 * @LastEditTime: 2019-10-28 17:18:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\pages\MinePage\html.js
 */



import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    FlatList,
} from 'react-native';
import { styles } from './style';
import InvitationItem from '../../components/invitationItem';
import { themeColor } from '../../assets/css/common';
import ViewPager from '@react-native-community/viewpager';
import DataEmpty from '../../pages/SystemPromptPage/DataEmpty';
import ListFooterComponent from '../../pages/SystemPromptPage/ListFooterComponent';
const data = [
    {
        title: '300年前, 如果满清没有统一中国, 现今, 中国将非常危险',
        content: '我们知道，满清进入中原时，也是经历了一个长期的过程，一步一步的攻打，最终才得以入主中原。然后开展了一系列的统一战争，最终统一了天下。',
        img: [
            require('../../assets/images/list11.jpg'),
            require('../../assets/images/list12.jpg'),
            require('../../assets/images/list13.jpg'),
        ]
    },
    {
        title: '300年前, 如果满清没有统一中国, 现今, 中国将非常危险',
        content: '10月23日，华为在深圳召开发布会，推出了Mate 30系列手机5G版本，但是在此次发布会还公布了一款重磅的产品，那就是此前在MWC中亮相过的折叠屏手机Mate X。',
        img: [
            require('../../assets/images/InvitationImg1.jpg'),
            require('../../assets/images/InvitationImg2.jpg'),
            require('../../assets/images/InvitationImg3.jpg'),
        ]
    }
];
const tab = ['求助', '发泄', '同学', '找同好'];
export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classifyIndex: 3,
            // 下拉刷新
            isRefresh:false,
            // 加载更多
            isLoadMore:false
        }
    }
    componentDidMount() {

    }
    /**
     * 翻页
     * @param {number} index 
     */
    flipOver(index) {
        this.setState({
            classifyIndex: index
        })
        this.ViewPage.setPage(index);
    }
    /**
     *下拉刷新
     *
     * @memberof HomePage
     */
    _onRefresh =()=>{
        if(!this.state.isRefresh){
            console.log('下拉刷新')
        }
    }
    /**
     *上拉加载
     *
     * @memberof HomePage
     */
    _onLoadMore=()=>{
        if (!this.state.isLoadMore && data.length > 0){
            console.log('上拉加载')
            this.setState({
                isLoadMore:true
            })
        }
    }
    render() {
        const { classifyIndex,isLoadMore } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.headerConatiner}>
                    {
                        tab.map((item, index) => {
                            return (
                                <TouchableHighlight
                                    underlayColor='transparent'
                                    onPress={this.flipOver.bind(this, index)}
                                    key={index}
                                    style={styles.classifyItem}
                                >
                                    <Text style={[styles.classifyItemText, { color: classifyIndex == index ? themeColor : '#3C3C3C' }]}>{item}</Text>
                                </TouchableHighlight>
                            )
                        })
                    }
                </View>
                <ViewPager style={{ flex: 1 }}
                    initialPage={classifyIndex}
                    onPageSelected={(e) => {
                        this.setState({
                            classifyIndex: e.nativeEvent.position
                        })
                    }}
                    ref={(ref) => this.ViewPage = ref}>
                    {
                        tab.map((item, index) => {
                            return (
                                <View style={styles.InvitationContainer} key={index}>
                                    <FlatList
                                        data={data}
                                        renderItem={(item, index) => <InvitationItem item={item} length={data.length} navigation={this.props.navigation}></InvitationItem>}
                                        keyExtractor={(item, index) => index + ''}
                                        showsVerticalScrollIndicator={false}
                                        ListEmptyComponent={<DataEmpty navigation={this.props.navigation} promptText={'没有' + tab[classifyIndex] + '类的帖子哦~'}></DataEmpty>}
                                        ListFooterComponent={<ListFooterComponent isLoadMore={isLoadMore}></ListFooterComponent>}
                                        onRefresh={()=>this._onRefresh()}
                                        refreshing={this.state.isRefresh}
                                        onEndReached={()=>this._onLoadMore()}
                                        onEndReachedThreshold={0.1}
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

