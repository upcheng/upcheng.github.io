System.register("chunks:///_virtual/guajiGameRes",["./guajiGameScene.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/guajiGameScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enums.ts","./EventManger.ts","./ResourceManger.ts"],(function(e){var n,t,i,r,o,l,a,s,u,c,p,y,f;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,a=e.Node,s=e.ScrollView,u=e.ToggleContainer,c=e.Component},function(e){p=e.events},function(e){y=e.default},function(e){f=e.default}],execute:function(){var b,g,d,m,T,L,v,S,h,w,G,M,x;o._RF.push({},"8084cOd5fxA3bWIaKq6nvAx","guajiGameScene",void 0);var z=l.ccclass,I=l.property;e("guajiGameScene",(b=z("guajiGameScene"),g=I(a),d=I(a),m=I(s),T=I(u),L=I(a),b((h=n((S=function(e){function n(){for(var n,t=arguments.length,o=new Array(t),l=0;l<t;l++)o[l]=arguments[l];return n=e.call.apply(e,[this].concat(o))||this,i(n,"courtyardLists",h,r(n)),i(n,"friendLists",w,r(n)),i(n,"listboxScrollView",G,r(n)),i(n,"listTypeGroup",M,r(n)),i(n,"inMiningbtn",x,r(n)),n.lastListType=null,n}t(n,e);var o=n.prototype;return o.onLoad=function(){var e=this;e.inMiningbtn.on(a.EventType.TOUCH_END,e.onInMining,e)},o.onInMining=function(){f.instance.openSceneByName("mining")},o.onListTypeGroupSelected=function(e){var n=this,t=null;n.lastListType&&n.lastListType.name==e.node.name||(n.lastListType&&(n.lastListType.active=!1),t="courtyardType"==e.node.name?n.courtyardLists:n.friendLists,n.lastListType=t,n.lastListType.active=!0,n.listboxScrollView.content=n.lastListType,n.listboxScrollView.scrollToTop(.01))},o.onEnable=function(){this.listTypeGroup.toggleItems[0].isChecked=!0,y.inst.event.emit(p.loadResUIHide)},n}(c)).prototype,"courtyardLists",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=n(S.prototype,"friendLists",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=n(S.prototype,"listboxScrollView",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=n(S.prototype,"listTypeGroup",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=n(S.prototype,"inMiningbtn",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=S))||v));o._RF.pop()}}}));

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