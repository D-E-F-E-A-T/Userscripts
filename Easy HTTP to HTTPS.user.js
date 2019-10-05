// ==UserScript==
// @name         Easy HTTP to HTTPS
// @version      1.1
// @homepage     https://github.com/Cybo1927/Userscripts/blob/master/Easy%20HTTP%20to%20HTTPS.user.js
// @description  Redirect HTTP to HTTPS
// @author       Cybo1927
// @run-at       document-start
// @include      http://*/*
// @grant        none
// ==/UserScript==

window.location.protocol = 'https:';
