// ==UserScript==
// @name         Easy HTTP to HTTPS
// @version      1.0
// @description  Redirect HTTP to HTTPS
// @author       Cybo1927
// @run-at       document-start
// @match        http://*
// @exclude      http://URL/
// @grant        none
// ==/UserScript==

window.location.protocol = 'https:';
