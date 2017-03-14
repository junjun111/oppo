 $(function(){
			var flag = 1;
			var i = 0;
//			$("#section_2 p").click(function(){
//				if(flag){
//				$(this).css({"background-position":"-190px -763px"});
//				flag = 0;
//				}else{
//				$(this).css({"background-position":"-190px -739px"});
//				flag = 1;
//				}
//				$(".hidebox").toggle();
//			});
            $("#section_2 img").mouseover(function(){
            	$(this).css({"border-bottom":"10px solid #47b488"});
            });
            $("#section_2 img").mouseout(function(){
            	$(this).css({"border-bottom":"10px solid white"});
            });
			$("#section_2 p:eq(0)").click(function(){
				
				$(".hidebox").html("<ul><li><img src='img/51.jpg'><h5>Find 7</h5></li><li><img src='img/51.jpg'><h5>Find 5</h5></li></ul>");
				if(flag){
				$(this).css({"background-position":"-190px -763px"});
				flag = 0;
				}else{
				$(this).css({"background-position":"-190px -739px"});
				flag = 1;
				}
				$(".hidebox").toggle();
				$(".hidebox_1").hide();
		   });
		   $("#section_2 p:eq(1)").click(function(){
				
				$(".hidebox").html("<ul><li><img src='img/111.jpg'><h5>N3</h5></li><li><img src='img/112.jpg'><h5>N1mini</h5></li></ul>");
				if(flag){
				$(this).css({"background-position":"-190px -763px"});
				flag = 0;
				}else{
				$(this).css({"background-position":"-190px -739px"});
				flag = 1;
				}
				$(".hidebox").toggle();
				$(".hidebox_1").hide();
		   });
		   $("#section_2 p:eq(2)").click(function(){
				
				$(".hidebox").html("<div class='posi_left'><span>&lt;</span></div><div class='posi_right'><span>&gt;</span></div><ul><li><img src='img/111.jpg'><h5>N3</h5></li><li><img src='img/112.jpg'><h5>N1mini</h5></li><li><img src='img/113.jpg'><h5>N1mini</h5></li><li><img src='img/114.jpg'><h5>N1mini</h5></li><li><img src='img/115.jpg'><h5>N1mini</h5></li><li><img src='img/116.jpg'><h5>N1mini</h5></li><li><img src='img/117.jpg'><h5>N1mini</h5></li><li><img src='img/115.jpg'><h5>N1mini</h5></li><li><img src='img/111.jpg'><h5>N1mini</h5></li><li><img src='img/112.jpg'><h5>N1mini</h5></li></ul>");
				if(flag){
				$(this).css({"background-position":"-190px -763px"});
				flag = 0;
				}else{
				$(this).css({"background-position":"-190px -739px"});
				flag = 1;
				}
//				$("#section_2 .posi_left").show();
//				$("#section_2 .posi_right").show();
				$(".hidebox").toggle();
				$(".hidebox_1").hide();
				 $(".hidebox .posi_right").click(function(){
				 	i++;
				 	if(i==3){
				 		i=0;
				 $(".hidebox ul").css({"left":-1080*i+"px"});
				 	}
		   	    $(".hidebox ul").animate({"left":-1080*i+"px"},300);
		         });
		         $(".hidebox .posi_left").click(function(){
				 	i--;
				 	if(i==-1){
				 		i=2;
				 	$(".hidebox ul").css({"left":-1080*i+"px"});
				 	}
		   	    $(".hidebox ul").animate({"left":-1080*i+"px"},300);
		         });
		   });
		    $("#section_2 p:eq(3)").click(function(){
				
				$(".hidebox_1").html("<ul><li><img src='img/111.jpg'><h5>N3</h5></li><li><img src='img/112.jpg'><h5>N1mini</h5></li><li><img src='img/111.jpg'><h5>N3</h5></li><li><img src='img/112.jpg'><h5>N1mini</h5></li></ul>");
				if(flag){
				$(this).css({"background-position":"-190px -763px"});
				flag = 0;
				}else{
				$(this).css({"background-position":"-190px -739px"});
				flag = 1;
				}
				$(".hidebox").hide();
				$(".hidebox_1").toggle();
		   });
		  
		  $("#section_2 p:eq(4)").click(function(){
				
				$(".hidebox_1").html("<ul><li><img src='img/112.jpg'><h5>N1mini</h5></li><li><img src='img/111.jpg'><h5>N3</h5></li><li><img src='img/112.jpg'><h5>N1mini</h5></li></ul>");
				if(flag){
				$(this).css({"background-position":"-190px -763px"});
				flag = 0;
				}else{
				$(this).css({"background-position":"-190px -739px"});
				flag = 1;
				}
				$(".hidebox").hide();
				$(".hidebox_1").toggle();
		   });
		   $("#section_2 p:eq(5)").click(function(){
				
				$(".hidebox_1").html("<ul><li><img src='img/112.jpg'><h5>N1mini</h5></li></ul>");
				if(flag){
				$(this).css({"background-position":"-190px -763px"});
				flag = 0;
				}else{
				$(this).css({"background-position":"-190px -739px"});
				flag = 1;
				}
				$(".hidebox").hide();
				$(".hidebox_1").toggle();
		   });
		 });