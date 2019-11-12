/*
 * @Author: your name
 * @Date: 2019-10-24 11:33:09
 * @LastEditTime: 2019-10-28 14:55:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\pages\MyPublish\html.js
 */


import React, { Component } from 'react';
import {
    Text,
    Image,
    ScrollView,
    View,
    TouchableHighlight,
    TextInput,
    Animated,
    DeviceEventEmitter,
    PanResponder,
    ImageBackground,
    LayoutAnimation,
    UIManager,
    NativeModules,
    PermissionsAndroid
} from 'react-native';
import { styles } from './style';
import { headerHeight, headerPaddingTop, ScreenHeight, STATUS_BAR_HEIGHT,themeColor,ScreenWidth } from '../../assets/css/common';
import ImagePicker from 'react-native-syan-image-picker';
import BottomModal from '../../components/bottom_modal';


const spring = {
    duration: 500,
    update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.8,
    },
    delete: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
    },
};
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const Button = ['身份', '频道'];

const options = {
    imageCount: 9,//最大选择图片数目
    isRecordSelected:true,//记录当前已选中的图片
    isCamera:false,//是否允许用户在内部拍照
    isCrop:false,//是否允许裁剪，imageCount 为1才生效
};
export default class PostMessage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: ``,
        headerStyle: {
            height: headerHeight,
            paddingTop: headerPaddingTop,
            elevation: 0,  // android去除阴影
            borderBottomWidth: 1,
            borderBottomColor: '#F1EEE9'
        },
        headerRight: <HeaderComponent navigation={navigation} ></HeaderComponent>,
        headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 18
        },
    })
    constructor(props) {
        super(props);
        this.state = {
            uploadImg: [],
            isPicture: false,
        }
    }
    /**
     *选择图片
     * @param {boolean} state
     * @param {string} text
     * @memberof PostMessage
     */
    setValueChange(state, text) {
        console.log(text)

        if(text==1){
            ImagePicker.asyncShowImagePicker(options)
            .then(photos => {
                console.log(photos)
                // 选择成功
            })
            .catch(err => {
                console.log(err)
                // 取消选择，err.message为"取消"
            })
        }else{
            ImagePicker.asyncOpenCamera(options)
            .then((photos)=>{
                console.log(photos)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        this.setState({
            isPicture:state
        },()=>{
            ImagePicker.removeAllPhoto();
        })
    }
    /**
     *上传图片
     * @param {object} image
     * @memberof PostMessage
     */
    uploadImg(images) {
        console.log(images)
        //let img=`data:${image.mime};base64,${image.data}`;
        this.state.uploadImg.push(images[0].path);
        this.setState({
            uploadImg:this.state.uploadImg
        },()=>{
            //console.log(this.state.uploadImg)
        })
        /*if (image.size > 1048576) {//图片显示1m大小
            //ToastAndroid.show('图片太大，请重新上传！', ToastAndroid.SHORT);
        } else {
            let file = {
                uri: image.path,
                type: image.mime,
                name: image.name ? image.name : 'upload',
                size: image.size,
            }
            //console.log(file)
        }*/
    }
    render() {
        const { uploadImg,isPicture } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TextInput
                        multiline={true}
                        onChangeText={(text) => { }}
                        style={styles.TextInputContainer}
                        placeholder='写下你此时此刻的心情或你的困惑吧！'
                    ></TextInput>
                    {
                        uploadImg.length != 0 ?
                            <View style={styles.uploadContainer}>
                                { //source={{uri:item}}
                                    uploadImg.map((item, index) => {
                                        return (
                                            <TouchableHighlight
                                                onPress={() => { }}
                                                underlayColor='transparent'
                                                style={[styles.uploadImgBox, { marginRight: (index + 1) != 3 && (index + 1) != 6 && (index + 1) != 9 ? 3 : 0 }]}
                                                key={index}
                                            >
                                           
                                                <Image resizeMode='cover' style={styles.uploadImg} source={{uri:item}}></Image>
                                            </TouchableHighlight>
                                        )
                                    })
                                }
                            </View> : null
                    }
                    <View style={styles.ButtonLineContainer}>
                        {
                            Button.map((item, index) => {
                                return <ButtonLine key={index} item={item} index={index}></ButtonLine>
                            })
                        }
                    </View>
                    <TouchableHighlight
                        onPress={() => this.setState({
                            isPicture:!this.state.isPicture
                        })}
                        underlayColor={themeColor}
                        style={[styles.uploadButton]}
                    >
                        <Text style={styles.uploadButtonIcon}>{'\ue606'}</Text>
                    </TouchableHighlight>
                </ScrollView>
                <BottomModal
                    closeBottomPicker={(state)=>this.setState({isPicture: state})}
                    setValueChange={this.setValueChange.bind(this)}
                    isVisible={isPicture}
                    picker_item_text={['相机', '相册']}></BottomModal>
            </View>
        );
    }
}
//
class ButtonLine extends React.Component {
    render() {
        const { item, index } = this.props;
        return (
            <TouchableHighlight
                underlayColor='transparent'
                onPress={() => { }}
            >
                <View style={[styles.buttonLine, { borderBottomWidth: index == Button.length - 1 ? 0 : 1 }]}>
                    <Text style={{ fontSize: 16 }}>发布{item}</Text>
                    <View style={{ flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
                        <Text style={{ fontSize: 16, color: '#999' }}>{index == 0 ? "分身匿名发布" : "找同好"}</Text>
                        <Text style={[styles.right_arrow_icon]}>{'\ue74b'}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

class HeaderComponent extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <TouchableHighlight
                onPress={() => navigation.state.params.navigatePress()}
                underlayColor='transparent'
                style={[styles.headerRightButtonBox]}
            >
                <Text style={[styles.headerRightButton]} >发布</Text>
            </TouchableHighlight>
        )
    }
}