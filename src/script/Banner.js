
//功能：匀速运动
//参数：
// dom对象，样式属性名，步长，时间间隔，边界（起点，终点），方向(1：正向；-1：表示负向)
// 返回值：无
function move(domObj,attr,step,timeSpace,startValue,endValue,direction){
    let currValue = startValue;

    let myTimer = setInterval(function(){
        //一、数据处理
        //1、计算
        currValue +=  direction*step;

        //2、边界
        // if(currValue>=endValue){
        if(direction>0?currValue>=endValue:currValue<=endValue){
            currValue = endValue;
            clearInterval(myTimer);
        }

        //二、改变外观
        var temp = currValue;
        if(attr!="opacity"){
            temp +="px";
        }
        domObj.style[attr] = temp;
    },timeSpace)
}

function move02(domObj,attr,endValue,timeLong){
    //起始位置
    let startValue = parseFloat(getStyle(domObj,attr));
    //方向
    let direction = startValue<endValue?1:-1;
    //时间间隔（总时长/总步数）
    let timeSpace = 10;     
    let stepCount = timeLong/timeSpace;
    //步长(0.5) （总路程/总步数）
    let step = Math.abs(endValue-startValue)/(timeLong/timeSpace);

    move(domObj,attr,step,timeSpace,startValue,endValue,direction)
}



function move03(domObj,endObj,timeLong){
    //起始位置
    // let startValue = parseFloat(getStyle(domObj,attr));
    let startObj = {}
    for(let key in endObj){//key = "width" "height"
        startObj[key] = parseFloat(getStyle(domObj,key))
    }
    console.log(startObj);

    //方向
    // let direction = startValue<endValue?1:-1;
    let directionObj = {};
    for(let key in endObj){//key = "width" "height"
        directionObj[key] = startObj[key]<endObj[key]?1:-1;
    }
    // //时间间隔（总时长/总步数）
    let timeSpace = 10;     
    let stepCount = timeLong/timeSpace;

    // //步长(0.5) （总路程/总步数）
    // let step = Math.abs(endValue-startValue)/(timeLong/timeSpace);
    let stepObj = {};
    for(let key in endObj){//key = "width" "height"
        stepObj[key] =  Math.abs(endObj[key]-startObj[key])/(timeLong/timeSpace);
    }

    //运动
    // let currValue = startValue;
    let currObj = {};
    for(let key in endObj){//key = "width" "height"
        currObj[key] = startObj[key];
    }

    let myTimer = setInterval(function(){
        //一、数据处理
        //1、计算
        // currValue +=  direction*step;
        for(let key in endObj){
            currObj[key] += directionObj[key]*stepObj[key];
        }
        
        //2、边界
       for(let key in endObj){
            if(directionObj[key]>0?currObj[key]>=endObj[key]:currObj[key]<=endObj[key]){
                currObj[key] = endObj[key];
                clearInterval(myTimer);
            }
       }

        //二、改变外观
        for(let key in endObj){//key = width height
            var temp = currObj[key];
            if(key!="opacity"){
                temp +="px";
            }
            domObj.style[key] = temp;
        }
       
    },timeSpace)

}

//两张图片的淡入淡出
//参数：
// 两张图片（dom对象），时长

function fadeInOut(outImg,inImg,timeLong){
    let currOpacity = 0;//进入图片的初始透明度
    let timeSpace = 50;
    let step = 1/(timeLong/timeSpace);

    let myTimer = setInterval(function(){
        //一、数据处理
        currOpacity +=step;

        if(currOpacity>=1){
            currOpacity=1;
            window.clearInterval(myTimer);
        }
        //二、改变外观
        inImg.style.opacity = currOpacity;
        outImg.style.opacity = 1 - currOpacity;
    },timeSpace)

}