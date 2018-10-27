// ==UserScript==
// @name         IIDX 25 G2R2018 COMPE - How many people?
// @namespace    https://www.gaftalk.com/
// @version      1.0
// @author       SackMagiclight
// @description  Add Check number of people. (G2R2018 compe only)
// @homepage     https://github.com/SackMagiclight/userscripts
// @match        https://p.eagate.573.jp/game/2dx/25/p/customize/compe/ranking.html?param=IqI%2BxStkJryt/dE7ztiItwnXsIfL/Cqjqfr73Zk7vRE%3D
// @grant        none
// @copyright    2018+, SackMagiclight
// @license      MIT License
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @downloadURL  https://github.com/SackMagiclight/userscripts/raw/master/G2R2018_AAA/g2r2018_count.user.js
// @updateURL    https://github.com/SackMagiclight/userscripts/raw/master/G2R2018_AAA/g2r2018_count.user.js
// ==/UserScript==

(function() {
    'use strict';
    var limit = {
        1029:200,
        1030:100,
        1031:50,
        1101:30,
        1102:20,
        1103:10,
        1104:1,
    };
    var date = new Date();
    var datestr = date.getMonth()+date.getDate();
    var $ = window.jQuery;
    var elementValue = $('.compe-title > table > tbody > tr > td').eq(0).text();
    elementValue = elementValue.trim();
    var x = /参加人数：([0-9]+)人/;
    var count = elementValue.match(x)[1];
    var l = limit[datestr] ? limit[datestr] : -1;
    var title = $('.compe-title > table > tbody > tr');
    title.append(`<td><div class="title-blue">G2R2018 カウントダウン</div>参加人数ノルマ：${datestr < "1029" ? "開催前です" : datestr > "1104" ? "???" : limit[datestr] + "人" }<br>一斉公開まで：${ datestr < "1029" ? "開催前です" : l - count <= 0 ? "一斉公開決定" : (l - count) + "人" }<br><br></td>`);
})();