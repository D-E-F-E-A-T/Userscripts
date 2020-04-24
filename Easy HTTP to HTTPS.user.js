// ==UserScript==
// @name         Easy HTTP to HTTPS
// @version      04.24.2020
// @homepage     
// @description  Redirect HTTP to HTTPS
// @author       InnoScorpio
// @run-at       document-start
// @include      http://*/*
// @exclude      http://vxvault.net
// @exclude      http://127.0.0.1/*
// @grant        none
// ==/UserScript==

window.location.protocol = 'https:';
