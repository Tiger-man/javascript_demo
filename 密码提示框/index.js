var input = document.querySelectorAll("input");
var reg = /^[0-9]{1}$/;
var flag = false;
for(var i=0;i<input.length;i++){
	input[i].index = i;
	input[i].onfocus = function(){
		this.onkeydown = function(e){
			if(e.keyCode==9){
				return false;
			}
		}		
		this.onkeyup = function(e){
			if(e.keyCode==9){
				return false;
			}
			var cont = this.value;
			if(reg.test(cont)){
				this.value = cont;
				this.blur();
				add(this.index);				
			}else{
				this.value = "";
				falg = false;
			}
			if(e.keyCode==8){
				back(this.index);
			}
		}		
	}
}
function add(num){
	num++;
	if(num>=input.length-1){
		num=input.length-1;
	}
	input[num].focus();
}
function back(num){
	num--;
	if(num<=0){
		num=0;
	}
	input[num].focus();
}