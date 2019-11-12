/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 10:40:00
 * @LastEditTime: 2019-10-28 15:52:02
 * @LastEditors: Please set LastEditors
 */
/*
 * @Description: 网络请求
 */
import React, { Component } from 'react';
import {
    Alert,
    ToastAndroid
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Encrypt} from '../utils/aes';//加密
import {readStorage,storage} from '../utils/storage';
import {getDate} from '../utils/util';
const BASE_URL =  'http://192.168.20.202:10030';//这里定义接口请求的域名

//main是组件
async function getData (url,option,main,avatar) {
    let  newoption={};
    let Authorization= await readStorage('token');//获取存储Token
    url=BASE_URL+url;
    return DeviceInfo.getUniqueId().then(uniqueId => {
        let token={
            appid:uniqueId,
            ...option.token
        }
        let formData = new FormData();
        formData.append("avatar",avatar);
        //console.log(option)
        //console.log(token)
        newoption={
            method:option.method,
            headers:{
                'Accept': 'application/json', 
                'Authorization':'Bearer '+Authorization,
                'token':Encrypt(token)
            }
        }
        avatar?newoption.body=formData:newoption.headers['Content-Type']='application/json';//FormData请求不能出现'Content-Type'
        //console.log(newoption)
        return new Promise((resolve,reject) => {
            fetch(url,newoption)
            .then((response) =>response.json())
            .then((responseJson) => {
                console.log(responseJson)
                //resolve(responseJson);
                let code = responseJson.code;//返回直接映射完的数据，可以直接使用
                let routeName=main?main.props.navigation.state.routeName:'';
                if(responseJson.ts){
                    let todayDate=getDate(responseJson.ts);
                    storage('todayDate',JSON.stringify(todayDate));
                }
                switch(code){
                    case 200 : {
                        resolve(responseJson.data);
                        break;
                    };
                    case -5 : {
                        if(routeName=='Mine'||routeName=='PoemDetail'||routeName=='Gossip'||routeName=='Setting'){
                            resolve(responseJson);
                        }else{
                            main.props.navigation.push('Login');
                        }
                        break;
                    };
                    default: {
                        //resolve(responseJson)
                        ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
                        break;
                    };
                }
            })
            .catch((error) => {
                main.props.navigation.push('DataLoadFailure');
                //ToastAndroid.show('网络请求失败，请稍后重试', ToastAndroid.SHORT);
                reject(error);
            });
        });
    })
}


module.exports = {
    getData
};

