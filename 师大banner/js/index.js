 var ckW = $(window).width();
 var box =$(".box");
 var imgs = $(".one",$(".box")[0]);
 var imgW = $(imgs[0]).width();
 var ones = $(".one",$(".box")[0]);
 var one = (ckW - imgW) / (imgs.length-1);
 ones.each(function(i,j){
 	$(j).css({
 		background:"url(images/"+(i+1)+".jpg)"+"no-repeat center center"
 	})
 	if(i!=0){
 		$(j).css({
 			width:one+"px"
 		})
 	}
 })
 var flag = true;
 ones.each(function(i,j){
 	$(j).mouseover(function(){
 		if(flag){
 			flag = false;
	 		ones.each(function(i,j){
	 			var a = parseInt($(j).css("width"));
	 			if(a = 932){
	 				$(j).css("width",one+"px");
	 			}
	 		})
	 		$(j).css("width","932px");
	 	}	
 		
 		setTimeout(function(){
 			flag = ! flag
 		},300)
 	})
 })

