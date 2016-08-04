;var eventUtil={
	//添加句柄
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent('on'+type,handler);
		}else{
			element['on'+type]=handler;
		}
	},
	//删除句柄
	removeHandler:function(element,type,handler){
		if(element.addEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.detachEvent('on'+type,handler);
		}else{
			element['on'+type]=null;
		}
	},
	//获取事件对象
	getEvent:function(event){
		return event?event:window.event;
	},
	//获取事件的目标
	getElement:function(e){
		return e.target||e.srcElement;
	},
	//获取事件属性
	getType:function(e){
		return e.type;
	},
	//取消事件冒泡
	stopPropagation:function(e){
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble=true;
		}
	},
	//取消默认事件
	preventDefault:function(e){
		if(e.preventDefault){
			e.preventDefault();
		}else{
			e.returnValue=false;
		}
	}
}