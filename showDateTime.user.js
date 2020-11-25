// ==UserScript==
// @name         网页小时钟
// @namespace    https://weirick.github.io
// @version      1.1.0.2
// @description  在网页右上角显示当前时间和日期
// @author       RCWei
// @license      GPL-3.0
// @match        *://*/*
// @run-at      document-end
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @grant    GM_registerMenuCommand
// ==/UserScript==

const now = new Date();

let clockHTML = '<div id="clock" style="position:fixed;top:1vw;right:8vh;display:flex;justify-content:center;font-weight:bold;align-items:center;-webkit-text-stroke:1px rgba(255,255,255,.8);font-size:4vh;color:rgba(70,130,180,.7);pointer-events:none;z-index:999999999"></div>';
let timeBox = document.createElement('div');
timeBox.innerHTML = clockHTML;
$('html').append(timeBox);

let dateHtml = '<div id="date" style="position:fixed;top:3vw;right:8vh;display:flex;justify-content:center;align-items:center;font-size:2vh;color:rgba(40,55,71,.6);pointer-events:none;z-index:999999999"></div>';
let dateBox = document.createElement('div');
dateBox.innerHTML = dateHtml;
timeBox.appendChild(dateBox);

setInterval(() => {
  let hour = now.getHours(), minute = now.getMinutes();
  if (hour < 10) hour = '0' + hour;
  if (minute < 10) minute = '0' + minute;
  $('#clock').text(hour + ":" + minute) ;

  let year = now.getFullYear(), month = now.getMonth(), date = now.getDate();
  if (month < 10) month = '0' + month;
  if (date < 10) date = '0' + date;
  $('#date').text(month + '.' + date + '.' + year);
}, 1000);


// 选项菜单
GM_registerMenuCommand("设置选项", () => {
  alert('该功能正在开发中，欢迎提出建议及意见！');
});
