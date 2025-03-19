System.register("chunks:///_virtual/guajiGameRes", ['./guajiGameScene.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/guajiGameScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enums.ts', './EventManger.ts', './ResourceManger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, ToggleContainer, Component, events, EventMgr, ResourceManger;
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
      ScrollView = module.ScrollView;
      ToggleContainer = module.ToggleContainer;
      Component = module.Component;
    }, function (module) {
      events = module.events;
    }, function (module) {
      EventMgr = module.default;
    }, function (module) {
      ResourceManger = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "8084cOd5fxA3bWIaKq6nvAx", "guajiGameScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var guajiGameScene = exports('guajiGameScene', (_dec = ccclass("guajiGameScene"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(ScrollView), _dec5 = property(ToggleContainer), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(guajiGameScene, _Component);
        function guajiGameScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "courtyardLists", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "friendLists", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listboxScrollView", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listTypeGroup", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "inMiningbtn", _descriptor5, _assertThisInitialized(_this));
          _this.lastListType = null;
          return _this;
        }
        var _proto = guajiGameScene.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.inMiningbtn.on(Node.EventType.TOUCH_END, s.onInMining, s);
        };
        _proto.onInMining = function onInMining() {
          ResourceManger.instance.openSceneByName("mining");
        };
        _proto.onListTypeGroupSelected = function onListTypeGroupSelected(event) {
          var s = this;
          var curNode = null;
          if (s.lastListType && s.lastListType.name == event.node.name) {
            return;
          }
          if (s.lastListType) {
            s.lastListType.active = false;
          }
          if (event.node.name == "courtyardType") {
            curNode = s.courtyardLists;
          } else {
            curNode = s.friendLists;
          }
          s.lastListType = curNode;
          s.lastListType.active = true;
          s.listboxScrollView.content = s.lastListType;
          s.listboxScrollView.scrollToTop(0.01);
          // console.log(event.node.name, event.isChecked);
        };

        _proto.onEnable = function onEnable() {
          var s = this;
          s.listTypeGroup.toggleItems[0].isChecked = true;
          EventMgr.inst.event.emit(events.loadResUIHide);
        };
        return guajiGameScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "courtyardLists", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "friendLists", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listboxScrollView", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "listTypeGroup", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "inMiningbtn", [_dec6], {
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
  r('virtual:///prerequisite-imports/guajiGameRes', 'chunks:///_virtual/guajiGameRes'); 
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