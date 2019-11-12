/*
 * @Author: your name
 * @Date: 2019-10-24 11:11:42
 * @LastEditTime: 2019-10-25 14:30:57
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
    Image,
    Animated,
    DeviceEventEmitter,
    FlatList,
    ImageBackground,
    NativeModules
} from 'react-native';
import { styles } from './style';
import { invitationStyle } from '../../assets/css/invitationStyle';
import { themeColor, ScreenWidth, headerRightMarginRight } from '../../assets/css/common';
import HeadPortraits from '../../components/head_portraits';
import CommentItem from '../../components/comment_item';
import UserAction from '../../components/userAction';

const img = [require('../../assets/images/InvitationImg1.jpg'), require('../../assets/images/InvitationImg3.jpg'), require('../../assets/images/InvitationImg2.jpg')];
const imgContainerSize = ScreenWidth - headerRightMarginRight * 2;
const imgItemSize = img.length >= 3 ? Math.floor((imgContainerSize - 2 * 3) / 3) : img.length >= 2 ? Math.floor((imgContainerSize - 2 * 3) / 2) : imgContainerSize;
const commentList=[1];

export default class InvitationDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView  showsVerticalScrollIndicator={false}>
                    <View style={[invitationStyle.invitationContainer, { marginTop: 10, paddingBottom: 10 }]}>
                        <View style={invitationStyle.top}>
                            <HeadPortraits navigation={this.props.navigation} width={50} height={50} header_img={''} iconStyleFontSize={25}></HeadPortraits>
                            <View style={{ flex: 1 }}>
                                <Text style={invitationStyle.nickname}>辣辣的草莓酱</Text>
                                <Text style={invitationStyle.time}>2019年10月24日 星期四</Text>
                            </View>
                        </View>
                        <View style={invitationStyle.center}>
                            <View style={styles.centerTextContainer}>
                                <Text style={[invitationStyle.centerText, styles.centerText]} >
                                    10月23日，华为在深圳召开发布会，推出了Mate 30系列手机5G版本，但是在此次发布会还公布了一款重磅的产品，那就是此前在MWC中亮相过的折叠屏手机Mate X。
                            </Text>
                                <Text style={[invitationStyle.centerText, styles.centerText]} >
                                    华为Mate X采用鹰翼式折叠设计，在折叠状态下正面屏幕尺寸为6.6英寸，背面副屏为6.38英寸，在展开状态下，屏幕尺寸为8.0英寸，可将其作为平板使用。此次公布的Mate X手机也支持5G双模全网通制式。
        拍照方面，Mate X采用了4000万像素+800万像素+1600万像素+3D深感摄像头的四摄组合。
                            </Text>
                                <Text style={[invitationStyle.centerText, styles.centerText]}>
                                    续航方面，华为Mate X采用了一枚4500mAh的电池，同时支持55W华为超级快充，可以实现30分钟充电85% 。
        另外，在软件适配方面，华为Mate X也针对折叠屏的使用特点，在办公、购物、聊天、视频、游戏等方面进行了专门的优化。同时也支持智慧分屏等功能，可以让折叠屏更加实用高效。
        这款手机售价为16999元，将在11月15日起在华为商城限量销售。
                            </Text>
                                <Text style={[invitationStyle.centerText, styles.centerText]}>同时，何刚还表示，华为目前正在开发搭载麒麟9905G芯片的折叠屏手机Mate Xs将在2020年3月份上市。</Text>
                            </View>
                            <View style={invitationStyle.centerImg}>
                                {
                                    img.map((item, index) => {
                                        return <Image key={index} resizeMode='cover' style={[invitationStyle.centerImgItem, { width: imgItemSize, height: imgItemSize, marginRight: (index + 1) != 3 && (index + 1) != 6 && (index + 1) != 9 ? 3 : 0 }]} source={item}></Image>
                                    })
                                }
                            </View>
                        </View>
                    </View>
                    <View style={styles.article_comments}>
                            <Text style={ styles.article_comments_top_bar}>想法</Text>
                            <View style={styles.comments_container}>
                                {
                                    commentList.map((c_item, c_index) => {
                                        return <CommentItem item={c_item} navigation={this.props.navigation} key={c_index}></CommentItem>
                                    })
                                }
                            </View>
                            {
                                true ?
                                    <TouchableHighlight
                                        underlayColor='transparent'
                                        activeOpacity={1}
                                        onPress={() => {}}
                                    >
                                        <Text style={{ color: '#C6A46E', fontSize: 13, marginTop: 25 }}>{'全部' + 1 + '条想法'}</Text>
                                    </TouchableHighlight> : null
                            }
                        </View>
                </ScrollView>
                <UserAction propsStyles={{bottom:styles.bottom}}></UserAction>
            </View>


        );
    }
}

