
    var clickTag = '';
    var androidLink = '';
    var iosLink = '';
    var defaultLink = '';
    openAdUrl = function (adChanel) {
      if (cc.sys.os == cc.sys.OS_ANDROID) {
        clickTag = 'https://play.google.com/store/apps/details?id=com.fansipan.epic.stickman.survival.rpg.idle.game';
      }
      else if (cc.sys.os == cc.sys.OS_IOS) {
        clickTag = 'https://apps.apple.com/vn/app/epic-stickman-rpg-idle-game/id6503872838';
      } else {
        clickTag = 'https://play.google.com/store/apps/details?id=com.fansipan.epic.stickman.survival.rpg.idle.game';
      }
      var adNetwork = '{{__adv_channels_adapter__}}';
      switch (adChanel) {
        case 'Mintegral':
          window.gameEnd && window.gameEnd();
          window.install && window.install();
          break;
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
  