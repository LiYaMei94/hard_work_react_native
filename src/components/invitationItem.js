/*
 * @Author: your name
 * @Date: 2019-10-24 11:11:42
 * @LastEditTime: 2019-10-28 17:13:54
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
    PanResponder,
    ImageBackground,
    NativeModules
} from 'react-native';

import { borderColor, headerRightMarginRight, themeColor, ScreenWidth } from '../assets/css/common';
import HeadPortraits from '../components/head_portraits';
import { invitationStyle } from '../assets/css/invitationStyle';
import UserAction from '../components/userAction';

const img = [require('../assets/images/InvitationImg1.jpg'), require('../assets/images/InvitationImg3.jpg'), require('../assets/images/InvitationImg2.jpg')];
const imgContainerSize = ScreenWidth - headerRightMarginRight * 2;
const imgItemSize = img.length >= 3 ? Math.floor((imgContainerSize - 2 * 3) / 3) : img.length >= 2 ? Math.floor((imgContainerSize - 2 * 3) / 2) : imgContainerSize;
export default class InvitationItem extends React.Component {
    static defaultProps = {
    }
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }

    render() {
        const { navigation,length} = this.props;
        const {item,index}=this.props.item;
        //console.log(index)
        return (
            <View style={[invitationStyle.invitationContainer,{marginBottom:index==length-1?0:10}]}>
                <View style={invitationStyle.top}>
                    <HeadPortraits navigation={navigation} width={50} height={50} header_img={''} iconStyleFontSize={25}></HeadPortraits>
                    <View style={{ flex: 1 }}>
                        <Text style={invitationStyle.nickname}>辣辣的草莓酱</Text>
                        <Text style={invitationStyle.time}>2019年10月24日 星期四</Text>
                    </View>
                    {/*<TouchableHighlight
                        underlayColor='transparent'
                        onPress={()=>{}}
                        style={{}}
                    >
                        <Text style={invitationStyle.closeButton}>{'\ue685'}</Text>
                    </TouchableHighlight>*/}
                </View>
                <View style={invitationStyle.center}>
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={()=>navigation.push('InvitationDetail')}
                    >
                        <Text style={invitationStyle.centerText} numberOfLines={3}>
                            {item.content}
                            {/*<Text style={invitationStyle.fullTextButton}>全文</Text>*/}
                        </Text>
                    </TouchableHighlight>
                    <View style={invitationStyle.centerImg}>
                        {
                            item.img.map((item, index) => {
                                return <Image key={index} resizeMode='cover' style={[invitationStyle.centerImgItem, { width: imgItemSize, height: imgItemSize, marginRight: (index + 1) != 3 && (index + 1) != 6 && (index + 1) != 9 ? 3 : 0 }]} source={item}></Image>
                            })
                        }
                    </View>
                </View>
                <UserAction></UserAction>
            </View>

        );
    }
}

