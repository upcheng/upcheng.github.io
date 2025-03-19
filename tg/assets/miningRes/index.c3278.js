System.register("chunks:///_virtual/miningRes",["./miningScene.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/miningScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enums.ts","./EventManger.ts","./ResourceManger.ts"],(function(n){var e,t,i,a,o,r,c,u,l,s,p;return{setters:[function(n){e=n.applyDecoratedDescriptor,t=n.inheritsLoose,i=n.initializerDefineProperty,a=n.assertThisInitialized},function(n){o=n.cclegacy,r=n._decorator,c=n.Node,u=n.Component},function(n){l=n.events},function(n){s=n.default},function(n){p=n.default}],execute:function(){var f,m,B,b,y,g,v,d,G;o._RF.push({},"6bb3dbjw6lH6a2K4tlpmFG0","miningScene",void 0);var E=r.ccclass,h=r.property;n("miningScene",(f=E("miningScene"),m=h(c),B=h(c),b=h(c),f((v=e((g=function(n){function e(){for(var e,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return e=n.call.apply(n,[this].concat(o))||this,i(e,"backBtn",v,a(e)),i(e,"inPersonalBtn",d,a(e)),i(e,"inGuajiGameBtn",G,a(e)),e}t(e,n);var o=e.prototype;return o.onLoad=function(){var n=this;n.backBtn.on(c.EventType.TOUCH_END,n.onBackBtn,n),n.inPersonalBtn.on(c.EventType.TOUCH_END,n.onInPersonalBtn,n),n.inGuajiGameBtn.on(c.EventType.TOUCH_END,n.onInGuajiGameBtn,n)},o.onBackBtn=function(){p.instance.backScene()},o.onInPersonalBtn=function(){p.instance.openSceneByName("personal")},o.onInGuajiGameBtn=function(){p.instance.openSceneByName("guajiGame")},o.onEnable=function(){s.inst.event.emit(l.loadResUIHide)},e}(u)).prototype,"backBtn",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=e(g.prototype,"inPersonalBtn",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=e(g.prototype,"inGuajiGameBtn",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=g))||y));o._RF.pop()}}}));

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