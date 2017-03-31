export function getBaseURL(vm) {
  var bundleUrl = weex.config.bundleUrl;
  console.log(`eex.config=${JSON.stringify(weex.config)}`);
  var nativeBase;
  if (isAndroid()) {
     console.log('isAndroid');
    nativeBase = 'file://assets/';
  } else if (isiOS()) {
    console.log('isiOS');
    // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
    // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
  } else {
    console.log('web');
    var host = 'localhost:8080';
    var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
    if (matches && matches.length >= 2) {
      host = matches[1];
    }
    nativeBase = 'http://' + host + '/'  + '/build/';
  }
  console.log('nativeBase='+nativeBase);
  var h5Base = './weex.html?page=./dist/web/';
  // in Native
  var base = nativeBase;
  if (typeof window === 'object') {
    // in Browser or WebView
    base = h5Base;
  }
  console.log(`getPlatform()=${getPlatform()}`);
  console.log(`base=${base}`);
  return base
}

export function isAndroid () {
  if(getPlatform() == 'Android'|| getPlatform() == 'android') {
    return true;
  } else {
    return false;
  }
}

export function isiOS () {
  console.log(getPlatform() == 'iOS');
	return getPlatform() == 'iOS';
}

export function isWeb () {
  console.log(getPlatform() == 'Web');
	return getPlatform() == 'Web';
}

//{"env":{"platform":"android","osVersion":"4.4.4","appVersion":"1.0","weexVersion":"0.9.5","deviceModel":"HUAWEI ALE-CL00","appName":"com.kunion.weex","deviceWidth":"720","deviceHeight":"1184","scale":"2.0"}}
//{"bundleUrl":"http://localhost:8080/weex.html?page=./dist/web/entry.js","platform":"Web","weexVersion":"0.10.0","userAgent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36","appName":"Netscape","appVersion":null,"osName":"Chrome","osVersion":"56.0.2924.87","deviceModel":"unknown","deviceWidth":750,"deviceHeight":1245}

export function getPlatform() {
  if(weex.config.env) {
    return weex.config.env.platform;
  }
  return weex.config.platform;
}

export function getScreenWidth() {
  return weex.config.deviceWidth;
}

export function getScreenHeight() {
  return weex.config.deviceHeight;
}
