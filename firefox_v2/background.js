chrome.runtime.onInstalled.addListener(function (details) {
    // 初回インストールだったらタブを開く
    if (details.reason == "install") {
        chrome.tabs.create({
            url: chrome.runtime.getURL("welcome.html")
        });
    }
})

function responseHeadersModifier(originalHeaders, headerName, headerValue) {
    if ( typeof originalHeaders != "object" ) {
        return "TypeError: originalHeaders is not an object."
    } 
    if ( typeof headerName != "string" ) {
        return "TypeError: headerName is not a string."
    } 

    // ヘッダーの配列をmapして、ヒットした時に書き換える
    const newResponseHeaders = originalHeaders.map(elem => {
        // ウニNETだけCache-Controlがcache-controlだったりするのでlowercaseに直す
        // 指定されたheaderNameじゃない要素だったらそのまま返す
        if (elem.name.toLowerCase() != headerName.toLowerCase()) {
            return elem
        }

        // さっきので返してなかったら改変して返す
        return { name: elem.name, value: headerValue }
    });
    return newResponseHeaders
}

chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
        const newResponseHeaders = responseHeadersModifier(details.responseHeaders, "Cache-Control", "max-age: 1209600")
        return { responseHeaders: newResponseHeaders };
    },
    // filters
    {
        urls: [
            // 舞の画像とCSS
            "*://*.maimaidx.jp/img/*",
            "*://*.maimaidx.jp/maimai-mobile/img/*",
            "*://*.maimaidx.jp/maimai-mobile/css/*",

            // ウニの画像とCSS
            "*://new.chunithm-net.com/chuni-mobile/html/mobile/images/*",
            "*://new.chunithm-net.com/chuni-mobile/html/mobile/img/*",
            "*://new.chunithm-net.com/chuni-mobile/html/mobile/css/*",

            // 遊ぶためには規定サイズのイスが必要なゲームの画像とCSS
            "*://ongeki-net.com/ongeki-mobile/img/*",
            "*://ongeki-net.com/ongeki-mobile/css/*",
        ],
    },
    // extraInfoSpec
    ["blocking", "responseHeaders"]
);