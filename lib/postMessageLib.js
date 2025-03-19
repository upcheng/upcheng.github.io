postMessageLib = {};
/**发送消息到窗口  */
postMessageLib.sendDataToWindow = function (window, jsMethods, arguments) {
    var data = {
        jsMethods: jsMethods,
        jsData: JSON.stringify(arguments),
    };
    if (window) window.postMessage(JSON.stringify(data), "*");
};

/**初始化消息  不要重复监听 */
postMessageLib.initMessageEvent = function (window) {
    window.addEventListener(
        "message",
        (e) => {
            if (e.data) {
                postMessageLib.analysisMessage(e.data);
            }
        },
        false
    );
};
/**解析消息 */
postMessageLib.analysisMessage = function (data) {
    if (data) {
        try {
            var data = JSON.parse(data);
            var jsCallback = data.jsMethods;
            if (postMessageLib.eventPool[jsCallback]) {
                postMessageLib.eventPool[jsCallback](data.jsData);
            }
        } catch (error) {}
    }
};

/**消息池 */
postMessageLib.eventPool = {};

/**注册消息事件 注意注册相同消息事件会覆盖 */
postMessageLib.addMessageEvent = function (massage, callback) {
    postMessageLib.eventPool[massage] = callback;
};

/**移除消息事件 */
postMessageLib.removeMessageEvent = function (massage) {
    postMessageLib.eventPool[massage] = null;
};
