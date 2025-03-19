System.register("chunks:///_virtual/activeAnima.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCInteger, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCInteger = module.CCInteger;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "fb4f3c0kA9KgppNgkM6i0N8", "activeAnima", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var activeAnima = exports('activeAnima', (_dec = ccclass("activeAnima"), _dec2 = property({
        type: CCInteger,
        tooltip: "倒计时关闭时间 单位毫秒"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(activeAnima, _Component);
        function activeAnima() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "hideTime", _descriptor, _assertThisInitialized(_this));
          _this.time = -1;
          return _this;
        }
        var _proto = activeAnima.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          var s = this;
          s.resetTime();
        }
        /**重置倒计时 */;
        _proto.resetTime = function resetTime() {
          var s = this;
          if (s.hideTime < 0) {
            return;
          }
          if (s.time > 0) {
            clearTimeout(s.time);
          }
          s.time = setTimeout(function () {
            s.node.active = false;
          }, s.hideTime);
        };
        return activeAnima;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "hideTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioManger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Global.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioSource, AudioClip, Component, Global;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }, function (module) {
      Global = module.Global;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "55959IhzpJKWJTDcSLrF06Z", "AudioManger", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AudioManger = exports('AudioManger', (_dec = ccclass("AudioManger"), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec4 = property(AudioClip), _dec5 = property(AudioClip), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioManger, _Component);
        function AudioManger() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bgmAudio", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effectAudio", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgm", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "audioClips", _descriptor4, _assertThisInitialized(_this));
          _this.distAudioMap = {};
          return _this;
        }
        var _proto = AudioManger.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          console.log("AudioManger onLoad");
          Global.audioMgr = s;
          var len = s.audioClips.length;
          for (var i = 0; i < len; i++) {
            var clip = s.audioClips[i];
            s.distAudioMap[clip.name] = clip;
          }
        }
        /**播放背景音乐 */;
        _proto.playBgm = function playBgm() {
          var s = this;
          s.bgmAudio.play();
        }
        /**停止背景音乐 */;
        _proto.stopBgm = function stopBgm() {
          var s = this;
          s.bgmAudio.stop();
        };
        _proto.playSound = function playSound(audio) {
          if (!Global.setting_effect) {
            return;
          }

          // switch (audio) {
          //     case Clips.reng:
          //         volumeScale = 0.2;
          //         break;
          //     case Clips.btn_1:
          //         volumeScale = 0.5;
          //         break;
          //         break;
          //     case Clips.complete_1:
          //         volumeScale = 0.3;
          //         break;
          // }

          // let clip = ResourceManger.instance.get_clip(audio);
          var s = this;
          var clip = s.distAudioMap[audio];
          if (!clip) {
            console.warn("声音播放错误，audio:", audio);
          } else {
            this.effectAudio.playOneShot(clip);
            // console.log("声音播放成功，audio:", audio);
          }
        };

        return AudioManger;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgmAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "effectAudio", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bgm", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "audioClips", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/baseUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManger.ts', './Enums.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UIOpacity, Widget, tween, Vec3, Component, EventMgr, events;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UIOpacity = module.UIOpacity;
      Widget = module.Widget;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      EventMgr = module.default;
    }, function (module) {
      events = module.events;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "9b37aQKo0JPjpm+k9NjRVXy", "baseUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**弹窗出现类型 */
      var BaseUIShowType = exports('BaseUIShowType', /*#__PURE__*/function (BaseUIShowType) {
        BaseUIShowType[BaseUIShowType["none"] = 0] = "none";
        BaseUIShowType[BaseUIShowType["scale"] = 1] = "scale";
        return BaseUIShowType;
      }({}));

      /**基础弹窗组件 */
      var baseUI = exports('baseUI', (_dec = ccclass("baseUI"), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: UIOpacity
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(baseUI, _Component);
        function baseUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blackBg", _descriptor2, _assertThisInitialized(_this));
          _this.eventName = "";
          _this.playAnimaType = BaseUIShowType.scale;
          _this.tweenAnima = null;
          _this.tweenBlackAnima = null;
          return _this;
        }
        var _proto = baseUI.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          if (s.eventName == "") {
            s.eventName = s.constructor.name;
          }
          EventMgr.inst.event.on(s.eventName + "Show", s.showUI, s);
          EventMgr.inst.event.on(s.eventName + "Hide", this.hideUI, this);
          s.content.setPosition(0, 0);
          s.content.active = false;
          if (s.blackBg) {
            s.blackBg.node.setPosition(0, 0);
            s.blackBg.node.active = false;
          }
        };
        _proto.hideUI = function hideUI(e) {
          var s = this;
          EventMgr.inst.event.emit(events.uiHide, s.eventName, s);
          s.playAnima(s.playAnimaType, false);
        };
        _proto.showUI = function showUI(e) {
          var s = this;
          EventMgr.inst.event.emit(events.uiShow, s.eventName, s);
          var arr = s.node.parent.getComponentsInChildren(Widget);
          for (var i = 0; i < arr.length; i++) {
            arr[i].enabled = true;
            arr[i].updateAlignment();
          }
          s.playAnima(s.playAnimaType, true);
          s.node.parent.setSiblingIndex(-1);
        };
        _proto.playAnima = function playAnima(type, show) {
          var s = this;
          var time = 0.1;
          switch (type) {
            case BaseUIShowType.none:
              s.content.active = show;
              if (s.blackBg) {
                s.blackBg.opacity = show ? 255 : 0;
                s.blackBg.node.active = show;
              }
              break;
            case BaseUIShowType.scale:
              s.stopTween();
              s.tweenAnima = tween(s.content).call(function () {
                s.content.active = true;
              }).set({
                scale: show ? Vec3.ZERO : Vec3.ONE
              }).to(time, {
                scale: show ? Vec3.ONE : Vec3.ZERO
              }).call(function () {
                s.content.active = show;
              }).start();
              if (s.blackBg) {
                s.stopTweenBlackBg();
                s.tweenBlackAnima = tween(s.blackBg).call(function () {
                  s.blackBg.node.active = true;
                }).set({
                  opacity: show ? 0 : 255
                }).to(time, {
                  opacity: show ? 255 : 0
                }).call(function () {
                  s.blackBg.node.active = show;
                }).start();
              }
              break;
          }
        };
        _proto.stopTween = function stopTween() {
          var s = this;
          if (s.tweenAnima) {
            s.tweenAnima.stop();
            s.tweenAnima = null;
          }
        };
        _proto.stopTweenBlackBg = function stopTweenBlackBg() {
          var s = this;
          if (s.tweenBlackAnima) {
            s.tweenBlackAnima.stop();
            s.tweenBlackAnima = null;
          }
        };
        return baseUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blackBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/blackMask.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, UITransform, Widget, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      Widget = module.Widget;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "c38daafNZJIMqLem4EDxntt", "blackMask", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var blackMask = exports('blackMask', (_dec = ccclass("blackMask"), _dec2 = property(UITransform), _dec3 = property(UITransform), _dec4 = property(UITransform), _dec5 = property(UITransform), _dec6 = property(UITransform), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(blackMask, _Component);
        function blackMask() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "topNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "centerNode", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = blackMask.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          var widget = s.node.getComponent(Widget);
          widget.updateAlignment();
          // window["k"] = s;
          s.setPosi(0, 0, 0, 0);
        };
        _proto.setPosi = function setPosi(x, y, w, h) {
          var s = this;
          var widgets = s.node.getComponentsInChildren(Widget);
          var len = widgets.length;
          for (var i = 0; i < len; i++) {
            widgets[i].updateAlignment();
          }
          var parentUit = s.node.getComponent(UITransform);
          var parentW = parentUit.width;
          var parentH = parentUit.height;
          s.centerNode.node.setPosition(x, y);
          s.leftNode.node.setPosition(0, y);
          s.rightNode.node.setPosition(0, y);
          s.centerNode.width = w;
          s.centerNode.height = h;
          s.topNode.width = parentW;
          s.bottomNode.width = parentW;
          // 设置上下遮罩的高度和位置
          s.topNode.height = (parentH - y - y - h) / 2;
          s.bottomNode.height = (parentH + y + y - h) / 2;
          s.leftNode.height = h;
          s.rightNode.height = h;
          // 设置左右遮罩的宽度、高度和位置
          s.leftNode.width = (parentW - x - x - w) / 2;
          s.rightNode.width = (parentW + x + x - w) / 2;
          for (var _i = 0; _i < len; _i++) {
            widgets[_i].updateAlignment();
          }
        };
        return blackMask;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "topNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bottomNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "leftNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rightNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "centerNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/border.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, RigidBody2D, Node, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RigidBody2D = module.RigidBody2D;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "64107yZfDxLlpBl/QH9Sbqu", "border", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var border = exports('border', (_dec = ccclass("border"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(border, _Component);
        function border() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.rigidBody = null;
          return _this;
        }
        var _proto = border.prototype;
        _proto.start = function start() {
          // 获取刚体组件
          this.rigidBody = this.getComponent(RigidBody2D);
        };
        _proto.onEnable = function onEnable() {
          // 添加点击事件监听
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        };
        _proto.onTouchStart = function onTouchStart() {
          // 隐藏节点（通过透明度）
          this.node.active = false;
          // 关闭物理
          // if (this.rigidBody) {
          //     this.rigidBody.enabled = false;
          // }
        };

        _proto.onDestroy = function onDestroy() {
          // 移除事件监听
          this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
        };
        return border;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/callFuncEvent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Node;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "3ec77NRooBISYaGKY57X//p", "callFuncEvent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var callFuncEvent = exports('callFuncEvent', (_dec = ccclass("callFuncEvent"), _dec2 = property(Node), _dec(_class = (_class2 = function callFuncEvent() {
        _initializerDefineProperty(this, "node", _descriptor, this);
        _initializerDefineProperty(this, "customEventData", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "customEventData", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/clickEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Global.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Animation, Node, Vec3, director, UITransform, Component, Global;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Node = module.Node;
      Vec3 = module.Vec3;
      director = module.director;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      Global = module.Global;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "1a1b36UVQZEc4DJScgrDScZ", "clickEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var clickEffect = exports('clickEffect', (_dec = ccclass("clickEffect"), _dec2 = property(Animation), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(clickEffect, _Component);
        function clickEffect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "effectAnima", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickNode", _descriptor2, _assertThisInitialized(_this));
          _this.lastScene = null;
          _this.itemTouchPos = new Vec3(0, 0);
          _this.itemPos = new Vec3(0, 0);
          return _this;
        }
        var _proto = clickEffect.prototype;
        //点击节点
        _proto.onLoad = function onLoad() {
          var s = this;

          // director.on(Director.EVENT_AFTER_SCENE_LAUNCH, s.initScene, s);

          s.node.on(Node.EventType.TOUCH_START, s.onTouchStart, s, true);
          s.node.on(Node.EventType.TOUCH_END, s.onTouchEnd, s, true);
          s.node.on(Node.EventType.TOUCH_CANCEL, s.onTouchEnd, s, true);
          s.node.on(Node.EventType.TOUCH_MOVE, s.onTouchEnd, s, true);
        };
        _proto.initScene = function initScene() {
          var s = this;
          if (s.lastScene) {
            s.lastScene.off(Node.EventType.TOUCH_START, s.onTouchStart, s);
          }
          s.lastScene.isValid;
          var canvasNode = director.getScene();
          s.lastScene = canvasNode;
          canvasNode.on(Node.EventType.TOUCH_START, s.onTouchStart, s, true);
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          e.preventSwallow = true;
        };
        _proto.onTouchStart = function onTouchStart(e) {
          var s = this;
          // e.propagationStopped = false;
          e.preventSwallow = true;
          var pos = e.touch.getUILocation();
          s.itemTouchPos.x = pos.x;
          s.itemTouchPos.y = pos.y;
          s.clickNode.parent.getComponent(UITransform).convertToNodeSpaceAR(s.itemTouchPos, s.itemPos);
          s.clickNode.setPosition(s.itemPos);
          s.effectAnima.play();
          Global.audioMgr.playSound("click");
        };
        return clickEffect;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "effectAnima", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cocosToolFunc.ts", ['cc'], function (exports) {
  var cclegacy, Vec2, Vec3, UITransform;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a633fhuCqlLPrnmYdKlblwl", "cocosToolFunc", undefined);

      /**cocos 的辅助工具函数 */
      var cocosToolFunc = exports('cocosToolFunc', /*#__PURE__*/function () {
        function cocosToolFunc() {}
        /** 获取触摸点在节点中的位置 */
        cocosToolFunc.getNodePosiByTouch = function getNodePosiByTouch(node, e, outNode) {
          var s = this;
          e.touch.getUILocation(s.inItemPosV2);
          s.inItemPosV3.x = s.inItemPosV2.x;
          s.inItemPosV3.y = s.inItemPosV2.y;
          try {
            var itemParent = node.parent.getComponent(UITransform);
            itemParent.convertToNodeSpaceAR(s.inItemPosV3, s.outItemPosV3);
          } catch (error) {
            console.log(error);
          }
          if (outNode) {
            outNode.x = s.outItemPosV3.x;
            outNode.y = s.outItemPosV3.y;
            return outNode;
          } else {
            return new Vec3(s.outItemPosV3.x, s.outItemPosV3.y, 0);
          }
        };
        return cocosToolFunc;
      }());
      /**临时变量 */
      cocosToolFunc.inItemPosV2 = new Vec2();
      cocosToolFunc.outItemPosV2 = new Vec2();
      cocosToolFunc.inItemPosV3 = new Vec3();
      cocosToolFunc.outItemPosV3 = new Vec3();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ColorManagr.ts", ['cc', './Enums.ts'], function (exports) {
  var cclegacy, randomRangeInt, FishColor;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      randomRangeInt = module.randomRangeInt;
    }, function (module) {
      FishColor = module.FishColor;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d866b/uBiBEKLATWZ59la6X", "ColorManagr", undefined);

      /**颜色统计类 */

      /**颜色管理器 */
      var ColorManagr = exports('ColorManagr', /*#__PURE__*/function () {
        function ColorManagr() {
          /**未使用钉子颜色总数 */
          this.sumColorTotal = void 0;
          /**使用中的颜色总数 */
          this.curUseColorTotal = void 0;
          /**已回收的颜色总数 */
          this.recycleColorTotal = void 0;
          this.colorList = [];
          this.getColorCount = 0;
          this.sumColorTotal = this.initColorTotal();
          this.curUseColorTotal = this.initColorTotal();
          this.recycleColorTotal = this.initColorTotal();
        }
        var _proto = ColorManagr.prototype;
        /**返回初始颜色统计 */
        _proto.initColorTotal = function initColorTotal() {
          var _ref;
          return _ref = {}, _ref[FishColor.Blue] = 0, _ref[FishColor.Green] = 0, _ref[FishColor.LightBlue] = 0, _ref[FishColor.Orange] = 0, _ref[FishColor.Pink] = 0, _ref[FishColor.Purple] = 0, _ref[FishColor.Red] = 0, _ref[FishColor.Yellow] = 0, _ref.length = 0, _ref.available = [], _ref;
        }
        /**获取颜色 */;
        _proto.getColor = function getColor() {
          var s = this;
          var color = s.colorList[s.getColorCount];
          if (color == null) {
            color = s.colorList[randomRangeInt(0, s.colorList.length)];
          }
          s.getColorCount++;
          return color;
        }

        /**重置所有颜色统计 */;
        _proto.resetAllColorTotal = function resetAllColorTotal(level) {
          var s = this;
          s.colorList.length = 0;
          s.getColorCount = 0;
          // 预设颜色种类
          // let defColor = [0, 4, 4, 4, 5, 5, 4, 6, 5, 6, 5, 7];
          var defColor = [0, 4, 6, 6, 7, 7, 5, 7, 6, 7, 6, 8];
          var colorCount = defColor[level];
          if (colorCount == null) {
            colorCount = randomRangeInt(6, 9);
          }
          for (var i = 0; i < colorCount; i++) {
            s.colorList.push(i + 1);
          }
          s.clearColorTotal(s.sumColorTotal);
          s.clearColorTotal(s.curUseColorTotal);
          s.clearColorTotal(s.recycleColorTotal);
        }

        /**返回未使用颜色个数 */;
        _proto.getSumColorLength = function getSumColorLength() {
          var s = this;
          return s.sumColorTotal.length;
        }
        /**返回使用中的颜色总数 */;
        _proto.getCurUseColorLength = function getCurUseColorLength() {
          var s = this;
          return s.curUseColorTotal.length;
        }
        /**返回已回收的颜色总数 */;
        _proto.getRecycleColorLength = function getRecycleColorLength() {
          var s = this;
          return s.recycleColorTotal.length;
        }
        /**返回总颜色总数 */;
        _proto.getMaxScrewNum = function getMaxScrewNum() {
          var s = this;
          return s.sumColorTotal.length + s.curUseColorTotal.length + s.recycleColorTotal.length;
        }

        /**返回总颜色 */;
        _proto.getSumColor = function getSumColor() {
          var s = this;
          return s.sumColorTotal;
        }
        /**返回使用中的颜色 */;
        _proto.getCurUseColor = function getCurUseColor() {
          var s = this;
          return s.curUseColorTotal;
        }
        /**返回已回收的颜色 */;
        _proto.getRecycleColor = function getRecycleColor() {
          var s = this;
          return s.recycleColorTotal;
        }

        /**添加一个颜色到总数 */;
        _proto.addSumColorTotalByCount = function addSumColorTotalByCount(count, color) {
          var s = this;
          s.addColorTotal(s.sumColorTotal, color, count);
        }

        /**验证颜色是否在总数中还有 */;
        _proto.checkSumColorTotal = function checkSumColorTotal(color) {
          var s = this;
          return s.sumColorTotal[color] > 0;
        }

        /**返回一个随机颜色 */;
        _proto.getRandomColor = function getRandomColor() {
          var s = this;
          var len = s.sumColorTotal.available.length;
          var randomInd = randomRangeInt(0, len);
          return s.sumColorTotal.available[randomInd];
        }

        /**添加一个颜色到使用中的总数 */;
        _proto.addCurUseColorTotal = function addCurUseColorTotal(color, count) {
          if (count === void 0) {
            count = 1;
          }
          var s = this;
          s.removeColorTotal(s.sumColorTotal, color, count);
          s.addColorTotal(s.curUseColorTotal, color, count);
        }

        /**添加一个颜色到已回收的总数 */;
        _proto.addRecycleColorTotal = function addRecycleColorTotal(color, count) {
          if (count === void 0) {
            count = 1;
          }
          var s = this;
          s.removeColorTotal(s.curUseColorTotal, color, count);
          s.addColorTotal(s.recycleColorTotal, color, count);
        }

        /**添加一个颜色到统计 */;
        _proto.addColorTotal = function addColorTotal(map, color, count) {
          if (count === void 0) {
            count = 1;
          }
          map[color] += count;
          map.length += count;
          if (map.available.indexOf(color) == -1) {
            map.available.push(color);
          }
        }

        /**移除一个颜色到统计    */;
        _proto.removeColorTotal = function removeColorTotal(map, color, count) {
          if (count === void 0) {
            count = 1;
          }
          map[color] -= count;
          map.length -= count;
          if (map[color] <= 0) {
            map.available.splice(map.available.indexOf(color), 1);
          }
        }

        /**清空某个颜色统计 */;
        _proto.clearColorTotal = function clearColorTotal(obj) {
          obj.length = 0;
          obj.available.length = 0;
          for (var color in FishColor) {
            obj[FishColor[color]] = 0;
          }
        };
        return ColorManagr;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dragComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cocosToolFunc.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, CCBoolean, Component, Node, cocosToolFunc;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCBoolean = module.CCBoolean;
      Component = module.Component;
      Node = module.Node;
    }, function (module) {
      cocosToolFunc = module.cocosToolFunc;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "23796elPYZGpaa85maijGGX", "dragComp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var dragComp = exports('dragComp', (_dec = ccclass("dragComp"), _dec2 = property(CCBoolean), _dec3 = property({
        type: [Component.EventHandler],
        tooltip: "拖拽开始事件",
        visible: true
      }), _dec4 = property({
        type: [Component.EventHandler],
        tooltip: "拖拽移动事件",
        visible: true
      }), _dec5 = property({
        type: [Component.EventHandler],
        tooltip: "拖拽结束事件",
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dragComp, _Component);
        function dragComp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**是否可以拖拽 */
          _this._isDrag = false;
          _initializerDefineProperty(_this, "initDragStatus", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startEvents", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveEvents", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "endEvents", _descriptor4, _assertThisInitialized(_this));
          /**按下回调 */
          _this.touchStartCallFunc = null;
          /**移动回调 */
          _this.touchMoveCallFunc = null;
          /**结束回调 */
          _this.touchEndCallFunc = null;
          /**结束回调 */
          _this.touchEndThisObj = null;
          return _this;
        }
        var _proto = dragComp.prototype;
        /**设置回调函数 */
        _proto.setTouchCallFunc = function setTouchCallFunc(touchStartCallFunc, touchMoveCallFunc, touchEndCallFunc, touchEndThisObj) {
          var s = this;
          s.touchStartCallFunc = touchStartCallFunc;
          s.touchMoveCallFunc = touchMoveCallFunc;
          s.touchEndCallFunc = touchEndCallFunc;
          s.touchEndThisObj = touchEndThisObj;
        };
        _proto.onLoad = function onLoad() {
          var s = this;
          s.isDrag = s.initDragStatus;
        }

        /**按下 */;
        _proto.onTouchStart = function onTouchStart(e) {
          var s = this;
          s.node.on(Node.EventType.TOUCH_MOVE, s.onTouchMove, s);
          s.node.on(Node.EventType.TOUCH_END, s.onTouchEnd, s);
          s.node.on(Node.EventType.TOUCH_CANCEL, s.onTouchEnd, s);
          s.updataPosi(e);
          s.emitEvent(s.startEvents, s.touchStartCallFunc, s.touchEndThisObj);
        }
        /**移动 */;
        _proto.onTouchMove = function onTouchMove(e) {
          var s = this;
          s.updataPosi(e);
          s.emitEvent(s.moveEvents, s.touchMoveCallFunc, s.touchEndThisObj);
        }
        /**结束 */;
        _proto.onTouchEnd = function onTouchEnd(e) {
          var s = this;
          s.node.off(Node.EventType.TOUCH_MOVE, s.onTouchMove, s);
          s.node.off(Node.EventType.TOUCH_END, s.onTouchEnd, s);
          s.node.off(Node.EventType.TOUCH_CANCEL, s.onTouchEnd, s);
          s.updataPosi(e);
          s.emitEvent(s.endEvents, s.touchEndCallFunc, s.touchEndThisObj);
        }
        /**触发事件 */;
        _proto.emitEvent = function emitEvent(events, callFunc, thisObj) {
          if (callFunc === void 0) {
            callFunc = null;
          }
          if (thisObj === void 0) {
            thisObj = null;
          }
          for (var i = 0; i < events.length; i++) {
            var e = events[i];
            if (e.handler != null) {
              e.emit([e.customEventData]);
            }
          }
          if (callFunc != null && thisObj != null) {
            callFunc.call(thisObj);
          }
        }

        /**更新拖拽节点位置 */;
        _proto.updataPosi = function updataPosi(e) {
          var s = this;
          var posi = cocosToolFunc.getNodePosiByTouch(s.node, e, null);
          s.node.setPosition(posi);
        };
        _createClass(dragComp, [{
          key: "isDrag",
          get: /**是否可以拖拽 */
          function get() {
            return this._isDrag;
          }
          /**是否可以 */,
          set: function set(value) {
            var s = this;
            s._isDrag = value;
            if (value) {
              s.node.on(Node.EventType.TOUCH_START, s.onTouchStart, s);
            } else {
              s.node.off(Node.EventType.TOUCH_START, s.onTouchStart, s);
            }
          }
        }]);
        return dragComp;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "initDragStatus", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startEvents", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moveEvents", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "endEvents", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Enums.ts", ['cc'], function (exports) {
  var cclegacy, Prefab, AudioClip, SpriteFrame, JsonAsset;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
      SpriteFrame = module.SpriteFrame;
      JsonAsset = module.JsonAsset;
    }],
    execute: function () {
      cclegacy._RF.push({}, "33a049TNfVN07/MmFSpqVn1", "Enums", undefined);
      var events = exports('events', {
        /** 检查是否完成 */
        check_completed: "check_completed",
        /** 移除元素 */
        remove_element: "remove_element",
        /** 检查引导 */
        check_guide: "check_guide",
        /** 检查空洞 */
        check_empty_hole: "check_empty_hole",
        /** 显示 加载资源Ui */
        loadResUIShow: "loadResUIShow",
        /** 隐藏 加载资源Ui */
        loadResUIHide: "loadResUIHide",
        /**ui打开 */
        uiShow: "uiShow",
        /**ui关闭 */
        uiHide: "uiHide",
        /**打开游戏胜利Ui */
        winUIShow: "winUIShow",
        /**关闭游戏胜利Ui */
        winUIHide: "winUIHide",
        /**打开游戏胜利领取奖励Ui */
        winAwardUIShow: "winAwardUIShow",
        /**关闭游戏胜利领取奖励Ui */
        winAwardUIHide: "winAwardUIHide",
        /**打开游戏失败Ui */
        loseUIShow: "loseUIShow",
        /**关闭游戏失败Ui */
        loseUIHide: "loseUIHide",
        /**打开侧边栏 */
        sidebarUIShow: "sidebarUIShow",
        /**关闭侧边栏 */
        sidebarUIHide: "sidebarUIHide",
        /**打开奖励Ui */
        rewardsUIShow: "rewardsUIShow",
        /**关闭奖励Ui */
        rewardsUIHide: "rewardsUIHide",
        /**打开复活Ui */
        reviveUIShow: "reviveUIShow",
        /**关闭复活Ui */
        reviveUIHide: "reviveUIHide",
        /**打开设置Ui */
        settingUIShow: "settingUIShow",
        /**关闭设置Ui */
        settingUIHide: "settingUIHide",
        /**打开获取 卡皮巴拉Ui */
        getCapybaraUIShow: "getCapybaraUIShow",
        /**关闭获取 卡皮巴拉Ui */
        getCapybaraUIHide: "getCapybaraUIHide",
        /**开启自动游戏Ui */
        autoGameUIShow: "autoGameUIShow",
        /**关闭自动游戏Ui */
        autoGameUIHide: "autoGameUIHide",
        /**打开相册Ui */
        photoAlbumUIShow: "photoAlbumUIShow",
        /**关闭相册Ui */
        photoAlbumUIHide: "photoAlbumUIHide",
        /**打开照片信息Ui */
        photoInfoUIShow: "photoInfoUIShow",
        /**关闭照片信息Ui */
        photoInfoUIHide: "photoInfoUIHide",
        /**打开道具Ui */
        propertyUIShow: "propertyUIShow",
        /**关闭道具Ui */
        propertyUIHide: "propertyUIHide",
        /**打开普通飘浮提示Ui */
        tipUIShow: "tipUIShow",
        /**关闭普通飘浮提示Ui */
        tipUIHide: "tipUIHide",
        /**打开切换Ui */
        switchUIShow: "switchUIShow",
        /**关闭切换Ui */
        switchUIHide: "switchUIHide",
        /**打开分享Ui */
        shareUIShow: "shareUIShow",
        /**关闭分享Ui */
        shareUIHide: "shareUIHide",
        /**数据有更新 */
        dataUpdate: "dataUpdate",
        ///祖玛游戏部分

        //游戏逻辑
        /**更新最后一个身体节点  */
        updateLastBody: "updateLastBody",
        /**打开游戏失败Ui */
        zumaLoseUIShow: "zumaLoseUIShow",
        /**关闭游戏失败Ui */
        zumaLoseUIHide: "zumaLoseUIHide",
        /**打开复活Ui */
        zumaReviveUIShow: "zumaReviveUIShow",
        /**关闭复活Ui */
        zumaReviveUIHide: "zumaReviveUIHide",
        /**打开游戏胜利Ui */
        zumaWinUIShow: "zumaWinUIShow",
        /**关闭游戏胜利Ui */
        zumaWinUIHide: "zumaWinUIHide",
        /**家族游戏部分 */
        /**选择了家族的楼 */
        familySelectFloor: "familySelectFloor",
        /**家族游戏固定公告标题 */
        familyPlayFixedTitle: "familyPlayFixedTitle",
        /**加入家族页面 */
        familyInfoUIShow: "familyInfoUIShow",
        /**关闭加入家族页面 */
        familyInfoUIHide: "familyInfoUIHide",
        /**家族排行榜页面 */
        familyRankingUIShow: "familyRankingUIShow",
        /**关闭家族排行榜页面 */
        familyRankingUIHide: "familyRankingUIHide",
        /**打开 ton信息Ui */
        tonInfoUIShow: "tonInfoUIShow",
        /**关闭 ton信息Ui */
        tonInfoUIHide: "tonInfoUIHide",
        /**打开 兑换Ui */
        exchangeUIShow: "exchangeUIShow",
        /**关闭 兑换Ui */
        exchangeUIHide: "exchangeUIHide",
        /**打开 创建订单Ui */
        createOrderUIShow: "createOrderUIShow",
        /**关闭 创建订单Ui */
        createOrderUIHide: "createOrderUIHide",
        /**好友 操作通知 */
        friendOperate: "friendOperate"
      });

      /**过场动画类型 */
      var SwitchAnimaType = exports('SwitchAnimaType', /*#__PURE__*/function (SwitchAnimaType) {
        SwitchAnimaType[SwitchAnimaType["loadRed"] = 1] = "loadRed";
        SwitchAnimaType[SwitchAnimaType["iconScale"] = 2] = "iconScale";
        SwitchAnimaType[SwitchAnimaType["none"] = 3] = "none";
        return SwitchAnimaType;
      }({}));
      var AssetType = exports('AssetType', {
        Prefab: {
          type: Prefab,
          path: "Prefabs/"
        },
        Sound: {
          type: AudioClip,
          path: "Clips/"
        },
        Texture: {
          type: SpriteFrame,
          path: "Image/"
        },
        JsonConf: {
          type: JsonAsset,
          path: "Json/"
        }
      });

      /**游戏类型  */
      var GameType = exports('GameType', {
        /**祖玛游戏 */
        zuma: 1,
        /**拔钉子游戏 */
        badingzi: 2
      });

      /**游戏模式  */
      var GameMode = exports('GameMode', {
        /**普通模式 */
        normal: 1,
        /**明星片模式 */
        yardMode: 2
      });

      /**道具类型 */
      var PropertyType = exports('PropertyType', /*#__PURE__*/function (PropertyType) {
        PropertyType[PropertyType["autoUpScrew"] = 1] = "autoUpScrew";
        PropertyType[PropertyType["changeColor"] = 2] = "changeColor";
        PropertyType[PropertyType["forceSelect"] = 3] = "forceSelect";
        PropertyType[PropertyType["slowDown"] = 4] = "slowDown";
        PropertyType[PropertyType["fullScreenAtk"] = 5] = "fullScreenAtk";
        PropertyType[PropertyType["rearrange"] = 6] = "rearrange";
        PropertyType[PropertyType["specifyElim"] = 7] = "specifyElim";
        return PropertyType;
      }({}));

      // 预计算8个方向的速度分量
      var DIRECTIONS = exports('DIRECTIONS', {
        "0": {
          x: 0,
          y: 1
        },
        // 上
        "45": {
          x: 0.7,
          y: 0.7
        },
        // 右上
        "90": {
          x: 1,
          y: 0
        },
        // 右
        "135": {
          x: 0.7,
          y: -0.7
        },
        // 右下
        "180": {
          x: 0,
          y: -1
        },
        // 下
        "225": {
          x: -0.7,
          y: -0.7
        },
        // 左下
        "270": {
          x: -1,
          y: 0
        },
        // 左
        "315": {
          x: -0.7,
          y: 0.7
        } // 左上
      });
      /**鱼配置 */
      var FishType = exports('FishType', /*#__PURE__*/function (FishType) {
        FishType[FishType["normal"] = 1] = "normal";
        FishType[FishType["motherFish"] = 2] = "motherFish";
        return FishType;
      }({}));

      /**鱼的状态 */
      var FishState = exports('FishState', /*#__PURE__*/function (FishState) {
        FishState[FishState["Idle"] = 1] = "Idle";
        FishState[FishState["Move"] = 2] = "Move";
        FishState[FishState["PickUp"] = 3] = "PickUp";
        FishState[FishState["Start"] = 4] = "Start";
        FishState[FishState["Arrive"] = 5] = "Arrive";
        return FishState;
      }({}));
      /**鱼的颜色 */
      var FishColor = exports('FishColor', /*#__PURE__*/function (FishColor) {
        FishColor[FishColor["Yellow"] = 1] = "Yellow";
        FishColor[FishColor["Blue"] = 2] = "Blue";
        FishColor[FishColor["Pink"] = 3] = "Pink";
        FishColor[FishColor["Purple"] = 4] = "Purple";
        FishColor[FishColor["Red"] = 5] = "Red";
        FishColor[FishColor["Green"] = 6] = "Green";
        FishColor[FishColor["LightBlue"] = 7] = "LightBlue";
        FishColor[FishColor["Orange"] = 8] = "Orange";
        return FishColor;
      }({}));
      /**鱼的大小 */
      var FishSize = exports('FishSize', /*#__PURE__*/function (FishSize) {
        FishSize[FishSize["size_4"] = 1] = "size_4";
        FishSize[FishSize["size_6"] = 2] = "size_6";
        FishSize[FishSize["size_8"] = 3] = "size_8";
        return FishSize;
      }({}));

      /**鱼配置 */

      /**木板钉子配置 */

      /**颜色统计类 */

      /**设置面板类型 */
      var settingUIShowType = exports('settingUIShowType', /*#__PURE__*/function (settingUIShowType) {
        settingUIShowType[settingUIShowType["loddy"] = 1] = "loddy";
        settingUIShowType[settingUIShowType["game"] = 2] = "game";
        settingUIShowType[settingUIShowType["zuma"] = 3] = "zuma";
        settingUIShowType[settingUIShowType["family"] = 4] = "family";
        return settingUIShowType;
      }({}));
      //祖玛游戏相关
      /**祖玛游戏配置 */
      /**方向 */
      var runDir = exports('runDir', /*#__PURE__*/function (runDir) {
        runDir[runDir["forward"] = 1] = "forward";
        runDir[runDir["back"] = -1] = "back";
        return runDir;
      }({}));

      /**身体部位 */
      var bodyPart = exports('bodyPart', /*#__PURE__*/function (bodyPart) {
        bodyPart[bodyPart["head"] = 0] = "head";
        bodyPart[bodyPart["body"] = 1] = "body";
        bodyPart[bodyPart["tail"] = 2] = "tail";
        return bodyPart;
      }({}));
      /**路径节点信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventDispatcher.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "757fdU4WNpLF55Z0P20Je8d", "EventDispatcher", undefined);
      /***
       * 自定义的事件派发监听机制，
       * 使用要求，
       *      * 1，按照1进1出的规则，使用on注册事件的时候，请记得在对象销毁的时候，使用off去注销事件
       *      * 2, 注册的事件的回调函数，this对象最好包含isValid属性，
       *         在派发事件的时候，会去检测this的isValid属性，如果有值并且值为false的时候，就不会派发派发事件，并且会删除这个事件
       *
       */
      var EventDispatcher = exports('EventDispatcher', /*#__PURE__*/function () {
        function EventDispatcher(name) {
          this.name = void 0;
          /** 事件池*/
          this.eventPool = {};
          /**延迟刷新定时器 */
          this._updateEventTime = 0;
          /**待删除的对象集合 */
          this._delThisObj = [];
          /**待删除的事件类型集合 */
          this._delEventType = [];
          this.name = name ? name : "default";
        }
        var _proto = EventDispatcher.prototype;
        /**发送事件 */
        _proto.emit = function emit(type, arg0, arg1, arg2, arg3, arg4) {
          var s = this;
          if (!s.eventPool[type]) {
            s.eventPool[type] = [];
          }
          var arr = s.eventPool[type];
          var len = arr.length;
          for (var i = 0; i < len; i++) {
            var obj = arr[i];
            if (obj.callFunc && obj.thisObj && obj.thisObj.isValid != false) {
              obj.callFunc.call(obj.thisObj, arg0, arg1, arg2, arg3, arg4);
              if (obj.isOnce) {
                obj.isDel = true;
              }
            }
          }
          s.updataEvent();
        }
        /**  注册事件 请注意
         *    * 1，注册事件根据规范，必须写off
         *    * 2，请注意如果回调函数是匿名函数，可能会导致重复监听，所以除非能保证只监听一次，不让不推荐使用匿名函数
         */;
        _proto.on = function on(type, callFunc, thisObj, isOnce) {
          if (isOnce === void 0) {
            isOnce = false;
          }
          var s = this;
          if (!s.eventPool[type]) {
            s.eventPool[type] = [];
          }
          var isAdd = true;
          var arr = s.eventPool[type];
          for (var i = 0; i < arr.length; i++) {
            /**简单检测一下无效的事件 */
            if (!arr[i].thisObj || arr[i].thisObj.isValid == false) {
              arr.splice(i, 1);
              i--;
              continue;
            }
            if (arr[i].callFunc == callFunc && arr[i].thisObj == thisObj) {
              //防止重复监听
              isAdd = false;
            }
          }
          if (isAdd) {
            arr.push({
              callFunc: callFunc,
              thisObj: thisObj,
              isOnce: isOnce,
              isDel: false
            });
          }
        }
        /**只监听一次 */;
        _proto.once = function once(type, callFunc, thisObj, isOnce) {
          var s = this;
          s.on(type, callFunc, thisObj, true);
        }
        /**取消监听 */;
        _proto.off = function off(type, callFunc, thisObj) {
          var s = this;
          var arr = s.eventPool[type];
          if (!arr) {
            console.warn("无法取消事件监听，可能还没注册：-->" + type);
            return;
          }
          var len = arr.length;
          for (var i = 0; i < len; i++) {
            if (arr[i].callFunc == callFunc && arr[i].thisObj == thisObj) {
              arr[i].isDel = true;
              // arr.splice(i, 1);
              // return;
            }
          }

          s.updataEvent();
        }

        /**删除特定前缀名的事件 */;
        _proto.removeEventByPrefix = function removeEventByPrefix(prefix) {
          var s = this;
          for (var key in s.eventPool) {
            if (key.startsWith(prefix)) {
              s.eventPool[key] = null;
            }
          }
        }

        /**清掉特定this对象的事件 */;
        _proto.clearEventByFuncThis = function clearEventByFuncThis(thisObj) {
          var s = this;
          s._delThisObj.push(thisObj);
        }
        /**清掉特定this对象的事件 */;
        _proto.clearEventByEventType = function clearEventByEventType(type) {
          var s = this;
          s._delEventType.push(type);
        }

        /**刷新事件 */;
        _proto.updataEvent = function updataEvent() {
          var s = this;
          if (s._updateEventTime) {
            clearTimeout(s._updateEventTime);
            s._updateEventTime = null;
          }
          s._updateEventTime = setTimeout(s.delEvent.bind(s), 0);
        };
        _proto.delEvent = function delEvent() {
          var s = this;
          var arr = s._delEventType;
          var len = arr.length;
          for (var i = 0; i < len; i++) {
            s.eventPool[arr[i]] = null;
          }
          for (var key in s.eventPool) {
            arr = s.eventPool[key];
            for (var _i = 0; _i < arr.length; _i++) {
              if (arr[_i].isDel || s._delThisObj.indexOf(arr[_i].thisObj) != -1) {
                arr.splice(_i, 1);
                _i--;
              }
            }
          }
          s._delEventType.length = 0;
          s._delThisObj.length = 0;
        }

        /**清空重置时间派发器 */;
        _proto.resetEvent = function resetEvent() {
          var s = this;
          s._delEventType.length = 0;
          s._delThisObj.length = 0;
          this.eventPool = {};
        };
        return EventDispatcher;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventManger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventDispatcher.ts'], function (exports) {
  var _createClass, cclegacy, EventDispatcher;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EventDispatcher = module.EventDispatcher;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ad9ff7HK61A+rAEzv/NYxNX", "EventManger", undefined);

      /**事件管理器 */
      var EventMgr = exports('default', /*#__PURE__*/function () {
        function EventMgr() {
          /**事件池 */
          this.event = void 0;
          this.event = new EventDispatcher();
        }
        _createClass(EventMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this.em) {
              this.em = new EventMgr();
            }
            return this.em;
          }
        }]);
        return EventMgr;
      }());
      EventMgr.em = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameManger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, view, director, Director, screen, ResolutionPolicy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      view = module.view;
      director = module.director;
      Director = module.Director;
      screen = module.screen;
      ResolutionPolicy = module.ResolutionPolicy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9427cySQnFF+IeRE2koqmHH", "GameManger", undefined);
      var GameManger = exports('default', /*#__PURE__*/function () {
        function GameManger() {}
        var _proto = GameManger.prototype;
        /**初始化 */
        _proto.init = function init() {
          var s = this;
          view.on("canvas-resize", s.initScene, s);
          director.on(Director.EVENT_AFTER_SCENE_LAUNCH, s.initScene, s);
        };
        _proto.initScene = function initScene() {
          var s = this;
          setTimeout(function () {
            s.resolution();
          }, 0);
        }

        /**更新游戏分辨率模式 */;
        _proto.resolution = function resolution() {
          var size = screen.windowSize;
          if (size.width / size.height > 750 / 1334) {
            view.setResolutionPolicy(ResolutionPolicy.FIXED_HEIGHT);
          } else {
            view.setResolutionPolicy(ResolutionPolicy.FIXED_WIDTH);
          }
        };
        _createClass(GameManger, null, [{
          key: "instance",
          get: function get() {
            if (!this.gm) {
              this.gm = new GameManger();
            }
            return this.gm;
          }
        }]);
        return GameManger;
      }());
      GameManger.gm = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/getCapybaraUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseUI.ts', './Global.ts', './ResourceManger.ts', './EventManger.ts', './Enums.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Sprite, SpriteFrame, Node, assetManager, baseUI, Global, ResourceManger, EventMgr, events;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      assetManager = module.assetManager;
    }, function (module) {
      baseUI = module.baseUI;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      ResourceManger = module.default;
    }, function (module) {
      EventMgr = module.default;
    }, function (module) {
      events = module.events;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "d9ba2k/7YhF9q/RyqD6wxVw", "getCapybaraUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var getCapybaraUI = exports('getCapybaraUI', (_dec = ccclass("getCapybaraUI"), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Sprite), _dec6 = property({
        type: SpriteFrame
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(getCapybaraUI, _baseUI);
        function getCapybaraUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          /**下次在来按钮 */
          _initializerDefineProperty(_this, "nextTimeBtn", _descriptor, _assertThisInitialized(_this));
          /**下一关按钮 */
          _initializerDefineProperty(_this, "nextLevelBtn", _descriptor2, _assertThisInitialized(_this));
          /**炫耀一下按钮 */
          _initializerDefineProperty(_this, "showOffBtn", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "puzzleSpr", _descriptor4, _assertThisInitialized(_this));
          /**提示去小院 提示动画 */
          _initializerDefineProperty(_this, "goToYardTipSprite", _descriptor5, _assertThisInitialized(_this));
          _this.eventName = "getCapybaraUI";
          return _this;
        }
        var _proto = getCapybaraUI.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          _baseUI.prototype.onLoad.call(this);
          s.nextTimeBtn.node.on(Node.EventType.TOUCH_END, s.onNextTime, s);
          s.nextLevelBtn.node.on(Node.EventType.TOUCH_END, s.onNextLevel, s);
          s.showOffBtn.node.on(Node.EventType.TOUCH_END, s.onShowOff, s);
        };
        _proto.showUI = function showUI(e) {
          _baseUI.prototype.showUI.call(this, e);
          var s = this;
          if (Global.roleIdList.length < Global.maxRoleCount) {
            var arr = Global.roleIdList;
            arr.push(arr.length);
            Global.roleIdList = arr;
          }
          console.log("显示获取卡皮巴拉序号 ：" + Global.puzzle_index);
          var bundle = assetManager.getBundle("puzzleRes");
          var bgRes = bundle.get("image/k" + Global.puzzle_index + "/spriteFrame", SpriteFrame);
          s.puzzleSpr.spriteFrame = bgRes;
          Global.puzzle_index++;
          Global.puzzlePositionList = [];
          Global.audioMgr.playSound("success");
        };
        _proto.onNextTime = function onNextTime() {
          ResourceManger.instance.openSceneByName("yard");
        }

        /**进入下一关 */;
        _proto.onNextLevel = function onNextLevel() {
          var s = this;
          s.hideUI();
          EventMgr.inst.event.emit(events.tipUIShow, s.goToYardTipSprite, 0, 236, 1000);
        };
        _proto.onShowOff = function onShowOff() {
          EventMgr.inst.event.emit(events.shareUIShow);
        };
        return getCapybaraUI;
      }(baseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nextTimeBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nextLevelBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "showOffBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "puzzleSpr", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "goToYardTipSprite", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Global.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enums.ts', './EventManger.ts', './TraceManager.ts'], function (exports) {
  var _createClass, cclegacy, sys, GameMode, GameType, events, EventMgr, TraceManager;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      GameMode = module.GameMode;
      GameType = module.GameType;
      events = module.events;
    }, function (module) {
      EventMgr = module.default;
    }, function (module) {
      TraceManager = module.TraceManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d4096j+dwhFi6/OgoLk3Soz", "Global", undefined);
      var Global = exports('Global', /*#__PURE__*/function () {
        function Global() {}
        /**
         * 比较两个节点的显示层级
         * @param nodeA 节点A
         * @param nodeB 节点B
         * @returns
         * 1: nodeA在nodeB前面
         * -1: nodeA在nodeB后面
         * 0: 两个节点在同一位置(理论上不应该出现)
         * null: 无法比较(不在同一个层级结构中)
         */
        Global.compareNodeOrder = function compareNodeOrder(nodeA, nodeB) {
          // 首先检查是否存在父子关系
          if (Global.isChildOf(nodeA, nodeB)) {
            // 如果nodeA是nodeB的子节点，那么nodeA一定在nodeB上面
            return 1;
          }
          if (Global.isChildOf(nodeB, nodeA)) {
            // 如果nodeB是nodeA的子节点，那么nodeB一定在nodeA上面
            return -1;
          }

          // 获取两个节点的所有父节点路径
          var getNodePath = function getNodePath(node) {
            var path = [node];
            var current = node;
            while (current.parent) {
              path.push(current.parent);
              current = current.parent;
            }
            return path;
          };
          var pathA = getNodePath(nodeA);
          var pathB = getNodePath(nodeB);

          // 检查是否有共同的父节点
          var commonParent = null;
          var indexA = pathA.length - 1;
          var indexB = pathB.length - 1;

          // 从根节点开始，找到最后一个共同父节点
          while (indexA >= 0 && indexB >= 0 && pathA[indexA] === pathB[indexB]) {
            commonParent = pathA[indexA];
            indexA--;
            indexB--;
          }

          // 如果没有共同父节点，则无法比较
          if (!commonParent) {
            return null;
          }

          // 获取需要比较的子节点
          var childA = indexA >= 0 ? pathA[indexA] : nodeA;
          var childB = indexB >= 0 ? pathB[indexB] : nodeB;

          // 如果是同一个父节点下的直接子节点，比较它们的同级索引
          if (childA.parent === childB.parent) {
            var _siblingIndexA = childA.getSiblingIndex();
            var _siblingIndexB = childB.getSiblingIndex();
            if (_siblingIndexA < _siblingIndexB) return -1;
            if (_siblingIndexA > _siblingIndexB) return 1;
            return 0;
          }

          // 如果不是同一个父节点的直接子节点，则比较各自父节点的同级索引
          var parentA = childA.parent;
          var parentB = childB.parent;
          var siblingIndexA = parentA.getSiblingIndex();
          var siblingIndexB = parentB.getSiblingIndex();
          if (siblingIndexA < siblingIndexB) return -1;
          if (siblingIndexA > siblingIndexB) return 1;
          return 0;
        }

        /**
         * 判断nodeA是否是nodeB的子节点（包括孙子节点等）
         */;
        Global.isChildOf = function isChildOf(nodeA, nodeB) {
          var parent = nodeA.parent;
          while (parent) {
            if (parent === nodeB) {
              return true;
            }
            parent = parent.parent;
          }
          return false;
        };
        _createClass(Global, null, [{
          key: "bdz_gameId",
          get: function get() {
            return parseInt(sys.localStorage.getItem("bdz_gameId") || "0");
          }
          /** 游戏关卡 */,
          set: /** 拔钉子游戏Id */
          function set(id) {
            sys.localStorage.setItem("bdz_gameId", id.toString());
          }
        }, {
          key: "gameLevel",
          get: function get() {
            return parseInt(sys.localStorage.getItem("gameLevel") || "1");
          }

          /** 设置拼图数量 */,
          set: function set(level) {
            sys.localStorage.setItem("gameLevel", level.toString());
          }
        }, {
          key: "puzzle_count",
          get: function get() {
            return parseInt(sys.localStorage.getItem("puzzleCount") || "0");
          },
          set: function set(count) {
            sys.localStorage.setItem("puzzleCount", count.toString());
          }
        }, {
          key: "curLevelConfIndex",
          get: /**当前关卡配置索引 */
          function get() {
            if (Global.gameLevel <= 11) {
              return Global.gameLevel;
            } else {
              return Global.conf[Global.gameLevel % Global.conf.length];
            }
          }

          /**拼图序号 */
        }, {
          key: "puzzle_index",
          get: function get() {
            return parseInt(sys.localStorage.getItem("puzzleIndex") || "0");
          }

          /** 设置拼图位置列表 */,
          set: function set(index) {
            sys.localStorage.setItem("puzzleIndex", index % 4 + "");
          }
        }, {
          key: "puzzlePositionList",
          get: /** 获取拼图位置列表 */
          function get() {
            var list = JSON.parse(sys.localStorage.getItem("puzzlePositionList") || "[]");
            if (list.length == 0) {
              for (var i = 0; i < 400; i++) {
                list.push(1);
              }
            }
            return list;
          }

          /**广告卷 */,
          set: function set(list) {
            if (list.length == 0) {
              for (var i = 0; i < 400; i++) {
                list.push(1);
              }
            }
            sys.localStorage.setItem("puzzlePositionList", JSON.stringify(list));
          }
        }, {
          key: "videoCount",
          get: function get() {
            return parseInt(sys.localStorage.getItem("videoCount") || "0");
          },
          set: function set(value) {
            sys.localStorage.setItem("videoCount", value.toString());
            EventMgr.inst.event.emit(events.dataUpdate);
          }

          /**最大的角色数 */
        }, {
          key: "maxRoleCount",
          get: function get() {
            return 4;
          }
          /**最大的照片数 */
        }, {
          key: "maxPhotoCount",
          get: function get() {
            return 4;
          }

          /**获取已经得到的角色Id列表 */
        }, {
          key: "roleIdList",
          get: function get() {
            return JSON.parse(sys.localStorage.getItem("roleIdList") || "[]");
          }

          /**设置已经得到的角色Id列表 */,
          set: function set(list) {
            sys.localStorage.setItem("roleIdList", JSON.stringify(list));
          }

          /**获取角色状态 小于2 表示玩耍，2-4 表示旅行 4表示旅行回来 */
        }, {
          key: "roleState",
          get: function get() {
            var list = JSON.parse(sys.localStorage.getItem("roleState") || "[]");
            if (list.length == 0) {
              for (var i = 0; i < Global.maxRoleCount; i++) {
                list.push(0);
              }
            }
            return list;
          }

          /**设置角色状态 */,
          set: function set(list) {
            sys.localStorage.setItem("roleState", JSON.stringify(list));
          }

          /**获取获得明信片状态 0-未激活 1-已激活 2-已使用 */
        }, {
          key: "postcardState",
          get: function get() {
            var list = JSON.parse(sys.localStorage.getItem("postcardState") || "[]");
            if (list.length == 0) {
              for (var i = 0; i < Global.maxPhotoCount; i++) {
                list.push(0);
              }
            }
            return list;
          }

          /**设置明信片状态 */,
          set: function set(list) {
            sys.localStorage.setItem("postcardState", JSON.stringify(list));
          }

          /**是否新用户 */
        }, {
          key: "isNewUser",
          get: function get() {
            return !(sys.localStorage.getItem("isNewUser") == "false");
          },
          set: function set(value) {
            sys.localStorage.setItem("isNewUser", value.toString());
          }
        }]);
        return Global;
      }());
      /**debug模式 */
      Global.debugMode = true;
      /** 加载进度（0-1之间） */
      Global.loading_rate = 0;
      /**设置 背景音乐 */
      Global.setting_bgm = true;
      /**设置 音效 */
      Global.setting_effect = true;
      /**设置 震动 */
      Global.setting_shake = true;
      /**埋点管理器 */
      Global.traceMgr = new TraceManager();
      /**视频广告管理器 */
      Global.videoADMgr = void 0;
      /**设置管理器 */
      Global.settingMgr = void 0;
      /**音频管理器 */
      Global.audioMgr = void 0;
      /**网络管理器 */
      Global.networkMgr = void 0;
      /** 插页广告ID */
      Global.ad_intersitial_id = void 0;
      /** 视频广告ID */
      Global.ad_video_id = "3j5lh5cl8idd5ca3e3";
      /**  微信视频广告ID */
      Global.ad_wechat_video_id = "adunit-c0f6261d54540107";
      /** 横幅广告ID */
      Global.ad_banner_id = void 0;
      // /**进入 前一个 场景的场景名 */
      // static beforeSceneName: string = "";
      /** 游戏模式 */
      Global.curGameMode = GameMode.normal;
      /** 游戏类型 */
      Global.curGameType = GameType.badingzi;
      /**是否打开了设置界面 */
      Global.isOpenSetting = false;
      /**是否准备使用道具 */
      Global.isUserProper = false;
      /**是否在播放广告视频 */
      Global.isPlayAd = false;
      /**是否在播放道具动画 */
      Global.isPlayProper = false;
      Global.conf = [7, 4, 11, 2, 9, 4, 3, 10, 8, 5, 6, 10, 2, 9, 4, 2, 11, 7, 3, 8, 5, 10, 6, 2, 9, 4, 5, 11, 7, 3, 8, 10, 5, 6, 2, 9, 4, 6, 7, 3, 8, 11, 5, 10, 6, 2, 9, 4, 5, 7, 11, 3, 8, 10, 5, 6];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GMTool.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Global.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, Node, Component, Global;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      Global = module.Global;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a07192ABklDC72YBVykbfvF", "GMTool", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GMTool = exports('GMTool', (_dec = ccclass("GMTool"), _dec2 = property(Label), _dec3 = property(Button), _dec4 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GMTool, _Component);
        function GMTool() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "levelLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelAddBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelSubBtn", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GMTool.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.levelAddBtn.node.on(Node.EventType.TOUCH_END, s.onLevelAdd, s);
          s.levelSubBtn.node.on(Node.EventType.TOUCH_END, s.onLevelSub, s);
        };
        _proto.onEnable = function onEnable() {
          var s = this;
          s.levelLabel.string = Global.gameLevel + "";
        };
        _proto.onLevelAdd = function onLevelAdd() {
          Global.gameLevel++;
          this.levelLabel.string = Global.gameLevel + "";
        };
        _proto.onLevelSub = function onLevelSub() {
          Global.gameLevel--;
          if (Global.gameLevel < 1) {
            Global.gameLevel = 1;
          }
          this.levelLabel.string = Global.gameLevel + "";
        };
        return GMTool;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "levelAddBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "levelSubBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HitPolygon.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "063962KiotJf5SxFmHIQM08", "HitPolygon", undefined);
      /**图形多边形碰撞 */
      var HitPolygon = exports('HitPolygon', /*#__PURE__*/function () {
        function HitPolygon() {}
        /**
         * JS 代码
         * 判断点是否在多边形内
         * 求解通过该点的水平线与多边形各边的交点
         * 单边交点为奇数，成立
         * IVector2：封装数学库，包含x,y两个变量
         * Array：数组
         * @param pos 传入点的坐标pos.x, pos.y
         * @param posPolygon  多边形的各个顶点坐标
         * @param count 多边形顶点的个数
         */
        HitPolygon.PointInPolygon = function PointInPolygon(pos, posPolygon, count) {
          var cross = 0; //交点个数

          for (var i = 0; i < count; i++) {
            var p1 = posPolygon[i];
            var p2 = posPolygon[(i + 1) % count]; //下一个节点

            // p1p2这条边与水平线平行
            if (p1.y == p2.y) continue;

            // 交点在p1p2的延长线上
            if (pos.y < Math.min(p1.y, p2.y)) continue;

            // 交点在p1p2的延长线上
            if (pos.y > Math.max(p1.y, p2.y)) continue;

            // 计算交点 X 左边 ： (p2.y - p1.y)/(p2.x - p1.x) = (y - p1.y)/(x - p1.x)
            // 直线 K 值相等， 交点y = pos.y
            var x = (pos.y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y) + p1.x;
            // 只统计单边交点，即点的正向方向
            if (x > pos.x) cross++;
          }
          return cross % 2 == 1;
        };
        return HitPolygon;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/loadResUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Global.ts', './baseUI.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, UITransform, Label, Global, BaseUIShowType, baseUI;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      Label = module.Label;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      BaseUIShowType = module.BaseUIShowType;
      baseUI = module.baseUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "b39058GbqdNzbgObof5g/e5", "loadResUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var loadResUI = exports('loadResUI', (_dec = ccclass("loadResUI"), _dec2 = property(UITransform), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(loadResUI, _baseUI);
        function loadResUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "load", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "load_num", _descriptor2, _assertThisInitialized(_this));
          _this.maxWidth = 632;
          _this.minWidth = 30;
          _this.eventName = "loadResUI";
          return _this;
        }
        var _proto = loadResUI.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          _baseUI.prototype.onLoad.call(this);
          s.playAnimaType = BaseUIShowType.none;
        };
        _proto.showUI = function showUI(e) {
          if (e === void 0) {
            e = null;
          }
          var s = this;
          _baseUI.prototype.showUI.call(this, e);
          s.load.width = s.minWidth;
          s.load_num.string = "0%";
        };
        _proto.hideUI = function hideUI(e) {
          var _this2 = this;
          var s = this;
          s.unscheduleAllCallbacks();
          s.load.width = s.maxWidth;
          s.load_num.string = "99%";
          s.scheduleOnce(function () {
            _baseUI.prototype.hideUI.call(_this2);
          }, 0);
        };
        _proto.update = function update(dt) {
          var s = this;
          if (s.content.active == false) return;
          var rate = Math.min(Global.loading_rate, 1);
          s.load.width = s.minWidth + (s.maxWidth - s.minWidth) * rate;
          s.load_num.string = Math.floor(rate * 100) + "%";
        };
        return loadResUI;
      }(baseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "load", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "load_num", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/loseUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseUI.ts', './Global.ts', './ResourceManger.ts', './Enums.ts', './EventManger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, Label, sp, Vec3, tween, baseUI, Global, ResourceManger, GameType, events, EventMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      Label = module.Label;
      sp = module.sp;
      Vec3 = module.Vec3;
      tween = module.tween;
    }, function (module) {
      baseUI = module.baseUI;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      ResourceManger = module.default;
    }, function (module) {
      GameType = module.GameType;
      events = module.events;
    }, function (module) {
      EventMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "386406YSlRMwalggrslsNfP", "loseUI", undefined);
      // import { screwGlobal } from "../../Bundles/screwRes/script/screwGlobal";
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var loseUI = exports('loseUI', (_dec = ccclass("loseUI"), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(loseUI, _baseUI);
        function loseUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          /**返回主页按钮 */
          _initializerDefineProperty(_this, "backHomeBtn", _descriptor, _assertThisInitialized(_this));
          /**重新开始按钮 */
          _initializerDefineProperty(_this, "restartBtn", _descriptor2, _assertThisInitialized(_this));
          /**找人帮忙按钮 */
          _initializerDefineProperty(_this, "helpBtn", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "handleNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loseLabel", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ShiBai", _descriptor6, _assertThisInitialized(_this));
          _this.eventName = "loseUI";
          _this.startPoint = new Vec3(-237, 0, 0);
          _this.endPoint = new Vec3(237, 0, 0);
          return _this;
        }
        var _proto = loseUI.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          _baseUI.prototype.onLoad.call(this);
          s.backHomeBtn.node.on(Node.EventType.TOUCH_END, s.onBackHome, s);
          s.restartBtn.node.on(Node.EventType.TOUCH_END, s.onRestart, s);
          s.helpBtn.node.on(Node.EventType.TOUCH_END, s.onHelp, s);
        };
        _proto.showUI = function showUI() {
          _baseUI.prototype.showUI.call(this);
          var s = this;
          s.backHomeBtn.node.active = false;
          s.restartBtn.node.active = false;
          s.helpBtn.node.active = false;
          s.handleNode.setPosition(s.startPoint);
          s.loseLabel.string = "0%";
          s.ShiBai.setAnimation(0, "ShiBai", false);
          //比例
          // let runRatio = screwGlobal.colorMgr.getRecycleColorLength() / screwGlobal.colorMgr.getMaxScrewNum();
          var runRatio = 10;
          var moveX = runRatio * 474;
          s.endPoint.x = s.startPoint.x + moveX;
          tween(s.handleNode).to(runRatio * 2, {
            position: s.endPoint
          }, {
            onUpdate: function onUpdate(target, ratio) {
              s.loseLabel.string = Math.floor(ratio * runRatio * 100) + "%";
            }
          }).call(s.showClikcBtn, s).start();
          Global.audioMgr.playSound("fall");
        };
        _proto.showClikcBtn = function showClikcBtn() {
          var s = this;
          s.backHomeBtn.node.active = true;
          s.restartBtn.node.active = true;
          s.helpBtn.node.active = true;
        };
        _proto.onBackHome = function onBackHome() {
          var s = this;
          ResourceManger.instance.openSceneByName("lobby");
          s.hideUI();
        };
        _proto.onRestart = function onRestart() {
          var s = this;
          if (Global.curGameType == GameType.zuma) {
            ResourceManger.instance.openSceneByName("zuma");
          } else {
            ResourceManger.instance.openSceneByName("game");
          }
          s.hideUI();
        };
        _proto.onHelp = function onHelp() {
          EventMgr.inst.event.emit(events.shareUIShow);
        };
        return loseUI;
      }(baseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backHomeBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "restartBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "helpBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "handleNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "loseLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ShiBai", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./ColorManagr.ts', './GMTool.ts', './blackMask.ts', './clickEffect.ts', './AudioManger.ts', './Enums.ts', './EventDispatcher.ts', './EventManger.ts', './GameManger.ts', './Global.ts', './HitPolygon.ts', './MessageDecoder.ts', './Net.ts', './NetManger.ts', './PersistentNodeModule.ts', './ResourceManger.ts', './TraceManager.ts', './VideoADManger.ts', './ThirdPartyManager.ts', './moneyCount.ts', './MainScene.ts', './border.ts', './toSceneBtn.ts', './ScrollViewAutoSize.ts', './ScrollViewCompBase.ts', './ScrollViewFixedSize.ts', './activeAnima.ts', './callFuncEvent.ts', './cocosToolFunc.ts', './dragComp.ts', './baseUI.ts', './getCapybaraUI.ts', './loadResUI.ts', './loseUI.ts', './propertyUI.ts', './puzzleSceneNewUserTipUi.ts', './reviveUI.ts', './rewardsUI.ts', './settingUI.ts', './shareUI.ts', './sidebarUI.ts', './switchUI.ts', './tipUI.ts', './winAwardUI.ts', './winUI.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enums.ts', './ResourceManger.ts', './EventManger.ts', './GameManger.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, events, ResourceManger, EventMgr, GameManger;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      events = module.events;
    }, function (module) {
      ResourceManger = module.default;
    }, function (module) {
      EventMgr = module.default;
    }, function (module) {
      GameManger = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "959eff0E6RBWqZHUwAPHCSQ", "MainScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MainScene = exports('MainScene', (_dec = ccclass("MainScene"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainScene, _Component);
        function MainScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.load_num = 0;
          return _this;
        }
        var _proto = MainScene.prototype;
        _proto.onLoad = function onLoad() {
          GameManger.instance.init();
        };
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  EventMgr.inst.event.emit(events.loadResUIShow);
                  ResourceManger.instance.openSceneByName("lobby");

                // console.log("准备进入大厅");
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        return MainScene;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MessageDecoder.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fd630lezglMvpmsOS+sPLsB", "MessageDecoder", undefined);
      /** 消息解码器 */
      var MessageDecoder = exports('MessageDecoder', /*#__PURE__*/function () {
        function MessageDecoder() {
          this.messageType = void 0;
          this.message = void 0;
          this.messageConstructors = {};
        }
        /**设置id与消息体 映射对象 
         * @param  messageType {    1001: "CMsgLC2LSReqLogin"}
         * @param  message proto.js 里的对象
         */
        var _proto = MessageDecoder.prototype;
        _proto.setMessageType = function setMessageType(messageType, message) {
          var s = this;
          s.messageType = messageType;
          s.message = message;
          for (var _i = 0, _Object$values = Object.values(messageType); _i < _Object$values.length; _i++) {
            var _key = _Object$values[_i];
            var messageConstructor = message[_key];
            s.messageConstructors[_key] = messageConstructor;
          }
        }

        /**创建消息体 */;
        _proto.CreateMessage = function CreateMessage(id, opthis) {
          if (opthis === void 0) {
            opthis = {};
          }
          var s = this;
          var messageType = s.messageType[id];
          if (!messageType) {
            throw new Error("Unknown message ID: " + id);
          }
          var messageConstructor = s.messageConstructors[messageType];
          if (!messageConstructor) {
            throw new Error("Unknown message type: " + messageType);
          }
          var info = messageConstructor.create();
          for (var _key2 in opthis) {
            info[_key2] = opthis[_key2];
          }
          return info;
        }
        /**获取消息结构 */;
        _proto.GetConstructor = function GetConstructor(id) {
          var s = this;
          var messageType = s.messageType[id];
          if (!messageType) {
            throw new Error("Unknown message ID: " + id);
          }
          var messageConstructor = s.messageConstructors[messageType];
          return messageConstructor;
        };
        return MessageDecoder;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/moneyCount.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Global.ts', './Enums.ts', './EventManger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, Global, events, EventMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      events = module.events;
    }, function (module) {
      EventMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "9a672xzZRlFe7Hwwc8qna1H", "moneyCount", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var moneyCount = exports('moneyCount', (_dec = ccclass("moneyCount"), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(moneyCount, _Component);
        function moneyCount() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = moneyCount.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          /**保存到本地 */
          this.label.string = Global.videoCount + "";
          EventMgr.inst.event.on(events.dataUpdate, s.updateShow, s);
        };
        _proto.updateShow = function updateShow() {
          this.label.string = Global.videoCount + "";
        };
        return moneyCount;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Net.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventDispatcher.ts', './MessageDecoder.ts'], function (exports) {
  var _createClass, cclegacy, sys, EventDispatcher, MessageDecoder;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      EventDispatcher = module.EventDispatcher;
    }, function (module) {
      MessageDecoder = module.MessageDecoder;
    }],
    execute: function () {
      cclegacy._RF.push({}, "681a8cxJz1KWLP5pV+96MKd", "Net", undefined);
      var NetType = exports('NetType', {
        /**websocket 取消 */
        ws_close: "ws_close",
        /**websocket 错误 */
        ws_error: "ws_error",
        /**websocket 连接超时 */
        ws_timeOut: "ws_timeOut",
        /**websocket 连接超时 超时行为结束 */
        ws_timeOutEnd: "ws_timeOutEnd",
        /**websocket 成功连接 */
        ws_open: "ws_open",
        /**协议错误码 */
        protocol_ErrorCode: "ws_errorCode"
      });
      /**枚举websock链接方式 */
      var NetMode = exports('NetMode', /*#__PURE__*/function (NetMode) {
        NetMode[NetMode["action"] = 0] = "action";
        NetMode[NetMode["reconnect"] = 1] = "reconnect";
        return NetMode;
      }(NetMode || {}));
      /**WebSocket网络对象， */
      var Net = exports('Net', /*#__PURE__*/function () {
        function Net(event) {
          /**网络连接别名 */
          this.name = void 0;
          this._ws = void 0;
          this._ip = void 0;
          this._port = void 0;
          this._heartTime = void 0;
          /**当前网路是否连接中 */
          this._connected = false;
          /**发送失败的消息列表 */
          this._messageList = void 0;
          this._heartbeatTimer = void 0;
          this._heartbeatData = new ArrayBuffer(8);
          this._heartMessageType = void 0;
          this._messageDecoder = void 0;
          /**事件前缀 */
          this._eventPrefix = "";
          /**网络连接事件派发器 */
          this._event = void 0;
          /**是否断线重连 */
          this.isReconnection = true;
          //延迟重连定时器
          this.reconnectTime = void 0;
          /**重连次数 */
          this.reconnectCount = 0;
          /**网络连接超时定时器 */
          this.netTimeOut = void 0;
          /**是否输出网络消息 */
          this.isLogInfo = false;
          /**连接类型，0-代表手动连接 1-断线重连 */
          this.netMode = void 0;
          /**错误代码 */
          this._errorCode = void 0;
          /**重连间隔时间 */
          this.reconnectWaitTime = 1000;
          this._notNetTimeId = [];
          this.countWebSocketClose = 0;
          var s = this;
          s._event = event;
        }

        /**创建一个新的网络连接类
         * @param ip ip地址
         * @param port 端口
         * @param heartTime 心跳时长，如果传入的值大于-1 则启动心跳，默认不启动
         * @param name 网络连接别名
         * @param [heartMessageType=NaN] 心跳协议号 默认是NaN
         */
        var _proto = Net.prototype;
        _proto.setNetData = function setNetData(ip, port, heartTime, name, heartMessageType, eventPrefix) {
          if (heartTime === void 0) {
            heartTime = -1;
          }
          if (name === void 0) {
            name = "default";
          }
          if (heartMessageType === void 0) {
            heartMessageType = NaN;
          }
          if (eventPrefix === void 0) {
            eventPrefix = "";
          }
          var s = this;
          s._ip = ip;
          s._port = port;
          s.name = name;
          s._heartTime = heartTime;
          s._messageList = [];
          s._heartMessageType = heartMessageType;
          s._eventPrefix = eventPrefix;
          if (!s._event) s._event = new EventDispatcher();
          var heartbeatDataView = new DataView(s._heartbeatData);
          heartbeatDataView.setInt32(0, 3, true);
          heartbeatDataView.setInt32(4, 0, true);
        };
        /**设置id与消息体 映射对象
         * @param  messageType {    1001: "CMsgLC2LSReqLogin"}
         * @param  message proto.js 里的对象
         */
        _proto.setMessageType = function setMessageType(messageType, message, errorCode) {
          if (errorCode === void 0) {
            errorCode = {};
          }
          var s = this;
          s._messageDecoder = new MessageDecoder();
          s._messageDecoder.setMessageType(messageType, message);
          s._errorCode = errorCode;
        }
        /**开始链接 */;
        _proto.connect = function connect() {
          var s = this;
          if (s._connected) {
            return;
          }
          if (s.isLogInfo) console.log("name:  " + s.name + "  ip:  " + s._ip + ":" + s._port + "  ---\u5F00\u59CB\u94FE\u63A5---");
          s.doConnect(NetMode.action);
          s.isReconnection = true;
        }
        /**强制开始链接 */;
        _proto.forceConnect = function forceConnect() {
          var s = this;
          if (s.isLogInfo) console.log("name:  " + s.name + "  ip:  " + s._ip + ":" + s._port + "  ---\u5F3A\u5236\u91CD\u65B0\u5F00\u59CB\u94FE\u63A5---");
          s._connected = false;
          s.doConnect(NetMode.action);
          s.isReconnection = true;
        }

        /**获取网路链接状态 */;
        _proto.getNetConnectStatus = function getNetConnectStatus() {
          var s = this;
          return s._connected;
        }

        /**手动断开连接 不重连 */;
        _proto.closeNet = function closeNet(waitTime) {
          if (waitTime === void 0) {
            waitTime = 1000;
          }
          var s = this;
          s.reconnectWaitTime = waitTime;
          s.isReconnection = false;
          s.doCloseNet();
        };
        /**断开连接 重连 */
        _proto.doCloseNet = function doCloseNet(waitTime) {
          if (waitTime === void 0) {
            waitTime = 1000;
          }
          var s = this;
          s.reconnectWaitTime = waitTime;
          if (s.isLogInfo) console.log("name:  " + s.name + "  ip:  " + s._ip + ":" + s._port + "  ---\u624B\u52A8\u53D6\u6D88\u8FDE\u63A5---");
          if (s._ws != null) {
            s._ws.close();
          }
          s.clearReconnectTime();
          s.stopHeartbeat();
        }

        /**断线重连 */;
        _proto.reconnection = function reconnection() {
          var s = this;
          if (s.isReconnection) {
            if (s.isLogInfo) console.log("name:  " + s.name + "  ip:  " + s._ip + ":" + s._port + "  ---\u65AD\u7EBF\u91CD\u8FDE---");
            s.clearReconnectTime();
            s.reconnectTime = setTimeout(function () {
              s.reconnectCount++;
              s.doConnect(NetMode.reconnect);
            }, s.reconnectWaitTime);
            s.reconnectWaitTime = 1000;
          }
        };
        _proto.doConnect = function doConnect(netMode) {
          var s = this;
          s.netMode = netMode;
          if (s._ws) {
            s._ws.onopen = null;
            s._ws.onmessage = null;
            s._ws.onclose = null;
            s._ws.onerror = null;
            s._ws.close();
          }
          var url = s._ip + ":" + s._port;
          if (!s._ip.startsWith("ws")) {
            url = "wss://" + url;
          }
          s._ws = new WebSocket(url);
          if (s.isLogInfo) console.log(url);
          s._ws.binaryType = "arraybuffer";
          s._ws.onopen = s.onOpen.bind(s);
          s._ws.onmessage = s.onMessage.bind(s);
          s._ws.onclose = s.onClose.bind(s);
          s._ws.onerror = s.onError.bind(s);
        };
        _proto.clearReconnectTime = function clearReconnectTime() {
          var s = this;
          if (s.reconnectTime) clearTimeout(s.reconnectTime);
        }

        /*启动心跳*/;
        _proto.startHeartbeat = function startHeartbeat() {
          var s = this;
          s.stopHeartbeat();
          s._heartbeatTimer = window.setInterval(function () {
            if (!isNaN(s._heartMessageType)) {
              s.SendMessage(s._heartMessageType, {});
            } else {
              // s._ws.send(s._heartbeatData);
              s._ws.send("headTime peng");
            }
          }, s._heartTime);
        }
        /*停止心跳*/;
        _proto.stopHeartbeat = function stopHeartbeat() {
          var s = this;
          if (s._heartbeatTimer) {
            clearInterval(s._heartbeatTimer);
            s._heartbeatTimer = null;
          }
        };
        /**添加不进行超时的协议id */
        _proto.addNotNetTimeId = function addNotNetTimeId(ids) {
          var s = this;
          ids.forEach(function (id) {
            s._notNetTimeId.push(id);
          });
        }

        /**发送消息
         * @param id 协议号
         * @param option 协议内容参数
         */;
        _proto.SendMessage = function SendMessage(id, option) {
          var s = this;
          var info = s._messageDecoder.CreateMessage(id, option);
          var constructor = s._messageDecoder.GetConstructor(id);
          var buff = constructor.encode(info).finish();
          var sendData = s.createDataObject(id, buff);
          if (!s._connected) {
            s._messageList.push(sendData);
          } else {
            if (s.isLogInfo) console.log(s._ip + ":" + s._port + " 发送协议：" + id + "内容为：", option, sys.isNative && JSON.stringify(option));
            if (s._notNetTimeId.indexOf(id) == -1) s.startNetTimeClock();
            s._ws.send(sendData);
          }
        }
        /**发送文本消息 */;
        _proto.sendTextMessage = function sendTextMessage(text) {
          var s = this;
          s._ws.send(text);
        };
        _proto.onMessage = function onMessage(event) {
          var message = event.data;
          var s = this;
          if (message instanceof ArrayBuffer) {
            var d = s.parseArrayBuffer(message);
            var constructor1 = s._messageDecoder.GetConstructor(d.id);
            var buff = constructor1.decode(d.buff, d.length);
            if (s.isLogInfo) console.log("接到消息返回：", d.id, buff, sys.isNative && JSON.stringify(buff));
            if (buff && buff.result) {
              if (s.isLogInfo) console.log(s._errorCode[buff.result]);
              s._event.emit(s._eventPrefix + NetType.protocol_ErrorCode, buff.result, d.id + "", buff);
            }
            s._event.emit(s._eventPrefix + d.id + "", buff);
            s.stopNetTimeClock();
          }
          if (typeof message === "string") {
            if (s.isLogInfo) console.log(s.name + "： 接到消息返回：", message);
            s._event.emit(s._eventPrefix + "text", message);
          }
        }
        /**开始网络连接计时 超过多少秒没有回复算断开 */;
        _proto.startNetTimeClock = function startNetTimeClock() {
          var s = this;
          s.stopNetTimeClock();
          s.netTimeOut = setTimeout(function () {
            s.stopHeartbeat();
            if (s.isLogInfo) console.log("网络连接超时  重连中" + s._ip + ":" + s._port);
            if (s._ws) s._ws.close();
          }, 10000);
        }
        /**停止网络连接计时 */;
        _proto.stopNetTimeClock = function stopNetTimeClock() {
          var s = this;
          if (s.netTimeOut) {
            clearTimeout(s.netTimeOut);
            s._event.emit(s._eventPrefix + NetType.ws_timeOutEnd);
            s.netTimeOut = null;
          }
        };
        _proto.onOpen = function onOpen(event) {
          var s = this;
          if (s.isLogInfo) console.log("name:  " + s.name + "  ip:  " + s._ip + ":" + s._port + "  ---WebSocket \u8FDE\u63A5\u6210\u529F---");
          s._connected = true;
          s._event.emit(s._eventPrefix + NetType.ws_open, s.netMode);
          s.countWebSocketClose = 0;
          if (s._heartTime > 0) {
            s.startHeartbeat();
          }
          s.clearReconnectTime();
        };
        _proto.onClose = function onClose(event) {
          var s = this;
          if (s.isLogInfo) console.warn("WebSocket 已关闭 " + " -ip为:" + s._ip + ":" + s._port);
          s._connected = false;
          s.stopHeartbeat();
          s._event.emit(s._eventPrefix + NetType.ws_close);
          s._ws.onopen = s._ws.onmessage = s._ws.onclose = s._ws.onerror = null;
          s._ws = null;
          s.addWebSocketClose();
          s.reconnection();
        };
        /**累计网络重新连接连接错误次数 */
        _proto.addWebSocketClose = function addWebSocketClose() {
          var s = this;
          s.countWebSocketClose++;
          if (s.countWebSocketClose > 3) {
            s.countWebSocketClose = 0;
            s._event.emit(s._eventPrefix + NetType.ws_timeOut);
          }
        };
        _proto.onError = function onError(event) {
          var s = this;
          if (s.isLogInfo) {
            if (sys.isNative) {
              console.warn("WebSocket 错误:", event, "_ws的值为 " + JSON.stringify(s._ws));
            } else {
              console.warn("WebSocket 错误:", event, "_ws的值为 " + s._ws);
            }
          }
          s._connected = false;
          s.stopHeartbeat();
          s._event.emit(s._eventPrefix + NetType.ws_error);
          // s.reconnection();
        }

        /**获取事件调度器 */;
        /**获取 arraybuffer对象*/
        _proto.createDataObject = function createDataObject(id, msg) {
          var buffer = new ArrayBuffer(8);
          var view = new DataView(buffer);
          view.setInt32(0, id, true);
          view.setInt32(4, msg.length, true);
          var bufferArray = new Uint8Array(buffer);
          var sendData = new Uint8Array(8 + msg.length);
          sendData.set(bufferArray, 0);
          sendData.set(msg, 8);
          return sendData.buffer;
        }

        /**解析arratBuffer数据 */;
        _proto.parseArrayBuffer = function parseArrayBuffer(buffer) {
          var view = new DataView(buffer);
          return {
            id: view.getInt32(0, true),
            length: view.getInt32(4, true),
            buff: new Uint8Array(buffer.slice(8))
          };
        };
        _createClass(Net, [{
          key: "eventPrefix",
          get: /**事件前缀 */
          function get() {
            return this._eventPrefix;
          }
        }, {
          key: "event",
          get: function get() {
            var s = this;
            return s._event;
          }
        }]);
        return Net;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetManger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventDispatcher.ts', './Net.ts', './Global.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, EventDispatcher, Net, Global;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      EventDispatcher = module.EventDispatcher;
    }, function (module) {
      Net = module.Net;
    }, function (module) {
      Global = module.Global;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d0a76uKoEpKKpaZZuO2RtaK", "NetManger", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NetManger = exports('NetManger', (_dec = ccclass("NetManger"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NetManger, _Component);
        function NetManger() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**网络连接列表 */
          _this._netList = {};
          /**网络事件派发器 */
          _this._event = new EventDispatcher();
          return _this;
        }
        var _proto = NetManger.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          Global.networkMgr = s;
        }

        /**添加网络连接 */;
        _proto.addNet = function addNet(net) {
          this._netList[net.name] = net;
        }
        /**删除网络连接 */;
        _proto.removeNet = function removeNet(name) {
          var s = this;
          var net = s.getNet(name);
          s._event.removeEventByPrefix(net.eventPrefix);
          delete this._netList[name];
        }
        /**获取网络连接 */;
        _proto.getNet = function getNet(name) {
          return this._netList[name];
        };
        /**创建一个新的网络连接 */
        _proto.creatorNet = function creatorNet(name, ip, port, heartTime, heartMessageType) {
          if (heartTime === void 0) {
            heartTime = -1;
          }
          if (heartMessageType === void 0) {
            heartMessageType = NaN;
          }
          var s = this;
          var net = s.getNet(name);
          if (net) {
            console.warn("网络连接已存在：" + name);
            return;
          }
          net = new Net(s._event);
          var eventPrefix = name + "_";
          net.isLogInfo = Global.debugMode;
          net.setNetData(ip, port, heartTime, name, heartMessageType, eventPrefix);
          s.addNet(net);
          net.connect();
          return net;
        }

        /**发送网络消息
         * @param name 网络连接名称
         * @param id 协议号
         * @param option 协议内容参数
         */;
        _proto.sendNetMessage = function sendNetMessage(name, id, option) {
          var s = this;
          var net = s.getNet(name);
          net.SendMessage(id, option);
        }

        /**发送文本消息
         * @param name 网络连接名称
         * @param text 文本消息
         */;
        _proto.sendTextMessage = function sendTextMessage(name, text) {
          var s = this;
          var net = s.getNet(name);
          net.sendTextMessage(text);
        }

        /**关闭网络连接
         * @param name 网络连接名称
         */;
        _proto.closeNet = function closeNet(name) {
          var s = this;
          var net = s.getNet(name);
          net.closeNet();
          s.removeNet(name);
        }

        /**注册网络事件 */;
        _proto.addEvent = function addEvent(netName, eventName, callback, thisObj) {
          var s = this;
          var net = s.getNet(netName);
          s._event.on(net.eventPrefix + eventName, callback, thisObj);
        }

        /**移除网络事件 */;
        _proto.removeEvent = function removeEvent(netName, eventName, callback, thisObj) {
          var s = this;
          var net = s.getNet(netName);
          s._event.off(net.eventPrefix + eventName, callback, thisObj);
        };
        return NetManger;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PersistentNodeModule.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, director, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "2376fGYYX1EOIwo50F93yU1", "PersistentNodeModule", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**常驻节点 */
      var PersistentNodeModule = exports('PersistentNodeModule', (_dec = ccclass("PersistentNodeModule"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PersistentNodeModule, _Component);
        function PersistentNodeModule() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = PersistentNodeModule.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          director.addPersistRootNode(s.node);
        };
        return PersistentNodeModule;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/propertyUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseUI.ts', './Global.ts', './Enums.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, baseUI, Global, PropertyType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
    }, function (module) {
      baseUI = module.baseUI;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      PropertyType = module.PropertyType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "c9c74oMRJpMj4CxkqTP/Ggx", "propertyUI", undefined);
      // import { screwGlobal } from "../../Bundles/screwRes/script/screwGlobal";
      // import { ZumaGlobal } from "../../Bundles/zumaRes/script/ZumaGlobal";
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var propertyUI = exports('propertyUI', (_dec = ccclass("propertyUI"), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Node
      }), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(propertyUI, _baseUI);
        function propertyUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _this.eventName = "propertyUI";
          _initializerDefineProperty(_this, "videoCountLabel", _descriptor, _assertThisInitialized(_this));
          /**获取奖励按钮 */
          _initializerDefineProperty(_this, "getRewardBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeBtn", _descriptor3, _assertThisInitialized(_this));
          _this.lastPropertyNode = null;
          /**当前道具 */
          _this.currentProperty = PropertyType.autoUpScrew;
          return _this;
        }
        var _proto = propertyUI.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          _baseUI.prototype.onLoad.call(this);
          s.closeBtn.on(Node.EventType.TOUCH_END, s.hideUI, s);
          s.getRewardBtn.on(Node.EventType.TOUCH_END, s.getReward, s);
        }

        /**获取奖励 */;
        _proto.getReward = function getReward() {
          var s = this;
          if (Global.videoCount > 0) {
            //播放奖励
            s.onPlayAdSuccess();
            Global.videoCount -= 1;
          } else {
            //播放奖励
            Global.videoADMgr.showVideo(s.onPlayAdSuccess, s, s.onPlayAdError);
          }
        };
        _proto.onPlayAdSuccess = function onPlayAdSuccess() {
          var s = this;
          switch (s.currentProperty) {
            case PropertyType.autoUpScrew:
              // screwGlobal.gameMgr.clickAutoUpBtn();
              break;
            case PropertyType.changeColor:
              // screwGlobal.gameMgr.clickResetColorBtn();
              break;
            case PropertyType.forceSelect:
              // screwGlobal.gameMgr.clickInsertBtn();
              break;
            // case PropertyType.slowDown:
            //     ZumaGlobal.gameMgr.slowDown();
            //     break;
            // case PropertyType.fullScreenAtk:
            //     ZumaGlobal.gameMgr.fullScreenAtk();
            //     break;
            // case PropertyType.rearrange:
            //     ZumaGlobal.gameMgr.rearrange();
            //     break;
            // case PropertyType.specifyElim:
            //     ZumaGlobal.gameMgr.specifyElim();
            //     break;
          }

          Global.traceMgr.BDZ_reportUseProp(Global.bdz_gameId + "");
          s.hideUI();
        };
        _proto.onPlayAdError = function onPlayAdError() {};
        _proto.showUI = function showUI(e) {
          _baseUI.prototype.showUI.call(this, e);
          var s = this;
          Global.isUserProper = true;
          s.currentProperty = e;
          if (s.lastPropertyNode) {
            s.lastPropertyNode.active = false;
          }
          s.lastPropertyNode = s.content.getChildByName("type" + e);
          s.videoCountLabel.string = Global.videoCount + "";
          s.lastPropertyNode.active = true;
        };
        _proto.hideUI = function hideUI(e) {
          _baseUI.prototype.hideUI.call(this);
          Global.isUserProper = false;
        };
        return propertyUI;
      }(baseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "videoCountLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "getRewardBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/puzzleSceneNewUserTipUi.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './blackMask.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, Component, blackMask;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Widget = module.Widget;
      Component = module.Component;
    }, function (module) {
      blackMask = module.blackMask;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "53763qF8MFNnpqfYAXvVWgw", "puzzleSceneNewUserTipUi", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var puzzleSceneNewUserTipUi = exports('puzzleSceneNewUserTipUi', (_dec = ccclass("puzzleSceneNewUserTipUi"), _dec2 = property([Node]), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(blackMask), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(puzzleSceneNewUserTipUi, _Component);
        function puzzleSceneNewUserTipUi() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**对话节点 */
          _initializerDefineProperty(_this, "dialogNode", _descriptor, _assertThisInitialized(_this));
          /**点击节点 */
          _initializerDefineProperty(_this, "clickNode", _descriptor2, _assertThisInitialized(_this));
          /**点击节点 */
          _initializerDefineProperty(_this, "handMoveNode", _descriptor3, _assertThisInitialized(_this));
          /**黑色遮罩 */
          _initializerDefineProperty(_this, "blackMask", _descriptor4, _assertThisInitialized(_this));
          /**步骤数 */
          _this.stepCount = 0;
          return _this;
        }
        var _proto = puzzleSceneNewUserTipUi.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.clickNode.on(Node.EventType.TOUCH_START, s.onTouchStart, s);
          s.handMoveNode.active = true;
        };
        _proto.onEnable = function onEnable() {
          var s = this;
          var arr = s.node.parent.getComponentsInChildren(Widget);
          for (var i = 0; i < arr.length; i++) {
            arr[i].enabled = true;
            arr[i].updateAlignment();
          }
          s.stepCount = 0;
          s.onNext();
        };
        _proto.onTouchStart = function onTouchStart(e) {
          var s = this;
          // e.propagationStopped = false;
          s.node.active = false;
        };
        _proto.onNext = function onNext() {
          var s = this;
          s.stepCount++;
          switch (s.stepCount) {
            case 1:
              s.handMoveNode.active = true;
              s.blackMask.node.active = true;
              s.blackMask.setPosi(0, 130, 120, 120);
              s.showDialog(0);
              break;
          }
        };
        _proto.showDialog = function showDialog(index) {
          var s = this;
          var len = s.dialogNode.length;
          for (var i = 0; i < len; i++) {
            if (i == index) {
              s.dialogNode[i].active = true;
            } else {
              s.dialogNode[i].active = false;
            }
          }
        };
        return puzzleSceneNewUserTipUi;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dialogNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "handMoveNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "blackMask", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceManger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Global.ts', './Enums.ts', './EventManger.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, director, assetManager, Global, events, AssetType, EventMgr;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      assetManager = module.assetManager;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      events = module.events;
      AssetType = module.AssetType;
    }, function (module) {
      EventMgr = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "387989Y+iZBj4Tfn55go81p", "ResourceManger", undefined);
      var ResourceManger = exports('default', /*#__PURE__*/function () {
        function ResourceManger() {
          this.bundle_map = {};
          this.clip_map = {};
          this.json_map = {};
          this.texture_map = {};
          this.curSceneName = "";
          /**上一场景保存的值 */
          this.lastSceneSaveValue = [];
          /**进入 前一个 场景的场景名 */
          this.beforeSceneName = "";
        }
        var _proto = ResourceManger.prototype;
        _proto.load_bundle = /*#__PURE__*/function () {
          var _load_bundle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name, ratio) {
            var _this = this;
            var startRate;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (ratio === void 0) {
                    ratio = 0;
                  }
                  startRate = Global.loading_rate;
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    assetManager.loadBundle(name, function (e, bundle) {
                      if (e) {
                        console.error(name + " --------------------------load errors>>>", e);
                      } else {
                        _this.bundle_map[name] = bundle;
                        console.log(name + " load success");
                        Global.loading_rate = startRate + ratio;
                        resolve && resolve();
                      }
                    });
                  }));
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function load_bundle(_x, _x2) {
            return _load_bundle.apply(this, arguments);
          }
          return load_bundle;
        }();
        _proto.load_resource = /*#__PURE__*/function () {
          var _load_resource = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(name, type, ratio) {
            var _this2 = this;
            var startRate, s;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (ratio === void 0) {
                    ratio = 0;
                  }
                  startRate = Global.loading_rate;
                  s = this;
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    _this2.bundle_map[name].loadDir(type.path, type.type, function (finished, total, item) {
                      var date = ratio * finished / total;
                      Global.loading_rate = startRate + date;
                    }, function (e, assets) {
                      if (e) {
                        console.error("load_resource error >>>", e);
                        resolve && resolve();
                      }
                      assets.forEach(function (element) {
                        switch (type) {
                          case AssetType.Sound:
                            s.clip_map[element.name] = element;
                            break;
                          case AssetType.JsonConf:
                            s.json_map[element.name] = element.json;
                            break;
                        }
                      });
                      Global.loading_rate = startRate + ratio;
                      resolve && resolve();
                    });
                  }));
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function load_resource(_x3, _x4, _x5) {
            return _load_resource.apply(this, arguments);
          }
          return load_resource;
        }() /**获取音频 */;
        _proto.get_clip = function get_clip(name) {
          return this.clip_map[name];
        }
        /**获取json */;
        _proto.get_json = function get_json(name) {
          return this.json_map[name];
        };
        /**返回 前一个 场景 */
        _proto.backScene = function backScene() {
          this.openSceneByName.apply(this, [this.beforeSceneName].concat(this.lastSceneSaveValue));
        }

        /**根据名字打开对应场景 */;
        _proto.openSceneByName = /*#__PURE__*/
        function () {
          var _openSceneByName = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(name) {
            var _len,
              values,
              _key,
              _args3 = arguments;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (this.curSceneName != name) {
                    for (_len = _args3.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                      values[_key - 1] = _args3[_key];
                    }
                    this.lastSceneSaveValue = values;
                  }
                  if (this.curSceneName != "") {
                    this.beforeSceneName = this.curSceneName;
                  }
                  this.curSceneName = name;
                  _context3.t0 = name;
                  _context3.next = _context3.t0 === "lobby" ? 6 : _context3.t0 === "guajiGame" ? 9 : _context3.t0 === "friend" ? 12 : _context3.t0 === "personalCenter" ? 15 : _context3.t0 === "mining" ? 18 : _context3.t0 === "personal" ? 21 : _context3.t0 === "game" ? 24 : 27;
                  break;
                case 6:
                  _context3.next = 8;
                  return this.doLoadScene("lobbyRes", "lobby");
                case 8:
                  return _context3.abrupt("break", 29);
                case 9:
                  _context3.next = 11;
                  return this.doLoadScene("guajiGameRes", "guajiGame");
                case 11:
                  return _context3.abrupt("break", 29);
                case 12:
                  _context3.next = 14;
                  return this.doLoadScene("friendRes", "friend");
                case 14:
                  return _context3.abrupt("break", 29);
                case 15:
                  _context3.next = 17;
                  return this.doLoadScene("personalCenterRes", "personalCenter");
                case 17:
                  return _context3.abrupt("break", 29);
                case 18:
                  _context3.next = 20;
                  return this.doLoadScene("miningRes", "mining");
                case 20:
                  return _context3.abrupt("break", 29);
                case 21:
                  _context3.next = 23;
                  return this.doLoadScene("personalRes", "personal");
                case 23:
                  return _context3.abrupt("break", 29);
                case 24:
                  _context3.next = 26;
                  return this.doLoadScene("screwRes", "game");
                case 26:
                  return _context3.abrupt("break", 29);
                case 27:
                  this.doSwitchToScene(name);
                  return _context3.abrupt("break", 29);
                case 29:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function openSceneByName(_x6) {
            return _openSceneByName.apply(this, arguments);
          }
          return openSceneByName;
        }() /**进入场景 */;
        _proto.doLoadScene = /*#__PURE__*/
        function () {
          var _doLoadScene = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(bundleName, sceneName) {
            var arr, i, path, resBundleName, resPath;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (sceneName === void 0) {
                    sceneName = null;
                  }
                  if (!(this.bundle_map[bundleName] == null)) {
                    _context4.next = 24;
                    break;
                  }
                  arr = resRelyLoadDictPath[bundleName];
                  if (!arr) {
                    _context4.next = 19;
                    break;
                  }
                  i = 0;
                case 5:
                  if (!(i < arr.length)) {
                    _context4.next = 19;
                    break;
                  }
                  path = this.splitPath(arr[i]);
                  resBundleName = path[0];
                  resPath = path[1];
                  Global.loading_rate = 0;
                  if (this.bundle_map[resBundleName]) {
                    _context4.next = 13;
                    break;
                  }
                  _context4.next = 13;
                  return ResourceManger.instance.load_bundle(resBundleName, 0.1);
                case 13:
                  if (!resPath) {
                    _context4.next = 16;
                    break;
                  }
                  _context4.next = 16;
                  return ResourceManger.instance.load_resource(resBundleName, {
                    path: resPath,
                    type: null
                  }, 0.9);
                case 16:
                  i++;
                  _context4.next = 5;
                  break;
                case 19:
                  _context4.next = 21;
                  return this.loadRes(bundleName);
                case 21:
                  if (sceneName != null) {
                    director.loadScene(sceneName);
                  }
                  _context4.next = 25;
                  break;
                case 24:
                  if (sceneName != null) {
                    this.doSwitchToScene(sceneName);
                  }
                case 25:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function doLoadScene(_x7, _x8) {
            return _doLoadScene.apply(this, arguments);
          }
          return doLoadScene;
        }();
        _proto.splitPath = function splitPath(path) {
          var index = path.indexOf("/");
          if (index === -1) {
            return [path, ""];
          }
          return [path.substring(0, index), path.substring(index + 1)];
        }

        /**加载资源 */;
        _proto.loadRes = /*#__PURE__*/
        function () {
          var _loadRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(bundleName) {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  EventMgr.inst.event.emit(events.loadResUIShow);
                  Global.loading_rate = 0;
                  _context5.next = 4;
                  return ResourceManger.instance.load_bundle(bundleName, 0.1);
                case 4:
                  _context5.next = 6;
                  return ResourceManger.instance.load_resource(bundleName, AssetType.JsonConf, 0.1);
                case 6:
                  _context5.next = 8;
                  return ResourceManger.instance.load_resource(bundleName, AssetType.Sound, 0.2);
                case 8:
                  _context5.next = 10;
                  return ResourceManger.instance.load_resource(bundleName, AssetType.Prefab, 0.18);
                case 10:
                  _context5.next = 12;
                  return ResourceManger.instance.load_resource(bundleName, AssetType.Texture, 0.4);
                case 12:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }));
          function loadRes(_x9) {
            return _loadRes.apply(this, arguments);
          }
          return loadRes;
        }() /**预加载资源 */;
        _proto.preloadRes = /*#__PURE__*/
        function () {
          var _preloadRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(bundleName) {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                //     assetManager.loadBundle(bundleName, (e: any, bundle: AssetManager.Bundle) => {
                //         if (e == null) {
                //             bundle.preloadDir("");
                //         }
                //     });
                // }
                case 1:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function preloadRes(_x10) {
            return _preloadRes.apply(this, arguments);
          }
          return preloadRes;
        }();
        _proto.doSwitchToScene = function doSwitchToScene(name) {
          EventMgr.inst.event.emit(events.switchUIShow, function () {
            director.loadScene(name, function () {
              EventMgr.inst.event.emit(events.switchUIHide);
            });
          });
        };
        _createClass(ResourceManger, null, [{
          key: "instance",
          get: function get() {
            if (!this.rm) {
              this.rm = new ResourceManger();
            }
            return this.rm;
          }
        }]);
        return ResourceManger;
      }());
      /**资源依赖加载字典 */
      ResourceManger.rm = null;
      var resRelyLoadDictPath = exports('resRelyLoadDictPath', {
        yardRes: ["gameDictRes/anima", "gameDictRes/Image/kapibala"],
        lobbyRes: ["gameDictRes"],
        screwRes: ["gameDictRes/anima", "gameDictRes/Image/caidai", "gameDictRes/prefabs", "gameDictRes/spine"]
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/reviveUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseUI.ts', './Enums.ts', './EventManger.ts', './Global.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, baseUI, events, EventMgr, Global;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      baseUI = module.baseUI;
    }, function (module) {
      events = module.events;
    }, function (module) {
      EventMgr = module.default;
    }, function (module) {
      Global = module.Global;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e22f0OuwJpDqILkYZ52OZsW", "reviveUI", undefined);
      // import { screwGlobal } from "../../Bundles/screwRes/script/screwGlobal";
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**复活页面 */
      var reviveUI = exports('reviveUI', (_dec = ccclass("reviveUI"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(reviveUI, _baseUI);
        function reviveUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "closeBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reviveBtn", _descriptor2, _assertThisInitialized(_this));
          _this.eventName = "reviveUI";
          return _this;
        }
        var _proto = reviveUI.prototype;
        _proto.onLoad = function onLoad() {
          _baseUI.prototype.onLoad.call(this);
          var s = this;
          s.closeBtn.on(Node.EventType.TOUCH_END, s.onClose, s);
          s.reviveBtn.on(Node.EventType.TOUCH_END, s.lookVideo, s);
        };
        _proto.onClose = function onClose() {
          var s = this;
          s.hideUI();
          EventMgr.inst.event.emit(events.loseUIShow);
        };
        _proto.lookVideo = function lookVideo() {
          var s = this;
          if (Global.videoCount > 0) {
            //播放奖励
            Global.videoCount -= 1;
            s.onPlayAdSuccess();
          } else {
            //播放奖励
            Global.videoADMgr.showVideo(s.onPlayAdSuccess, s, s.onPlayAdError);
          }
        };
        _proto.onPlayAdSuccess = function onPlayAdSuccess() {
          var s = this;
          s.hideUI();
        };
        _proto.onPlayAdError = function onPlayAdError() {};
        return reviveUI;
      }(baseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "reviveBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/rewardsUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Global.ts', './baseUI.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Global, baseUI;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      baseUI = module.baseUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "ff083pLkVhH+ZD+18iAUth6", "rewardsUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**抖音侧边栏领取页面 */
      var rewardsUI = exports('rewardsUI', (_dec = ccclass("rewardsUI"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(rewardsUI, _baseUI);
        function rewardsUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "closeBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "getRewardsBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "getRewardsLabel", _descriptor3, _assertThisInitialized(_this));
          _this.eventName = "rewardsUI";
          _this.getRewardNum = 0;
          return _this;
        }
        var _proto = rewardsUI.prototype;
        _proto.onLoad = function onLoad() {
          _baseUI.prototype.onLoad.call(this);
          var s = this;
          s.closeBtn.on(Node.EventType.TOUCH_END, s.hideUI, s);
          s.getRewardsBtn.on(Node.EventType.TOUCH_END, s.addSidebar, s);
        };
        _proto.showUI = function showUI(count) {
          if (count === void 0) {
            count = 1;
          }
          var s = this;
          _baseUI.prototype.showUI.call(this);
          s.getRewardNum = count;
          s.getRewardsLabel.string = "X " + count;
        };
        _proto.addSidebar = function addSidebar() {
          var s = this;
          Global.videoCount += s.getRewardNum;
          s.hideUI();
        };
        return rewardsUI;
      }(baseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "getRewardsBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "getRewardsLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScrollViewAutoSize.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ScrollViewCompBase.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ScrollViewCompBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ScrollViewCompBase = module.ScrollViewCompBase;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "996e7uQRcJGD73N9pkAc2Eh", "ScrollViewAutoSize", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /** 自动大小滚动视图组件 */
      var ScrollViewAutoSize = exports('ScrollViewAutoSize', (_dec = ccclass("ScrollViewAutoSize"), _dec(_class = /*#__PURE__*/function (_ScrollViewCompBase) {
        _inheritsLoose(ScrollViewAutoSize, _ScrollViewCompBase);
        function ScrollViewAutoSize() {
          return _ScrollViewCompBase.apply(this, arguments) || this;
        }
        return ScrollViewAutoSize;
      }(ScrollViewCompBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScrollViewCompBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cocosToolFunc.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Node, CCInteger, Component, Size, Vec3, UITransform, instantiate, Label, cocosToolFunc;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      CCInteger = module.CCInteger;
      Component = module.Component;
      Size = module.Size;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
    }, function (module) {
      cocosToolFunc = module.cocosToolFunc;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "f6be5xKoxBJp5BcXszD6YU/", "ScrollViewCompBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /** 滚动视图组件 */
      var ScrollViewCompBase = exports('ScrollViewCompBase', (_dec = ccclass("ScrollViewCompBase"), _dec2 = property({
        type: Prefab,
        tooltip: "滚动视图项预制体"
      }), _dec3 = property({
        type: Node,
        tooltip: "滚动视图容器"
      }), _dec4 = property({
        tooltip: "是否可以滚动"
      }), _dec5 = property({
        tooltip: "是否可以横向滚动"
      }), _dec6 = property({
        tooltip: "是否可以纵向滚动"
      }), _dec7 = property({
        type: CCInteger,
        tooltip: "滚动项间隔"
      }), _dec8 = property({
        type: [Component.EventHandler],
        tooltip: "数据项改变事件",
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ScrollViewCompBase, _Component);
        function ScrollViewCompBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollViewItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollContent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isEditScroll", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isEditHorizontal", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isEditVertical", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemInterval", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "changeItemEvent", _descriptor7, _assertThisInitialized(_this));
          /**单位滚动项的大小 */
          _this.itemSize = new Size();
          _this.itemMaxCount = 0;
          _this.startContentPosi = new Vec3();
          _this.curItemDataInd = null;
          _this.maxItemDataInd = 0;
          // #region get/set 存储器
          /**是否可以滚动 */
          _this._isScroll = false;
          /**是否横向滚动 */
          _this._isHorizontal = false;
          /**是否纵向滚动 */
          _this._isVertical = false;
          /**滚动进度 */
          _this._scrollProgress = 0;
          // #endregion get/set 存储器
          _this.savaContentPosi = new Vec3();
          _this.savaCurItemDataInd = 0;
          _this.savaProgress = 0;
          _this.startPosi = new Vec3();
          _this.endPosi = new Vec3();
          return _this;
        }
        var _proto = ScrollViewCompBase.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.isScroll = s.isEditScroll;
          s.isHorizontal = s.isEditHorizontal;
          s.isVertical = s.isEditVertical;
        };
        _proto.onEnable = function onEnable() {
          var s = this;
          s.init();
          window["ss"] = s;
        };
        /** 初始化 */
        _proto.init = function init() {
          var s = this;
          var parentUit = s.node.getComponent(UITransform);
          var contentUit = s.scrollContent.getComponent(UITransform);
          var item = s.createItem();
          var itemUit = item.getComponent(UITransform);
          s.itemSize.width = itemUit.width;
          s.itemSize.height = itemUit.height;
          s.scrollContent.getPosition(s.startContentPosi);
          if (s.isHorizontal) {
            s.itemMaxCount = Math.ceil(parentUit.width / itemUit.width) + 2;
            contentUit.width = (itemUit.width + s.itemInterval) * s.itemMaxCount - s.itemInterval;
            s.startContentPosi.x = (parentUit.width - contentUit.width) / 2 - itemUit.width - s.itemInterval;
          } else {
            s.itemMaxCount = Math.ceil(parentUit.height / itemUit.height) + 2;
            contentUit.height = (itemUit.height + s.itemInterval) * s.itemMaxCount - s.itemInterval;
            s.startContentPosi.y = (parentUit.height - contentUit.height) / 2 + itemUit.height + s.itemInterval;
          }
          s.scrollContent.setPosition(s.startContentPosi);
          s.maxItemDataInd = 20;
          s.updataItem(s.maxItemDataInd - 1);
          s.scrollProgress = 0;
          var len = s.scrollContent.children.length;
          for (var i = s.itemMaxCount; i < len; i++) {
            var child = s.scrollContent.children[i];
            child.removeFromParent();
          }
        }

        /**创建滚动项 */;
        _proto.createItem = function createItem() {
          var s = this;
          var item = instantiate(s.scrollViewItem);
          s.scrollContent.addChild(item);
          return item;
        };
        /**更新滚动项 */
        _proto.updataItem = function updataItem(ind) {
          var s = this;
          if (s.curItemDataInd == ind) {
            return;
          }
          s.curItemDataInd = ind;
          var startPosi = 0;
          var contentSize = s.scrollContent.getComponent(UITransform);
          if (s.isVertical) {
            startPosi = contentSize.height / 2 - s.itemSize.height / 2;
          } else {
            startPosi = -contentSize.width / 2 + s.itemSize.width / 2;
          }
          for (var i = 0; i < s.itemMaxCount; i++) {
            var item = s.scrollContent.children[i];
            if (!item) {
              item = s.createItem();
            }
            if (s.isVertical) {
              item.setPosition(0, startPosi - i * (s.itemSize.height + s.itemInterval), 0);
            } else {
              item.setPosition(startPosi + i * (s.itemSize.width + s.itemInterval), 0, 0);
            }
            s.textSetItemData(item, ind + i);
          }
        }
        /**测试 */;
        _proto.textSetItemData = function textSetItemData(item, i) {
          var s = this;
          var ind = (s.maxItemDataInd + i) % s.maxItemDataInd;
          item.getChildByName("wealthValue").getComponent(Label).string = ind.toString();
        };
        /**按下 */
        _proto.onTouchStart = function onTouchStart(e) {
          var s = this;
          s.node.on(Node.EventType.TOUCH_MOVE, s.onTouchMove, s);
          s.node.on(Node.EventType.TOUCH_END, s.onTouchEnd, s);
          s.node.on(Node.EventType.TOUCH_CANCEL, s.onTouchEnd, s);
          s.scrollContent.getPosition(s.savaContentPosi);
          s.savaProgress = s.scrollProgress;
          cocosToolFunc.getNodePosiByTouch(s.node, e, s.startPosi);
        }
        /**移动 */;
        _proto.onTouchMove = function onTouchMove(e) {
          var s = this;
          cocosToolFunc.getNodePosiByTouch(s.node, e, s.endPosi);
          s.updateContentPosi();
        }
        /**结束 */;
        _proto.onTouchEnd = function onTouchEnd(e) {
          var s = this;
          s.node.off(Node.EventType.TOUCH_MOVE, s.onTouchMove, s);
          s.node.off(Node.EventType.TOUCH_END, s.onTouchEnd, s);
          s.node.off(Node.EventType.TOUCH_CANCEL, s.onTouchEnd, s);
          cocosToolFunc.getNodePosiByTouch(s.node, e, s.endPosi);
          s.updateContentPosi();
        }
        /**更新内容节点位置 */;
        _proto.updateContentPosi = function updateContentPosi() {
          var s = this;
          //横向
          if (s.isHorizontal) {
            s.scrollProgress = s.savaProgress + s.getContentMoveX();
          } else {
            s.scrollProgress = s.savaProgress + s.getContentMoveY();
          }
        }
        /**获取显示的项索引 */;
        _proto.getShowItemInd = function getShowItemInd(posi, unit) {
          var p = posi / unit;
          if (posi > 0) {
            return Math.floor(p);
          } else {
            return Math.ceil(p);
          }
        }

        /**获取内容 X 移动距离 */;
        _proto.getContentMoveX = function getContentMoveX() {
          var s = this;
          var moveX = s.endPosi.x - s.startPosi.x;
          return Math.round(moveX * 100) / 100;
        }
        /**获取内容 Y 移动距离 */;
        _proto.getContentMoveY = function getContentMoveY() {
          var s = this;
          var moveY = s.endPosi.y - s.startPosi.y;
          return Math.round(moveY * 100) / 100;
        };
        _createClass(ScrollViewCompBase, [{
          key: "isScroll",
          get: /**是否可以滚动 */
          function get() {
            return this._isScroll;
          }
          /**是否可以滚动 */,
          set: function set(value) {
            var s = this;
            s._isScroll = value;
            if (value) {
              s.node.on(Node.EventType.TOUCH_START, s.onTouchStart, s);
            } else {
              s.node.off(Node.EventType.TOUCH_START, s.onTouchStart, s);
            }
          }
        }, {
          key: "isHorizontal",
          get: /**是否横向滚动 */
          function get() {
            return this._isHorizontal;
          }
          /**是否横向滚动 */,
          set: function set(value) {
            this._isHorizontal = value;
          }
        }, {
          key: "isVertical",
          get: /**是否纵向滚动 */
          function get() {
            return this._isVertical;
          }
          /**是否纵向滚动 */,
          set: function set(value) {
            this._isVertical = value;
          }
        }, {
          key: "scrollProgress",
          get: /**滚动进度 */
          function get() {
            return this._scrollProgress;
          }
          /**滚动进度 */,
          set: function set(value) {
            var s = this;
            s._scrollProgress = value;
            var moveNum = 0;
            var ind = 0;
            if (s.isHorizontal) {
              moveNum = value % (s.itemSize.width + s.itemInterval);
              ind = s.getShowItemInd(value, s.itemSize.width + s.itemInterval);
              s.scrollContent.setPosition(s.startContentPosi.x + moveNum, s.scrollContent.position.y, 0);
            } else {
              moveNum = value % (s.itemSize.height + s.itemInterval);
              ind = s.getShowItemInd(value, s.itemSize.height + s.itemInterval);
              s.scrollContent.setPosition(s.scrollContent.position.x, s.startContentPosi.y + moveNum, 0);
            }
            ind = (s.maxItemDataInd - 1 + ind) % s.maxItemDataInd;
            s.updataItem(ind);
          }
        }]);
        return ScrollViewCompBase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollViewItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isEditScroll", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isEditHorizontal", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isEditVertical", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "itemInterval", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "changeItemEvent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScrollViewFixedSize.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ScrollViewCompBase.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ScrollViewCompBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ScrollViewCompBase = module.ScrollViewCompBase;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "fcb58GOgr1EUreE1GBbUVmB", "ScrollViewFixedSize", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /** 固定大小滚动视图组件 */
      var ScrollViewFixedSize = exports('ScrollViewFixedSize', (_dec = ccclass("ScrollViewFixedSize"), _dec(_class = /*#__PURE__*/function (_ScrollViewCompBase) {
        _inheritsLoose(ScrollViewFixedSize, _ScrollViewCompBase);
        function ScrollViewFixedSize() {
          return _ScrollViewCompBase.apply(this, arguments) || this;
        }
        return ScrollViewFixedSize;
      }(ScrollViewCompBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/settingUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseUI.ts', './Global.ts', './Enums.ts', './ResourceManger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Toggle, sys, baseUI, Global, settingUIShowType, ResourceManger;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Toggle = module.Toggle;
      sys = module.sys;
    }, function (module) {
      baseUI = module.baseUI;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      settingUIShowType = module.settingUIShowType;
    }, function (module) {
      ResourceManger = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "2febdmQllRJI5jTmVuZ2eqf", "settingUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var settingUI = exports('settingUI', (_dec = ccclass("settingUI"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Toggle), _dec7 = property(Toggle), _dec8 = property(Toggle), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(settingUI, _baseUI);
        function settingUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "closeBtn", _descriptor, _assertThisInitialized(_this));
          /**返回首页 */
          _initializerDefineProperty(_this, "returnLoddyBtn", _descriptor2, _assertThisInitialized(_this));
          /**重新开始 */
          _initializerDefineProperty(_this, "restartBtn", _descriptor3, _assertThisInitialized(_this));
          /**继续游戏 */
          _initializerDefineProperty(_this, "continueBtn", _descriptor4, _assertThisInitialized(_this));
          _this.eventName = "settingUI";
          /**打开背景声音设置 */
          _initializerDefineProperty(_this, "backSound_Toggle", _descriptor5, _assertThisInitialized(_this));
          /**打开音效设置 */
          _initializerDefineProperty(_this, "effectSound_Toggle", _descriptor6, _assertThisInitialized(_this));
          /**震动设置 */
          _initializerDefineProperty(_this, "shake_Toggle", _descriptor7, _assertThisInitialized(_this));
          _this.showType = settingUIShowType.game;
          return _this;
        }
        var _proto = settingUI.prototype;
        _proto.onLoad = function onLoad() {
          _baseUI.prototype.onLoad.call(this);
          var s = this;
          Global.settingMgr = s;
          s.closeBtn.on(Node.EventType.TOUCH_END, s.hideUI, s);
          s.continueBtn.on(Node.EventType.TOUCH_END, s.hideUI, s);
          s.returnLoddyBtn.on(Node.EventType.TOUCH_END, s.onReturnLoddy, s);
          s.restartBtn.on(Node.EventType.TOUCH_END, s.onRestart, s);
          s.backSound_Toggle.node.on(Toggle.EventType.TOGGLE, s.openBackgroundSound, s);
          s.effectSound_Toggle.node.on(Toggle.EventType.TOGGLE, s.openEffectSound, s);
          s.shake_Toggle.node.on(Toggle.EventType.TOGGLE, s.openShake, s);
          s.updataSetting();
        }

        /**刷新更新显示 */;
        _proto.updataSetting = function updataSetting() {
          var s = this;
          s.backSound = !(sys.localStorage.getItem("backSound") == "false");
          s.effectSound = !(sys.localStorage.getItem("effectSound") == "false");
          s.shake = !(sys.localStorage.getItem("shake") == "false");
        };
        _proto.showUI = function showUI(type) {
          var s = this;
          _baseUI.prototype.showUI.call(this);
          s.showType = type;
          Global.isOpenSetting = true;
          if (type == settingUIShowType.loddy) {
            s.continueBtn.active = false;
            s.returnLoddyBtn.active = false;
            s.restartBtn.active = false;
          } else if (type == settingUIShowType.game) {
            s.continueBtn.active = true;
            s.returnLoddyBtn.active = true;
            s.restartBtn.active = true;
          } else {
            s.continueBtn.active = false;
            s.returnLoddyBtn.active = true;
            s.restartBtn.active = false;
          }
        };
        _proto.openBackgroundSound = function openBackgroundSound(event) {
          var s = this;
          s.backSound = event.isChecked;
        };
        _proto.openEffectSound = function openEffectSound(event) {
          var s = this;
          s.effectSound = event.isChecked;
        };
        _proto.openShake = function openShake(event) {
          var s = this;
          s.shake = event.isChecked;
        }
        /**重新开始 */;
        _proto.onRestart = function onRestart() {
          var s = this;
          s.hideUI();
          if (s.showType == settingUIShowType.game) {
            ResourceManger.instance.openSceneByName("game");
          } else if (s.showType == settingUIShowType.zuma) {
            ResourceManger.instance.openSceneByName("zuma");
          }
        };
        _proto.onReturnLoddy = function onReturnLoddy() {
          var s = this;
          s.hideUI();
          ResourceManger.instance.openSceneByName("lobby");
        };
        _proto.hideUI = function hideUI(e) {
          _baseUI.prototype.hideUI.call(this);
          Global.isOpenSetting = false;
        };
        _createClass(settingUI, [{
          key: "backSound",
          get: /**音乐 */
          function get() {
            return Global.setting_bgm;
          },
          set: function set(value) {
            Global.setting_bgm = value;
            sys.localStorage.setItem("backSound", value.toString());
            this.backSound_Toggle.isChecked = value;
            if (value) {
              // console.log("播放背景音乐");
              Global.audioMgr.playBgm();
            } else {
              // console.log("停止背景音乐");
              Global.audioMgr.stopBgm();
            }
          }
        }, {
          key: "effectSound",
          get: function get() {
            return Global.setting_effect;
          }
          /**设置音效 */,
          set: function set(value) {
            Global.setting_effect = value;
            sys.localStorage.setItem("effectSound", value.toString());
            this.effectSound_Toggle.isChecked = value;
          }
          /**震动 */
        }, {
          key: "shake",
          get: function get() {
            return Global.setting_shake;
          },
          set: function set(value) {
            Global.setting_shake = value;
            sys.localStorage.setItem("shake", value.toString());
            this.shake_Toggle.isChecked = value;
          }
        }]);
        return settingUI;
      }(baseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "returnLoddyBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "restartBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "continueBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "backSound_Toggle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "effectSound_Toggle", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "shake_Toggle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/shareUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseUI.ts', './Enums.ts', './EventManger.ts', './Global.ts', './ThirdPartyManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UITransform, sys, baseUI, events, EventMgr, Global, ThirdPartyManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      UITransform = module.UITransform;
      sys = module.sys;
    }, function (module) {
      baseUI = module.baseUI;
    }, function (module) {
      events = module.events;
    }, function (module) {
      EventMgr = module.default;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      ThirdPartyManager = module.ThirdPartyManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "ec43cMCO81Dv5fIst/n6RJd", "shareUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var shareUI = exports('shareUI', (_dec = ccclass("shareUI"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(UITransform), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(shareUI, _baseUI);
        function shareUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "closeBtn", _descriptor, _assertThisInitialized(_this));
          _this.eventName = "shareUI";
          _initializerDefineProperty(_this, "shareBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lackCount", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadNum", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadDiff", _descriptor5, _assertThisInitialized(_this));
          _this._shareSum = -1;
          _this._lastShareDate = "";
          _this._shareCount = -1;
          return _this;
        }
        var _proto = shareUI.prototype;
        _proto.isFirstShareToday = function isFirstShareToday() {
          var today = new Date().toDateString();
          return this.lastShareDate != today;
        }

        /**分享总数 */;
        _proto.onLoad = function onLoad() {
          var s = this;
          _baseUI.prototype.onLoad.call(this);
          s.closeBtn.on(Node.EventType.TOUCH_END, s.hideUI, s);
          s.shareBtn.on(Node.EventType.TOUCH_END, s.onShareBtn, s);
        };
        _proto.showUI = function showUI(e) {
          var s = this;
          {
            _baseUI.prototype.showUI.call(this);
            s.shareSum = parseInt(sys.localStorage.getItem("shareSum") || "1");
            s.shareCount = parseInt(sys.localStorage.getItem("shareCount") || "0");
          }
        };
        _proto.onShareBtn = function onShareBtn() {
          var s = this;
          ThirdPartyManager.instance.shareAppMessage(function () {
            {
              s.shareCount++;
            }
          }, s);
          Global.traceMgr.clickShare();
        };
        _createClass(shareUI, [{
          key: "lastShareDate",
          get: /**获取上次分享日期 */
          function get() {
            if (!this._lastShareDate) {
              this._lastShareDate = sys.localStorage.getItem("lastShareDate") || "";
            }
            return this._lastShareDate;
          },
          set: function set(value) {
            this._lastShareDate = value;
            sys.localStorage.setItem("lastShareDate", value);
          }
        }, {
          key: "shareSum",
          get: function get() {
            var s = this;
            if (s._shareSum <= 0) {
              s._shareSum = parseInt(sys.localStorage.getItem("shareSum") || "1");
            }
            return s._shareSum;
          },
          set: function set(value) {
            this._shareSum = value;
            sys.localStorage.setItem("shareSum", value.toString());
          }
        }, {
          key: "shareCount",
          get: /**当前分享次数 */
          function get() {
            var s = this;
            if (s._shareCount <= 0) {
              s._shareCount = parseInt(sys.localStorage.getItem("shareCount") || "0");
            }
            return s._shareCount;
          },
          set: function set(value) {
            var s = this;
            s._shareCount = value;
            sys.localStorage.setItem("shareCount", s._shareCount.toString());
            s.lackCount.string = s.shareSum - s.shareCount + "";
            s.loadNum.string = s.shareCount + " / " + s.shareSum;
            s.loadDiff.width = s.shareCount / s.shareSum * 392;
            if (value >= s.shareSum) {
              //领取奖励
              s._shareCount = 0;
              s.shareSum += 1;
              sys.localStorage.setItem("shareCount", s._shareCount.toString());
              EventMgr.inst.event.emit(events.rewardsUIShow);
              s.hideUI();
            }
          }
        }]);
        return shareUI;
      }(baseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shareBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lackCount", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loadNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "loadDiff", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/sidebarUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enums.ts', './EventManger.ts', './baseUI.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, events, EventMgr, baseUI;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      events = module.events;
    }, function (module) {
      EventMgr = module.default;
    }, function (module) {
      baseUI = module.baseUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "c19326o3INHT4gUcszpgo+2", "sidebarUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**抖音侧边栏Ui */
      var sidebarUI = exports('sidebarUI', (_dec = ccclass("sidebarUI"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(sidebarUI, _baseUI);
        function sidebarUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "closeBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addSidebarBtn", _descriptor2, _assertThisInitialized(_this));
          /**图标 */
          _initializerDefineProperty(_this, "iconSidebar", _descriptor3, _assertThisInitialized(_this));
          /**是否从侧边栏进入 */
          _this.isFromSidebar = false;
          _this.eventName = "sidebarUI";
          return _this;
        }
        var _proto = sidebarUI.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          _baseUI.prototype.onLoad.call(this);
          s.closeBtn.on(Node.EventType.TOUCH_END, s.hideUI, s);
          s.iconSidebar.on(Node.EventType.TOUCH_END, s.showUI, s);
          s.addSidebarBtn.on(Node.EventType.TOUCH_END, s.addSidebar, s);
          // s.iconSidebar.active = false;
          //判断平台是否抖音
          {
            s.iconSidebar.active = false;
          }
        };
        _proto.addSidebar = function addSidebar() {
          EventMgr.inst.event.emit(events.sidebarUIHide);
        };
        return sidebarUI;
      }(baseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "addSidebarBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconSidebar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/switchUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseUI.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Animation, BaseUIShowType, baseUI;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Animation = module.Animation;
    }, function (module) {
      BaseUIShowType = module.BaseUIShowType;
      baseUI = module.baseUI;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0a2e4kOpfBEgo5yjqpkxw1+", "switchUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var switchUI = exports('switchUI', (_dec = ccclass("switchUI"), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(switchUI, _baseUI);
        function switchUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _this.eventName = "switchUI";
          _initializerDefineProperty(_this, "animaRootNode", _descriptor, _assertThisInitialized(_this));
          /**show完成回调 */
          _this.showEndFunc = null;
          /**hide完成回调 */
          _this.hideEndFunc = null;
          /**是否在播放动画 */
          _this.isPlay = false;
          /**是否立即结束 */
          _this.isEnd = false;
          /**是否打开状态 */
          _this.isOpenStatus = false;
          _this.index = 0;
          return _this;
        }
        var _proto = switchUI.prototype;
        _proto.onLoad = function onLoad() {
          _baseUI.prototype.onLoad.call(this);
          var s = this;
          s.playAnimaType = BaseUIShowType.none;
          var arr = s.node.getComponentsInChildren(Animation);
          var len = arr.length;
          for (var i = 0; i < len; i++) {
            arr[i].node.setScale(0, 0);
          }
        };
        _proto.showUI = function showUI(showEndFunc) {
          var s = this;
          _baseUI.prototype.showUI.call(this);
          s.index = 0;
          s.doAnima();
          s.showEndFunc = showEndFunc;
        };
        /**播放动画， 是否正播放 */
        _proto.doAnima = function doAnima(isReverse) {
          if (isReverse === void 0) {
            isReverse = false;
          }
          var s = this;
          var arr = s.animaRootNode.children;
          if (this.index >= arr.length) {
            if (s.showEndFunc) {
              setTimeout(function () {
                s.showEndFunc();
              }, 100);
            }
            return;
          } else if (this.index < 0) {
            if (s.hideEndFunc) {
              setTimeout(function () {
                s.hideEndFunc();
              }, 100);
            }
            _baseUI.prototype.hideUI.call(this);
            return;
          }
          var node = arr[this.index];
          var animaArr = node.getComponentsInChildren(Animation);
          var len = animaArr.length;
          for (var i = 0; i < len; i++) {
            animaArr[i].stop();
            if (isReverse) {
              animaArr[i].crossFade("switchUI_iconAnima_hide", 0.05);
            } else {
              animaArr[i].crossFade("switchUI_iconAnima_show", 0.05);
            }
          }
          if (isReverse) {
            this.index--;
          } else {
            this.index++;
          }
          setTimeout(function () {
            s.doAnima(isReverse);
          }, 100);

          // s.scheduleOnce(() => {
          //     s.doAnima(isReverse);
          // }, 0.2);
        };

        _proto.hideUI = function hideUI(hideEndFunc) {
          var s = this;
          s.hideEndFunc = hideEndFunc;
          s.index = s.animaRootNode.children.length - 1;
          s.doAnima(true);
        };
        return switchUI;
      }(baseUI), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "animaRootNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ThirdPartyManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1b5a2Aoc2BFu58oWEa5a64h", "ThirdPartyManager", undefined);

      /***第三方功能管理   */
      var ThirdPartyManager = exports('ThirdPartyManager', /*#__PURE__*/function () {
        function ThirdPartyManager() {}
        var _proto = ThirdPartyManager.prototype;
        /**震动  */
        _proto.vibrateShort = function vibrateShort() {}

        /**分享 */;
        _proto.shareAppMessage = function shareAppMessage(_success, thisObj, _fail) {
          {
            _success.call(thisObj);
          }
        };
        _createClass(ThirdPartyManager, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new ThirdPartyManager();
            }
            return this._instance;
          }
        }]);
        return ThirdPartyManager;
      }());
      ThirdPartyManager._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tipUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseUI.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Animation, UIOpacity, BaseUIShowType, baseUI;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Animation = module.Animation;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      BaseUIShowType = module.BaseUIShowType;
      baseUI = module.baseUI;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "38fdaRuIq9MUrVC0i7O6Ibk", "tipUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tipUI = exports('tipUI', (_dec = ccclass("tipUI"), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(tipUI, _baseUI);
        function tipUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _this.eventName = "tipUI";
          _initializerDefineProperty(_this, "imgTip", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = tipUI.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          _baseUI.prototype.onLoad.call(this);
          s.playAnimaType = BaseUIShowType.none;
          var anima = s.imgTip.node.getComponent(Animation);
          anima.on(Animation.EventType.FINISHED, s.hideUI, s);
        };
        _proto.showUI = function showUI(e, startX, startY, delay) {
          if (startX === void 0) {
            startX = 0;
          }
          if (startY === void 0) {
            startY = 0;
          }
          if (delay === void 0) {
            delay = 0;
          }
          var s = this;
          _baseUI.prototype.showUI.call(this);
          if (e) {
            s.imgTip.spriteFrame = e;
            s.imgTip.node.parent.setPosition(startX, startY);
            var anima = s.imgTip.node.getComponent(Animation);
            if (delay > 0) {
              s.imgTip.getComponent(UIOpacity).opacity = 255;
              setTimeout(function () {
                anima.play();
              }, delay);
            } else {
              anima.play();
            }
          } else {
            s.hideUI();
          }
        };
        return tipUI;
      }(baseUI), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "imgTip", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/toSceneBtn.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCString, Node, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCString = module.CCString;
      Node = module.Node;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "91b1d9+pRtFcr6aYL++q6CG", "toSceneBtn", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var toSceneBtn = exports('toSceneBtn', (_dec = ccclass("toSceneBtn"), _dec2 = property(CCString), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(toSceneBtn, _Component);
        function toSceneBtn() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sceneName", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = toSceneBtn.prototype;
        _proto.onLoad = function onLoad() {
          this.node.on(Node.EventType.TOUCH_END, this.click, this);
        };
        _proto.click = function click() {
          // ResourceManger.instance.openSceneByName(this.sceneName);
          director.loadScene(this.sceneName, function () {});
        };
        return toSceneBtn;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "sceneName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TraceManager.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5c703suLZNFBZ8yAhz+vuf4", "TraceManager", undefined);

      /**埋点管理器 */
      var TraceManager = exports('TraceManager', /*#__PURE__*/function () {
        function TraceManager() {}
        var _proto = TraceManager.prototype;
        /**点击了分享 */
        _proto.clickShare = function clickShare() {}

        /**拔钉子游戏 开始游戏 */;
        _proto.BDZ_reportGameStart = function BDZ_reportGameStart(gameLevel) {}

        /**拔钉子游戏 使用道具 */;
        _proto.BDZ_reportUseProp = function BDZ_reportUseProp(gameId) {}
        /**进入大厅 */;
        _proto.enterLobby = function enterLobby() {}

        /**进入卡皮小院 */;
        _proto.enterYard = function enterYard() {}

        /**进入拼图 */;
        _proto.enterPuzzle = function enterPuzzle() {};
        return TraceManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VideoADManger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Global.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, Global;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      Global = module.Global;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e97b2LE9MNDDJD0dHDidw4f", "VideoADManger", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var VideoADManger = exports('VideoADManger', (_dec = ccclass("VideoADManger"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(VideoADManger, _Component);
        function VideoADManger() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**视频广告 */
          _this.videoAd = void 0;
          _this.success = void 0;
          _this.thisObj = void 0;
          _this.error = void 0;
          return _this;
        }
        var _proto = VideoADManger.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          Global.videoADMgr = s;
        };
        _proto.onError = function onError(err) {
          var s = this;
          console.log("广告播放失败", err);
          s.playAdError();
        };
        _proto.onClose = function onClose(res) {
          var s = this;
          {
            if (res.count > 0) {
              s.playAdSuccess();
            } else {
              s.playAdError();
            }
          }
          Global.settingMgr.updataSetting();
        };
        /**播放视频 */
        _proto.showVideo = function showVideo(success, thisObj, error) {
          var s = this;
          // if (s.isPlayAd) {
          //     return;
          // }
          Global.isPlayAd = true;
          s.success = success;
          s.thisObj = thisObj;
          s.error = error;
          s.doShowVideo();
          // s.playAdSuccess();
        }

        /**播放视频 */;
        _proto.doShowVideo = function doShowVideo() {
          var s = this;
          if (s.videoAd && !Global.debugMode) {
            s.videoAd.show();
          } else {
            s.playAdSuccess();
          }
        }

        /**广告播放失败 */;
        _proto.playAdError = function playAdError() {
          var s = this;
          if (s.error) s.error.call(s.thisObj);
          s.success = null;
          s.thisObj = null;
          s.error = null;
          Global.isPlayAd = false;
        }

        /**广告播放成功 */;
        _proto.playAdSuccess = function playAdSuccess() {
          var s = this;
          if (s.success) s.success.call(s.thisObj);
          s.success = null;
          s.thisObj = null;
          s.error = null;
          Global.isPlayAd = false;
        };
        return VideoADManger;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/winAwardUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseUI.ts', './Global.ts', './ResourceManger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Sprite, Node, baseUI, Global, ResourceManger;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Sprite = module.Sprite;
      Node = module.Node;
    }, function (module) {
      baseUI = module.baseUI;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      ResourceManger = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "7fa3cHcbXdCHZ+z3ZRLziJT", "winAwardUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var winAwardUI = exports('winAwardUI', (_dec = ccclass("winAwardUI"), _dec2 = property(Button), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(winAwardUI, _baseUI);
        function winAwardUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _this.eventName = "winAwardUI";
          _initializerDefineProperty(_this, "gotoYardBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showImg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showImgCopy", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = winAwardUI.prototype;
        _proto.onLoad = function onLoad() {
          _baseUI.prototype.onLoad.call(this);
          var s = this;
          s.gotoYardBtn.node.on(Node.EventType.TOUCH_END, s.gotoYardBtnClick, s);
        };
        _proto.showUI = function showUI(e) {
          _baseUI.prototype.showUI.call(this, e);
          var s = this;
          s.showImg.spriteFrame = s.showImgCopy.spriteFrame;
        };
        _proto.gotoYardBtnClick = function gotoYardBtnClick(e) {
          var s = this;
          var lastValue = ResourceManger.instance.lastSceneSaveValue;
          if (lastValue.length > 0 && lastValue[0] > -1) {
            var arr = Global.postcardState;
            arr[lastValue[0]] = 2;
            Global.postcardState = arr;
          }
          ResourceManger.instance.openSceneByName("yard", "form_winAwardUI");
          s.hideUI();
        };
        return winAwardUI;
      }(baseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gotoYardBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "showImg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "showImgCopy", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/winUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseUI.ts', './Global.ts', './ResourceManger.ts', './Enums.ts', './EventManger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Button, sp, Vec3, tween, Animation, baseUI, Global, ResourceManger, events, GameMode, EventMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      sp = module.sp;
      Vec3 = module.Vec3;
      tween = module.tween;
      Animation = module.Animation;
    }, function (module) {
      baseUI = module.baseUI;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      ResourceManger = module.default;
    }, function (module) {
      events = module.events;
      GameMode = module.GameMode;
    }, function (module) {
      EventMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "4e1c9WMcH1OMbY/TY2JAFVQ", "winUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var winUI = exports('winUI', (_dec = ccclass("winUI"), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(winUI, _baseUI);
        function winUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "handleNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winAnima", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "countLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zhaohuanBtn", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gotoYardBtn", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shengLi", _descriptor7, _assertThisInitialized(_this));
          _this.eventName = "winUI";
          _this.startPoint = new Vec3(-237, 0, 0);
          _this.endPoint = new Vec3(237, 0, 0);
          return _this;
        }
        var _proto = winUI.prototype;
        _proto.onLoad = function onLoad() {
          _baseUI.prototype.onLoad.call(this);
          var s = this;
          s.zhaohuanBtn.node.on(Node.EventType.TOUCH_END, s.zhaohuanBtnClick, s);
          s.gotoYardBtn.node.on(Node.EventType.TOUCH_END, s.gotoYardBtnClick, s);
        };
        _proto.zhaohuanBtnClick = function zhaohuanBtnClick(e) {
          var s = this;
          ResourceManger.instance.openSceneByName("puzzle");
          s.hideUI();
        };
        _proto.gotoYardBtnClick = function gotoYardBtnClick(e) {
          // ResourceManger.instance.openSceneByName("yard");
          // s.hideUI();
          EventMgr.inst.event.emit(events.winAwardUIShow);
        };
        _proto.showUI = function showUI(count) {
          if (count === void 0) {
            count = 0;
          }
          _baseUI.prototype.showUI.call(this);
          var s = this;
          Global.puzzle_count += count;
          s.shengLi.setAnimation(0, "ShengLi", false);
          s.zhaohuanBtn.node.active = false;
          s.gotoYardBtn.node.active = false;
          s.countLabel.string = "" + count;
          s.countLabel.node.parent.active = Global.curGameMode == GameMode.normal;
          s.handleNode.setPosition(s.startPoint);
          s.winLabel.string = "0%";
          tween(s.handleNode).to(1, {
            position: s.endPoint
          }, {
            onUpdate: function onUpdate(target, ratio) {
              s.winLabel.string = Math.floor(ratio * 100) + "%";
            }
          }).call(s.showClikcBtn, s).start();
          if (Global.curGameMode == GameMode.normal) {
            s.calcYardCapybaraState();
            Global.gameLevel++;
          }
          Global.audioMgr.playSound("success");
        }

        /**通过计数+1 计算小院卡皮巴拉的状态 */;
        _proto.calcYardCapybaraState = function calcYardCapybaraState() {
          var len = Global.roleIdList.length;
          for (var i = 0; i < len; i++) {
            var roleId = Global.roleIdList[i];
            var roleState = Global.roleState[roleId];
            if (roleState < 4) {
              var arr = Global.roleState;
              arr[roleId] = roleState + 1;
              Global.roleState = arr;
              return;
            }
          }
        };
        _proto.showClikcBtn = function showClikcBtn() {
          var s = this;
          s.winAnima.getComponent(Animation).play("winAnima");
          if (Global.curGameMode == GameMode.yardMode) {
            s.gotoYardBtn.node.active = true;
          } else {
            s.zhaohuanBtn.node.active = true;
          }
        };
        return winUI;
      }(baseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "handleNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "winLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "winAnima", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "countLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "zhaohuanBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gotoYardBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "shengLi", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});