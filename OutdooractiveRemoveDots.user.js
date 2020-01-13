// ==UserScript==
// @name     OutdooractiveRemoveDots
// @version  1
// @author   Robert Resch
// @match    https://www.outdooractive.com/*
// ==/UserScript==

function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

GM_addStyle(".oax-lfgm-icon-img { display:none !important; }");
console.log("Removed dots");
