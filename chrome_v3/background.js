chrome.runtime.onInstalled.addListener(() => {
    console.log("installed")
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [1, 2],
        addRules: [
            {
                id: 1,
                priority: 1,
                action: {
                    type: 'modifyHeaders',
                    responseHeaders: [
                        { 'header': 'Cache-Control', value: "max-age: 1209600", 'operation': 'set' },
                    ],
                },
                condition: {
                    regexFilter: ".*://maimaidx\\.jp/(maimai\\-mobile/img|img|maimai\\-mobile/css).*",
                    initiatorDomains: ["maimaidx.jp"]
                },
            },
            {
                id: 2,
                priority: 1,
                action: {
                    type: 'modifyHeaders',
                    responseHeaders: [
                        { 'header': 'Cache-Control', value: "max-age: 1209600", 'operation': 'set' },
                    ],
                },
                condition: {
                    regexFilter: ".*://new\\.chunithm-net\\.com/chuni\\-mobile/html/mobile/(images|img).*",
                    initiatorDomains: ["new.chunithm-net.com"]
                },
            },
            {
                id: 3,
                priority: 1,
                action: {
                    type: 'modifyHeaders',
                    responseHeaders: [
                        { 'header': 'Cache-Control', value: "max-age: 1209600", 'operation': 'set' },
                    ],
                },
                condition: {
                    regexFilter: ".*://ongeki-net\\.com/ongeki\\-mobile/(img|css).*",
                    initiatorDomains: ["ongeki-net.com"]
                },
            },
        ],
    })
})