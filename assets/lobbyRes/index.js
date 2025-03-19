System.register("chunks:///_virtual/buttomBtn.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResourceManger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UITransform, Sprite, Color, Component, ResourceManger;
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
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      ResourceManger = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "48e67rMV3BNYp5hZ3HCbtcm", "buttomBtn", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var buttomBtn = exports('buttomBtn', (_dec = ccclass("buttomBtn"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(buttomBtn, _Component);
        function buttomBtn() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**大厅 */
          _initializerDefineProperty(_this, "enterLobbyBtn", _descriptor, _assertThisInitialized(_this));
          /**挂机游戏 */
          _initializerDefineProperty(_this, "enterGuajiGameBtn", _descriptor2, _assertThisInitialized(_this));
          /**朋友 */
          _initializerDefineProperty(_this, "enterFriendBtn", _descriptor3, _assertThisInitialized(_this));
          /**个人中心 */
          _initializerDefineProperty(_this, "enterPersonalCenterBtn", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "curSceneBtn", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = buttomBtn.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.enterLobbyBtn.on(Node.EventType.TOUCH_END, s.clickEnterLobbyBtn, s);
          s.enterGuajiGameBtn.on(Node.EventType.TOUCH_END, s.clickEnterGuajiGameBtn, s);
          s.enterFriendBtn.on(Node.EventType.TOUCH_END, s.clickEnterFriendBtn, s);
          s.enterPersonalCenterBtn.on(Node.EventType.TOUCH_END, s.clickEnterPersonalCenterBtn, s);
          if (s.curSceneBtn) {
            var uit = s.curSceneBtn.getComponent(UITransform);
            uit.height *= 1.3;
            var spr = s.curSceneBtn.getComponent(Sprite);
            spr.color = new Color(157, 157, 157, 255);
          }
        };
        _proto.clickEnterLobbyBtn = function clickEnterLobbyBtn() {
          ResourceManger.instance.openSceneByName("lobby");
        };
        _proto.clickEnterGuajiGameBtn = function clickEnterGuajiGameBtn() {
          ResourceManger.instance.openSceneByName("guajiGame");
        };
        _proto.clickEnterFriendBtn = function clickEnterFriendBtn() {
          ResourceManger.instance.openSceneByName("friend");
        };
        _proto.clickEnterPersonalCenterBtn = function clickEnterPersonalCenterBtn() {
          ResourceManger.instance.openSceneByName("personal");
        };
        return buttomBtn;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enterLobbyBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enterGuajiGameBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enterFriendBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "enterPersonalCenterBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "curSceneBtn", [_dec6], {
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

System.register("chunks:///_virtual/familyInfoUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseUI.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, baseUI;
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
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "4765aeZ8t1Me7OF28G8NzDC", "familyInfoUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var familyInfoUI = exports('familyInfoUI', (_dec = ccclass("familyInfoUI"), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(familyInfoUI, _baseUI);
        function familyInfoUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "closeBtn", _descriptor, _assertThisInitialized(_this));
          _this.eventName = "familyInfoUI";
          return _this;
        }
        var _proto = familyInfoUI.prototype;
        _proto.onLoad = function onLoad() {
          _baseUI.prototype.onLoad.call(this);
          var s = this;
          s.closeBtn.on(Node.EventType.TOUCH_END, s.onClose, s);
        };
        _proto.onClose = function onClose() {
          var s = this;
          s.hideUI();
        };
        return familyInfoUI;
      }(baseUI), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec2], {
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

System.register("chunks:///_virtual/familyRankingUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseUI.ts', './rankingItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, UITransform, instantiate, baseUI, rankingItem;
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
      Prefab = module.Prefab;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
    }, function (module) {
      baseUI = module.baseUI;
    }, function (module) {
      rankingItem = module.rankingItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "1cd97+BbklKbrnzqvWZoY/j", "familyRankingUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**排名类型 */
      var familyRankingType = exports('familyRankingType', /*#__PURE__*/function (familyRankingType) {
        familyRankingType[familyRankingType["player"] = 0] = "player";
        familyRankingType[familyRankingType["club"] = 1] = "club";
        return familyRankingType;
      }({}));
      /**排名日期类型 */
      var familyRankingDateType = exports('familyRankingDateType', /*#__PURE__*/function (familyRankingDateType) {
        familyRankingDateType[familyRankingDateType["day"] = 0] = "day";
        familyRankingDateType[familyRankingDateType["week"] = 1] = "week";
        return familyRankingDateType;
      }({}));
      var familyRankingUI = exports('familyRankingUI', (_dec = ccclass("familyRankingUI"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(familyRankingUI, _baseUI);
        function familyRankingUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _this.eventName = "familyRankingUI";
          _initializerDefineProperty(_this, "closeBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clubBtn", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dayBtn", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "weekBtn", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ranking", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rankingItem", _descriptor7, _assertThisInitialized(_this));
          /**最大显示数量 */
          _this.maxItemCount = 300;
          /**当次加载数量 */
          _this.loadItemCount = 20;
          _this.lastSelectTypeBtn = null;
          _this.lastSelectDateBtn = null;
          /**当前显示数量 */
          _this.curShowCount = 0;
          _this.curShowType = void 0;
          _this.curShowDateType = void 0;
          _this.startY = 27;
          _this.itemHeight = 54;
          _this.itemSpace = 10;
          return _this;
        }
        var _proto = familyRankingUI.prototype;
        _proto.onLoad = function onLoad() {
          _baseUI.prototype.onLoad.call(this);
          var s = this;
          s.closeBtn.on(Node.EventType.TOUCH_END, s.onClose, s);
          s.playerBtn.on(Node.EventType.TOUCH_END, s.selectShowDataBtn, s);
          s.clubBtn.on(Node.EventType.TOUCH_END, s.selectShowDataBtn, s);
          s.dayBtn.on(Node.EventType.TOUCH_END, s.selectShowDataBtn, s);
          s.weekBtn.on(Node.EventType.TOUCH_END, s.selectShowDataBtn, s);
        };
        _proto.onEnable = function onEnable() {
          var s = this;
          var uit = s.node.parent.getComponent(UITransform);
          s.selectShowDataBtn(null, s.playerBtn);
          s.selectShowDataBtn(null, s.dayBtn);
        };
        _proto.selectShowDataBtn = function selectShowDataBtn(e, btn) {
          var s = this;
          var cur = e != null ? e.currentTarget : btn;
          switch (cur) {
            case s.playerBtn:
              s.curShowType = familyRankingType.player;
              s.changeSelectTypeEff(cur);
              break;
            case s.clubBtn:
              s.curShowType = familyRankingType.club;
              s.changeSelectTypeEff(cur);
              break;
            case s.dayBtn:
              s.curShowDateType = familyRankingDateType.day;
              s.changeSelectDateEff(cur);
              break;
            case s.weekBtn:
              s.curShowDateType = familyRankingDateType.week;
              s.changeSelectDateEff(cur);
              break;
          }
          if (s.curShowDateType == null || s.curShowType == null) {
            return;
          }
          s.clearRankingItem();
          s.updataRankingItem();
        }
        /**改变选中类型特效 */;
        _proto.changeSelectTypeEff = function changeSelectTypeEff(btn) {
          var s = this;
          if (s.lastSelectTypeBtn != null) {
            s.lastSelectTypeBtn.getChildByName("selectEff").active = false;
          }
          s.lastSelectTypeBtn = btn;
          btn.getChildByName("selectEff").active = true;
        }
        /**改变选中日期特效 */;
        _proto.changeSelectDateEff = function changeSelectDateEff(btn) {
          var s = this;
          if (s.lastSelectDateBtn != null) {
            s.lastSelectDateBtn.getChildByName("selectEff").active = false;
          }
          s.lastSelectDateBtn = btn;
          btn.getChildByName("selectEff").active = true;
        };
        _proto.clearRankingItem = function clearRankingItem() {
          var s = this;
          var childs = s.ranking.getComponentsInChildren(rankingItem);
          var len = childs.length;
          for (var i = 0; i < len; i++) {
            childs[i].node.active = false;
          }
          s.curShowCount = 0;
        };
        /**更新下显示 */
        _proto.updataRankingItem = function updataRankingItem() {
          var s = this;
          var childs = s.ranking.getComponentsInChildren(rankingItem);
          var len = childs.length;
          for (var i = 0; i < len; i++) {
            childs[i].node.active = false;
          }
          for (var _i = 0; _i < s.loadItemCount; _i++) {
            var data = s.getRankingData();
            if (data == null) {
              break;
            }
            var ind = _i + s.curShowCount;
            var item = s.ranking.children[ind];
            if (item == null) {
              item = s.createRankingItem();
            }
            item.active = true;
            item.setPosition(0, -(s.startY + s.curShowCount * (s.itemHeight + s.itemSpace)));
            var itemComp = item.getComponent(rankingItem);
            itemComp.setData(data);
            s.curShowCount++;
          }
        };
        _proto.getRankingData = function getRankingData() {
          var s = this;
          var ind = s.curShowCount + 1;
          var type = ["player", "club"];
          var time = ["day", "week"];
          var name = type[s.curShowType] + " " + time[s.curShowDateType] + " " + ind;
          return {
            rank: ind,
            userName: name,
            score: ind * 100
          };
        }

        /**创建 */;
        _proto.createRankingItem = function createRankingItem() {
          var s = this;
          var item = instantiate(s.rankingItem);
          s.ranking.addChild(item);
          return item;
        };
        _proto.onClose = function onClose() {
          var s = this;
          s.hideUI();
        };
        return familyRankingUI;
      }(baseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "clubBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "dayBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "weekBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ranking", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rankingItem", [_dec8], {
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

System.register("chunks:///_virtual/fixedTitle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enums.ts', './EventManger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Vec3, UITransform, NodeEventType, Component, events, EventMgr;
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
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      NodeEventType = module.NodeEventType;
      Component = module.Component;
    }, function (module) {
      events = module.events;
    }, function (module) {
      EventMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f02e2OuplpFOJBkqeoXeyS2", "fixedTitle", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var fixedTitle = exports('fixedTitle', (_dec = ccclass("fixedTitle"), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(fixedTitle, _Component);
        function fixedTitle() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt", _descriptor, _assertThisInitialized(_this));
          /**滚动提示 */
          _this.titleDist = [];
          _this.uiTransform = null;
          /**x轴移动方向 */
          _this.moveDir = 1;
          _this.moveSpeed = 100;
          _this.moveTempPosi = new Vec3();
          _this.minX = 0;
          _this.maxX = 0;
          _this.isUpdataPosi = false;
          _this.isPlayShow = false;
          return _this;
        }
        var _proto = fixedTitle.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          EventMgr.inst.event.on(events.familyPlayFixedTitle, s.onFixedTitle, s);
          s.uiTransform = s.node.getComponent(UITransform);
          s.isPlayShow = false;
          s.txt.node.on(NodeEventType.SIZE_CHANGED, s.onSizeChanged, s);
        };
        _proto.onSizeChanged = function onSizeChanged() {
          var s = this;
          s.isUpdataPosi = true;
          var txtUiT = s.txt.node.getComponent(UITransform);
          if (txtUiT.width < s.uiTransform.width - 8) {
            s.isUpdataPosi = false;
            s.txt.node.setPosition(0, 0, 0);
          } else {
            s.isUpdataPosi = true;
            var offsetX = (txtUiT.contentSize.width - (s.uiTransform.width - 8)) / 2;
            s.minX = -offsetX;
            s.maxX = offsetX;
            s.moveTempPosi.x = s.maxX;
            s.txt.node.setPosition(s.maxX, 0, 0);
          }
        };
        _proto.onFixedTitle = function onFixedTitle(title) {
          var s = this;
          s.titleDist.push(title);
          if (!s.isPlayShow) {
            s.playTitle();
          }
        };
        _proto.playTitle = function playTitle() {
          var s = this;
          if (s.titleDist.length == 0) {
            s.isUpdataPosi = false;
            s.isPlayShow = false;
            return;
          }
          s.isPlayShow = true;
          s.isUpdataPosi = false;
          s.moveTempPosi.x = 0;
          var title = s.titleDist.shift();
          s.txt.string = title;
        };
        _proto.update = function update(dt) {
          var s = this;
          if (s.isUpdataPosi) {
            if (s.moveTempPosi.x >= s.maxX) {
              s.moveDir = -1;
            } else if (s.moveTempPosi.x <= s.minX) {
              s.moveDir = 1;
            }
            s.moveTempPosi.x += s.moveDir * s.moveSpeed * dt;
            s.txt.node.setPosition(s.moveTempPosi);
          }
        };
        return fixedTitle;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/floorItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "81339XXOWNJopPKyaFhiCPb", "floorItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var floorItem = exports('floorItem', (_dec = ccclass('floorItem'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(floorItem, _Component);
        function floorItem() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = floorItem.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return floorItem;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/floorLite.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c7f5al7RkBPW660O66NItAW", "floorLite", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var floorLite = exports('floorLite', (_dec = ccclass("floorLite"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(floorLite, _Component);
        function floorLite() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.tweenAnima = null;
          _this.count = 0;
          /**楼层坐标位置 */
          _this.posiArr = [];
          _this.tweenTime = 0.1;
          _this.isShow = true;
          return _this;
        }
        var _proto = floorLite.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          var len = s.node.children.length;
          for (var i = 0; i < len; i++) {
            var item = s.node.children[i];
            // item.on(NodeEventType.TOUCH_END, s.clickFloorLite, s);
            s.posiArr.push(item.getPosition());
          }
        };
        /**点击楼 */
        _proto.clickFloorLite = function clickFloorLite() {
          // if (s.textBor) {
          //     s.showAnima();
          // } else {
          //     s.hideAnima();
          // }
        }
        /**隐藏楼 */;
        _proto.hideAnima = function hideAnima() {
          var s = this;
          //已经隐藏了
          if (!s.isShow) {
            return;
          }
          s.count = s.node.children.length - 1;
          s.doHideAnima();
          s.isShow = false;
        };
        _proto.doHideAnima = function doHideAnima() {
          var s = this;
          s.stopAnima();
          if (s.count < 1) {
            return;
          }
          var moveNode = s.node.children[s.count];
          moveNode.setPosition(s.posiArr[s.count]);
          moveNode.active = true;
          s.tweenAnima = tween(moveNode).to(s.tweenTime, {
            position: s.posiArr[s.count - 1]
          }).call(function () {
            s.count--;
            moveNode.active = false;
            s.doHideAnima();
          }).start();
        };
        _proto.showAnima = function showAnima() {
          var s = this;
          if (s.isShow) {
            //已经显示了
            return;
          }
          s.count = 1;
          s.doShowAnima();
          s.isShow = true;
        };
        _proto.doShowAnima = function doShowAnima() {
          var s = this;
          s.stopAnima();
          if (s.count > s.node.children.length - 1) {
            return;
          }
          var moveNode = s.node.children[s.count];
          moveNode.setPosition(s.posiArr[s.count - 1]);
          moveNode.active = true;
          s.tweenAnima = tween(moveNode).to(s.tweenTime, {
            position: s.posiArr[s.count]
          }).call(function () {
            s.count++;
            s.doShowAnima();
          }).start();
        };
        _proto.stopAnima = function stopAnima() {
          var s = this;
          if (s.tweenAnima) s.tweenAnima.stop();
        };
        return floorLite;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/floorLiteArr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './floorItem.ts', './EventManger.ts', './Enums.ts', './floorLite.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, NodeEventType, Component, floorItem, EventMgr, events, floorLite;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodeEventType = module.NodeEventType;
      Component = module.Component;
    }, function (module) {
      floorItem = module.floorItem;
    }, function (module) {
      EventMgr = module.default;
    }, function (module) {
      events = module.events;
    }, function (module) {
      floorLite = module.floorLite;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "71a48to5vBOaICDXkX95MNQ", "floorLiteArr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var floorLiteArr = exports('floorLiteArr', (_dec = ccclass("floorLiteArr"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(floorLiteArr, _Component);
        function floorLiteArr() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = floorLiteArr.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          var arr = s.node.getComponentsInChildren(floorItem);
          for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            item.node.on(NodeEventType.TOUCH_END, s.clickFloorLite, s);
          }
          EventMgr.inst.event.on(events.familySelectFloor, s.selectFloor, s);
        };
        _proto.selectFloor = function selectFloor(floor) {
          var s = this;
          var parentNode = floor.parent;
          var index = parentNode.getSiblingIndex();
          var grandParentNode = parentNode.parent;
          var arr = s.node.getComponentsInChildren(floorLite);
          if (grandParentNode == s.node) {
            //点击的楼层是自己哪一栋的
            var len = arr.length;
            for (var i = 0; i < len; i++) {
              var item = arr[i];
              if (i <= index) {
                item.showAnima();
              } else {
                item.hideAnima();
              }
            }
          } else {
            var _len = arr.length;
            for (var _i = 0; _i < _len; _i++) {
              var _item = arr[_i];
              _item.showAnima();
            }
          }
        };
        _proto.clickFloorLite = function clickFloorLite(e) {
          var cur = e.currentTarget;
          EventMgr.inst.event.emit(events.familySelectFloor, cur);
        };
        return floorLiteArr;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/lobbyRes", ['./LobbyScene.ts', './buttomBtn.ts', './familyInfoUI.ts', './familyRankingUI.ts', './fixedTitle.ts', './floorItem.ts', './floorLite.ts', './floorLiteArr.ts', './rankingItem.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/LobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManger.ts', './Enums.ts', './Global.ts', './ResourceManger.ts', './GMTool.ts', './Net.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, EventMgr, events, settingUIShowType, GameMode, Global, ResourceManger, GMTool, NetType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      EventMgr = module.default;
    }, function (module) {
      events = module.events;
      settingUIShowType = module.settingUIShowType;
      GameMode = module.GameMode;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      ResourceManger = module.default;
    }, function (module) {
      GMTool = module.GMTool;
    }, function (module) {
      NetType = module.NetType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "41ebbAnEqBJdY3Za/WVz4OU", "LobbyScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LobbyScene = exports('LobbyScene', (_dec = ccclass("LobbyScene"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property({
        type: GMTool
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LobbyScene, _Component);
        function LobbyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "settingBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "joinFamilyBtn", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rankingBtn", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gmNode", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LobbyScene.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.settingBtn.on(Node.EventType.TOUCH_END, s.clickSettingBtn, s);
          s.playBtn.on(Node.EventType.TOUCH_END, s.clickInGameBtn, s);
          s.joinFamilyBtn.on(Node.EventType.TOUCH_END, s.clickJoinFamilyBtn, s);
          s.rankingBtn.on(Node.EventType.TOUCH_END, s.clickRankingBtn, s);
          s.gmNode.node.active = Global.debugMode;
        };
        _proto.onEnable = function onEnable() {
          Global.traceMgr.enterLobby();
          EventMgr.inst.event.emit(events.loadResUIHide);

          // s.connectNet();
        };

        _proto.clickRankingBtn = function clickRankingBtn() {
          EventMgr.inst.event.emit(events.familyRankingUIShow);
        };
        _proto.clickJoinFamilyBtn = function clickJoinFamilyBtn() {
          EventMgr.inst.event.emit(events.familyInfoUIShow);
        };
        _proto.connectNet = function connectNet() {
          var s = this;
          var net = Global.networkMgr.getNet("lobby");
          if (net) {
            return;
          }
          Global.networkMgr.creatorNet("lobby", "ws://192.168.0.101", "3000", 5000, NaN);
          Global.networkMgr.addEvent("lobby", NetType.ws_open, s.onOpen, s);
        };
        _proto.onOpen = function onOpen(text) {
          Global.networkMgr.sendTextMessage("lobby", "hello");
        }

        /**设置按钮 */;
        _proto.clickSettingBtn = function clickSettingBtn() {
          EventMgr.inst.event.emit(events.settingUIShow, settingUIShowType.loddy);
        }
        /**进入小院 */;
        _proto.clickEnterYardButton = /*#__PURE__*/
        function () {
          var _clickEnterYardButton = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  ResourceManger.instance.openSceneByName("yard");
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function clickEnterYardButton() {
            return _clickEnterYardButton.apply(this, arguments);
          }
          return clickEnterYardButton;
        }();
        _proto.clickInGameBtn = /*#__PURE__*/function () {
          var _clickInGameBtn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  Global.curGameMode = GameMode.normal;
                  ResourceManger.instance.openSceneByName("game");
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function clickInGameBtn() {
            return _clickInGameBtn.apply(this, arguments);
          }
          return clickInGameBtn;
        }();
        return LobbyScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "settingBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "joinFamilyBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rankingBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gmNode", [_dec6], {
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

System.register("chunks:///_virtual/rankingItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a5bc5aWxwVFZKqvKAqm+E3e", "rankingItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var rankingItem = exports('rankingItem', (_dec = ccclass("rankingItem"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(rankingItem, _Component);
        function rankingItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rank", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "userName", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "score", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = rankingItem.prototype;
        /**设置数据 */
        _proto.setData = function setData(data) {
          var s = this;
          s.rank.string = data.rank.toString();
          s.userName.string = data.userName;
          s.score.string = data.score.toString();
        };
        return rankingItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rank", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "userName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "score", [_dec4], {
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
  r('virtual:///prerequisite-imports/lobbyRes', 'chunks:///_virtual/lobbyRes'); 
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