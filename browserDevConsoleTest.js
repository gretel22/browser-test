// Run this code in the browser's dev console to get Browser name and its version 
// DO NOT RUN USING NODE
const userAgent = navigator.userAgent;

let browserName = "Unknown browser";
let version = "Unknown version";

switch (true) {
    case /Chrome/.test(userAgent) && !/Edg/.test(userAgent) && !/Opera|OPR/.test(userAgent):
        browserName = "Google Chrome";
        version = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
        break;
    case /Firefox/.test(userAgent):
        browserName = "Mozilla Firefox";
        version = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
        break;
    case /Safari/.test(userAgent) && !/Chrome/.test(userAgent):
        browserName = "Apple Safari";
        version = userAgent.match(/Version\/(\d+\.\d+)/)[1];
        break;
    case /MSIE|Trident/.test(userAgent):
        browserName = "Microsoft Internet Explorer or Edge (based on the old engine)";
        if (/MSIE/.test(userAgent)) {
            version = userAgent.match(/MSIE (\d+\.\d+)/)[1];
        } else {
            // For IE 11
            version = userAgent.match(/rv:(\d+\.\d+)/)[1];
        }
        break;
    case /Edg/.test(userAgent):
        browserName = "Microsoft Edge (based on Chromium)";
        version = userAgent.match(/Edg\/(\d+\.\d+)/)[1];
        break;
    case /Opera|OPR/.test(userAgent):
        browserName = "Opera";
        version = userAgent.match(/(Opera|OPR)\/(\d+\.\d+)/)[2];
        break;
}

console.log(`Browser: ${browserName}`);
console.log(`Version: ${version}`);
