System.register("chunks:///_virtual/createOrderUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManger.ts', './baseUI.ts', './personalScene.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, EditBox, EventMgr, baseUI, personalEvent;
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
      EditBox = module.EditBox;
    }, function (module) {
      EventMgr = module.default;
    }, function (module) {
      baseUI = module.baseUI;
    }, function (module) {
      personalEvent = module.personalEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "edc5f0I2VRIgpa+Oh1eldXS", "createOrderUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var createOrderUI = exports('createOrderUI', (_dec = ccclass("createOrderUI"), _dec2 = property(Node), _dec3 = property([EditBox]), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(createOrderUI, _baseUI);
        function createOrderUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _this.eventName = "createOrderUI";
          _initializerDefineProperty(_this, "closeBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editBox", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "submitBtn", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = createOrderUI.prototype;
        _proto.onLoad = function onLoad() {
          _baseUI.prototype.onLoad.call(this);
          var s = this;
          s.closeBtn.on(Node.EventType.TOUCH_END, s.onClose, s);
          s.submitBtn.on(Node.EventType.TOUCH_END, s.onSubmit, s);
        };
        _proto.onEnable = function onEnable() {};
        _proto.onSubmit = function onSubmit() {
          var s = this;
          EventMgr.inst.event.emit(personalEvent.failNotice, "订单提交成功");
          s.hideUI();
        };
        _proto.onClose = function onClose() {
          this.hideUI();
        };
        _proto.showUI = function showUI(value) {
          _baseUI.prototype.showUI.call(this, value);
          var s = this;
          s.editBox[3].string = value.toString();
          s.editBox[1].string = "Ton";
        };
        return createOrderUI;
      }(baseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "editBox", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "submitBtn", [_dec4], {
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

System.register("chunks:///_virtual/cryptoCoinItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enums.ts', './EventManger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, events, EventMgr;
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
      Component = module.Component;
    }, function (module) {
      events = module.events;
    }, function (module) {
      EventMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "1da87+mRJBGDqUJWKmhgehW", "cryptoCoinItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var cryptoCoinItem = exports('cryptoCoinItem', (_dec = ccclass('cryptoCoinItem'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(cryptoCoinItem, _Component);
        function cryptoCoinItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "getCoinBtn", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = cryptoCoinItem.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.getCoinBtn.on(Node.EventType.TOUCH_END, s.onGetCoin, s);
        };
        _proto.onGetCoin = function onGetCoin() {
          EventMgr.inst.event.emit(events.exchangeUIShow);
        };
        return cryptoCoinItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "getCoinBtn", [_dec2], {
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

System.register("chunks:///_virtual/exchangeUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enums.ts', './EventManger.ts', './baseUI.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, EditBox, events, EventMgr, baseUI;
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
      EditBox = module.EditBox;
    }, function (module) {
      events = module.events;
    }, function (module) {
      EventMgr = module.default;
    }, function (module) {
      baseUI = module.baseUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "3e83dViEi9L7KJiCPBn2QOG", "exchangeUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var exchangeUI = exports('exchangeUI', (_dec = ccclass("exchangeUI"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(exchangeUI, _baseUI);
        function exchangeUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _this.eventName = "exchangeUI";
          _initializerDefineProperty(_this, "closeBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "returnBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "getCoinOrderBtn", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "redNode", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = exchangeUI.prototype;
        _proto.onLoad = function onLoad() {
          _baseUI.prototype.onLoad.call(this);
          var s = this;
          s.closeBtn.on(Node.EventType.TOUCH_END, s.onClose, s);
          s.returnBtn.on(Node.EventType.TOUCH_END, s.onClose, s);
          s.getCoinOrderBtn.on(Node.EventType.TOUCH_END, s.onGetCoinOrder, s);
        };
        _proto.onEnable = function onEnable() {
          var s = this;
          s.redNode.active = false;
        };
        _proto.showRedNode = function showRedNode(val) {
          var s = this;
          s.redNode.getComponentInChildren(Label).string = val;
          s.redNode.active = true;
        };
        _proto.onClose = function onClose() {
          this.hideUI();
        };
        _proto.onGetCoinOrder = function onGetCoinOrder() {
          console.log("onGetCoinOrder");
          var s = this;
          var input = s.content.getChildByName("inputNum");
          var inputComp = input.getComponent(EditBox);
          var inputValue = inputComp.string;
          console.log(inputValue);
          if (isNaN(Number(inputValue))) {
            s.showRedNode("请输入数字");
            return;
          }
          if (Number(inputValue) <= 0) {
            s.showRedNode("请输入大于0的数字");
            return;
          }
          EventMgr.inst.event.emit(events.createOrderUIShow, Number(inputValue));
          s.hideUI();
        };
        return exchangeUI;
      }(baseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "returnBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "getCoinOrderBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "redNode", [_dec5], {
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

System.register("chunks:///_virtual/personalRes", ['./createOrderUI.ts', './cryptoCoinItem.ts', './exchangeUI.ts', './personalScene.ts', './tonInfoUI.ts'], function () {
  return {
    setters: [null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/personalScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enums.ts', './EventManger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Color, Sprite, Label, Component, events, EventMgr;
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
      Color = module.Color;
      Sprite = module.Sprite;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      events = module.events;
    }, function (module) {
      EventMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "9516f589Q5KZb+5laRMK7mx", "personalScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var personalEvent = exports('personalEvent', /*#__PURE__*/function (personalEvent) {
        personalEvent["failNotice"] = "failNotice";
        personalEvent["successNotice"] = "successNotice";
        return personalEvent;
      }({}));
      var personalScene = exports('personalScene', (_dec = ccclass("personalScene"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(personalScene, _Component);
        function personalScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tonInfoBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "operateNotifier", _descriptor2, _assertThisInitialized(_this));
          /**钱包按钮 */
          _initializerDefineProperty(_this, "walletBtn", _descriptor3, _assertThisInitialized(_this));
          _this.TgLib = null;
          /**是否有连接钱包 */
          _this._isConnectWallet = void 0;
          return _this;
        }
        var _proto = personalScene.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          EventMgr.inst.event.on(personalEvent.failNotice, s.showFailNotice, s);
          EventMgr.inst.event.on(personalEvent.successNotice, s.showSuccessNotice, s);
          s.walletBtn.on(Node.EventType.TOUCH_END, s.onWalletBtn, s);
          s.TgLib = window["TgLib"];
        };
        /**检测是否有绑定钱包 */
        _proto.checkIsConnectWallet = function checkIsConnectWallet() {
          var s = this;
          s.isConnectWallet = s.TgLib && s.TgLib.isConnectWallet();
          return s.isConnectWallet;
        };
        _proto.onWalletBtn = function onWalletBtn() {
          var s = this;
          if (!s.TgLib) {
            s.showFailNotice("钱包未链接");
            return;
          }
          if (s.isConnectWallet) {
            //断开连接
            s.TgLib.delWallet();
          } else {
            //接上连接
            s.TgLib.connectWallet();
          }
        };
        _proto.showFailNotice = function showFailNotice(value) {
          var s = this;
          s.showNotifier(Color.RED, value);
        };
        _proto.showSuccessNotice = function showSuccessNotice(value) {
          var s = this;
          s.showNotifier(Color.GREEN, value);
        };
        _proto.showNotifier = function showNotifier(color, value) {
          var s = this;
          s.operateNotifier.getComponentInChildren(Sprite).color = color;
          s.operateNotifier.getComponentInChildren(Label).string = value;
          s.operateNotifier.setSiblingIndex(-1);
          s.operateNotifier.active = true;
        };
        _proto.onEnable = function onEnable() {
          var s = this;
          EventMgr.inst.event.emit(events.loadResUIHide);
          s.tonInfoBtn.on(Node.EventType.TOUCH_END, s.showTonInfoUI, s);
          s.checkIsConnectWallet();
          if (s.TgLib && s.TgLib.initLib()) s.TgLib.setStatusChangeCall(s.checkIsConnectWallet, s);
        };
        _proto.showTonInfoUI = function showTonInfoUI() {
          EventMgr.inst.event.emit(events.tonInfoUIShow);
        };
        _createClass(personalScene, [{
          key: "isConnectWallet",
          get: /**是否有连接钱包 */
          function get() {
            var s = this;
            return s._isConnectWallet;
          },
          set: /**是否有连接钱包 */
          function set(v) {
            var s = this;
            s._isConnectWallet = v;
            // let walletName = s.walletBtn.getChildByName("walletName").getComponent(Label);
            // let delconnetIcon = s.walletBtn.getChildByName("delconnetIcon");
            // let connetText = s.walletBtn.getChildByName("connetText");
            // let walletBtnComp = s.walletBtn.getComponent(Button);

            // if (v) {
            //     connetText.active = false;
            //     let name = s.TgLib.getWalletName();
            //     if (name.length > 8) {
            //         walletName.string = name.substring(0, 4) + "..." + name.substring(name.length - 4);
            //     } else {
            //         walletName.string = name;
            //     }
            //     walletBtnComp.target = delconnetIcon;
            // } else {
            //     connetText.active = true;
            //     walletBtnComp.target = connetText;
            //     walletName.string = "E-wallet";
            // }
            // delconnetIcon.active = !connetText.active;
          }
        }]);

        return personalScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tonInfoBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "operateNotifier", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "walletBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tonInfoUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseUI.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, Color, baseUI;
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
      Sprite = module.Sprite;
      Color = module.Color;
    }, function (module) {
      baseUI = module.baseUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "09216TU2WZO+oqsj+V/6yeZ", "tonInfoUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tonInfoUI = exports('tonInfoUI', (_dec = ccclass("tonInfoUI"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property([Node]), _dec6 = property([Node]), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(tonInfoUI, _baseUI);
        function tonInfoUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _this.eventName = "tonInfoUI";
          _initializerDefineProperty(_this, "closeBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "exchangeBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "myPropertyBtn", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "myPropertyNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "exchangeNode", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = tonInfoUI.prototype;
        _proto.onLoad = function onLoad() {
          _baseUI.prototype.onLoad.call(this);
          var s = this;
          s.closeBtn.on(Node.EventType.TOUCH_END, s.onClose, s);
          s.exchangeBtn.on(Node.EventType.TOUCH_END, s.onExchange, s);
          s.myPropertyBtn.on(Node.EventType.TOUCH_END, s.onMyProperty, s);
        };
        _proto.onEnable = function onEnable() {
          var s = this;
          s.selectTypeByBtn(s.exchangeBtn);
        };
        _proto.selectTypeByBtn = function selectTypeByBtn(btn) {
          var s = this;
          s.myPropertyNode.forEach(function (node) {
            node.active = btn == s.myPropertyBtn;
            node.setPosition(0, node.position.y);
          });
          s.exchangeNode.forEach(function (node) {
            node.active = btn == s.exchangeBtn;
            node.setPosition(0, node.position.y);
          });
          s.exchangeBtn.getComponent(Sprite).color = btn == s.exchangeBtn ? Color.WHITE : Color.GRAY;
          s.myPropertyBtn.getComponent(Sprite).color = btn == s.myPropertyBtn ? Color.WHITE : Color.GRAY;
        };
        _proto.onClose = function onClose() {
          this.hideUI();
        };
        _proto.onExchange = function onExchange() {
          console.log("onExchange");
          this.selectTypeByBtn(this.exchangeBtn);
        };
        _proto.onMyProperty = function onMyProperty() {
          console.log("onMyProperty");
          this.selectTypeByBtn(this.myPropertyBtn);
        };
        return tonInfoUI;
      }(baseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "exchangeBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "myPropertyBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "myPropertyNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "exchangeNode", [_dec6], {
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

(function(r) {
  r('virtual:///prerequisite-imports/personalRes', 'chunks:///_virtual/personalRes'); 
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