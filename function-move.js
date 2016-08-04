 //Move(obj,{attr1:iTarget1,attr2:iTarget2},fn)
;function Move(obj,json,fn){
	clearInterval(obj.timer);
	var iCur=0,		//当前值的初值
		flag=true;			//检验所有属性的运动都完成的标签
	//1、设置计时器,取得当前值
	obj.timer=setInterval(function(){
		for(var attr in json){
			flag=true;
			if(attr=='opacity'){
			iCur=Math.round(parseFloat(getStyle(obj,attr))*100);
			}else{
				iCur=parseInt(getStyle(obj,attr));
			}
			//2、计算速度
			var	speed=(json[attr]-iCur)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			//3、检测完成
			if(iCur!=json[attr]){
				flag=false;
			}
			if(attr=='opacity'){
				obj.style.filter="alpha(opacity:)"+iCur+speed+")";
				obj.style.opacity=(iCur+speed)/100;
			}else{
				obj.style[attr]=iCur+speed+'px';
			}
		}
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},30);
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];		//IE浏览器用来获取css样式中的值
	}
	else{					//火狐浏览器
		return getComputedStyle(obj,false)[attr];		//此处false指的是不取得伪元素信息
	}
}