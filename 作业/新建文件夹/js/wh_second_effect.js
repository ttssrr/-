//获取到bannerimg标签或元素
var bannerlist=document.querySelector(".bannerimg");
//获取到bannernav的子元素，也就是5个li
var bannernav=document.getElementsByClassName("bannernav")[0].children;

console.log(bannernav);
var i=0;
//创建定时器
var timer=setInterval(move,3000);

function move(){
	
	i++;
	if(i==5){
		i=0;
	}
	

//无序列表距离左侧的外边距，不断靠近
bannerlist.style.marginLeft=-i*820+"px";

//对应每张轮播图的内容

 for(var x=0; x<bannernav.length;x++){
 	//bannernav[x]是bannernav下第x个li
 	//li里面可以有很多元素，当前页面第一个元素是a,所以children[0]就是a标签
	bannernav[x].children[0].className=""; 
	
}
//将轮播图导航添加类now
 bannernav[i].children[0].className="now";

}
//鼠标移动时的动态效果，当鼠标移入时，停止timer，鼠标移出时，开始timer
for(var y=0;y<bannernav.length;y++){
	//第几个内容
	bannernav[y].index=y;
	//在鼠标导航上添加鼠标的移动事件
	bannernav[y].onmousemove=function(){
		//清除定时器timer
		clearInterval(timer);
		i=this.index;
		console.log(i);
		//设置轮播图移动
		bannerlist.style.marginLeft=-i*820+"px";
		//清除原来导航字上的链接样式
		for(var z=0;z<bannernav.length;z++){
			bannernav[z].children[0].className="";
			
		}
		//设置鼠标移动到导航位置的热点样式
		this.children[0].className="now";
		
	}
	//鼠标移出时，恢复导航计时器timer
	bannernav[y].onmouseout=function(){
		timer=setInterval(move,3000);
	}
}
