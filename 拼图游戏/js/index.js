var tops = document.querySelector(".top");
var bott = document.querySelector(".bottom");
var arr = ["1.jpg","3.jpg","2.jpg","7.jpg","5.jpg","6.jpg","4.jpg","8.jpg","9.jpg"];
var attr = "";
var a =0;
for(var i=0;i<9;i++){
	var divs = document.createElement("div");
	divs.classList.add("nine");
	divs.draggable = true;
	divs.id = i;
	divs.style.background = "url(images/"+(i+1)+".jpg) no-repeat center center/contain";
	tops.appendChild(divs);
	divs.ondragstart = function(){
		attr = this;
	}
}
for(var i=0;i<9;i++){
	var div = document.createElement("div");
	div.classList.add("tu");
	div.id = i;
	bott.appendChild(div);
	div.ondragover = function(e){
		e.preventDefault();
	}
	div.ondrop = function(){
		var ids = attr.id;
		var i = this.id;
		if(i == ids){
			a++;
			this.appendChild(attr);
		}
		if(a == 9){
			var s = confirm("恭喜你成功了,是否重新开始?")
			if(s){
				location.reload() 
			}else{
				close("index.html");
			}
		}

	}
}
