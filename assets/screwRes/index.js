System.register("chunks:///_virtual/autoAriverAI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enums.ts', './textDraw.ts', './EventManger.ts', './screwGlobal.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, tween, Vec3, Color, UITransform, v3, Component, FishState, events, textDraw, EventMgr, screwGlobal;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      Vec3 = module.Vec3;
      Color = module.Color;
      UITransform = module.UITransform;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      FishState = module.FishState;
      events = module.events;
    }, function (module) {
      textDraw = module.textDraw;
    }, function (module) {
      EventMgr = module.default;
    }, function (module) {
      screwGlobal = module.screwGlobal;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "07a61F6SyhJGqw9X5/yZhMC", "autoAriverAI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**鳄鱼的自动驾驶司机 */
      var autoAriverAI = exports('autoAriverAI', (_dec = ccclass("autoAriverAI"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(autoAriverAI, _Component);
        function autoAriverAI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // 速度常量
          _this.MOVE_SPEED = 1500;
          // 单位：像素/秒
          /**地图 */
          _this.map = void 0;
          /**速度，单位像素/秒 */
          _this._run_speed = 100;
          /**旋转角度（以度为单位） */
          _this._run_angle = 0;
          _this.moveTween = null;
          _this.angleTween = null;
          _this.fish = void 0;
          _this.targetPoint = v3(0, 0, 0);
          _this.angleTime = 0.05;
          /**回调函数 */
          _this.runChangeEndCallFunc = void 0;
          _this.runChangeEndCallThis = void 0;
          return _this;
        }
        var _proto = autoAriverAI.prototype;
        /**撞到鱼 传入世界坐标 */
        _proto.hitFish = function hitFish(target) {
          var s = this;
          s.runToPoint(target, s.gotoOrigin, s);
        };
        _proto.gotoOrigin = function gotoOrigin() {
          var s = this;
          s.runToPoint(s.fish.center, function () {
            s.fish.fishState = FishState.Idle;
            s.fish.isYun = true;
          }, s, 0.1);
        }
        /**给定时间内 旋转鱼的角度 回调 */;
        _proto.runAngle = function runAngle(angle, time, callback, thisObj) {
          var s = this;
          //停止之前的
          s.stopTween(s.angleTween);

          // 计算最短旋转角度
          var currentAngle = s.fish.node.angle % 360;
          if (currentAngle < 0) currentAngle += 360;
          var targetAngleMod = angle % 360;
          if (targetAngleMod < 0) targetAngleMod += 360;
          var diff = targetAngleMod - currentAngle;

          // 选择最短的旋转方向
          if (diff > 180) diff -= 360;
          if (diff < -180) diff += 360;
          var finalAngle = s.fish.node.angle + diff;
          s.angleTween = tween(s.fish.node).to(time, {
            angle: finalAngle
          }).call(function () {
            s.fish.node.angle += 360;
            s.fish.node.angle = angle;
            callback && callback.call(thisObj);
          }).start();
          // console.log(s.fish.name + " 旋转到 " + angle + " 最终角度:" + finalAngle + " 时间:" + time);
        }

        /**移动到目标点 目标点是世界坐标 */;
        _proto.runToPoint = function runToPoint(target, callback, thisObj, time) {
          if (time === void 0) {
            time = -1;
          }
          var s = this;
          //停止之前的
          s.stopTween(s.moveTween);

          //设置状态
          s.fish.fishState = FishState.Move;
          var fishTrans = s.fish.box;
          var duration = time;
          if (duration == -1) {
            // 计算距离
            var currentPos = fishTrans.convertToWorldSpaceAR(Vec3.ZERO);
            var distance = Vec3.distance(currentPos, target);
            // 根据距离和速度计算时间
            duration = distance / s.MOVE_SPEED;
          }
          if (s.moveTween) {
            s.moveTween.stop();
          }
          textDraw.inst.drawLine(s.fish.node.getWorldPosition(), target, Color.BLUE);

          /**世界坐标转为节点坐标  */
          var targetLocal = s.fish.node.parent.getComponent(UITransform).convertToNodeSpaceAR(target);
          // 创建 tween 动画
          s.moveTween = tween(s.fish.node).to(duration, {
            position: targetLocal
          }).call(function () {
            s.fish.node.setPosition(targetLocal);
            callback && callback.call(thisObj);
          }).start();

          // console.log(s.fish.name + " 移动到目标点:" + targetLocal + " 时间:" + duration);
        };
        /** 行走到边界顶部 */
        _proto.runTopPoint = function runTopPoint(target) {
          var s = this;
          s.fish.weibaoNode.active = true;
          s.targetPoint.x = Math.floor(target.x);
          s.targetPoint.y = Math.floor(target.y);

          // 计算延长线到边界
          var dx = s.fish.centerTop.x - s.fish.center.x;
          var dy = s.fish.centerTop.y - s.fish.center.y;

          // 处理精度问题
          if (Math.abs(dx) < 0.01) dx = 0;
          if (Math.abs(dy) < 0.01) dy = 0;
          var targetWorld = s.fish.center.clone();
          if (dx == 0 && dy > 0) {
            // 垂直线
            targetWorld.y = screwGlobal.carParkBoxMgr.leftTop.y;
          } else if (dx == 0 && dy < 0) {
            targetWorld.y = screwGlobal.carParkBoxMgr.leftBottom.y;
          } else if (dy == 0 && dx > 0) {
            targetWorld.x = screwGlobal.carParkBoxMgr.rightTop.x;
          } else if (dy == 0 && dx < 0) {
            targetWorld.x = screwGlobal.carParkBoxMgr.leftTop.x;
          } else {
            // 计算斜率
            var k = dy / dx;
            var b = s.fish.centerTop.y - k * s.fish.centerTop.x;
            // 根据方向计算延长线终点
            var x2, y2;
            if (dx > 0) {
              // 向右延伸
              x2 = screwGlobal.carParkBoxMgr.rightTop.x;
              y2 = k * x2 + b;
              // 检查是否超出上下边界
              if (y2 > screwGlobal.carParkBoxMgr.rightTop.y) {
                y2 = screwGlobal.carParkBoxMgr.rightTop.y;
                x2 = (y2 - b) / k;
              } else if (y2 < screwGlobal.carParkBoxMgr.rightBottom.y) {
                y2 = screwGlobal.carParkBoxMgr.rightBottom.y;
                x2 = (y2 - b) / k;
              }
            } else {
              // 向左延伸
              x2 = screwGlobal.carParkBoxMgr.leftTop.x;
              y2 = k * x2 + b;
              // 检查是否超出上下边界
              if (y2 > screwGlobal.carParkBoxMgr.leftTop.y) {
                y2 = screwGlobal.carParkBoxMgr.leftTop.y;
                x2 = (y2 - b) / k;
              } else if (y2 < screwGlobal.carParkBoxMgr.leftBottom.y) {
                y2 = screwGlobal.carParkBoxMgr.leftBottom.y;
                x2 = (y2 - b) / k;
              }
            }
            targetWorld.x = x2;
            targetWorld.y = y2;
          }
          textDraw.inst.drawLine(s.fish.center, targetWorld, Color.GREEN);
          s.runToPoint(targetWorld, s.doRunTopStopPoint, s);
        };
        /**分析鱼的位置，思考下一步移动的位置，直到停车场 */
        _proto.doRunTopStopPoint = function doRunTopStopPoint() {
          var s = this;
          var fishWorld = s.fish.node.getWorldPosition();
          var fwX = Math.floor(fishWorld.x);
          var fwY = Math.floor(fishWorld.y);
          var angle = s.fish.node.angle;
          if (s.isNearEqual(fwX, screwGlobal.carParkBoxMgr.rightTop.x) && !s.isNearEqual(fwY, screwGlobal.carParkBoxMgr.rightTop.y)) {
            if (s.isNearEqual(angle, 0)) {
              s.runToPoint(screwGlobal.carParkBoxMgr.rightTop, s.doRunTopStopPoint, s);
            } else {
              s.runAngle(0, s.angleTime, s.doRunTopStopPoint, s);
            }
          } else if (s.isNearEqual(fwX, screwGlobal.carParkBoxMgr.leftTop.x) && !s.isNearEqual(fwY, screwGlobal.carParkBoxMgr.leftTop.y)) {
            if (s.isNearEqual(angle, 0)) {
              s.runToPoint(screwGlobal.carParkBoxMgr.leftTop, s.doRunTopStopPoint, s);
            } else {
              s.runAngle(0, s.angleTime, s.doRunTopStopPoint, s);
            }
          } else if (s.isNearEqual(fwY, screwGlobal.carParkBoxMgr.leftBottom.y)) {
            //看鱼离左边还是右边近
            if (s.isNearEqual(angle, 90)) {
              s.runToPoint(screwGlobal.carParkBoxMgr.leftBottom, s.doRunTopStopPoint, s);
            } else if (s.isNearEqual(angle, 270)) {
              s.runToPoint(screwGlobal.carParkBoxMgr.rightBottom, s.doRunTopStopPoint, s);
            } else if (angle < 180) {
              s.runAngle(90, s.angleTime, s.doRunTopStopPoint, s);
            } else {
              s.runAngle(270, s.angleTime, s.doRunTopStopPoint, s);
            }
            s.isNearEqual(fwY, screwGlobal.carParkBoxMgr.leftTop.y);
          } else if (s.isNearEqual(fwY, screwGlobal.carParkBoxMgr.leftTop.y) && !s.isNearEqual(fwX, s.targetPoint.x)) {
            if (s.isNearEqual(angle, 90) || s.isNearEqual(angle, 270)) {
              s.runToPoint(v3(s.targetPoint.x, screwGlobal.carParkBoxMgr.leftTop.y, 0), s.doRunTopStopPoint, s);
            } else if (fwX > s.targetPoint.x && !s.isNearEqual(angle, 90)) {
              s.runAngle(90, s.angleTime, s.doRunTopStopPoint, s);
            } else {
              s.runAngle(270, s.angleTime, s.doRunTopStopPoint, s);
            }
          } else if (s.isNearEqual(fwY, screwGlobal.carParkBoxMgr.leftTop.y) && s.isNearEqual(fwX, s.targetPoint.x) && !s.isNearEqual(angle, 0)) {
            s.runAngle(0, s.angleTime, s.doRunTopStopPoint, s);
          } else if (s.isNearEqual(fwY, screwGlobal.carParkBoxMgr.leftTop.y) && s.isNearEqual(fwX, s.targetPoint.x)) {
            s.runToPoint(s.targetPoint, s.doRunTopStopPoint, s);
          } else if (s.isNearEqual(fwX, s.targetPoint.x) && s.isNearEqual(fwY, s.targetPoint.y)) {
            // console.log("到达目标点");
            s.fish.openBaskBag();
            screwGlobal.carParkBoxMgr.checkHitFish();
            //回收钉子
            screwGlobal.topicBoxMgr.recycleScrew();
            screwGlobal.gameMgr.updateAutoUpBtn();
            s.fish.weibaoNode.active = false;
          }

          // s.runTopPoint();
        }
        /**判断两个数是否近似相等 */;
        _proto.isNearEqual = function isNearEqual(a, b, precision) {
          if (precision === void 0) {
            precision = 2;
          }
          return Math.abs(a - b) < precision;
        }

        /**移动到最终的隐藏位置 */;
        _proto.runToHidePoint = function runToHidePoint() {
          var s = this;
          s.fish.weibaoNode.active = true;
          var fishWorld = s.fish.node.getWorldPosition();
          var fwX = Math.floor(fishWorld.x);
          var fwY = Math.floor(fishWorld.y);
          if (!s.isNearEqual(fwY, screwGlobal.carParkBoxMgr.rightTop.y)) {
            s.runToPoint(v3(fwX, screwGlobal.carParkBoxMgr.rightTop.y, 0), s.runToHidePoint, s);
          } else if (s.isNearEqual(fwY, screwGlobal.carParkBoxMgr.rightTop.y) && !s.isNearEqual(s.fish.node.angle, 270)) {
            s.runAngle(270, s.angleTime, s.runToHidePoint, s);
          } else if (!s.isNearEqual(fwX, screwGlobal.carParkBoxMgr.hidePosition.x)) {
            s.runToPoint(v3(screwGlobal.carParkBoxMgr.hidePosition.x, screwGlobal.carParkBoxMgr.rightTop.y, 0), s.runToHidePoint, s);
          } else {
            s.fish.fishState = FishState.Arrive;
            s.fish.node.active = false;
            s.fish.weibaoNode.active = false;
            if (screwGlobal.screwCount.count == 0 && screwGlobal.carParkBoxMgr.isCheckFishArrive()) {
              //游戏结束胜利
              EventMgr.inst.event.emit(events.winUIShow, screwGlobal.colorMgr.getRecycleColorLength());
            }
          }
        }

        /**直接移动到目标点 */;
        _proto.runToPointDirect = function runToPointDirect(target) {
          var s = this;
          s.stopTween(s.moveTween);
          // let targetX = Math.floor(target.x);
          // let targetY = Math.floor(target.y);

          s.fish.fishState = FishState.Move;
          var duration = 0.6;
          /**世界坐标转为节点坐标  */
          var targetLocal = s.fish.node.parent.getComponent(UITransform).convertToNodeSpaceAR(target);
          // 创建 tween 动画
          s.moveTween = tween(s.fish.node).to(duration, {
            position: targetLocal,
            angle: 720
          }).call(function () {
            s.fish.node.setPosition(targetLocal);
            s.fish.node.angle = 0;
            screwGlobal.gameMgr.selectFishbg.active = false;
            screwGlobal.gameMgr.selectFishCount = 0;
            screwGlobal.gameMgr.isShowBtn = true;
            s.fish.openBaskBag();
            screwGlobal.carParkBoxMgr.checkHitFish();
            //回收钉子
            screwGlobal.topicBoxMgr.recycleScrew();
            screwGlobal.gameMgr.updateAutoUpBtn();
          }).start();
        };
        /**换颜色道具 步骤一 跑到边界 */
        _proto.runChangeColor = function runChangeColor(callback, thisObj) {
          var s = this;
          s.runChangeEndCallFunc = callback;
          s.runChangeEndCallThis = thisObj;
          if (s.isNearEqual(s.fish.node.angle, 90)) {
            s.runToPoint(v3(screwGlobal.carParkBoxMgr.maxLeftPosition.x, s.fish.center.y, 0), s.runChangeColor_changeColor, s, 0.5);
          } else if (s.isNearEqual(s.fish.node.angle, 270)) {
            s.runToPoint(v3(screwGlobal.carParkBoxMgr.maxRightPosition.x, s.fish.center.y, 0), s.runChangeColor_changeColor, s, 0.5);
          }
        }
        /**换颜色道具 步骤二 替换颜色 回调原来位置 */;
        _proto.runChangeColor_changeColor = function runChangeColor_changeColor() {
          var s = this;
          var color = screwGlobal.carParkBoxMgr.getRandomColor(s.fish.fishSize);
          s.fish.fishColor = color;
          if (s.isNearEqual(s.fish.node.angle, 90)) {
            s.fish.node.angle = 270;
          } else if (s.isNearEqual(s.fish.node.angle, 270)) {
            s.fish.node.angle = 90;
          }
          s.runToPoint(s.fish.center, s.runChangeColor_changeColor_2, s, 0.5);
        }
        /**换颜色道具 步骤三 旋转到目标角度 */;
        _proto.runChangeColor_changeColor_2 = function runChangeColor_changeColor_2() {
          var s = this;
          s.runAngle(s.fish.conf.direction, 0.2, s.runChangeColor_changeColor_3, s);
        }
        /**换颜色道具 步骤四 回调函数 */;
        _proto.runChangeColor_changeColor_3 = function runChangeColor_changeColor_3() {
          var s = this;
          s.fish.fishState = FishState.Idle;
          s.runChangeEndCallFunc && s.runChangeEndCallFunc.call(s.runChangeEndCallThis);
        };
        _proto.stopTween = function stopTween(tween) {
          tween && tween.stop();
        };
        return autoAriverAI;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/autoGameUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseUI.ts', './screwGlobal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, baseUI, screwGlobal;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
    }, function (module) {
      baseUI = module.baseUI;
    }, function (module) {
      screwGlobal = module.screwGlobal;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "03d14AsU6FM8IyqOmwIZ/7e", "autoGameUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var autoGameUI = exports('autoGameUI', (_dec = ccclass("autoGameUI"), _dec2 = property({
        type: sp.Skeleton
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_baseUI) {
        _inheritsLoose(autoGameUI, _baseUI);
        function autoGameUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _baseUI.call.apply(_baseUI, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ske", _descriptor, _assertThisInitialized(_this));
          _this.eventName = "autoGameUI";
          return _this;
        }
        var _proto = autoGameUI.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          _baseUI.prototype.onLoad.call(this);
          s.ske.setEndListener(function (track) {
            screwGlobal.gameMgr.autoGameFish();
            s.hideUI();
          });
        };
        _proto.showUI = function showUI(e) {
          var s = this;
          _baseUI.prototype.showUI.call(this);
          s.ske.setAnimation(0, "animation", false);
        };
        return autoGameUI;
      }(baseUI), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "ske", [_dec2], {
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

System.register("chunks:///_virtual/basePlank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './hole.ts', './screw.ts', './holeImg.ts', './ResourceManger.ts', './screwGlobal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, Prefab, Node, CCInteger, Color, Vec3, RigidBody2D, instantiate, UITransform, ERigidBody2DType, BoxCollider2D, PolygonCollider2D, view, Vec2, assetManager, SpriteFrame, Widget, randomRangeInt, UIOpacity, Component, hole, screw, holeImg, ResourceManger, screwGlobal;
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
      Sprite = module.Sprite;
      Prefab = module.Prefab;
      Node = module.Node;
      CCInteger = module.CCInteger;
      Color = module.Color;
      Vec3 = module.Vec3;
      RigidBody2D = module.RigidBody2D;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      ERigidBody2DType = module.ERigidBody2DType;
      BoxCollider2D = module.BoxCollider2D;
      PolygonCollider2D = module.PolygonCollider2D;
      view = module.view;
      Vec2 = module.Vec2;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      Widget = module.Widget;
      randomRangeInt = module.randomRangeInt;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      hole = module.hole;
    }, function (module) {
      screw = module.screw;
    }, function (module) {
      holeImg = module.holeImg;
    }, function (module) {
      ResourceManger = module.default;
    }, function (module) {
      screwGlobal = module.screwGlobal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "e1ef8oJweVKRaaDZzZf2dzx", "basePlank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var basePlank = exports('basePlank', (_dec = ccclass("basePlank"), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Node), _dec9 = property(CCInteger), _dec10 = property(CCInteger), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(basePlank, _Component);
        function basePlank() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "border", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor3, _assertThisInitialized(_this));
          /**钉子 */
          _initializerDefineProperty(_this, "screwCopy", _descriptor4, _assertThisInitialized(_this));
          /**物理效果的钉子 */
          _initializerDefineProperty(_this, "holeCopy", _descriptor5, _assertThisInitialized(_this));
          /**钉子图片 */
          _initializerDefineProperty(_this, "holeImgCopy", _descriptor6, _assertThisInitialized(_this));
          /**钉子容器节点 */
          _initializerDefineProperty(_this, "holeLayer", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editPlankType", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editPlankIndex", _descriptor9, _assertThisInitialized(_this));
          _this.endHole = null;
          /**使用的钉子数组 */
          _this.usedScrewList = [];
          _this._polyPoints = [];
          _this.tempPlankColor = new Color(255, 255, 255, 255);
          /**板子形状 */
          _this._plankType = void 0;
          /**板子钉子孔洞类型索引 */
          _this._plankIndex = void 0;
          /**板子颜色 */
          _this._plankColor = new Color(255, 255, 255, 255);
          _this.rigidBody2D = void 0;
          _this._conf = void 0;
          _this.plankGroupNode = void 0;
          /**钉子数量 */
          _this._screwCount = 0;
          _this.lastPoint = new Vec3(0, 0, 0);
          _this.lastAngle = 0;
          /**是否开启物理引擎 */
          _this.isPhysics = false;
          _this.isMaskActive = null;
          return _this;
        }
        var _proto = basePlank.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          //设置碰撞组
          s.rigidBody2D = s.node.getComponent(RigidBody2D);
        };
        /**设置板子配置 */
        _proto.setPlankConf = function setPlankConf(conf, plankGroupNode) {
          var s = this;
          s._conf = conf;
          s.isPhysics = false;
          s.node.angle = 0;
          s.plankGroupNode = plankGroupNode;
          var typeConf = ResourceManger.instance.get_json("plankTypeIndexConf");
          var posiConf = typeConf[conf.plankType + "_" + conf.plankIndex].posi;
          s.plankType = conf.plankType;
          s.plankIndex = conf.plankIndex;
          s.node.setPosition(conf.x, conf.y, 0);
          var len = posiConf.length;
          s.screwCount = len;
          s.usedScrewList.length = 0;
          if (s.endHole) s.endHole.node.active = false;
          var count = 0;
          var color = s.getColor();
          var changeInd = Math.floor(len / 2);
          for (var i = 0; i < len; i++) {
            if (screwGlobal.colorMgr.getSumColorLength() <= 0) {
              break;
            }
            if (!screwGlobal.colorMgr.checkSumColorTotal(color) || i == changeInd) {
              color = s.getColor();
            }
            var holeImgNode = instantiate(s.holeImgCopy);
            var holeImgComp = holeImgNode.getComponent(holeImg);
            s.holeLayer.addChild(holeImgNode);
            holeImgComp.node.active = true;
            var screwNode = instantiate(s.screwCopy);
            var screwComp = screwNode.getComponent(screw);
            s.holeLayer.addChild(screwNode);
            screwComp.bindPlank = s;
            screwComp.node.active = true;
            screwComp.node.name = "screw_" + count;
            s.usedScrewList[count] = screwComp;
            var posix = posiConf[i][0];
            var posiy = posiConf[i][1];
            holeImgComp.node.setPosition(posix, posiy, 0);
            screwComp.node.setPosition(posix, posiy, 0);
            screwComp.screwColor = color;
            screwGlobal.colorMgr.addCurUseColorTotal(color);
            count++;
          }
        }

        /**获取颜色 */;
        _proto.getColor = function getColor() {
          var color = screwGlobal.carParkBoxMgr.getScrewColor();
          if (color == null || !screwGlobal.colorMgr.checkSumColorTotal(color)) {
            color = screwGlobal.colorMgr.getRandomColor();
          }
          return color;
        }

        /**重置配置 */;
        _proto.resetConf = function resetConf() {
          var s = this;
          s.setPlankConf(s._conf, s.plankGroupNode);
        };
        /**通知板子钉子数量发生变化 */
        _proto.noticePlank = function noticePlank() {
          var s = this;
          var endScrew = null;
          var count = 0;

          //检查是否只剩下最后一个钉子没有隐藏
          var len = s.usedScrewList.length;
          for (var i = 0; i < len; i++) {
            if (s.usedScrewList[i].node.active) {
              endScrew = s.usedScrewList[i];
              count++;
            }
            if (count > 1) {
              return;
            }
          }
          if (endScrew) {
            if (!s.endHole) {
              var endHoleNode = instantiate(s.holeCopy);
              s.node.parent.addChild(endHoleNode);
              s.endHole = endHoleNode.getComponent(hole);
              s.endHole.node.name = s.node.name + "_hole";
            }
            var uit = endScrew.node.getComponent(UITransform);
            var endScrewPosi = endScrew.node.getPosition();
            endScrew.node.setSiblingIndex(-1);
            var posi = uit.convertToWorldSpaceAR(Vec3.ZERO);
            var localPosi = s.endHole.node.parent.getComponent(UITransform).convertToNodeSpaceAR(posi);
            var plankScale = s.node.getScale();
            s.endHole.node.setPosition(localPosi.x, localPosi.y, 0);
            s.endHole.bindHingeJoint2D(s.rigidBody2D, endScrewPosi.x * plankScale.x, endScrewPosi.y * plankScale.y);
            s.endHole.node.active = true;
            screwGlobal.topicBoxMgr.isUpdataAvailableScrew = true;
          } else {
            if (s.endHole) s.endHole.node.active = false;
          }
          s.isPhysics = true;
          if (s.rigidBody2D.type != ERigidBody2DType.Dynamic) {
            s.rigidBody2D.type = ERigidBody2DType.Dynamic;
            s.rigidBody2D.wakeUp();
          }
        }

        /**设置物理分组 */;
        _proto.changePhysicsGroup = function changePhysicsGroup(groupInd) {
          var s = this;
          var bodys = s.node.getComponentsInChildren(RigidBody2D);
          var len = bodys.length;
          for (var i = 0; i < len; i++) {
            bodys[i].group = groupInd;
          }
          //碰撞体
          var colliders = s.node.getComponentsInChildren(BoxCollider2D);
          len = colliders.length;
          for (var _i = 0; _i < len; _i++) {
            colliders[_i].group = groupInd;
            colliders[_i].apply();
          }
          //多边形碰撞体
          var polygons = s.node.getComponentsInChildren(PolygonCollider2D);
          len = polygons.length;
          for (var _i2 = 0; _i2 < len; _i2++) {
            polygons[_i2].group = groupInd;
            polygons[_i2].apply();
          }
        };
        _proto.clickScrew = function clickScrew(e) {
          var cur = e.currentTarget;
          var screwComp = cur.getComponent(screw);
          screwComp.hideScrew();
        };
        _proto.update = function update(deltaTime) {
          var s = this;
          if (!s.node.active) {
            return;
          }
          if (s.isMaskActive) {
            return;
          }
          if (s.isPhysics) {
            s.checkRecyclePlank();
            if (s.getLastStatus()) {
              screwGlobal.topicBoxMgr.isUpdataAvailableScrew = true;
            }
            return;
          }

          // let len = s.usedScrewList.length;
          // for (let i = 0; i < len; i++) {
          //     let screw = s.usedScrewList[i];
          //     if (screw.node.active) {
          //         return;
          //     }
          // }

          // s.enablePhysics();
          // s.isPhysics = true;
        };
        /**获取上一个状态 */
        _proto.getLastStatus = function getLastStatus(isSet) {
          if (isSet === void 0) {
            isSet = false;
          }
          var s = this;
          var posi = s.node.getPosition();
          var absx = Math.abs(posi.x - s.lastPoint.x);
          var absy = Math.abs(posi.y - s.lastPoint.y);
          var absAngle = Math.abs(s.node.angle - s.lastAngle);
          if (isSet) {
            s.node.getPosition(s.lastPoint);
            s.lastAngle = s.node.angle;
          }
          if (absx > 10 || absy > 10 || absAngle > 10) {
            return true;
          } else {
            return false;
          }
        }

        /**检查是否需要回收 */;
        _proto.checkRecyclePlank = function checkRecyclePlank() {
          var s = this;
          var worldPos = s.node.getWorldPosition();
          if (worldPos.y < -view.getVisibleSize().height / 2) {
            s.recyclePlank();
            // screwGlobal.topicBoxMgr.showNextPlank(s.plankGroupNode);
            return;
          }
        }

        /**板子回收 */;
        _proto.recyclePlank = function recyclePlank() {
          var s = this;
          s.node.active = false;

          // s.disablePhysics();
          s.plankGroupNode.checkAllPlank();
          if (s.endHole) {
            s.endHole.node.removeFromParent();
          }
          s.node.removeFromParent();
        };
        _proto.onDisable = function onDisable() {
          var s = this;
          s.rigidBody2D.type = ERigidBody2DType.Kinematic;
          s.rigidBody2D.linearVelocity = Vec2.ZERO; // 重置线性速度
          s.rigidBody2D.angularVelocity = 0; // 重置角速度
        };
        /**设置遮罩是否显示 */
        _proto.setMaskActive = function setMaskActive(isShow) {
          var s = this;
          s.bg.node.active = s.node.parent.getSiblingIndex() != 0;
          s.isMaskActive = isShow;
          s.scheduleOnce(function () {
            if (isShow) {
              s.node.getComponent(PolygonCollider2D).enabled = false;
            } else {
              s.node.getComponent(PolygonCollider2D).enabled = true;
            }
          });
          s.node.getChildByName("mask").active = isShow;
          s.node.getChildByName("holeNode").active = !isShow;
        }
        /**设置蒙层的颜色 */;
        _proto.setColorMask = function setColorMask(color) {
          var s = this;
          // s.mask.color = color;
          s.mask.node.getChildByName("color").getComponent(Sprite).color = color;
          s.border.color = color;
        }

        /**检查钉子是否可以使用 */;
        _proto.checkScrewIsAvailable = function checkScrewIsAvailable() {
          var s = this;
          if (s.isMaskActive) return;
          var len = s.usedScrewList.length;
          for (var i = 0; i < len; i++) {
            var _screw = s.usedScrewList[i];
            if (!_screw.node.active) {
              continue;
            }
            _screw.checkIsAvailable();
          }
        }

        /**获取所有钉子 */;
        _proto.getScrewList = function getScrewList() {
          var s = this;
          var arr = [];
          var len = s.usedScrewList.length;
          for (var i = 0; i < len; i++) {
            var _screw2 = s.usedScrewList[i];
            if (!_screw2.node.active || _screw2.useFlag) {
              continue;
            }
            arr.push(_screw2);
          }
          return arr;
        };
        _createClass(basePlank, [{
          key: "plankType",
          get: /**板子形状 */
          function get() {
            return this._plankType;
          },
          set: function set(value) {
            var s = this;
            s._plankType = value;
            var bundle = assetManager.getBundle("screwRes");
            var bgRes = bundle.get("Image/plank/type" + value + "/spriteFrame", SpriteFrame);
            var borderRes = bundle.get("Image/plank/border" + value + "/spriteFrame", SpriteFrame);

            // console.log(bgRes, borderRes, value);

            s.bg.spriteFrame = bgRes;
            s.mask.spriteFrame = bgRes;
            s.mask.node.getChildByName("color").getComponent(Widget).updateAlignment();
            if (borderRes) {
              s.border.spriteFrame = borderRes;
            }
            s.border.node.active = borderRes != null;
            var poly = s.node.getComponent(PolygonCollider2D);
            var conf = ResourceManger.instance.get_json("plankTypeConf");
            var arr = conf[value].points;
            //修改多边形碰撞体
            var len = arr.length;
            s._polyPoints.length = len;
            for (var i = 0; i < len; i++) {
              if (s._polyPoints[i]) {
                s._polyPoints[i].set(arr[i][0], arr[i][1]);
              } else {
                s._polyPoints[i] = new Vec2(arr[i][0], arr[i][1]);
              }
            }
            poly.points = s._polyPoints;
            //更新碰撞体
            poly.apply();
            var colorArr = [0xbe7475, 0xbe74b9, 0x8674be, 0x7495be, 0x74bebe, 0x74be8b, 0xb8be74, 0xbe8f74, 0x4ab1cd, 0x6269cc];
            // let colorArr = [0x3bb2f5, 0x943bf5, 0xf53ba3, 0xf53b3b, 0xf5a33b, 0x1380bd, 0x4242be, 0xd393ec, 0xf58787, 0xe7d445];
            //如果板子类型是1-20之间 背景从数组随机一个
            if (s._plankType >= 1 && s._plankType <= 20) {
              var colorInd = randomRangeInt(0, colorArr.length - 1);
              s.tempPlankColor.fromHEX(colorArr[colorInd]);
              s.plankColor = s.tempPlankColor;
              s.bg.node.getComponent(UIOpacity).opacity = 232;
            }
          }
        }, {
          key: "plankIndex",
          get: /**板子钉子孔洞类型索引 */
          function get() {
            return this._plankIndex;
          },
          set: function set(value) {
            this._plankIndex = value;
          }
        }, {
          key: "plankColor",
          get: /**板子颜色 */
          function get() {
            return this._plankColor;
          },
          set: function set(value) {
            this._plankColor.set(value);
            this.bg.color = this._plankColor;
          }
        }, {
          key: "screwCount",
          get: function get() {
            return this._screwCount;
          },
          set: function set(value) {
            var s = this;
            s._screwCount = value;
          }
        }]);
        return basePlank;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "border", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "screwCopy", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "holeCopy", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "holeImgCopy", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "holeLayer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "editPlankType", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "editPlankIndex", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/carParkBoxManagr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './fish.ts', './Global.ts', './Enums.ts', './textDraw.ts', './textLevel.ts', './EventManger.ts', './shitou.ts', './screwGlobal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Prefab, Animation, Label, v3, UITransform, Color, randomRangeInt, Component, instantiate, fish, Global, FishState, events, textDraw, textLevel, EventMgr, shitou, UnlockType, screwGlobal;
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
      Prefab = module.Prefab;
      Animation = module.Animation;
      Label = module.Label;
      v3 = module.v3;
      UITransform = module.UITransform;
      Color = module.Color;
      randomRangeInt = module.randomRangeInt;
      Component = module.Component;
      instantiate = module.instantiate;
    }, function (module) {
      fish = module.fish;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      FishState = module.FishState;
      events = module.events;
    }, function (module) {
      textDraw = module.textDraw;
    }, function (module) {
      textLevel = module.textLevel;
    }, function (module) {
      EventMgr = module.default;
    }, function (module) {
      shitou = module.shitou;
      UnlockType = module.UnlockType;
    }, function (module) {
      screwGlobal = module.screwGlobal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "216c3lf6dxH5bldR7hl137M", "carParkBoxManagr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var carParkBoxManagr = exports('carParkBoxManagr', (_dec = ccclass("carParkBoxManagr"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(Node), _dec9 = property([shitou]), _dec10 = property(Animation), _dec11 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(carParkBoxManagr, _Component);
        function carParkBoxManagr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "map", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hidePosiNode", _descriptor3, _assertThisInitialized(_this));
          /**极左点 */
          _initializerDefineProperty(_this, "maxLeftPosi", _descriptor4, _assertThisInitialized(_this));
          /**极右点 */
          _initializerDefineProperty(_this, "maxRightPosi", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fishCopy", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fishParent", _descriptor7, _assertThisInitialized(_this));
          /**停车位 */
          _initializerDefineProperty(_this, "carParkList", _descriptor8, _assertThisInitialized(_this));
          /**停车位世界坐标 */
          // public carParkPosition: Vec3[] = [];
          /**停车位位置 */
          _this.carParkFish = [null, null, null, null, null, null, null];
          /**边界点 */
          _this.leftTop = v3();
          _this.rightTop = v3();
          _this.leftBottom = v3();
          _this.rightBottom = v3();
          /**最总目的地 隐藏位置 */
          _this.hidePosition = v3();
          /**极左点 */
          _this.maxLeftPosition = v3();
          /**极右点 */
          _this.maxRightPosition = v3();
          _this.fishList = [];
          /**没有停车位提示 tip1 */
          _initializerDefineProperty(_this, "carTip", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loseLabel", _descriptor10, _assertThisInitialized(_this));
          _this.loseWait = 2;
          /**已经有钉子的鳄鱼 */
          _this.hasScrewFish = [];
          /**没有钉子的鳄鱼 */
          _this.noScrewFish = [];
          /**最大螺丝数量 */
          _this.maxScrewNum = 0;
          /**配置 */
          _this.conf = [];
          /**分帧加载的数量 */
          _this.frameCount = 2;
          /**鱼的颜色类型 */
          _this.fishColorType = {};
          /**改变颜色的鱼 */
          _this.changeColorFish = [];
          /**改变鱼颜色的计数 */
          _this.changeAnimaCount = 0;
          /**能移动的鱼 不碰到其他鱼 */
          _this.checkMoveFish = [];
          /**不能移动的鱼 碰到其他鱼 */
          _this.checkNoMoveFish = [];
          /**鱼深度列表 */
          _this.fishDepthList = [];
          /**是否首次检测 */
          _this.isFirstCheck = true;
          return _this;
        }
        var _proto = carParkBoxManagr.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          screwGlobal.carParkBoxMgr = s;

          //根据map 计算 四个点的世界坐标
          var mapUiSize = s.map.getComponent(UITransform);
          var halfWidth = mapUiSize.width / 2;
          var halfHeight = mapUiSize.height / 2;

          // 计算四个角的本地坐标
          var leftTopLocal = v3(-halfWidth, halfHeight, 0);
          var rightTopLocal = v3(halfWidth, halfHeight, 0);
          var leftBottomLocal = v3(-halfWidth, -halfHeight, 0);
          var rightBottomLocal = v3(halfWidth, -halfHeight, 0);
          var tempWorld = v3();
          // 转换为世界坐标
          mapUiSize.convertToWorldSpaceAR(leftTopLocal, tempWorld);
          s.leftTop.x = Math.floor(tempWorld.x);
          s.leftTop.y = Math.floor(tempWorld.y);
          mapUiSize.convertToWorldSpaceAR(rightTopLocal, tempWorld);
          s.rightTop.x = Math.floor(tempWorld.x);
          s.rightTop.y = Math.floor(tempWorld.y);
          mapUiSize.convertToWorldSpaceAR(leftBottomLocal, tempWorld);
          s.leftBottom.x = Math.floor(tempWorld.x);
          s.leftBottom.y = Math.floor(tempWorld.y);
          mapUiSize.convertToWorldSpaceAR(rightBottomLocal, tempWorld);
          s.rightBottom.x = Math.floor(tempWorld.x);
          s.rightBottom.y = Math.floor(tempWorld.y);
          s.hidePosiNode.getWorldPosition(tempWorld);
          s.hidePosition.x = Math.floor(tempWorld.x);
          s.hidePosition.y = Math.floor(tempWorld.y);
          s.maxLeftPosi.getWorldPosition(tempWorld);
          s.maxLeftPosition.x = Math.floor(tempWorld.x);
          s.maxLeftPosition.y = Math.floor(tempWorld.y);
          s.maxRightPosi.getWorldPosition(tempWorld);
          s.maxRightPosition.x = Math.floor(tempWorld.x);
          s.maxRightPosition.y = Math.floor(tempWorld.y);
          s.map.active = false;
          var node = s.content.getChildByName("carPark");
          node.setPosition(0, 0, 0);
          s.fishList = node.getComponentsInChildren(fish);
          s.carTip.node.active = false;
          var len = s.carParkList.length;
          for (var i = 0; i < len; i++) {
            s.carParkList[i].setVideoSuccessCall(function () {
              s.openCarPark();
            }, s);
          }
        }

        /**检查所有停车位是否完成 */;
        _proto.getCheckAllFish = function getCheckAllFish() {
          var s = this;
          var len = s.carParkList.length;
          for (var i = 0; i < len; i++) {
            if (s.carParkList[i].isUser == UnlockType.None) {
              if (s.carParkFish[i] == null) {
                return true;
              }
              if (s.carParkFish[i].isPlayRecycleScrew) {
                return true;
              }
              if (s.carParkFish[i].fishState != FishState.PickUp) {
                return true;
              }
            }
          }
          return false;
        };
        _proto.isLoseGame = function isLoseGame() {
          var s = this;
          var len = s.carParkList.length;
          var canCount = 0;
          for (var i = 0; i < len; i++) {
            if (s.carParkList[i].isUser == UnlockType.None) {
              canCount++;
            }
          }
          screwGlobal.gameMgr.selectFishbg.active = false;
          s.unscheduleAllCallbacks();
          if (canCount >= len) {
            EventMgr.inst.event.emit(events.loseUIShow);
          } else {
            EventMgr.inst.event.emit(events.reviveUIShow);
          }
        };
        _proto.openCheckGame = function openCheckGame() {
          var s = this;
          s.loseWait = 2;
          s.unscheduleAllCallbacks();
          s.schedule(function () {
            s.checkFish();
          }, 1);
        };
        /**定时轮询 */
        _proto.checkFish = function checkFish() {
          var s = this;
          if (Global.isPlayProper) {
            s.setWaitTime(1, "道具动画播放中");
            return;
          }
          if (Global.isPlayAd) {
            s.setWaitTime(1, "广告中");
            return;
          }
          if (Global.isOpenSetting) {
            s.setWaitTime(1, "打开了设置界面");
            return;
          }
          var isFish = s.getCheckAllFish();
          if (isFish) {
            s.setWaitTime(1, "还有车位未完成");
            return;
          }
          if (Global.isUserProper) {
            s.setWaitTime(1, "打开了道具");
            return;
          }
          var isPlank = screwGlobal.topicBoxMgr.getCheckAllPlank();
          if (isPlank) {
            s.setWaitTime(1, "还有板子未完成");
            return;
          }
          s.loseWait--;
          if (s.loseLabel) s.loseLabel.string = "游戏结束倒计时：" + s.loseWait;
          if (s.loseWait <= 0) {
            s.isLoseGame();
          }
        };
        _proto.setWaitTime = function setWaitTime(time, str) {
          var s = this;
          s.loseWait = time;
          if (s.loseLabel) s.loseLabel.string = str;
        }

        /**开启一个停车位 */;
        _proto.openCarPark = function openCarPark() {
          var s = this;
          var len = s.carParkList.length;
          for (var i = 0; i < len; i++) {
            if (s.carParkList[i].isUser != UnlockType.None) {
              if (s.carParkList[i + 1]) {
                s.carParkList[i + 1].isUser = s.carParkList[i].isUser;
              }
              s.carParkList[i].isUser = UnlockType.None;
              return;
            }
          }
        }

        /**获取停车位位置 如有 添加鱼的位置 */;
        _proto.getCarParkPosition = function getCarParkPosition(fish) {
          var s = this;
          var len = s.carParkFish.length;
          for (var i = 0; i < len; i++) {
            if (s.carParkFish[i] == null && s.carParkList[i].isUser == UnlockType.None) {
              s.carParkFish[i] = fish;
              s.checkCarTip();
              return s.carParkList[i].node.getWorldPosition();
            }
          }
          return null;
        }
        /**删除停车位的鱼 */;
        _proto.deleteCarParkFish = function deleteCarParkFish(fish) {
          var s = this;
          var index = s.carParkFish.indexOf(fish);
          if (index != -1) {
            s.carParkFish[index] = null;
          }
          s.checkCarTip();
          screwGlobal.gameMgr.updateAutoUpBtn();
        }

        /**检查停车场提示 */;
        _proto.checkCarTip = function checkCarTip() {
          var s = this;
          var len = s.carParkList.length;
          var count = 0;
          for (var i = 0; i < len; i++) {
            if (s.carParkFish[i] == null && s.carParkList[i].isUser == UnlockType.None) {
              count++;
            }
          }
          switch (count) {
            case 0:
              s.carTip.node.active = true;
              s.carTip.play("carTop_0_anima");
              break;
            case 1:
              s.carTip.node.active = true;
              s.carTip.play("carTop_1_anima");
              break;
            default:
              s.carTip.stop();
              s.carTip.node.active = false;
              break;
          }
        }

        /**初始化停车位状态 */;
        _proto.initShitouStatus = function initShitouStatus(showNum) {
          if (showNum === void 0) {
            showNum = 4;
          }
          var s = this;
          var len = s.carParkList.length;
          var isShare = true;
          for (var i = 0; i < len; i++) {
            if (i < showNum) {
              s.carParkList[i].isUser = UnlockType.None;
            } else if (isShare) {
              s.carParkList[i].isUser = UnlockType.Share;
              isShare = false;
            } else {
              s.carParkList[i].isUser = UnlockType.Video;
            }
            s.carParkFish[i] = null;
          }
          s.checkCarTip();
        }

        /**获取停车位上的前n条鱼 */;
        _proto.getCarParkFish = function getCarParkFish(n) {
          var s = this;
          var len = s.carParkFish.length;
          var arr = [];
          for (var i = 0; i < len; i++) {
            if (s.carParkFish[i] != null) {
              arr.push(s.carParkFish[i]);
            }
            if (arr.length >= n) {
              return arr;
            }
          }
          return arr;
        };
        /**回收停车位上鱼的钉子 */
        _proto.recycleCarParkFishScrew = function recycleCarParkFishScrew() {
          var s = this;
          var arr = s.carParkFish;
          var len = arr.length;
          s.hasScrewFish.length = 0;
          s.noScrewFish.length = 0;
          for (var _i = 0; _i < len; _i++) {
            var _fish = arr[_i];

            //车位上有车，车是停车接乘客状态，有钉子可以回收
            if (_fish && _fish.fishState == FishState.PickUp) {
              if (_fish.collectScrewNum > 0) {
                s.hasScrewFish.push(_fish);
              } else {
                s.noScrewFish.push(_fish);
              }
            }
          }
          len = s.hasScrewFish.length;
          for (var i = 0; i < len; i++) {
            var _fish2 = s.hasScrewFish[i];
            _fish2.recycleScrew();
          }
          len = s.noScrewFish.length;
          for (var i = 0; i < len; i++) {
            var _fish3 = s.noScrewFish[i];
            _fish3.recycleScrew();
          }
        };
        _proto.drawMapLine = function drawMapLine() {
          var s = this;
          textDraw.inst.drawLine(s.leftTop, s.rightTop, Color.RED);
          textDraw.inst.drawLine(s.leftBottom, s.rightBottom, Color.RED);
          textDraw.inst.drawLine(s.leftTop, s.leftBottom, Color.RED);
          textDraw.inst.drawLine(s.rightTop, s.rightBottom, Color.RED);
        };
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          // s.drawMapLine();
        };
        /**设置 停车场 配置 */
        _proto.setConf = function setConf(conf) {
          var s = this;
          s.isFirstCheck = true;
          s.conf = conf;
          //关卡开启前 重置颜色统计
          screwGlobal.colorMgr.resetAllColorTotal(Global.gameLevel);
          s.initShitouStatus(4);
          s.fishList.length = 0;
          s.frameCreateCar();
        };
        /**单个分帧加载 */
        _proto.frameCreateCar = /*#__PURE__*/
        function () {
          var _frameCreateCar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var s, i, index, fishConf, fishNode, fishComp;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  s = this;
                  i = 0;
                case 2:
                  if (!(i < s.frameCount)) {
                    _context.next = 22;
                    break;
                  }
                  index = s.fishList.length;
                  if (!(s.conf[index] == null)) {
                    _context.next = 7;
                    break;
                  }
                  setTimeout(function () {
                    s.maxScrewNum = screwGlobal.colorMgr.getSumColorLength();
                    screwGlobal.screwCount.count = s.maxScrewNum;
                    s.createCarEnd();
                    s.openCheckGame();
                  }, 200);
                  return _context.abrupt("return");
                case 7:
                  fishConf = s.conf[index];
                  fishNode = instantiate(s.fishCopy);
                  fishComp = fishNode.getComponent(fish);
                  s.fishList.push(fishComp);
                  fishNode.setPosition(fishConf.pos.x, fishConf.pos.y, fishConf.pos.z);
                  // node.addChild(fishNode);

                  fishComp.preSetConf(fishConf);
                  s.fishParent.addChild(fishComp.node);
                  fishComp.setFishConf(fishConf);
                  fishComp.node.active = true;
                  fishComp.node.name = "fish" + index;
                  fishComp.id = index;

                  //统计螺丝颜色
                  screwGlobal.colorMgr.addSumColorTotalByCount(fishComp.maxScrewNum, fishComp.fishColor);
                case 19:
                  i++;
                  _context.next = 2;
                  break;
                case 22:
                  setTimeout(function () {
                    s.frameCreateCar();
                  }, 0);
                case 23:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function frameCreateCar() {
            return _frameCreateCar.apply(this, arguments);
          }
          return frameCreateCar;
        }();
        _proto.createCarEnd = /*#__PURE__*/function () {
          var _createCarEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var s;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  s = this;
                  _context2.next = 3;
                  return s.checkHitFish();
                case 3:
                  setTimeout(function () {
                    screwGlobal.gameMgr.resetGame();
                  }, 0);
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function createCarEnd() {
            return _createCarEnd.apply(this, arguments);
          }
          return createCarEnd;
        }() /**判断是否都回到终点    */;
        _proto.isCheckFishArrive = function isCheckFishArrive() {
          var s = this;
          var len = s.fishList.length;
          for (var i = 0; i < len; i++) {
            var fishComp = s.fishList[i];
            if (fishComp.node.active) {
              return false;
            }
          }
          return true;
        }
        /**检查鱼是否有可以移动 */;
        _proto.isCheckFishIsMove = function isCheckFishIsMove() {
          var s = this;
          var len = s.carParkFish.length;
          var isNull = false;
          for (var i = 0; i < len; i++) {
            if (s.carParkFish[i] == null && s.carParkList[i].isUser == UnlockType.None) {
              isNull = true;
              break;
            }
          }
          if (!isNull) {
            return false;
          }
          len = s.fishList.length;
          for (var i = 0; i < len; i++) {
            var fishComp = s.fishList[i];
            if (fishComp.fishState == FishState.Idle) {
              return true;
            }
          }
          return false;
        }

        /**根据id 获取鱼 */;
        _proto.getFishById = function getFishById(id) {
          var s = this;
          var len = s.fishList.length;
          for (var i = 0; i < len; i++) {
            var fishComp = s.fishList[i];
            if (fishComp.id == id) {
              return fishComp;
            }
          }
          return null;
        }
        /**返回鱼列表 */;
        _proto.getFishList = function getFishList() {
          return this.fishList;
        };
        /**让所有鱼跑去边界 在跑回来 */
        _proto.moveToChangeColorFish = function moveToChangeColorFish() {
          var s = this;
          var len = s.fishList.length;
          for (var _key2 in s.fishColorType) {
            s.fishColorType[_key2].length = 0;
          }
          s.changeColorFish.length = 0;
          for (var i = 0; i < len; i++) {
            var fishComp = s.fishList[i];
            if (fishComp.fishState == FishState.Idle) {
              if (!s.fishColorType[fishComp.fishSize]) {
                s.fishColorType[fishComp.fishSize] = [];
              }
              s.fishColorType[fishComp.fishSize].push(fishComp.fishColor);
              s.changeColorFish.push(fishComp);
              s.changeAnimaCount++;
              var localPx = fishComp.node.getPosition().x;
              if (localPx <= 0) {
                fishComp.runAngle(90, 0.5, s.angleCallEnd, s);
              } else {
                fishComp.runAngle(270, 0.5, s.angleCallEnd, s);
              }
            }
          }
        }
        /**获取随机颜色 会删掉原来的颜色 */;
        _proto.getRandomColor = function getRandomColor(type) {
          var s = this;
          var len = s.fishColorType[type].length;
          if (len <= 0) {
            return null;
          }
          var randomInd = randomRangeInt(0, len);
          var color = s.fishColorType[type][randomInd];
          s.fishColorType[type].splice(randomInd, 1);
          return color;
        }

        /**角度动画回调 */;
        _proto.angleCallEnd = function angleCallEnd() {
          var s = this;
          s.changeAnimaCount--;
          if (s.changeAnimaCount > 0) {
            return;
          }
          s.changeAnimaCount = 0;
          /**播放下一个动画 */
          var len = s.changeColorFish.length;
          for (var i = 0; i < len; i++) {
            var fishComp = s.changeColorFish[i];
            s.changeAnimaCount++;
            fishComp.runChangeColor(s.animaCallEnd, s);
          }
        }
        /**动画结束回调 */;
        _proto.animaCallEnd = function animaCallEnd() {
          var s = this;
          s.changeAnimaCount--;
          if (s.changeAnimaCount > 0) {
            return;
          }
          screwGlobal.gameMgr.isShowBtn = true;
          screwGlobal.gameMgr.notUserClickBg.active = false;
        };
        /**检测鱼是否能移动 */
        _proto.checkHitFish = /*#__PURE__*/
        function () {
          var _checkHitFish = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var s, i, len, fishComp, _fishComp, fishDepth, _fishComp2;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  s = this; // Global.clearColorTotal(Global.carScrewColorTotal);
                  // window["jj"] = s;
                  s.checkMoveFish.length = 0;
                  s.checkNoMoveFish.length = 0;
                  s.fishDepthList.length = 0;
                  for (i = 0; i < s.fishDepthList.length; i++) {
                    s.fishDepthList[i].length = 0;
                  }
                  len = s.fishList.length;
                  if (s.isFirstCheck) {
                    for (i = 0; i < len; i++) {
                      fishComp = s.fishList[i];
                      fishComp.rigidBody2D.node.active = true;
                    }
                  }
                  i = 0;
                case 8:
                  if (!(i < len)) {
                    _context3.next = 19;
                    break;
                  }
                  _fishComp = s.fishList[i];
                  if (_fishComp.node.active) {
                    _context3.next = 12;
                    break;
                  }
                  return _context3.abrupt("continue", 16);
                case 12:
                  if (_fishComp.checkHitFish) {
                    s.checkNoMoveFish.push(_fishComp);
                  } else {
                    s.checkMoveFish.push(_fishComp);
                  }
                  fishDepth = _fishComp.getFishDepth();
                  if (s.fishDepthList[fishDepth] == null) {
                    s.fishDepthList[fishDepth] = [];
                  }
                  s.fishDepthList[fishDepth].push(_fishComp);
                case 16:
                  i++;
                  _context3.next = 8;
                  break;
                case 19:
                  if (s.isFirstCheck) {
                    for (i = 0; i < len; i++) {
                      _fishComp2 = s.fishList[i];
                      _fishComp2.rigidBody2D.node.active = false;
                    }
                  }
                  s.isFirstCheck = false;
                  if (Global.debugMode) {
                    console.log("鱼深度列表：", s.fishDepthList);
                  }
                case 22:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function checkHitFish() {
            return _checkHitFish.apply(this, arguments);
          }
          return checkHitFish;
        }() /**获取随机钉子颜色 */;
        _proto.getScrewColor = function getScrewColor() {
          var s = this;
          var len = s.fishDepthList.length;
          for (var i = 0; i < len; i++) {
            var fishList = s.fishDepthList[i];
            if (fishList == null || fishList.length <= 0) {
              continue;
            }
            if (i == 0) {
              var randomInd = randomRangeInt(0, fishList.length);
              var color = fishList[randomInd].fishColor;
              if (screwGlobal.colorMgr.checkSumColorTotal(color)) {
                return color;
              }
              continue;
            } else {
              var listLen = fishList.length;
              for (var j = 0; j < listLen; j++) {
                var _color = fishList[j].fishColor;
                if (screwGlobal.colorMgr.checkSumColorTotal(_color)) {
                  if (Global.debugMode) console.log("获取颜色层 ", i, " 颜色 ", _color);
                  return _color;
                }
              }
            }
          }
          return null;
        };
        _proto.getLevelConf = function getLevelConf() {
          var s = this;
          var node = s.content.getChildByName("carParkEdit");
          var textLevelComp = node.getComponent(textLevel);
          if (textLevelComp) {
            textLevelComp.updateAllChildren();
          }
          var confList = [];
          var len = node.children.length;
          for (var i = 0; i < len; i++) {
            var child = node.children[i];
            if (child.active) {
              var fishComp = child.getComponent(fish);
              var conf = fishComp.getFishConf();
              confList.push(conf);
            }
          }
          console.log("鱼配置 ：");
          console.log(confList);
          console.log(JSON.stringify(confList));
          return confList;
        };
        return carParkBoxManagr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "map", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hidePosiNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maxLeftPosi", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "maxRightPosi", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "fishCopy", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "fishParent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "carParkList", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "carTip", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "loseLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fish.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './autoAriverAI.ts', './Global.ts', './Enums.ts', './textDraw.ts', './screw.ts', './ThirdPartyManager.ts', './screwGlobal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, sp, Enum, Label, Node, RigidBody2D, BoxCollider2D, size, v3, randomRangeInt, tween, Vec3, UITransform, Color, PhysicsSystem2D, ERaycast2DType, Component, autoAriverAI, Global, FishColor, FishSize, FishState, textDraw, screw, ThirdPartyManager, screwGlobal;
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
      sp = module.sp;
      Enum = module.Enum;
      Label = module.Label;
      Node = module.Node;
      RigidBody2D = module.RigidBody2D;
      BoxCollider2D = module.BoxCollider2D;
      size = module.size;
      v3 = module.v3;
      randomRangeInt = module.randomRangeInt;
      tween = module.tween;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Color = module.Color;
      PhysicsSystem2D = module.PhysicsSystem2D;
      ERaycast2DType = module.ERaycast2DType;
      Component = module.Component;
    }, function (module) {
      autoAriverAI = module.autoAriverAI;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      FishColor = module.FishColor;
      FishSize = module.FishSize;
      FishState = module.FishState;
    }, function (module) {
      textDraw = module.textDraw;
    }, function (module) {
      screw = module.screw;
    }, function (module) {
      ThirdPartyManager = module.ThirdPartyManager;
    }, function (module) {
      screwGlobal = module.screwGlobal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "0a81bh2usNHOr4BJiSGMxIq", "fish", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var fish = exports('fish', (_dec = ccclass("fish"), _dec2 = property(sp.Skeleton), _dec3 = property(sp.Skeleton), _dec4 = property(sp.Skeleton), _dec5 = property({
        type: Enum(FishColor),
        visible: true
      }), _dec6 = property({
        type: Enum(FishSize),
        visible: true
      }), _dec7 = property({
        type: Label,
        visible: true
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: RigidBody2D
      }), _dec10 = property({
        type: BoxCollider2D
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(fish, _Component);
        function fish() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**司机 */
          _this.ariver = void 0;
          /**鱼id */
          _this.id = -1;
          /**鱼的状态 */
          // public fishState: FishState = FishState.Idle;
          _this.sizeList = [size(68, 104), size(70, 120), size(70, 134)];
          /**钉子列表 */
          _this.screwList = [];
          /**收集的钉子数量 */
          _this.collectScrewNum = 0;
          _initializerDefineProperty(_this, "fishSke", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "beibaoSke", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yunSke", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editfishColor", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editfishSize", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fishStateLabel", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "weibaoNode", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rigidBody2D", _descriptor8, _assertThisInitialized(_this));
          /**碰撞盒 */
          _initializerDefineProperty(_this, "boxTrans", _descriptor9, _assertThisInitialized(_this));
          /**初始起点 */
          _this.oriPosi = v3();
          /**当前动画动作字符附加 用于区分皮肤 */
          _this.animaAction = "";
          /**是否眩晕中 */
          _this._isYun = false;
          /**鱼的状态 */
          _this._fishState = FishState.Idle;
          /**钉子缩放 */
          _this.screwScale = v3();
          /**钉子位置 */
          _this.screwPos = [];
          _this._fishTween = null;
          _this.byScale = v3(1.15, 1.15);
          _this.conf = void 0;
          /**设置鱼颜色 */
          _this._fishColor = FishColor.Blue;
          /**当前钉子显示数组起始下标 */
          _this.startScrewIndex = 0;
          /**最大钉子数量 */
          _this.maxScrewNum = 4;
          /**设置鱼大小 */
          _this._fishSize = FishSize.size_4;
          _this.box = void 0;
          /**边界点 */
          _this.leftTop = v3();
          _this.rightTop = v3();
          _this.leftBottom = v3();
          _this.rightBottom = v3();
          _this.center = v3();
          _this.centerTop = v3();
          _this.centerBottom = v3();
          _this._hitFish = null;
          /**是否检测 */
          _this.isCheckHitFish = false;
          // 常量配置
          _this.TIME_CONFIG = {
            MAX: 2,
            DISTANCE_FACTOR: 0.003
          };
          _this._recycleScrewCallBack = null;
          _this._recycleScrewThisObj = null;
          /**钉子回收动画计数 */
          _this.recycleScrewCount = 0;
          /**是否正在播放钉子回收动画 */
          _this.isPlayRecycleScrew = false;
          return _this;
        }
        var _proto = fish.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.ariver = s.node.addComponent(autoAriverAI);
          s.ariver.fish = this;
          var hole = s.node.getChildByName("hole");
          s.screwList = hole.getComponentsInChildren(screw);
          var len = s.screwList.length;
          for (var i = 0; i < len; i++) {
            var _screw = s.screwList[i];
            s.screwPos[i] = _screw.node.getPosition();
          }
          s.screwScale = s.screwList[0].node.getScale();
          var fishAnimaCount = 0;
          //对两个动画动作进行监听
          s.fishSke.setEndListener(function (track) {
            fishAnimaCount++;
            if (fishAnimaCount < 30) {
              return;
            }
            fishAnimaCount = 0;
            var anima = ["Yan1", "Yan2", "Yan3"];
            //随机播放一个动作
            s.fishSke.setAnimation(0, anima[randomRangeInt(0, anima.length)], true);
          });
          s.beibaoSke.setEndListener(function (track) {
            var name = track.animation.name;
            if (name.includes("daiji")) {
              return;
            }
            if (name.includes("dakai")) {
              s.beibaoSke.setAnimation(0, "dakaidaiji" + s.animaAction, false);
            }
            if (name.includes("guanbi") && !name.includes("guanbidaiji")) {
              s.beibaoSke.setAnimation(0, "guanbidaiji" + s.animaAction, false);
              s.ariver.runToHidePoint();
            }

            //  s.ariver.runToHidePoint();
          });

          s.yunSke.setEndListener(function (track) {
            s.isYun = false;
          });
          s.weibaoNode.active = false;

          // s.beibaoSke.node.active = false;
          // s.fishSke.node.active = false;
        };
        /**设置鱼配置 */
        _proto.setFishConf = function setFishConf(conf) {
          var s = this;
          s.unscheduleAllCallbacks();
          s.conf = conf;
          s.collectScrewNum = 0;
          s.node.setPosition(conf.pos.x, conf.pos.y, conf.pos.z);
          s.node.angle = conf.direction;
          s.fishState = FishState.Idle;
          s.node.getPosition(s.oriPosi);
          s.fishSize = conf.sizeType;
          s.fishColor = screwGlobal.colorMgr.getColor();
          s.node.setScale(conf.scale, conf.scale, 1);
          s.initFish();
          var anima = ["Yan1", "Yan2", "Yan3"];
          //随机播放一个动作
          s.fishSke.setAnimation(0, anima[randomRangeInt(0, anima.length)], true);
          if (s._fishTween) {
            s._fishTween.stop();
            s._fishTween = null;
          }
          var content = s.node.getChildByName("content");
          s._fishTween = tween(content).set({
            scale: Vec3.ONE
          }).to(0.2, {
            scale: s.byScale
          }).to(0.2, {
            scale: Vec3.ONE
          }).call(s.screwRecycleCallBack, s);
        };
        /**添加场景前设置 */
        _proto.preSetConf = function preSetConf(conf) {
          var s = this;
          s.node.setPosition(conf.pos.x, conf.pos.y);
          // s.boxTrans.size.x = 10;
          // s.boxTrans.size.y = 10;
          // s.boxTrans.apply();
        }

        /**根据数量改变holeBox的子节点显示 */;
        _proto.updateHoleBox = function updateHoleBox(num) {
          var s = this;
          var len = s.screwList.length;
          for (var i = 0; i < len; i++) {
            var hole = s.screwList[i];
            hole.node.active = i < num;
          }
        };
        _proto.getFishConf = function getFishConf() {
          return {
            colorType: this.fishColor,
            sizeType: this.fishSize,
            scale: this.node.scale.x,
            //精度0.1
            pos: v3(Math.round(this.node.position.x), Math.round(this.node.position.y), 0),
            //确保0-360
            direction: Math.abs(this.node.angle) % 360
          };
        };
        _proto.initFish = function initFish() {
          var s = this;
          s.box = s.node.getComponent(UITransform);
          //根据map 计算 四个点的世界坐标
          var mapUiSize = s.box.getComponent(UITransform);
          var halfWidth = mapUiSize.width / 2 - 3;
          var halfHeight = mapUiSize.height / 2 - 3;

          // 计算四个角的本地坐标
          var leftTopLocal = v3(-halfWidth, 1200, 0);
          var rightTopLocal = v3(halfWidth, 1200, 0);
          var leftBottomLocal = v3(-halfWidth, halfHeight, 0);
          var rightBottomLocal = v3(halfWidth, halfHeight, 0);
          var centerBottomLocal = v3(0, halfHeight, 0);

          // s.node.getWorldPosition(s.center)

          // 转换为世界坐标
          s.box.convertToWorldSpaceAR(leftTopLocal, s.leftTop);
          s.box.convertToWorldSpaceAR(rightTopLocal, s.rightTop);
          s.box.convertToWorldSpaceAR(leftBottomLocal, s.leftBottom);
          s.box.convertToWorldSpaceAR(rightBottomLocal, s.rightBottom);
          s.box.convertToWorldSpaceAR(centerBottomLocal, s.centerBottom);
          s.box.convertToWorldSpaceAR(Vec3.ZERO, s.center);
          s.box.convertToWorldSpaceAR(v3(0, 1200, 0), s.centerTop);
        };
        _proto.draw = function draw() {
          var s = this;
          textDraw.inst.drawLine(s.leftTop, s.leftBottom, Color.RED);
          textDraw.inst.drawLine(s.rightTop, s.rightBottom, Color.RED);
        };
        _proto.start = function start() {
          var s = this;
          s.node.on(Node.EventType.TOUCH_END, this.handleClick, this);

          // s.initFish();
          // let hitFish = screwGlobal.carParkBoxMgr.checkFishIsHit(s.node);
          // console.log(hitFish ? "撞到了" + hitFish.node.name : "未撞");
        };

        _proto.handleClick = function handleClick() {
          var s = this;
          if (s.fishState != FishState.Idle) {
            return;
          }
          if (s.isYun) {
            return;
          }
          s.node.setSiblingIndex(-1);
          if (Global.setting_shake) {
            ThirdPartyManager.instance.vibrateShort();
          }
          if (screwGlobal.gameMgr.selectFishbg.active) {
            if (screwGlobal.gameMgr.selectFishCount >= 1) {
              return;
            }
            screwGlobal.gameMgr.selectFishCount++;
            var carParkPos = screwGlobal.carParkBoxMgr.getCarParkPosition(s);
            if (carParkPos) {
              s.fishState = FishState.Move;
              s.ariver.runToPointDirect(carParkPos);
            }
            return;
          }

          // console.log("点击" + s.node.name);
          var hitPoint = s.getNearestHitFish();
          //let hitPoint = null;
          if (hitPoint) {
            // console.log("有碰撞点", hitPoint);
            hitPoint.x += s.center.x;
            hitPoint.y += s.center.y;
            s.ariver.hitFish(hitPoint);

            // var pos = s.node.parent.getComponent(UITransform).convertToNodeSpaceAR(hitPoint);
            // textDraw.inst.drawLine(s.center, hitPoint, Color.BLUE);
            // tween(s.node).to(1, { position: pos }).start();
          } else {
            var _carParkPos = screwGlobal.carParkBoxMgr.getCarParkPosition(s);
            if (_carParkPos) {
              s.fishState = FishState.Move;
              s.ariver.runTopPoint(_carParkPos);
            }
          }
        }

        /**是否碰到其他鱼 */;
        /**获取最近的碰撞点 */
        _proto.getNearestHitFish = function getNearestHitFish() {
          var s = this;
          var nearestPoint = null;
          var minDistance = Number.MAX_VALUE;
          for (var key in s._hitFish) {
            var hitFish = s._hitFish[key];
            if (!hitFish.fish.node.active) {
              continue;
            }
            if (hitFish.fish.fishState != FishState.Idle) {
              continue;
            }
            if (hitFish.distance < minDistance) {
              minDistance = hitFish.distance;
              nearestPoint = hitFish.hitPoint;
            }
          }
          return nearestPoint ? nearestPoint.clone() : null;
        }
        /**统计鱼深度 需要挪开多少条鱼才能动弹 */;
        _proto.getFishDepth = function getFishDepth() {
          var s = this;
          var count = 0;
          for (var key in s._hitFish) {
            var hitFish = s._hitFish[key];
            if (!hitFish.fish.node.active) {
              continue;
            }
            if (hitFish.fish.fishState != FishState.Idle) {
              continue;
            }
            count++;
          }
          return count;
        };
        /**物理射线检测 */
        _proto.raycastBox = function raycastBox() {
          var s = this;
          s.isCheckHitFish = true;

          //清空hitFish
          s._hitFish = {};

          // textDraw.inst.clear();
          // s.node.getComponent(RigidBody2D).wakeUp();

          // if (s.fishState != FishState.Idle) {
          //     return null;
          // }
          // s.draw();
          var arr = [s.leftBottom, s.leftTop, s.rightBottom, s.rightTop, s.centerBottom, s.centerTop];
          var len = arr.length;
          for (var i = 0; i < len; i += 2) {
            var results = PhysicsSystem2D.instance.raycast(arr[i], arr[i + 1], ERaycast2DType.All, s.rigidBody2D.group);
            // console.log(this.node.name, results);
            if (Global.debugMode && s.node.name == "fish4") textDraw.inst.drawLine(arr[i], arr[i + 1], Color.BLACK);
            if (results.length > 0) {
              var resultLen = results.length;
              for (var j = 0; j < resultLen; j++) {
                var result = results[j];
                var hitNode = result.collider.node.parent;
                var fishComp = hitNode.getComponent(fish);
                if (!fishComp) {
                  continue;
                }
                if (fishComp == s) {
                  continue;
                }
                if (s.node.name == "fish4") {
                  if (hitNode.name == "fish18") {
                    textDraw.inst.drawLine(s.leftBottom, v3(result.point.x, result.point.y, 0), Color.RED);
                  }
                  var box = results[j].collider.node.getComponent(BoxCollider2D);
                  var worldPoints = box.worldPoints;
                  var _len2 = worldPoints.length;
                  for (var k = 0; k < _len2; k++) {
                    var lastPoint = k + 1 < _len2 ? worldPoints[k + 1] : worldPoints[0];
                    textDraw.inst.drawLine(v3(worldPoints[k].x, worldPoints[k].y, 0), v3(lastPoint.x, lastPoint.y, 0), Color.RED);
                  }
                }

                // if (Global.debugMode && s.node.name == "fish9") textDraw.inst.drawLine(arr[i], v3(result.point.x, result.point.y, 0), Color.BLACK);

                var hitPoint = v3(result.point.x - arr[i].x, result.point.y - arr[i].y, 0);
                var distance = Vec3.len(hitPoint);
                if (s._hitFish[hitNode.name]) {
                  if (distance < s._hitFish[hitNode.name].distance) {
                    s._hitFish[hitNode.name].distance = distance;
                    s._hitFish[hitNode.name].hitPoint = hitPoint;
                    s._hitFish[hitNode.name].fish = fishComp;
                  }
                } else {
                  s._hitFish[hitNode.name] = {
                    distance: distance,
                    hitPoint: hitPoint,
                    fish: fishComp
                  };
                }
              }
            }
          }
          return;
        };
        /**回收钉子 */
        _proto.recycleScrew = function recycleScrew() {
          var s = this;
          var arr = screwGlobal.topicBoxMgr.availableScrew;
          var len = arr.length;
          var isRecycle = false;
          if (s.isCollectAllScrew()) {
            return isRecycle;
          }
          var count = 0;
          for (var i = 0; i < len; i++) {
            var _screw2 = arr[i];
            if (!_screw2 || _screw2.screwColor != s.fishColor || _screw2.useFlag) continue;
            // 执行动画
            arr[i] = null;
            isRecycle = true;
            s.screwRecycleAnima(_screw2, 0.2 * count);
            count++;
            if (s.isCollectAllScrew()) {
              // 已收集完所有钉子
              return isRecycle;
            }
          }
          return isRecycle;
        }
        /**是否收集完所有钉子 */;
        _proto.isCollectAllScrew = function isCollectAllScrew() {
          return this.collectScrewNum >= this.maxScrewNum;
        };
        /**钉子回收动画 */
        _proto.screwRecycleAnima = function screwRecycleAnima(targetScrew, delay, isFalseColor, animaEnd, thisObj) {
          if (delay === void 0) {
            delay = 0;
          }
          if (isFalseColor === void 0) {
            isFalseColor = null;
          }
          if (animaEnd === void 0) {
            animaEnd = null;
          }
          if (thisObj === void 0) {
            thisObj = null;
          }
          var s = this;
          var ind = s.startScrewIndex + s.collectScrewNum;
          var selectScrew = s.screwList[ind];
          if (isFalseColor) {
            selectScrew.screwColor = isFalseColor;
          } else {
            selectScrew.screwColor = targetScrew.screwColor;
            targetScrew.useFlag = true;
          }
          var fromPoint = targetScrew.node.getWorldPosition().clone();
          var fromScale = targetScrew.node.getWorldScale().clone();
          var toPoint = s.screwPos[ind];
          s._recycleScrewCallBack = animaEnd;
          s._recycleScrewThisObj = thisObj;
          s.isPlayRecycleScrew = true;
          s.collectScrewNum++;
          selectScrew.goToHere(fromPoint, toPoint, fromScale, s.screwScale, 0.3, delay, function () {
            if (isFalseColor) {
              screwGlobal.colorMgr.addRecycleColorTotal(isFalseColor);
            } else {
              screwGlobal.colorMgr.addRecycleColorTotal(targetScrew.screwColor);
            }
            if (targetScrew.useFlag) {
              targetScrew.hideScrew();
            }
            Global.audioMgr.playSound("luosi_out");
            selectScrew.node.active = true;
            screwGlobal.screwCount.count = screwGlobal.colorMgr.getSumColorLength() + screwGlobal.colorMgr.getCurUseColorLength();
          }, s.recycleScrewCallBack, s);
        };
        /**回收钉子完成回调 */
        _proto.recycleScrewCallBack = function recycleScrewCallBack() {
          var s = this;
          s._recycleScrewCallBack && s._recycleScrewCallBack.call(s._recycleScrewThisObj);
          // console.log("回收钉子完成");
          s.recycleScrewCount++;
          Global.audioMgr.playSound("luosi_in");
          if (s._fishTween) {
            s._fishTween.stop();
          }
          s._fishTween.start();
        }
        /**钉子回收动画完成 */;
        _proto.screwRecycleCallBack = function screwRecycleCallBack() {
          var s = this;
          screwGlobal.topicBoxMgr.isUpdataAvailableScrew = true;
          if (s.recycleScrewCount >= s.collectScrewNum) {
            //动画状态结束
            s.isPlayRecycleScrew = false;
          }
          if (s.recycleScrewCount < s.maxScrewNum) {
            return;
          }
          // console.log("钉子回收动画完成");

          if (s.isCollectAllScrew()) {
            s.fishState = FishState.Start;
            //删除停车位的鱼
            screwGlobal.carParkBoxMgr.deleteCarParkFish(s);
            //
            s.closeBaskBag();
          }
        }

        /**旋转 */;
        _proto.runAngle = function runAngle(angle, time, callback, thisObj) {
          var s = this;
          s.ariver.runAngle(angle, time, callback, thisObj);
        }
        /**鱼跑去边界换个颜色 */;
        _proto.runChangeColor = function runChangeColor(callback, thisObj) {
          var s = this;
          s.ariver.runChangeColor(callback, thisObj);
        }

        /**打开背包 */;
        _proto.openBaskBag = function openBaskBag() {
          var s = this;
          s.fishState = FishState.PickUp;
          s.beibaoSke.setAnimation(0, "dakai" + s.animaAction, false);
          // console.log("鱼已经到目的地", screwGlobal.carParkBoxMgr.carParkFish);
        }
        /**关闭背包 */;
        _proto.closeBaskBag = function closeBaskBag() {
          var s = this;
          s.updateHoleBox(0);
          s.beibaoSke.setAnimation(0, "guanbi" + s.animaAction, false);
          Global.audioMgr.playSound("fishOut");
          if (!s.beibaoSke.node.active) {
            s.scheduleOnce(function () {
              s.ariver.runToHidePoint();
            }, 1);
          }
        };
        _createClass(fish, [{
          key: "isYun",
          get: function get() {
            return this._isYun;
          },
          set: function set(value) {
            this._isYun = value;
            if (value) {
              this.yunSke.node.active = true;
              this.yunSke.setAnimation(0, "Yun", false);
              Global.audioMgr.playSound("hit");
            } else {
              this.yunSke.node.active = false;
            }
          }
        }, {
          key: "fishState",
          get: function get() {
            return this._fishState;
          },
          set: function set(value) {
            this._fishState = value;

            // switch (value) {
            //     case FishState.Idle:
            //         this.fishStateLabel.string = "待机";
            //         break;
            //     case FishState.Move:
            //         this.fishStateLabel.string = "移动";
            //         break;
            //     case FishState.PickUp:
            //         this.fishStateLabel.string = "等接客";
            //         break;
            //     case FishState.Arrive:
            //         this.fishStateLabel.string = "到达";
            //         break;
            //     case FishState.Start:
            //         this.fishStateLabel.string = "已出发";
            //         break;
            // }
          }
        }, {
          key: "fishColor",
          get: /**设置鱼颜色 */
          function get() {
            return this._fishColor;
          },
          set: function set(value) {
            var s = this;
            s._fishColor = value;
            // 更新颜色
            switch (value) {
              case FishColor.Blue:
                s.beibaoSke.setSkin("lan");
                break;
              case FishColor.Red:
                s.beibaoSke.setSkin("hong");
                break;
              case FishColor.Green:
                s.beibaoSke.setSkin("lv");
                break;
              case FishColor.Yellow:
                s.beibaoSke.setSkin("huang");
                break;
              case FishColor.Purple:
                s.beibaoSke.setSkin("zi");
                break;
              case FishColor.LightBlue:
                s.beibaoSke.setSkin("tianlan");
                break;
              case FishColor.Orange:
                s.beibaoSke.setSkin("cheng");
                break;
              case FishColor.Pink:
                s.beibaoSke.setSkin("fen");
                break;
            }
            s.beibaoSke.setAnimation(0, "guanbidaiji" + s.animaAction, false);
          }
        }, {
          key: "fishSize",
          get: /**设置鱼大小 */
          function get() {
            return this._fishSize;
          },
          set: function set(value) {
            var s = this;
            this._fishSize = value;

            // 更新大小
            var transform = this.node.getComponent(UITransform);
            if (transform) {
              var ind = 0;
              switch (this._fishSize) {
                case FishSize.size_4:
                  ind = 0;
                  s.fishSke.setSkin("4");
                  s.animaAction = "3";
                  s.maxScrewNum = 4;
                  s.startScrewIndex = 4;
                  break;
                case FishSize.size_6:
                  ind = 1;
                  s.fishSke.setSkin("6");
                  s.animaAction = "2";
                  s.maxScrewNum = 6;
                  s.startScrewIndex = 2;
                  break;
                case FishSize.size_8:
                  ind = 2;
                  s.fishSke.setSkin("8");
                  s.animaAction = "";
                  s.maxScrewNum = 8;
                  s.startScrewIndex = 0;
                  break;
              }
              s.beibaoSke.setAnimation(0, "guanbidaiji" + s.animaAction, false);
              // s.updateHoleBox(s.maxScrewNum);
              // let Layout = s.node.getChildByName("hole").getComponent(Layout);

              s.updateHoleBox(0);
              transform.setContentSize(s.sizeList[ind]);
              s.boxTrans.size.x = s.sizeList[ind].width * 0.9;
              s.boxTrans.size.y = s.sizeList[ind].height * 0.9;
              s.boxTrans.apply();
            }
          }
        }, {
          key: "checkHitFish",
          get: function get() {
            var s = this;
            if (s.isCheckHitFish == false) {
              s.raycastBox();
            }
            var checkHit = this.getNearestHitFish() ? true : false;
            return checkHit;
          }
        }]);
        return fish;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fishSke", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "beibaoSke", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "yunSke", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "editfishColor", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return FishColor.Blue;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "editfishSize", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return FishSize.size_4;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "fishStateLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "weibaoNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rigidBody2D", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "boxTrans", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enums.ts', './EventManger.ts', './Global.ts', './ResourceManger.ts', './screwGlobal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Sprite, sp, Label, Widget, Button, assetManager, SpriteFrame, Component, events, PropertyType, FishState, settingUIShowType, GameType, GameMode, EventMgr, Global, ResourceManger, screwGlobal;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Sprite = module.Sprite;
      sp = module.sp;
      Label = module.Label;
      Widget = module.Widget;
      Button = module.Button;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      events = module.events;
      PropertyType = module.PropertyType;
      FishState = module.FishState;
      settingUIShowType = module.settingUIShowType;
      GameType = module.GameType;
      GameMode = module.GameMode;
    }, function (module) {
      EventMgr = module.default;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      ResourceManger = module.default;
    }, function (module) {
      screwGlobal = module.screwGlobal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "fa538sTtKVF6rtGVFVDzXEL", "GameScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameScene = exports('GameScene', (_dec = ccclass("GameScene"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Sprite), _dec9 = property(Node), _dec10 = property(sp.Skeleton), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameScene, _Component);
        function GameScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "settingBtn", _descriptor, _assertThisInitialized(_this));
          /**自动上车按钮 */
          _initializerDefineProperty(_this, "autoUpBtn", _descriptor2, _assertThisInitialized(_this));
          /**重新排列颜色按钮 */
          _initializerDefineProperty(_this, "resetColorBtn", _descriptor3, _assertThisInitialized(_this));
          /**插队按钮 */
          _initializerDefineProperty(_this, "insertBtn", _descriptor4, _assertThisInitialized(_this));
          /**选择鱼的黑底 */
          _initializerDefineProperty(_this, "selectFishbg", _descriptor5, _assertThisInitialized(_this));
          _this.selectFishCount = 0;
          _initializerDefineProperty(_this, "notUserClickBg", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "photoImg", _descriptor7, _assertThisInitialized(_this));
          /**按钮组 */
          _initializerDefineProperty(_this, "btnGroup", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nanduSke", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "debugLabel", _descriptor10, _assertThisInitialized(_this));
          /**是否显示按钮 */
          _this._isShowBtn = void 0;
          _initializerDefineProperty(_this, "gameSceneNewUserTip", _descriptor11, _assertThisInitialized(_this));
          /**关卡数 */
          _initializerDefineProperty(_this, "levelCount", _descriptor12, _assertThisInitialized(_this));
          _this.isAutoUpAnima = false;
          _this.animaCount = 0;
          _this.maxLevel = 9;
          _this.curLevelConfIndex = 0;
          return _this;
        }
        var _proto = GameScene.prototype;
        _proto.onLoad = function onLoad() {
          // PhysicsSystem2D.instance.enable = true;
          // PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.All;
          screwGlobal.gameMgr = this;
          var s = this;
          s.settingBtn.on(Node.EventType.TOUCH_END, s.clickSettingBtn, s);
          s.autoUpBtn.on(Node.EventType.TOUCH_END, function () {
            var sprite = s.autoUpBtn.getComponent(Sprite);
            if (sprite.grayscale) {
              return;
            }
            if (s.checkFishAnima()) {
              EventMgr.inst.event.emit(events.propertyUIShow, PropertyType.autoUpScrew);
            }
          }, s);
          s.resetColorBtn.on(Node.EventType.TOUCH_END, function () {
            if (s.checkFishAnima()) {
              EventMgr.inst.event.emit(events.propertyUIShow, PropertyType.changeColor);
            }
          }, s);
          s.insertBtn.on(Node.EventType.TOUCH_END, function () {
            if (s.checkFishAnima() && screwGlobal.carParkBoxMgr.isCheckFishIsMove()) {
              EventMgr.inst.event.emit(events.propertyUIShow, PropertyType.forceSelect);
            }
          }, s);
          var arr = s.node.getComponentsInChildren(Widget);
          var len = arr.length;
          for (var i = 0; i < len; i++) {
            var widget = arr[i];
            widget.updateAlignment();
          }
          s.nanduSke.setEndListener(function (track) {
            s.nanduSke.node.active = false;
          });
        }
        /**检查所有鱼是否都完成回收钉子动画 */;
        _proto.checkFishAnima = function checkFishAnima() {
          var fishArr = screwGlobal.carParkBoxMgr.getCarParkFish(8);
          var len = fishArr.length;
          for (var i = 0; i < len; i++) {
            var fish = fishArr[i];
            if (fish.isPlayRecycleScrew) {
              return false;
            }
          }
          return true;
        }

        /**自动上车按钮 */;
        _proto.clickAutoUpBtn = function clickAutoUpBtn() {
          var fishArr = screwGlobal.carParkBoxMgr.getCarParkFish(3);
          if (fishArr.length == 0) {
            return;
          }
          Global.isPlayProper = true;
          EventMgr.inst.event.emit(events.autoGameUIShow);
        };
        _proto.updateAutoUpBtn = function updateAutoUpBtn() {
          var s = this;
          var fishArr = screwGlobal.carParkBoxMgr.getCarParkFish(3);
          var arr = s.autoUpBtn.getComponentsInChildren(Sprite);
          var len = arr.length;
          for (var i = 0; i < len; i++) {
            var sprite = arr[i];
            sprite.grayscale = fishArr.length == 0;
          }
          s.autoUpBtn.getComponent(Button).interactable = fishArr.length > 0;
        };
        /**自动拔钉子 */
        _proto.autoGameFish = function autoGameFish() {
          var s = this;
          // s.notUserClickBg.active = true;
          //首先获取钉子 和空钉子位置
          var fishArr = screwGlobal.carParkBoxMgr.getCarParkFish(3);
          if (fishArr.length == 0) {
            return;
          }
          var obj = screwGlobal.topicBoxMgr.getScrewPosList();
          /**下标 */
          var screwIndex = 0;
          // console.log(obj);
          var len = fishArr.length;
          var count = 1;
          // s.notUserClickBg.active = true;
          s.isAutoUpAnima = true;
          for (var i = 0; i < len; i++) {
            var fish = fishArr[i];
            var fishColor = fish.fishColor;
            while (!fish.isCollectAllScrew()) {
              //显示的木板上有符合条件的钉子，直接拔
              s.animaCount++;
              var screwComp = void 0;
              if (obj.showDist[fishColor] && obj.showDist[fishColor].length > 0) {
                screwComp = obj.showDist[fishColor].shift();
                fish.screwRecycleAnima(screwComp, count * 0.1, null, s.animaEnd, s);
              } else {
                screwComp = obj.notShow[screwIndex];
                if (screwGlobal.colorMgr.checkSumColorTotal(fishColor)) {
                  //先假装使用
                  screwGlobal.colorMgr.addCurUseColorTotal(fishColor);
                } else {
                  //查找notshow中是否有符合条件的钉子
                  var _len2 = obj.notShow.length;
                  for (var _i = 0; _i < _len2; _i++) {
                    if (obj.notShow[_i].screwColor == fishColor) {
                      screwComp = obj.notShow[_i];
                      obj.notShow.splice(_i, 1);
                      break;
                    }
                  }
                  screwComp.useFlag = true;
                }
                fish.screwRecycleAnima(screwComp, count * 0.1, fishColor, s.animaEnd, s);
                screwIndex++;
                if (screwIndex >= obj.notShow.length) {
                  screwIndex = 0;
                }
              }
              count++;
            }
          }
          Global.isPlayProper = false;
        };
        _proto.animaEnd = function animaEnd() {
          var s = this;
          s.animaCount--;
          if (s.animaCount > 0) {
            return;
          }
          s.isAutoUpAnima = false;
          s.notUserClickBg.active = false;
        }

        /**重新换个颜色 */;
        _proto.clickResetColorBtn = function clickResetColorBtn() {
          var s = this;
          var fishList = screwGlobal.carParkBoxMgr.getFishList();
          var len = fishList.length;
          for (var i = 0; i < len; i++) {
            var fish = fishList[i];
            if (fish.fishState == FishState.Move || fish.fishState == FishState.Start) {
              return;
            }
          }
          s.isShowBtn = false;
          s.notUserClickBg.active = true;
          screwGlobal.carParkBoxMgr.moveToChangeColorFish();
        }
        /**插队按钮 */;
        _proto.clickInsertBtn = function clickInsertBtn() {
          var s = this;
          if (screwGlobal.carParkBoxMgr.isCheckFishIsMove()) {
            s.isShowBtn = false;
            s.selectFishCount = 0;
            s.selectFishbg.active = true;
          }
        }
        /**设置按钮 */;
        _proto.clickSettingBtn = function clickSettingBtn() {
          EventMgr.inst.event.emit(events.settingUIShow, settingUIShowType.game);
        };
        _proto.onEnable = function onEnable() {
          var s = this;
          Global.curGameType = GameType.badingzi;
          Global.bdz_gameId++;
          s.levelCount.node.parent.active = Global.curGameMode == GameMode.normal;
          Global.traceMgr.BDZ_reportGameStart(Global.gameLevel);
          screwGlobal.screwCount.node.active = true;
          if (Global.curGameMode == GameMode.yardMode) {
            var lastValue = ResourceManger.instance.lastSceneSaveValue;
            if (lastValue.length > 0 && lastValue[0] > -1) {
              var bundle = assetManager.getBundle("yardRes");
              var bgRes = bundle.get("Image/photo/photo" + lastValue[0] + "/spriteFrame", SpriteFrame);
              s.photoImg.spriteFrame = bgRes;
              s.photoImg.node.active = true;
            } else {
              s.photoImg.node.active = false;
            }
          } else {
            s.photoImg.node.active = false;
          }
          s.selectFishbg.active = false;
          s.curLevelConfIndex = Global.curLevelConfIndex;
          s.gameSceneNewUserTip.active = Global.gameLevel == 1 && Global.isNewUser;
          s.levelCount.string = Global.gameLevel + "";
          setTimeout(function () {
            var conf = ResourceManger.instance.get_json("fishLevel_" + s.curLevelConfIndex);
            screwGlobal.carParkBoxMgr.setConf(conf.childs);
          }, 0);
        }

        /**生成题目 */;
        _proto.resetGame = /*#__PURE__*/
        function () {
          var _resetGame = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var s, conf;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  s = this;
                  conf = ResourceManger.instance.get_json("plankLevel_" + s.curLevelConfIndex);
                  _context.next = 4;
                  return screwGlobal.topicBoxMgr.setConf(conf.plankConf);
                case 4:
                  s.updateAutoUpBtn();
                  s.scheduleOnce(function () {
                    EventMgr.inst.event.emit(events.loadResUIHide);
                    if (Global.gameLevel == 2 || Global.curGameMode == GameMode.yardMode) {
                      _this2.nanduSke.node.active = true;
                      _this2.nanduSke.setAnimation(0, "NanDu", false);
                    }
                  }, 0.5);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function resetGame() {
            return _resetGame.apply(this, arguments);
          }
          return resetGame;
        }() // protected update(dt: number): void {
        //     let str = ` 未使用
        //   蓝色: ${screwGlobal.colorMgr.getSumColor()[FishColor.Blue]},
        //   绿色: ${screwGlobal.colorMgr.getSumColor()[FishColor.Green]},
        //   浅蓝: ${screwGlobal.colorMgr.getSumColor()[FishColor.LightBlue]},
        //   橙色: ${screwGlobal.colorMgr.getSumColor()[FishColor.Orange]},
        //   粉色: ${screwGlobal.colorMgr.getSumColor()[FishColor.Pink]},
        //   紫色: ${screwGlobal.colorMgr.getSumColor()[FishColor.Purple]},
        //   红色: ${screwGlobal.colorMgr.getSumColor()[FishColor.Red]},
        //   黄色: ${screwGlobal.colorMgr.getSumColor()[FishColor.Yellow]},
        //   总数: ${screwGlobal.colorMgr.getSumColorLength()},
        //   正在使用
        //   蓝色: ${screwGlobal.colorMgr.getCurUseColor()[FishColor.Blue]},
        //   绿色: ${screwGlobal.colorMgr.getCurUseColor()[FishColor.Green]},
        //   浅蓝: ${screwGlobal.colorMgr.getCurUseColor()[FishColor.LightBlue]},
        //   橙色: ${screwGlobal.colorMgr.getCurUseColor()[FishColor.Orange]},
        //   粉色: ${screwGlobal.colorMgr.getCurUseColor()[FishColor.Pink]},
        //   紫色: ${screwGlobal.colorMgr.getCurUseColor()[FishColor.Purple]},
        //   红色: ${screwGlobal.colorMgr.getCurUseColor()[FishColor.Red]},
        //   黄色: ${screwGlobal.colorMgr.getCurUseColor()[FishColor.Yellow]},
        //   总数: ${screwGlobal.colorMgr.getCurUseColorLength()},
        //   已回收
        //   蓝色: ${screwGlobal.colorMgr.getRecycleColor()[FishColor.Blue]},
        //   绿色: ${screwGlobal.colorMgr.getRecycleColor()[FishColor.Green]},
        //   浅蓝: ${screwGlobal.colorMgr.getRecycleColor()[FishColor.LightBlue]},
        //   橙色: ${screwGlobal.colorMgr.getRecycleColor()[FishColor.Orange]},
        //   粉色: ${screwGlobal.colorMgr.getRecycleColor()[FishColor.Pink]},
        //   紫色: ${screwGlobal.colorMgr.getRecycleColor()[FishColor.Purple]},
        //   红色: ${screwGlobal.colorMgr.getRecycleColor()[FishColor.Red]},
        //   黄色: ${screwGlobal.colorMgr.getRecycleColor()[FishColor.Yellow]},
        //   总数: ${screwGlobal.colorMgr.getRecycleColorLength()},
        // `
        //     this.debugLabel.string = str;
        // }
        ;

        _createClass(GameScene, [{
          key: "isShowBtn",
          get: /**是否显示按钮 */
          function get() {
            return this._isShowBtn;
          },
          set: function set(value) {
            this._isShowBtn = value;
            this.btnGroup.active = value;
          }
        }]);
        return GameScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "settingBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "autoUpBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "resetColorBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "insertBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "selectFishbg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "notUserClickBg", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "photoImg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnGroup", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nanduSke", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "debugLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "gameSceneNewUserTip", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "levelCount", [_dec13], {
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

System.register("chunks:///_virtual/gameSceneNewUserTipUi.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './blackMask.ts', './screwGlobal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, UITransform, Component, blackMask, screwGlobal;
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
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      blackMask = module.blackMask;
    }, function (module) {
      screwGlobal = module.screwGlobal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "bca0aLWe2ROjIgNp63SaJsp", "gameSceneNewUserTipUi", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var gameSceneNewUserTipUi = exports('gameSceneNewUserTipUi', (_dec = ccclass("gameSceneNewUserTipUi"), _dec2 = property([Node]), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(blackMask), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(gameSceneNewUserTipUi, _Component);
        function gameSceneNewUserTipUi() {
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
          _this.animaCount = 0;
          return _this;
        }
        var _proto = gameSceneNewUserTipUi.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.blackMask.node.on(Node.EventType.TOUCH_END, s.onNext, s);
          s.clickNode.on(Node.EventType.TOUCH_END, s.onNext, s);
          s.handMoveNode.active = false;
          s.stepCount = 0;
        };
        _proto.onEnable = function onEnable() {
          var s = this;
          var arr = s.node.parent.getComponentsInChildren(Widget);
          for (var i = 0; i < arr.length; i++) {
            arr[i].enabled = true;
            arr[i].updateAlignment();
          }
          s.stepCount = 0;
          s.animaCount = 0;
          s.onNext();
        };
        _proto.onNext = function onNext() {
          var s = this;
          s.stepCount++;
          switch (s.stepCount) {
            case 1:
              s.handMoveNode.active = false;
              s.blackMask.node.active = true;
              s.showDialog(0);
              break;
            case 2:
              var fishNode = screwGlobal.carParkBoxMgr.getFishList()[0];
              var pos = fishNode.node.getWorldPosition();
              var uiPos = s.blackMask.getComponent(UITransform).convertToNodeSpaceAR(pos);
              s.blackMask.setPosi(uiPos.x, uiPos.y, 120, 120);
              s.showDialog(1);
              break;
            case 3:
              var fishClickNode = screwGlobal.carParkBoxMgr.getFishList()[0];
              fishClickNode.handleClick();
              var shitou = screwGlobal.carParkBoxMgr.carParkList[0];
              var shitouPos = shitou.node.getWorldPosition();
              var shitouUiPos = s.blackMask.getComponent(UITransform).convertToNodeSpaceAR(shitouPos);
              s.blackMask.setPosi(shitouUiPos.x, shitouUiPos.y, 130, 130);
              s.showDialog(2);
              break;
            case 4:
              s.blackMask.node.active = false;
              s.handMoveNode.active = true;
              s.showDialog(3);
              s.doPlayAnima();
              break;
            case 5:
              var fish = screwGlobal.carParkBoxMgr.getFishList()[s.animaCount];
              fish.handleClick();
              s.node.active = false;
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
        _proto.doPlayAnima = function doPlayAnima() {
          var s = this;
          s.animaCount++;
          if (s.animaCount >= s.dialogNode.length) {
            return;
          }
          var fish = screwGlobal.carParkBoxMgr.getFishList()[s.animaCount];
          var pos = fish.node.getWorldPosition();
          s.handMoveNode.setWorldPosition(pos);
        };
        return gameSceneNewUserTipUi;
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

System.register("chunks:///_virtual/hole.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, RigidBody2D, HingeJoint2D, DistanceJoint2D, FixedJoint2D, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RigidBody2D = module.RigidBody2D;
      HingeJoint2D = module.HingeJoint2D;
      DistanceJoint2D = module.DistanceJoint2D;
      FixedJoint2D = module.FixedJoint2D;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "646b6yln7dFOrZjAMldU7Rv", "hole", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var hole = exports('hole', (_dec = ccclass("hole"), _dec2 = property({
        type: RigidBody2D
      }), _dec3 = property({
        type: HingeJoint2D
      }), _dec4 = property({
        type: DistanceJoint2D
      }), _dec5 = property({
        type: FixedJoint2D
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(hole, _Component);
        function hole() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rigidBody", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hinge", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "distance", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fixed", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = hole.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          // 获取刚体组件
          s.rigidBody = s.getComponent(RigidBody2D);
          // s.hinge = s.node.getComponent(HingeJoint2D);
          // s.fixed = s.node.getComponent(FixedJoint2D);
        }

        /**绑定链条 和更新坐标 */;
        _proto.bindHingeJoint2D = function bindHingeJoint2D(rigidBody, x, y) {
          var s = this;
          if (rigidBody) {
            s.hinge.connectedBody = rigidBody;
            s.rigidBody.group = rigidBody.group;
            s.rigidBody.wakeUp();
          }
          s.hinge.connectedAnchor.set(x, y);
          s.hinge.enabled = true;
          s.hinge.apply();
        };
        _proto.update = function update(dt) {
          var s = this;
          s.hinge.apply();
        };
        return hole;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rigidBody", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hinge", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "distance", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fixed", [_dec5], {
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

System.register("chunks:///_virtual/holeImg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "737188BrqxIpZKhcuLQgx9J", "holeImg", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var holeImg = exports('holeImg', (_dec = ccclass("holeImg"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(holeImg, _Component);
        function holeImg() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = holeImg.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return holeImg;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/plankGroup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './basePlank.ts', './screwGlobal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Color, instantiate, Component, basePlank, screwGlobal;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Color = module.Color;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      basePlank = module.basePlank;
    }, function (module) {
      screwGlobal = module.screwGlobal;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "61ceau3oSRPJI4Juael37ZK", "plankGroup", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var plankGroup = exports('plankGroup', (_dec = ccclass("plankGroup"), _dec2 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(plankGroup, _Component);
        function plankGroup() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "copyPlank", _descriptor, _assertThisInitialized(_this));
          /**碰撞分组 */
          _this._hitGroud = 0;
          /**木板组配置 */
          _this.conf = [];
          /**木板列表 */
          _this.plankList = [];
          _this.plankPool = [];
          _this.maskColor_ind_1 = new Color(147, 126, 108, 204);
          _this.maskColor_ind_2 = new Color(132, 83, 61, 255);
          _this.maskColor_ind_3 = new Color(109, 109, 109, 153);
          /**是否显示蒙层 */
          _this.isMaskActive = null;
          return _this;
        }
        var _proto = plankGroup.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.plankPool = s.node.getComponentsInChildren(basePlank);
        }

        /**设置木板组配置 */;
        _proto.setConf = /*#__PURE__*/
        function () {
          var _setConf = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(conf) {
            var s;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  s = this;
                  s.conf = conf;
                  s.plankList.length = 0;
                  _context.next = 5;
                  return s.frameCreatePlank();
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function setConf(_x) {
            return _setConf.apply(this, arguments);
          }
          return setConf;
        }() /**单个分帧加载 */;
        _proto.frameCreatePlank = /*#__PURE__*/
        function () {
          var _frameCreatePlank = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var s, len, i, conf;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  s = this;
                  len = s.conf.length;
                  i = 0;
                case 3:
                  if (!(i < len)) {
                    _context2.next = 11;
                    break;
                  }
                  conf = s.conf[i];
                  if (!(screwGlobal.colorMgr.getSumColorLength() <= 0)) {
                    _context2.next = 7;
                    break;
                  }
                  return _context2.abrupt("break", 11);
                case 7:
                  s.createPlank(conf);
                case 8:
                  i++;
                  _context2.next = 3;
                  break;
                case 11:
                  if (s.plankList.length <= 0) {
                    s.node.active = false;
                  } else {
                    s.checkAllPlank();
                  }

                // let conf = s.conf[s.plankList.length];
                // if (screwGlobal.colorMgr.getSumColorLength() > 0 && conf != null) {
                //     s.createPlank(conf);
                //     s.frameCreatePlank();
                // } else {
                //     if (s.plankList.length <= 0) {
                //         s.node.active = false;
                //     } else {
                //         s.checkAllPlank();
                //     }
                // }
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function frameCreatePlank() {
            return _frameCreatePlank.apply(this, arguments);
          }
          return frameCreatePlank;
        }() /**创建木板 */;
        _proto.createPlank = function createPlank(conf) {
          var s = this;
          try {
            var node = instantiate(s.copyPlank);
            node.setScale(conf.scaleX, conf.scaleY);
            s.node.addChild(node);
            var plankComp = node.getComponent(basePlank);
            plankComp.changePhysicsGroup(s.hitGroud);
            plankComp.setPlankConf(conf, s);
            plankComp.node.active = true;
            plankComp.node.name = s.node.name + "_" + s.plankList.length;
            s.plankList.push(plankComp);
          } catch (e) {
            console.error("手动抛出", e);
          }
        }

        /**重置所有木板配置 */;
        _proto.resetAllPlank = function resetAllPlank() {
          var s = this;
          var arr = s.plankList;
          var len = arr.length;
          for (var i = 0; i < len; i++) {
            arr[i].resetConf();
          }
        };
        /** 根据木板位置 刷新更新木板显示 */
        _proto.updataShowPlank = function updataShowPlank() {
          var s = this;
          var ind = s.node.getSiblingIndex();
          // console.log(s.node.name + " : " + ind);

          if (ind < 3) {
            s.setMaskActive(true);
          } else {
            s.setMaskActive(false);
          }
          s.setColorMask();
        }

        /**设置蒙层的颜色 */;
        _proto.setColorMask = function setColorMask() {
          var s = this;
          var ind = s.node.getSiblingIndex();
          var color = Color.WHITE;
          if (ind == 0) {
            color = s.maskColor_ind_1;
          } else if (ind == 1) {
            color = s.maskColor_ind_2;
          } else if (ind == 2) {
            color = s.maskColor_ind_3;
          }
          var len = s.plankList.length;
          for (var i = 0; i < len; i++) {
            s.plankList[i].setColorMask(color);
          }
        };
        /**设置蒙层是否显示 */
        _proto.setMaskActive = function setMaskActive(isShow) {
          var s = this;
          s.isMaskActive = isShow;

          //如果隐藏遮盖 则需要将钉子上色
          var len = s.plankList.length;
          for (var i = 0; i < len; i++) {
            s.plankList[i].setMaskActive(isShow);
          }
        }
        /**给所有板子钉子上色 */
        // private setScrewColor() {
        //     let s = this;
        //     let len = s.plankList.length;
        //     for (let i = 0; i < len; i++) {
        //         s.plankList[i].setScrewColor();
        //     }
        // }

        /**检测钉子是否可以使用 */;
        _proto.checkScrewIsAvailable = function checkScrewIsAvailable() {
          var s = this;
          var len = s.plankList.length;
          for (var i = 0; i < len; i++) {
            if (!s.plankList[i].node.active) {
              continue;
            }
            s.plankList[i].checkScrewIsAvailable();
          }
        }

        /**检查所有板子 是否都隐藏了 */;
        _proto.checkAllPlank = function checkAllPlank() {
          var s = this;
          var len = s.plankList.length;
          for (var i = 0; i < len; i++) {
            if (!s.plankList[i].node.active) {
              // 删掉i
              s.plankList.splice(i, 1);
              i--;
              len--;
            }
          }
          if (s.plankList.length <= 0) {
            screwGlobal.topicBoxMgr.movePlankGroup(s);
            return true;
          } else {
            return false;
          }
        }
        /**获取所有钉子 */;
        _proto.getScrewList = function getScrewList() {
          var s = this;
          var len = s.plankList.length;
          var screwList = [];
          for (var i = 0; i < len; i++) {
            screwList.push.apply(screwList, s.plankList[i].getScrewList());
          }
          return screwList;
        };
        _createClass(plankGroup, [{
          key: "hitGroud",
          get: /**碰撞分组 */
          function get() {
            return this._hitGroud;
          },
          set: function set(value) {
            this._hitGroud = value;
          }
        }]);
        return plankGroup;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "copyPlank", [_dec2], {
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

System.register("chunks:///_virtual/screw.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enums.ts', './textDraw.ts', './Global.ts', './HitPolygon.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, SpriteFrame, Sprite, v3, UITransform, PhysicsSystem2D, PolygonCollider2D, RigidBody2D, tween, Component, FishColor, Global, HitPolygon;
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
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      v3 = module.v3;
      UITransform = module.UITransform;
      PhysicsSystem2D = module.PhysicsSystem2D;
      PolygonCollider2D = module.PolygonCollider2D;
      RigidBody2D = module.RigidBody2D;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      FishColor = module.FishColor;
    }, null, function (module) {
      Global = module.Global;
    }, function (module) {
      HitPolygon = module.HitPolygon;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "eb61ckHWYFNwpP6M1UREZVJ", "screw", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var screw = exports('screw', (_dec = ccclass("screw"), _dec2 = property([SpriteFrame]), _dec3 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(screw, _Component);
        function screw() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "colorList", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showSpr", _descriptor2, _assertThisInitialized(_this));
          /**绑定孔 */
          _this.bindHole = null;
          /**绑定板子 */
          _this.bindPlank = null;
          // /**碰撞检测点 */
          _this.checkPoint = [v3(-10, 6, 0), v3(6, 9, 0), v3(9, -7, 0), v3(-8, -9, 0)];
          /**碰撞检测点 */
          // private checkPoint: Vec3[] = [v3(-16, -3.5, 0), v3(-2.4, 16.3, 0), v3(14.2, -2.5, 0), v3(-1.1, -12.8, 0)];
          /**设置钉子颜色 */
          _this._screwColor = FishColor.Blue;
          /**钉子是否被使用 */
          _this._useFlag = false;
          _this._moveTween = null;
          _this.byMove = v3(0, 40);
          _this.byScale = v3(0.15, 0.15);
          return _this;
        }
        var _proto = screw.prototype;
        _proto.onLoad = function onLoad() {

          // let uit = s.node.getComponent(UITransform);
          // let len = s.checkPoint.length;
          // for (let i = 0; i < len; i += 2) {
          //     let pointX = s.checkPoint[i];
          //     let pointY = s.checkPoint[i + 1];
          //     s.checkWorldPoint.push(uit.convertToWorldSpaceAR(new Vec3(pointX, pointY, 0)));
          // }
        }

        /** 判断钉子是否可用 */;
        _proto.checkIsAvailable = function checkIsAvailable() {
          var s = this;

          //使用物理的矩形判断，判断节点碰撞到了那些矩形
          // 获取节点的 UITransform 组件
          var uiTransform = s.node.getComponent(UITransform);
          // // 获取节点的世界矩形范围
          var rect = uiTransform.getBoundingBoxToWorld();
          var colliderList = PhysicsSystem2D.instance.testAABB(rect);

          // console.log("碰撞到的节点", colliderList);
          var len = colliderList.length;
          for (var i = 0; i < len; i++) {
            var collider = colliderList[i];
            var order = Global.compareNodeOrder(s.node, collider.node);
            if (order != 1) {
              var polygonCollider = collider.node.getComponent(PolygonCollider2D);
              if (polygonCollider && s.checkPointInPolygon(s.checkPoint, polygonCollider)) {
                return;
              }
            }
          }
          // drawRect();
          screwGlobal.topicBoxMgr.availableScrew.push(s);
        }

        /**判断点在多边形内 */;
        _proto.checkPointInPolygon = function checkPointInPolygon(pointAarr, collider) {
          var s = this;
          var uiTransform = s.node.getComponent(UITransform);
          var pointLen = pointAarr.length;
          var tempVec2List = [];
          tempVec2List.length = 0;
          tempVec2List.push.apply(tempVec2List, collider.worldPoints);
          var tempPoint = v3(0, 0, 0);
          for (var k = 0; k < pointLen; k++) {
            uiTransform.convertToWorldSpaceAR(pointAarr[k], tempPoint);
            if (HitPolygon.PointInPolygon(tempPoint, tempVec2List, tempVec2List.length)) {
              if (!Global.isChildOf(s.node, collider.node)) {
                return true;
              } else {
                return false;
              }
            }
          }
          return false;
        }

        /**设置碰撞分组 */;
        _proto.setColliderGroup = function setColliderGroup(group) {
          var s = this;
          var rigidBody2D = s.node.getComponent(RigidBody2D);
          rigidBody2D.group = group;
        };
        _proto.onDisable = function onDisable() {};
        _proto.onEnable = function onEnable() {
          var s = this;
          s.useFlag = false;
        }

        /**隐藏钉子 */;
        _proto.hideScrew = function hideScrew() {
          var s = this;
          if (s.bindHole) s.bindHole.node.active = false;
          s.node.active = false;
          s.bindPlank.noticePlank();
        };
        /**复制钉子信息 */
        _proto.copyScrewInfo = function copyScrewInfo(screwComp) {
          var s = this;
          screwComp.screwColor = s.screwColor;
        };
        /**移动到指定位置 */
        _proto.goToHere = function goToHere(fromWorldPos, toPos, fromWorldScale, toScale, time, delay, CallStartFunc, CallEndFunc, thisObj) {
          if (delay === void 0) {
            delay = 0;
          }
          if (CallStartFunc === void 0) {
            CallStartFunc = null;
          }
          if (CallEndFunc === void 0) {
            CallEndFunc = null;
          }
          if (thisObj === void 0) {
            thisObj = null;
          }
          var s = this;
          if (s._moveTween) {
            s._moveTween.stop();
            s._moveTween = null;
          }
          s.node.setWorldPosition(fromWorldPos);
          s.node.setWorldScale(fromWorldScale);
          // console.log("goToHere", fromWorldPos, toPos, fromWorldScale, toScale, time, delay);

          //动画先向上放大，然后移动到指定位置 都是先慢后快
          s._moveTween = tween(s.node).delay(delay).call(function () {
            CallStartFunc && CallStartFunc.call(thisObj);
          }).by(0.2, {
            position: s.byMove,
            scale: s.byScale
          }, {
            easing: "sineIn"
          }).delay(0.1).to(time, {
            position: toPos,
            scale: toScale
          }).call(function () {
            CallEndFunc && CallEndFunc.call(thisObj);
          }).start();
        };
        _createClass(screw, [{
          key: "screwColor",
          get: /**设置钉子颜色 */
          function get() {
            return this._screwColor;
          },
          set: function set(value) {
            this._screwColor = value;
            if (this.showSpr) {
              this.showSpr.spriteFrame = this.colorList[value - 1];
            }
          }
        }, {
          key: "useFlag",
          get: function get() {
            return this._useFlag;
          },
          set: /**钉子是否被使用 */
          function set(v) {
            this._useFlag = v;
          }
        }]);
        return screw;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "colorList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "showSpr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/screwCount.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './screwGlobal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Component, screwGlobal;
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
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      screwGlobal = module.screwGlobal;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "7dfc18+EZVBs6koLsU8C6fK", "screwCount", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var screwCount = exports('screwCount', (_dec = ccclass("screwCount"), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(screwCount, _Component);
        function screwCount() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          /**设置钉子数量 */
          _this._count = 0;
          return _this;
        }
        var _proto = screwCount.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          screwGlobal.screwCount = s;
        };
        _createClass(screwCount, [{
          key: "count",
          get: function get() {
            return this._count;
          }
          /**设置钉子数量 */,
          set: function set(value) {
            this._count = value;
            this.label.string = this._count + "";
          }
        }]);
        return screwCount;
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

System.register("chunks:///_virtual/screwGlobal.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ColorManagr.ts', './Enums.ts'], function (exports) {
  var _createClass, cclegacy, sys, ColorManagr, GameMode, GameType;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      ColorManagr = module.ColorManagr;
    }, function (module) {
      GameMode = module.GameMode;
      GameType = module.GameType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "99b93lFAChFeINYn2ddGJ7G", "screwGlobal", undefined);
      var screwGlobal = exports('screwGlobal', /*#__PURE__*/function () {
        function screwGlobal() {}
        _createClass(screwGlobal, null, [{
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
            if (screwGlobal.gameLevel <= 11) {
              return screwGlobal.gameLevel;
            } else {
              return screwGlobal.conf[screwGlobal.gameLevel % screwGlobal.conf.length];
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

          /**最大的角色数 */,
          set: function set(list) {
            if (list.length == 0) {
              for (var i = 0; i < 400; i++) {
                list.push(1);
              }
            }
            sys.localStorage.setItem("puzzlePositionList", JSON.stringify(list));
          }
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
              for (var i = 0; i < screwGlobal.maxRoleCount; i++) {
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
              for (var i = 0; i < screwGlobal.maxPhotoCount; i++) {
                list.push(0);
              }
            }
            return list;
          }

          /**设置明信片状态 */,
          set: function set(list) {
            sys.localStorage.setItem("postcardState", JSON.stringify(list));
          }
        }]);
        return screwGlobal;
      }());
      /**钉子数量 */
      screwGlobal.screwCount = void 0;
      /**停车场管理器 */
      screwGlobal.carParkBoxMgr = void 0;
      /**题目管理器 */
      screwGlobal.topicBoxMgr = void 0;
      /**游戏管理器 */
      screwGlobal.gameMgr = void 0;
      /**颜色管理器 */
      screwGlobal.colorMgr = new ColorManagr();
      /** 测试 统计数量 */
      screwGlobal.textCount = 0;
      ///测试绘图
      screwGlobal.debugGraphics = void 0;
      // /**进入 前一个 场景的场景名 */
      // static beforeSceneName: string = "";
      /** 游戏模式 */
      screwGlobal.curGameMode = GameMode.normal;
      /** 游戏类型 */
      screwGlobal.curGameType = GameType.badingzi;
      /**是否打开了设置界面 */
      screwGlobal.isOpenSetting = false;
      /**是否准备使用道具 */
      screwGlobal.isUserProper = false;
      /**是否在播放广告视频 */
      screwGlobal.isPlayAd = false;
      /**是否在播放道具动画 */
      screwGlobal.isPlayProper = false;
      screwGlobal.conf = [7, 4, 11, 2, 9, 4, 3, 10, 8, 5, 6, 10, 2, 9, 4, 2, 11, 7, 3, 8, 5, 10, 6, 2, 9, 4, 5, 11, 7, 3, 8, 10, 5, 6, 2, 9, 4, 6, 7, 3, 8, 11, 5, 10, 6, 2, 9, 4, 5, 7, 11, 3, 8, 10, 5, 6];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/screwRes", ['./GameScene.ts', './autoAriverAI.ts', './autoGameUI.ts', './basePlank.ts', './carParkBoxManagr.ts', './fish.ts', './gameSceneNewUserTipUi.ts', './hole.ts', './holeImg.ts', './plankGroup.ts', './screw.ts', './screwCount.ts', './screwGlobal.ts', './shitou.ts', './textDraw.ts', './textLevel.ts', './topicBoxManagr.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/shitou.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Global.ts', './ThirdPartyManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Color, Sprite, Component, Global, ThirdPartyManager;
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
      Component = module.Component;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      ThirdPartyManager = module.ThirdPartyManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "663924GM41JRY89Xghj3vna", "shitou", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**解锁条件 */
      var UnlockType = exports('UnlockType', /*#__PURE__*/function (UnlockType) {
        UnlockType[UnlockType["None"] = 0] = "None";
        UnlockType[UnlockType["Video"] = 1] = "Video";
        UnlockType[UnlockType["Share"] = 2] = "Share";
        return UnlockType;
      }({}));
      var shitou = exports('shitou', (_dec = ccclass("shitou"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(shitou, _Component);
        function shitou() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**是否可使用 */
          _this._isUser = void 0;
          /**需要看视频的时候颜色 */
          _this.videoColor = new Color(112, 112, 112);
          _initializerDefineProperty(_this, "videoIcon", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shareIcon", _descriptor2, _assertThisInitialized(_this));
          /**锁类型 */
          _this._lockType = void 0;
          // private onPlayAdSuccess(): void {
          //     let s = this;
          //     // s.isUser = true;
          //     screwGlobal.carParkBoxMgr.openCarPark(s.isUser);
          // }
          _this.videoSuccessCall = void 0;
          _this.videoSuccessThis = void 0;
          return _this;
        }
        var _proto = shitou.prototype;
        _proto.onTouchEnd = function onTouchEnd() {
          var s = this;
          if (s.isUser == UnlockType.Share) {
            //分享
            ThirdPartyManager.instance.shareAppMessage(s.onPlayAdSuccess, s);
          } else {
            if (Global.videoCount > 0) {
              //播放奖励
              s.onPlayAdSuccess();
              Global.videoCount -= 1;
            } else {
              //播放奖励
              Global.videoADMgr.showVideo(s.onPlayAdSuccess, s, s.onPlayAdError);
            }
          }
        };
        /**设置视频成功回调 */
        _proto.setVideoSuccessCall = function setVideoSuccessCall(call, thisObj) {
          var s = this;
          s.videoSuccessCall = call;
          s.videoSuccessThis = thisObj;
        };
        _proto.onPlayAdSuccess = function onPlayAdSuccess() {
          var s = this;
          if (s.videoSuccessCall) {
            s.videoSuccessCall.call(s.videoSuccessThis);
          }
        };
        _proto.onPlayAdError = function onPlayAdError() {};
        _createClass(shitou, [{
          key: "lockType",
          get: /**锁类型 */
          function get() {
            return this._lockType;
          },
          set: function set(value) {
            var s = this;
            s._lockType = value;
          }

          /**是否可使用 */
        }, {
          key: "isUser",
          get: function get() {
            return this._isUser;
          }

          /**是否可使用 */,
          set: function set(value) {
            var s = this;
            s._isUser = value;
            var spr = s.node.getComponent(Sprite);
            s.videoIcon.active = value == UnlockType.Video;
            s.shareIcon.active = value == UnlockType.Share;
            if (value == UnlockType.None) {
              spr.color = Color.WHITE;
              s.node.off(Node.EventType.TOUCH_END, s.onTouchEnd, s);
            } else {
              spr.color = s.videoColor;
              s.node.on(Node.EventType.TOUCH_END, s.onTouchEnd, s);
            }
          }
        }]);
        return shitou;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "videoIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shareIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/textDraw.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Global.ts', './screwGlobal.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Graphics, UITransform, Component, Global, screwGlobal;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Graphics = module.Graphics;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      Global = module.Global;
    }, function (module) {
      screwGlobal = module.screwGlobal;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "86667ZkiPZOZJ4NhwBDdKgS", "textDraw", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var textDraw = exports('textDraw', (_dec = ccclass("textDraw"), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(textDraw, _Component);
        function textDraw() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.g = void 0;
          return _this;
        }
        var _proto = textDraw.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.g = s.node.getComponent(Graphics);
          screwGlobal.debugGraphics = s.g;
          textDraw.inst = s;
        }

        /**清空画布 */;
        _proto.clear = function clear() {
          var s = this;
          if (!Global.debugMode && 1) return;
          s.g.clear();
        }

        /**画线段 */;
        _proto.drawLine = function drawLine(start, end, color) {
          var s = this;
          if (!Global.debugMode || 1) return;

          // 将世界坐标转换为UI坐标
          var startUi = s.node.getComponent(UITransform).convertToNodeSpaceAR(start);
          var endUi = s.node.getComponent(UITransform).convertToNodeSpaceAR(end);
          s.g.strokeColor = color;
          s.g.lineWidth = 4;
          s.g.moveTo(startUi.x, startUi.y);
          s.g.lineTo(endUi.x, endUi.y);
          s.g.stroke();
        };
        return textDraw;
      }(Component), _class2.inst = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/textLevel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './fish.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, CCBoolean, Component, fish;
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
    }, function (module) {
      fish = module.fish;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a16edOA7q1HjZj1MqggOPYa", "textLevel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var textLevel = exports('textLevel', (_dec = ccclass("textLevel"), _dec2 = property({
        displayName: "更新所有子节点",
        type: CCBoolean,
        tooltip: "点击更新所有子节点"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(textLevel, _Component);
        function textLevel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // 添加编辑器按钮
          _initializerDefineProperty(_this, "_dummy", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = textLevel.prototype;
        _proto.updateAllChildren = function updateAllChildren() {
          // 遍历所有子节点
          var arr = this.node.getComponentsInChildren(fish);
          console.log("arr", arr);
        };
        _createClass(textLevel, [{
          key: "dummy",
          get: function get() {
            return this._dummy;
          },
          set: function set(value) {
            if (value) {
              this.updateAllChildren();
            }
            this._dummy = false;
          }
        }]);
        return textLevel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_dummy", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "dummy", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "dummy"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/topicBoxManagr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './basePlank.ts', './plankGroup.ts', './screwGlobal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, RigidBody2D, ERigidBody2DType, Component, basePlank, plankGroup, screwGlobal;
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
      RigidBody2D = module.RigidBody2D;
      ERigidBody2DType = module.ERigidBody2DType;
      Component = module.Component;
    }, function (module) {
      basePlank = module.basePlank;
    }, function (module) {
      plankGroup = module.plankGroup;
    }, function (module) {
      screwGlobal = module.screwGlobal;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "973357B3/VBcqsaMGFTiz8h", "topicBoxManagr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var topicBoxManagr = exports('topicBoxManagr', (_dec = ccclass("topicBoxManagr"), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(topicBoxManagr, _Component);
        function topicBoxManagr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          /**题目节点 */
          _this.topic = void 0;
          /**板子池 用于复用 */
          _this.plankPool = [];
          /**钉子池 */
          _this.screwPool = [];
          /**钉子配置 */
          _this.conf = [];
          /**当前使用板子组 */
          _this.PG_NodeList = [];
          /**当前题目索引 */
          _this.curTopicIndex = 0;
          _this.frameCount = 6;
          /**可用的钉子 */
          _this.availableScrew = [];
          _this.updataAvailableScrewCount = 0;
          _this.isUpdataAvailableScrew = false;
          return _this;
        }
        var _proto = topicBoxManagr.prototype;
        _proto.onLoad = function onLoad() {
          var s = this;
          s.topic = s.content.getChildByName("checkpoint_1");
          screwGlobal.topicBoxMgr = s;
          s.PG_NodeList = s.content.getComponentsInChildren(plankGroup);
          s.plankPool = s.content.getComponentsInChildren(basePlank);
          var len = s.PG_NodeList.length;
          for (var i = 0; i < len; i++) {
            var PG = s.PG_NodeList[i];
            PG.hitGroud = 4 << i;
          }
        };
        _proto.start = function start() {};
        /**设置题目配置 */
        _proto.setConf = /*#__PURE__*/
        function () {
          var _setConf = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(conf) {
            var s;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  s = this;
                  s.conf = conf;
                  s.curTopicIndex = conf.length;
                  //重置一下游戏场景
                  s.frameCount = s.PG_NodeList.length;
                  s.frameSetConfPlank();
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function setConf(_x) {
            return _setConf.apply(this, arguments);
          }
          return setConf;
        }();
        /**单个分帧加载 */
        _proto.frameSetConfPlank = /*#__PURE__*/
        function () {
          var _frameSetConfPlank = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var s, PG;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  s = this;
                  s.frameCount--;
                  if (!(s.frameCount < 0)) {
                    _context2.next = 5;
                    break;
                  }
                  s.frameSetConfPlankEnd();
                  return _context2.abrupt("return");
                case 5:
                  PG = s.PG_NodeList[s.frameCount];
                  PG.node.setSiblingIndex(s.frameCount);
                  if (s.curTopicIndex - 1 >= 0) {
                    PG.node.active = true;
                    PG.setConf(s.getTopicConf());
                  } else {
                    PG.node.active = false;
                  }
                  setTimeout(function () {
                    s.frameSetConfPlank();
                  }, 0);
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function frameSetConfPlank() {
            return _frameSetConfPlank.apply(this, arguments);
          }
          return frameSetConfPlank;
        }();
        _proto.frameSetConfPlankEnd = /*#__PURE__*/function () {
          var _frameSetConfPlankEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var s;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  s = this;
                  s.isUpdataAvailableScrew = true;
                  s.movePlankGroup(null);
                case 3:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function frameSetConfPlankEnd() {
            return _frameSetConfPlankEnd.apply(this, arguments);
          }
          return frameSetConfPlankEnd;
        }() /**获取题目配置 */;
        _proto.getTopicConf = function getTopicConf() {
          var s = this;
          // s.curTopicIndex = (s.curTopicIndex - 1 + s.conf.length) % s.conf.length;
          s.curTopicIndex = s.curTopicIndex - 1;
          return s.conf[s.curTopicIndex];
        }
        /**调整板子组顺序 */;
        _proto.movePlankGroup = function movePlankGroup(_movePlankGroup) {
          var s = this;
          if (_movePlankGroup) {
            _movePlankGroup.node.setSiblingIndex(0);
            if (s.curTopicIndex - 1 >= 0) {
              _movePlankGroup.setConf(s.getTopicConf());
            }
          }
          var len = s.PG_NodeList.length;
          for (var i = 0; i < len; i++) {
            s.PG_NodeList[i].updataShowPlank();
          }
          s.isUpdataAvailableScrew = true;
        };
        /**更新可用的钉子 */
        _proto.updataAvailableScrew = function updataAvailableScrew() {
          var s = this;
          // console.log("更新可用的钉子次数", s.updataAvailableScrewCount++);

          // textDraw.inst.clear();
          s.availableScrew.length = 0;
          var arr = s.PG_NodeList;
          var len = arr.length;
          for (var i = 0; i < len; i++) {
            var PG = arr[i];
            if (PG.isMaskActive || !PG.node.active) {
              continue;
            }
            PG.checkScrewIsAvailable();
          }
          // console.log("可用的钉子", s.availableScrew);
          s.recycleScrew();
        }

        /**获取所有的木板钉子孔位 */;
        _proto.getScrewPosList = function getScrewPosList() {
          var s = this;
          var arr = s.PG_NodeList;
          var len = arr.length;
          var notShowScrewList = [];
          var dist = {};
          for (var i = 0; i < len; i++) {
            var PG = arr[i];
            var screws = PG.getScrewList();
            // allScrewList.push(...screws);

            if (PG.isMaskActive) {
              //不显示的木板，获取钉子孔位
              notShowScrewList.push.apply(notShowScrewList, screws);
            } else {
              var screwsLen = screws.length;
              for (var j = 0; j < screwsLen; j++) {
                var _screw = screws[j];
                if (_screw.useFlag) {
                  continue;
                }
                if (dist[_screw.screwColor] == null) {
                  dist[_screw.screwColor] = [];
                }
                dist[_screw.screwColor].push(_screw);
              }
            }
          }
          return {
            showDist: dist,
            notShow: notShowScrewList
          };
        };
        _proto.update = function update(dt) {
          var s = this;
          if (s.isUpdataAvailableScrew) {
            s.updataAvailableScrew();
            s.isUpdataAvailableScrew = false;
          }
        }
        /**检查木板是否在运动 */;
        _proto.getCheckAllPlank = function getCheckAllPlank() {
          var s = this;
          var arr = s.content.getComponentsInChildren(basePlank);
          var len = arr.length;
          for (var i = 0; i < len; i++) {
            var plank = arr[i];
            var body = plank.node.getComponent(RigidBody2D);
            if (body.type == ERigidBody2DType.Dynamic) {
              if (plank.getLastStatus(true)) {
                return true;
              }
            }
          }
          return false;
        }

        /**回收钉子 */;
        _proto.recycleScrew = function recycleScrew() {
          screwGlobal.carParkBoxMgr.recycleCarParkFishScrew();
        };
        return topicBoxManagr;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/screwRes', 'chunks:///_virtual/screwRes'); 
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