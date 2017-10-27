// ==UserScript==
// @id            kobacin.mainpuchi
// @name          한글모바신데 푸치
// @version       0.0.1
// @author        로리데리카,HatsanK
// @description   한글패치
// @include       http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fmypage*
// @resource      customCSS https://raw.githubusercontent.com/HatsanK/kobacin/master/css/mainpuchi.css
// @grant         GM_addStyle
// @grant         GM_getResourceText
// ==/UserScript==

GM_addStyle (GM_getResourceText ("customCSS") );