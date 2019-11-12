/*
 * @Author: your name
 * @Date: 2019-10-25 17:44:50
 * @LastEditTime: 2019-10-25 17:44:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\utils\storage.js
 */

import AsyncStorage from '@react-native-community/async-storage';

function storage(key, value) {
    try {
        AsyncStorage.setItem(
            key,
            value,
            (error) => {
                console.log(error)
            }
        );
    } catch (error) {
        console.log(error)
    }
}
//读取
function readStorage(key) {
    return new Promise((resolve, reject) => {
        try {
            AsyncStorage.getItem(
                key,
                (error, result) => {
                    //console.log(result)
                    resolve(result)
                }
            );
        } catch (error) {
            reject(error);
        }
    })
}
//删除
function removeStorage(key) {
    return new Promise((resolve, reject) => {
        try {
            AsyncStorage.removeItem(
                key,
                (error, result) => {
                    resolve(result)
                }
            );
        } catch (error) {
            reject(error);
        }
    })
}
module.exports = {
    storage,
    readStorage,
    removeStorage
}