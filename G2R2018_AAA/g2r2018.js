// ==UserScript==
// @name         IIDX 25 G2R2018 COMPE - How many people DJRANK AAA?
// @namespace    https://www.gaftalk.com/
// @homepage     https://github.com/SackMagiclight/userscripts
// @version      0.1
// @description  Add DJ rank AAA counter. (G2R2018 compe only)
// @author       SackMagiclight
// @match        https://p.eagate.573.jp/game/2dx/25/p/customize/compe/ranking.html?param=IqI%2BxStkJryt/dE7ztiItwnXsIfL/Cqjqfr73Zk7vRE%3D
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @license      MIT License
// @downloadURL  
// @updateURL    
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
    var aaaValue = 0;
    var elements = $('.compe-rank > table > tbody > tr');
    elements.each(function() {
        var value = $(this).children('td').eq(2).text();
        if(value == "") return;
        var sp = value.trim().split('(');
        if(sp.length == 1) return ;
        var score = sp[0].trim();
        var scoreInt = Number(score);
        if(scoreInt >= 12610){
            aaaValue++;
            $(this).children('td').css('background-color','aqua');
        }
    });
    var l = limit[datestr] ? limit[datestr] : -1;
    var title = $('.compe-title > table > tbody > tr');
    title.append(`<td><div class="title-blue">G2R2018 カウントダウン</div>AAA：${aaaValue}人<br>開催まで：${ l < 0 ? "???" : l - aaaValue}人<br><br></td>`);
})();