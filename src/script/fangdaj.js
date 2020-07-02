  		let dombox = document.getElementById("g-box");
        let dommirrorbox = document.getElementById("mirrorbox");
        let dombigmirror = document.getElementById("bigmirror");
        let dombox2 = document.getElementById("goods-box2");
        let dombox1 = document.getElementById("goods-box1");
        let dombox3 = document.getElementById("goods-box3");
        let dombox4 = document.getElementById("goods-box");
        window.onload = function(){

     	dombox.onmousemove = function(event){
        let evt = event || window.event;
         //数据处理
        //鼠标圆点到body的距离就等于
        let left1 = evt.pageX-this.offsetLeft-dombox4.offsetLeft/2.5-dommirrorbox.offsetWidth/2;
        let top1 = evt.pageY-this.offsetTop-dombox3.offsetHeight-dombox2.offsetHeight-dombox1.offsetHeight-dommirrorbox.offsetHeight/2;
        //边界问题
        if(left1<0){
            left1 = 0;
                    //在box可移动的最大距离
        }else if(left1>this.offsetWidth-dombox4.offsetLeft/2.5-dommirrorbox.offsetWidth){
                left1 = this.offsetWidth-dombox4.offsetLeft/2.5-dommirrorbox.offsetWidth;
        }
        if(top1<0){
            top1 = 0;

        }else if(top1>evt.pageY-this.offsetTop-dombox3.offsetHeight-dombox2.offsetHeight-dombox1.offsetHeight-dommirrorbox.offsetHeight/2){
            top1 = evt.pageY-this.offsetTop-dombox3.offsetHeight-dombox2.offsetHeight-dombox1.offsetHeight-dommirrorbox.offsetHeight/2;
        }//让其跟着动起来
       
        dommirrorbox.style.left = left1 +"px";
        dommirrorbox.style.top = top1 +"px";
        dombigmirror.style.backgroundPosition=`-${left1*2}px -${top1*2}px`;
     }
     dombox.onmouseover = function(){
        dommirrorbox.style.display = "block";
        dombigmirror.style.display = "block";
     }
     dombox.onmouseout = function(){
        dommirrorbox.style.display = "none";
        dombigmirror.style.display = "none";
     }
  }