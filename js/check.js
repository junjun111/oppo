$(function(){
	 var arrCode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I",
		"J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		var res ="";
	 for(var i=0;i<4;i++){
	   res+= arrCode[parseInt(Math.random()*arrCode.length)];
	    $("#main_bottom span").html(res);
	 }
	  
 
	$("#main_bottom span").click(function(){
	 var arrCode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I",
		"J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		var res = "";
	  $("#main_bottom span").html(res);
     for(var i=0;i<4;i++){
	   res+=arrCode[parseInt(Math.random()*arrCode.length)]; 
	 }
	  $("#main_bottom span").html(res);
	});
	// console.log(yz.innerHTML);
	 $("#txt").blur(function(){
	 	if($(this).val()){
	 	//console.log(yz.innerHTML);
	 	 otext = $("#txt").val();
	 	if(otext==$("#main_bottom span").html()){
	 		alert("验证码正确");
	 	}else{
	 		alert("验证码错误");
	 	}
	 }
	 });
	 $("#tet").blur(function(){
				if($(this).val()){
				var reg = /^[0-9]{11}/;
				var oText = $(this).val();
				//console.log(reg.test(oText));
				if(!reg.test(oText)){
					alert("手机格式为11位有效数字");	
				}
			 }
	});
	});