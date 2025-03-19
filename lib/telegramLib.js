
window.TgLib = {
    //是否初始化完成
    initLib: function () {
        if (!window.Telegram) {
            return false;
        }
        if (!window.tonConnectUI) {
            return false;
        }
        if (!window.tonweb) {
            return false;
        }
        return true
    }
};

TgLib.statusChangeCall = null;
TgLib.statusChangeThis = null;
TgLib.defaultBuySuccess = null;

addHeadSctipt("./lib/tonweb.js", () => {
    window.tonweb = new window.TonWeb();
});

addHeadSctipt("https://telegram.org/js/telegram-web-app.js", () => {
    window.Telegram.WebApp.expand();
});

addHeadSctipt("./lib/tonconnect-ui.min.js", () => {
    window.tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
        manifestUrl: "https://www.bokgames.com/web-mobile-tg/tonconnect-manifest.json",
        buttonRootId: "ton-connect",
        twaReturnUrl: "https://www.bokgames.com/web-mobile-tg/game.html?v=9",
    });
    tonConnectUI.onStatusChange(() => {
        if (TgLib.statusChangeCall && TgLib.statusChangeThis) {
            TgLib.statusChangeCall.call(TgLib.statusChangeThis);
        }
    });
});

TgLib.closeTelegramGame = function () {
    window.Telegram.WebApp.close();
};
TgLib.inTopUp = function (url) {
    localStorage.setItem("topUpurl", url);
    window.Telegram.WebApp.openTelegramLink("https://t.me/BokGameBot/BoxGameMiniApp889922");
    window.Telegram.WebApp.close();
};


/** 设置状态改变函数*/
TgLib.setStatusChangeCall = function (call, thisObj) {
    TgLib.statusChangeCall = call;
    TgLib.statusChangeThis = thisObj;
};

/** 获取用户友好名称*/
TgLib.getWalletName = function () {
    let raw_addr = new tonweb.utils.Address(tonConnectUI.account.address);
    const userfriendly_addr = raw_addr.toString(true, true, false, false);
    return userfriendly_addr;
};

/** 关闭TonConnectUI的等待弹窗*/
TgLib.delTonConnectUIPopUp = function () {
    tonConnectUI.transactionCanceled();
};
//连接钱包
TgLib.connectWallet = async function (success = null, thisObj = null, fail = null) {
    try {
        let connected = await tonConnectUI.connectWallet();
        TgLib.delTonConnectUIPopUp();
        if (success && thisObj) {
            success.call(thisObj);
        }
    } catch (error) {
        if (fail && thisObj) {
            fail.call(thisObj);
        }
    }
};
//断开钱包
TgLib.delWallet = async function () {
    await tonConnectUI.disconnect();
};
/**是否连接了钱包 */
TgLib.isConnectWallet = function () {
    return tonConnectUI.connected;
};


//清除定时器
TgLib.clearDefaultBuySuccess = function () {
    let s = this;
    if (TgLib.defaultBuySuccess) {
        clearTimeout(TgLib.defaultBuySuccess);
        TgLib.defaultBuySuccess = null;
    }
};

//购买商品
TgLib.buyPurchase = async function (walletAddress, exchangeRate, costQuantity, userId, productId, success, thisObj, error) {
    // 获取已连接的钱包账户
    try {
        const account = tonConnectUI.account;
        const cell = new tonweb.boc.Cell();
        cell.bits.writeUint(0, 32);
        let url = `${userId}:${productId}:` + Date.now();

        cell.bits.writeString(url);
        const boc = await cell.toBoc(false);
        let payload_comment = tonweb.utils.bytesToBase64(boc);
        let price = costQuantity / exchangeRate;

        let amount_str = tonweb.utils.toNano(price.toFixed(3).toString()).toString();

        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60,
            messages: [
                {
                    address: walletAddress, // 目标地址
                    amount: amount_str,
                    payload: payload_comment,
                },
            ],
        };
        TgLib.clearDefaultBuySuccess();

        let tonAmount = Math.floor(Number(amount_str) / 1000000) / 1000;
        let address = account.address;
        /**30s后默认成功*/
        TgLib.defaultBuySuccess = setTimeout(() => {
            success.call(thisObj, {
                productId: productId,
                walletAddress: address,
                comment: url,
                tonAmount: tonAmount,
            });
        }, 30000);

        tonConnectUI
            .sendTransaction(transaction, {
                modals: ["before", "success"],
                notifications: [],
            })
            .then(function onSuccess(response) {
                TgLib.clearDefaultBuySuccess();
                // 交易成功，调用回调函数
                success.call(thisObj, {
                    productId: productId,
                    walletAddress: address,
                    comment: url,
                    tonAmount: tonAmount,
                });
            })
            .catch(function onError(error) {
                // 交易失败，打印错误原因
                TgLib.clearDefaultBuySuccess();
                TgLib.delTonConnectUIPopUp();
            });
    } catch (error) {
        console.error("Order error:", error);
    }
};