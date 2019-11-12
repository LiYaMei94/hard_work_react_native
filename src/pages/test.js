/*
 * @Author: your name
 * @Date: 2019-10-28 13:34:42
 * @LastEditTime: 2019-10-28 14:28:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\pages\test.js
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    PermissionsAndroid
} from 'react-native';

import ImagePicker from 'react-native-syan-image-picker';

const { width } = Dimensions.get('window');
const options = {
    imageCount: 9,//最大选择图片数目
    isRecordSelected:true,//记录当前已选中的图片
    isCamera:true,//是否允许用户在内部拍照
    isCrop:false,//是否允许裁剪，imageCount 为1才生效
};
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: []
        };
    }
    handlePromiseSelectPhoto() {
        ImagePicker.asyncShowImagePicker(options)
        .then(photos => {
            console.log(photos)
            // 选择成功
        })
        .catch(err => {
            console.log(err)
            // 取消选择，err.message为"取消"
        })
    }


    render() {

        const { photos } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.scroll}>
                    <Button title={'拍照'} onPress={this.handleLaunchCamera} />
                    <Button title={'选择照片(Promise)带base64'} onPress={this.handlePromiseSelectPhoto} />
                </View>
            </View>
        );
    }
}

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={onPress}
        >
            <Text style={{ color: '#fff', fontSize: 16 }}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 40
    },
    btn: {
        backgroundColor: '#FDA549',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        paddingHorizontal: 12,
        margin: 5,
        borderRadius: 22
    },
    scroll: {
        padding: 5,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    image: {
        margin: 10,
        width: (width - 80) / 3,
        height: (width - 80) / 3,
        backgroundColor: '#F0F0F0'
    },
});