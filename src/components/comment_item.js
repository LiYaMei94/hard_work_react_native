/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 10:40:00
 * @LastEditTime: 2019-10-24 17:38:40
 * @LastEditors: Please set LastEditors
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import HeadPortraits from './head_portraits';

export default class CommentItem extends Component {
    static defaultProps = {
        
    }

    constructor(props){
        super(props);
        this.state={
            
        }
    }
    
    componentDidMount(){
        
    }
    render() {
        const { item, navigation, CommentItemStyle } = this.props;
        //console.warn(item)
        return (
            <TouchableHighlight
                underlayColor='transparent'
                onPress={() => {}}//navigation.push('RumorDetail')
            >
                <View style={[styles.comment_item, CommentItemStyle]} >
                    <View style={styles.publish_comment}>
                        <HeadPortraits header_img={''} navigation={navigation} width={35} height={35} iconStyleFontSize={22}></HeadPortraits>
                        <Text style={[styles.add_comment_button, { fontSize: 15 }]}>辣辣的草莓酱</Text>
                    </View>
                    <Text style={styles.comment_text}>期待中</Text>
                </View>
            </TouchableHighlight>
        );
    }

};

const styles = StyleSheet.create({
    //评论
    article_comments: {
        borderTopColor: '#F6F6F6',
        borderTopWidth: 1,
        paddingBottom: 40,
        paddingTop: 35,
    },
    comment_item: {
        marginTop: 20
    },
    publish_comment: {
        flexDirection: 'row',
        alignItems: 'center',
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

