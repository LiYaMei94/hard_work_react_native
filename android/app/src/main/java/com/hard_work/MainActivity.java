/*
 * @Author: your name
 * @Date: 2019-10-24 10:20:09
 * @LastEditTime: 2019-10-24 10:32:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\android\app\src\main\java\com\hard_work\MainActivity.java
 */
package com.hard_work;

import com.facebook.react.ReactActivity;


// 启动页设置添加代码
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;

//为了完成 react-native-gesture-handler在 Android 上的安装
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

    /**
    * Returns the name of the main component registered from JavaScript. This is used to schedule
    * rendering of the component.
    */
    @Override
    protected String getMainComponentName() {
        return "hard_work";
    }
  //为了完成 react-native-gesture-handler在 Android 上的安装
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // 这里定义了在加载js的时候，同时弹起启动屏
        // 第二个参数true，是启动页全屏显示，隐藏了状态栏。
        SplashScreen.show(this, true);
    }
}
