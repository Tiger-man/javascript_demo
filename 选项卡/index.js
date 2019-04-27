var li = document.querySelector(".active");
var btn = document.querySelectorAll(".nav>li");
var arr = [];
for(var i=0;i<btn.length;i++){
	btn[i].index = i;
	btn[i].onclick = function(){
		var data = 0;
		for(var k=0;k<this.index;k++){
			if(!window.ActiveXObject){
				data+=(parseInt(btn[k].offsetWidth)+parseInt(getComputedStyle(btn[k],null)["margin-right"]));
			}else{
				data+=(btn[k].offsetWidth+parseInt(btn[k].currentStyle["margin-right"]));
			}
		}
		li.style.width = this.offsetWidth + "px";
		li.style.left = data+"px";
		for(var j=0;j<btn.length;j++){
			btn[j].classList.remove("hot");
		}
		this.classList.add("hot");
	}
}

