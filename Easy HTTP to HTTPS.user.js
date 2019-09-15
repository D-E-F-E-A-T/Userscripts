// ==UserScript==
// @name         Easy HTTP to HTTPS
// @version      1.0
// @description  Redirect HTTP to HTTPS
// @author       Cybo1927
// @run-at       document-start
// @match        http://*
// @exclude      http://192.168.254.66/
// @grant        none
// ==/UserScript==

window.location.protocol = 'https:';
