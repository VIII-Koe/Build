
    var clickTag = '';
    var androidLink = '';
    var iosLink = '';
    var defaultLink = '';
    openAdUrl = function (adChanel) {
      if (cc.sys.os == cc.sys.OS_ANDROID) {
        clickTag = '';
      }
      else if (cc.sys.os == cc.sys.OS_IOS) {
        clickTag = '';
      } else {
        clickTag = '';
      }
      var adNetwork = '{{__adv_channels_adapter__}}';
      switch (adChanel) {
        case 'Google':
          window.open(clickTag);
          break;
        case 'AppLovin':
          mraid.open(clickTag);
          break;
        case 'Facebook':
          FbPlayableAd.onCTAClick();
          break;
        case 'IronSource':
          mraid.openStoreUrl(clickTag);
          break;
        case 'Unity':
          mraid.open(clickTag);
          break;
        case 'Vungle':
          callSDK('download');
          break;
        default:
          window.open(clickTag);
      }
    }
  