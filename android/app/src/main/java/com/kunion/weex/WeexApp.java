package com.kunion.weex;

import android.app.Application;

import com.kunion.weex.adapter.ImageAdapter;
import com.kunion.weex.extend.module.WXEvent;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;


/**
 * Created by Administrator on 2017/3/13.
 */

public class WeexApp extends Application {

    public static String DEBUG_SERVER_HOST="10.8.200.79";

    @Override
    public void onCreate() {
        super.onCreate();
        InitConfig config=new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
        WXSDKEngine.initialize(this,config);

//        initDebugEnvironment(true, true, DEBUG_SERVER_HOST);
        try {
            WXSDKEngine.registerModule("event", WXEvent.class);

        } catch (WXException e) {
            e.printStackTrace();
        }

    }

    private void initDebugEnvironment(boolean connectable, boolean enable, String host) {
        WXEnvironment.sDebugServerConnectable = connectable;
        WXEnvironment.sRemoteDebugMode = enable;
        WXEnvironment.sRemoteDebugProxyUrl = "ws://" + host + ":8088/debugProxy/native";
    }
}
