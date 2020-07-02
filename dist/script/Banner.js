"use strict";

//功能：匀速运动
//参数：
// dom对象，样式属性名，步长，时间间隔，边界（起点，终点），方向(1：正向；-1：表示负向)
// 返回值：无
function move(domObj, attr, step, timeSpace, startValue, endValue, direction) {
  var currValue = startValue;
  var myTimer = setInterval(function () {
    //一、数据处理
    //1、计算
    currValue += direction * step; //2、边界
    // if(currValue>=endValue){

    if (direction > 0 ? currValue >= endValue : currValue <= endValue) {
      currValue = endValue;
      clearInterval(myTimer);
    } //二、改变外观


    var temp = currValue;

    if (attr != "opacity") {
      temp += "px";
    }

    domObj.style[attr] = temp;
  }, timeSpace);
}

function move02(domObj, attr, endValue, timeLong) {
  //起始位置
  var startValue = parseFloat(getStyle(domObj, attr)); //方向

  var direction = startValue < endValue ? 1 : -1; //时间间隔（总时长/总步数）

  var timeSpace = 10;
  var stepCount = timeLong / timeSpace; //步长(0.5) （总路程/总步数）

  var step = Math.abs(endValue - startValue) / (timeLong / timeSpace);
  move(domObj, attr, step, timeSpace, startValue, endValue, direction);
}

function move03(domObj, endObj, timeLong) {
  //起始位置
  // let startValue = parseFloat(getStyle(domObj,attr));
  var startObj = {};

  for (var key in endObj) {
    //key = "width" "height"
    startObj[key] = parseFloat(getStyle(domObj, key));
  }

  console.log(startObj); //方向
  // let direction = startValue<endValue?1:-1;

  var directionObj = {};

  for (var _key in endObj) {
    //key = "width" "height"
    directionObj[_key] = startObj[_key] < endObj[_key] ? 1 : -1;
  } // //时间间隔（总时长/总步数）


  var timeSpace = 10;
  var stepCount = timeLong / timeSpace; // //步长(0.5) （总路程/总步数）
  // let step = Math.abs(endValue-startValue)/(timeLong/timeSpace);

  var stepObj = {};

  for (var _key2 in endObj) {
    //key = "width" "height"
    stepObj[_key2] = Math.abs(endObj[_key2] - startObj[_key2]) / (timeLong / timeSpace);
  } //运动
  // let currValue = startValue;


  var currObj = {};

  for (var _key3 in endObj) {
    //key = "width" "height"
    currObj[_key3] = startObj[_key3];
  }

  var myTimer = setInterval(function () {
    //一、数据处理
    //1、计算
    // currValue +=  direction*step;
    for (var _key4 in endObj) {
      currObj[_key4] += directionObj[_key4] * stepObj[_key4];
    } //2、边界


    for (var _key5 in endObj) {
      if (directionObj[_key5] > 0 ? currObj[_key5] >= endObj[_key5] : currObj[_key5] <= endObj[_key5]) {
        currObj[_key5] = endObj[_key5];
        clearInterval(myTimer);
      }
    } //二、改变外观


    for (var _key6 in endObj) {
      //key = width height
      var temp = currObj[_key6];

      if (_key6 != "opacity") {
        temp += "px";
      }

      domObj.style[_key6] = temp;
    }
  }, timeSpace);
} //两张图片的淡入淡出
//参数：
// 两张图片（dom对象），时长


function fadeInOut(outImg, inImg, timeLong) {
  var currOpacity = 0; //进入图片的初始透明度

  var timeSpace = 50;
  var step = 1 / (timeLong / timeSpace);
  var myTimer = setInterval(function () {
    //一、数据处理
    currOpacity += step;

    if (currOpacity >= 1) {
      currOpacity = 1;
      window.clearInterval(myTimer);
    } //二、改变外观


    inImg.style.opacity = currOpacity;
    outImg.style.opacity = 1 - currOpacity;
  }, timeSpace);
}