
//切换特效
function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("con_"+name+"_"+i);
  menu.className=i==cursel?"hover":"";
    con.style.display=i==cursel?"block":"none";
 }
}

//切换特效
(function(){
	if(!Function.prototype.bind){
		Function.prototype.bind = function(obj){
			var owner = this,args = Array.prototype.slice.call(arguments),callobj = Array.prototype.shift.call(args);
			return function(e){e=e||top.window.event||window.event;owner.apply(callobj,args.concat([e]));};
		};
	}
})();
var banner_tabs = function(id){
	this.ctn = document.getElementById(id);
	this.adLis = null;
	this.btns = null;
	this.animStep = 0.2;//动画速度0.1～0.9
	this.switchSpeed = 6;//自动播放间隔(s)
	this.defOpacity = 1;
	this.tmpOpacity = 1;
	this.crtIndex = 0;
	this.crtLi = null;
	this.adLength = 0;
	this.timerAnim = null;
	this.timerSwitch = null;
	this.init();
};
banner_tabs.prototype = {
	fnAnim:function(toIndex){
		if(this.timerAnim){window.clearTimeout(this.timerAnim);}
		if(this.tmpOpacity <= 0){
			this.crtLi.style.opacity = this.tmpOpacity = this.defOpacity;
			this.crtLi.style.filter = 'Alpha(Opacity=' + this.defOpacity*100 + ')';
			this.crtLi.style.zIndex = 0;
			this.crtIndex = toIndex;
			return;
		}
		this.crtLi.style.opacity = this.tmpOpacity = this.tmpOpacity - this.animStep;
		this.crtLi.style.filter = 'Alpha(Opacity=' + this.tmpOpacity*100 + ')';
		this.timerAnim = window.setTimeout(this.fnAnim.bind(this,toIndex),50);
	},
	fnNextIndex:function(){
		return (this.crtIndex >= this.adLength-1)?0:this.crtIndex+1;
	},
	fnSwitch:function(toIndex){
		if(this.crtIndex==toIndex){return;}
		this.crtLi = this.adLis[this.crtIndex];
		for(var i=0;i<this.adLength;i++){
			this.adLis[i].style.zIndex = 0;
		}
		this.crtLi.style.zIndex = 2;
		this.adLis[toIndex].style.zIndex = 1;
		for(var i=0;i<this.adLength;i++){
			this.btns[i].className = '';
		}
		this.btns[toIndex].className = 'cur'
		this.fnAnim(toIndex);
	},
	fnAutoPlay:function(){
		this.fnSwitch(this.fnNextIndex());
	},
	fnPlay:function(){
		this.timerSwitch = window.setInterval(this.fnAutoPlay.bind(this),this.switchSpeed*1000);
	},
	fnStopPlay:function(){
		window.clearTimeout(this.timerSwitch);
	},
	init:function(){
		this.adLis = this.ctn.getElementsByTagName('li');
		this.btns = this.ctn.getElementsByTagName('cite')[0].getElementsByTagName('span');
		this.adLength = this.adLis.length;
		for(var i=0,l=this.btns.length;i<l;i++){
			with({i:i}){
				this.btns[i].index = i;
				this.btns[i].onclick = this.fnSwitch.bind(this,i);
				this.btns[i].onclick = this.fnSwitch.bind(this,i);
			}
		}
		this.adLis[this.crtIndex].style.zIndex = 2;
		this.fnPlay();
		this.ctn.onmouseover = this.fnStopPlay.bind(this);
		this.ctn.onmouseout = this.fnPlay.bind(this);
	}
};


/*kefu*/
// JavaScript Document
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?c235a59515e3c86b9efd9c778614b7e7";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


   