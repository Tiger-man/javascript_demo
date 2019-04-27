for(var i=0;i<6;i++){
	var div = $("<div>");
	div.addClass("contain");
	div.css({
		transform:"rotateZ("+(i*30)+"deg)"
	})
	div.appendTo($(".contain")[0]);
}
for(var i=0;i<60;i++){
	if(i%5==0){
		continue;
	}else{
		
		var div = $("<div>");
		div.addClass("contain2");
		div.css({
			transform:"rotateZ("+(i*6)+"deg)"
		})
		div.appendTo($(".contain")[0]);
	}
	
}
var hour = document.querySelector(".hour");
var second = document.querySelector(".second");
var minute = document.querySelector(".minute");
var a = new Date();
var s = a.getSeconds();
var m = a.getMinutes();
var h = a.getHours()>12?a.getHours():a.getHours();
var hh = s/3600 + m/60 + h;
var mm = m + s/60;
var hbox = document.querySelector(".h");
var mbox = document.querySelector(".m");
var sbox = document.querySelector(".s");
var hflag = true;
var mflag = true;
var sflag = true;
hour.style.transform="rotateZ("+(hh*30)+"deg)";
minute.style.transform="rotateZ("+(mm*6)+"deg)";
second.style.transform="rotateZ("+(s*6)+"deg)";
var t=setInterval(add,1000);
hbox.innerHTML = h<10?"0"+h:h;
mbox.innerHTML = m<10?"0"+m:+m;
sbox.innerHTML = s<10?"0"+s:+s;
function add(){
	var hh = s/3600 + m/60 + h;
    var mm = m + s/60;
	++s;
	if(s==60){
		s=0;
		m++;
		if(m==60){
			m=0;
			h++;
			if(h==24){
				h=0;
			}
		}

	}
	
	if(mflag){
		mbox.innerHTML = m<10?"0"+m:m;
		minute.style.transform="rotateZ("+(mm*6)+"deg)"

	}
	if(hflag){
		hbox.innerHTML = h<10?"0"+h:h;
		hour.style.transform="rotateZ("+(hh*30)+"deg)";

	}
	
	if(sflag){

		sbox.innerHTML = s<10?"0"+s:s;
		second.style.transform="rotateZ("+(s*6)+"deg) skewY(45deg) ";	
		// second.style.transition="all .3s";	
	}
}
var span =document.querySelectorAll("span");
var spans =[];
for(var i=0;i<span.length;i++){
	if(span[i].hasAttribute("class")){
		spans.push(span[i])
	}
}
for(var i=0;i<spans.length;i++){
	spans[i].index = i;
	spans[i].onfocus=function(){
		var cl = this.getAttribute("class");
		if(cl == "h"){
			hflag = false;
		}else if(cl == "m"){
			mflag = false;
		}else{
			sflag = false;
		}
		var con = this.innerHTML;
		spans.innerHTML = con;
	}
	spans[i].onblur=function(){
		
		var con2 = parseInt(this.innerHTML);
		var cl = this.getAttribute("class");
		if(cl == "h"){
			if(con2>=24){
				con2 = con2 -24;
			}
			h = parseInt(con2);
			hflag = true;
		}else if(cl == "m"){
			if(con2>=60){
				con2 = con2 -61;
			}
			m = parseInt(con2);
			mflag = true;
		}else{
			if(con2>=60){
				con2 = con2 -61;
			}
			s = parseInt(con2);
			sflag = true;
		}
	}
}