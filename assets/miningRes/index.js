System.register("chunks:///_virtual/miningRes", ['./miningScene.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/miningScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enums.ts', './EventManger.ts', './ResourceManger.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "6bb3dbjw6lH6a2K4tlpmFG0", "miningScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var miningScene = exports('miningScene', (_dec = ccclass("miningScene"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(miningScene, _Component);
        function miningScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "backBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "inPersonalBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "inGuajiGameBtn", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = miningScene.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.backBtn.on(Node.EventType.TOUCH_END, s.onBackBtn, s);
          s.inPersonalBtn.on(Node.EventType.TOUCH_END, s.onInPersonalBtn, s);
          s.inGuajiGameBtn.on(Node.EventType.TOUCH_END, s.onInGuajiGameBtn, s);
        };
        _proto.onBackBtn = function onBackBtn() {
          ResourceManger.instance.backScene();
        };
        _proto.onInPersonalBtn = function onInPersonalBtn() {
          ResourceManger.instance.openSceneByName("personal");
        };
        _proto.onInGuajiGameBtn = function onInGuajiGameBtn() {
          ResourceManger.instance.openSceneByName("guajiGame");
        };
        _proto.onEnable = function onEnable() {
          EventMgr.inst.event.emit(events.loadResUIHide);
        };
        return miningScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "inPersonalBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "inGuajiGameBtn", [_dec4], {
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
  r('virtual:///prerequisite-imports/miningRes', 'chunks:///_virtual/miningRes'); 
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