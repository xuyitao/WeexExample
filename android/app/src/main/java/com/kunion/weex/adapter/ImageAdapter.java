package com.kunion.weex.adapter;

import android.widget.ImageView;

import com.kunion.weex.R;
import com.squareup.picasso.Picasso;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.common.WXImageStrategy;
import com.taobao.weex.dom.WXImageQuality;

/**
 * Created by Administrator on 2017/3/24.
 */

public class ImageAdapter implements IWXImgLoaderAdapter {

    @Override
    public void setImage(String url, ImageView view, WXImageQuality quality, WXImageStrategy strategy) {
        Picasso.with(view.getContext()).load("http://alibaba.github.io/weex/img/weex_logo_blue@3x.png").placeholder(R.mipmap.ic_launcher).into(view);
    }
}
