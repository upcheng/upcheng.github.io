System.register("chunks:///_virtual/friendItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enums.ts', './EventManger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component, events, EventMgr;
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
      Component = module.Component;
    }, function (module) {
      events = module.events;
    }, function (module) {
      EventMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "96009ZhZzdCCK3XyPlmrqRl", "friendItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var friendItem = exports('friendItem', (_dec = ccclass("friendItem"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(friendItem, _Component);
        function friendItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "userName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wealthValue", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "giveBtn", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = friendItem.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.giveBtn.on(Node.EventType.TOUCH_END, s.onGiveBtn, s);
        };
        _proto.setData = function setData(data) {
          var s = this;
          s.userName.string = data.userName;
          s.wealthValue.string = data.wealthValue + "";
        };
        _proto.onGiveBtn = function onGiveBtn() {
          EventMgr.inst.event.emit(events.friendOperate, "");
        };
        return friendItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "wealthValue", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "giveBtn", [_dec4], {
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

System.register("chunks:///_virtual/friendRes", ['./friendItem.ts', './friendScene.ts', './red.ts'], function () {
  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/friendScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enums.ts', './EventManger.ts', './ResourceManger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, events, EventMgr, ResourceManger;
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
    }, function (module) {
      ResourceManger = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "0c5eamFhDpG7pEhjKu9UGH1", "friendScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var friendScene = exports('friendScene', (_dec = ccclass("friendScene"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(friendScene, _Component);
        function friendScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "backBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "getGiveFriendBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "inviteFriendBtn", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "operateNotifier", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = friendScene.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.backBtn.on(Node.EventType.TOUCH_END, s.onBackBtn, s);
          s.getGiveFriendBtn.on(Node.EventType.TOUCH_END, s.onGetGiveFriendBtn, s);
          s.inviteFriendBtn.on(Node.EventType.TOUCH_END, s.onInviteFriendBtn, s);
          EventMgr.inst.event.on(events.friendOperate, s.onFriendOperate, s);
        };
        _proto.onFriendOperate = function onFriendOperate() {
          var s = this;
          s.operateNotifier.active = true;
        };
        _proto.onGetGiveFriendBtn = function onGetGiveFriendBtn() {
          var s = this;
          s.onFriendOperate();
        };
        _proto.onInviteFriendBtn = function onInviteFriendBtn() {
          var s = this;
          s.onFriendOperate();
        };
        _proto.onBackBtn = function onBackBtn() {
          ResourceManger.instance.backScene();
        };
        _proto.onEnable = function onEnable() {
          EventMgr.inst.event.emit(events.loadResUIHide);
        };
        return friendScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "getGiveFriendBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "inviteFriendBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "operateNotifier", [_dec5], {
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

System.register("chunks:///_virtual/red.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './dragComp.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Vec3, Component, dragComp;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      dragComp = module.dragComp;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "49053bP/aRP8raE56F28r34", "red", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var red = exports('red', (_dec = ccclass("red"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(red, _Component);
        function red() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.startPosi = new Vec3();
          return _this;
        }
        var _proto = red.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.node.getPosition(s.startPosi);
        };
        _proto.onEnable = function onEnable() {
          var s = this;
          var drag = s.node.getComponent(dragComp);
          drag.setTouchCallFunc(s.dragStart, s.dragMove, s.dragEnd, s);
        };
        _proto.dragStart = function dragStart(args) {
          console.log("dragStart", args);
        };
        _proto.dragMove = function dragMove() {};
        _proto.dragEnd = function dragEnd() {
          var s = this;
          s.unscheduleAllCallbacks();
          s.scheduleOnce(function () {
            s.node.setPosition(s.startPosi);
          }, 0.1);
        };
        return red;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/friendRes', 'chunks:///_virtual/friendRes'); 
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