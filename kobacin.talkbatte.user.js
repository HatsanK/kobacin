// ==UserScript==
// @id            kobacin.talkbattle
// @name          한글모바신데 톡배
// @version       1.2.0u1
// @author        로리데리카,HatsanK
// @description   한글패치
// @include       http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fevent_teamtalk*
// @include       http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fevent_teamtalk*
// @resource      customCSS https://raw.githubusercontent.com/HatsanK/kobacin/master/css/talkbattle.css
// @grant         GM_addStyle
// @grant         GM_getResourceText
// ==/UserScript==

GM_addStyle (GM_getResourceText ("customCSS") );