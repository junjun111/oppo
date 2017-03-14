$(function(){
	 $("#Global").click(function(){
						$("article").toggle();
	     });
	$("#box .pho_1").mouseover(function(){
			$(this).animate({"opacity":0.6},100);
		});
		$("#box .pho_1").mouseout(function(){
			$(this).stop();
			$(this).animate({"opacity":1},100);
		});
	$(".asideTop").mouseover(function(){
					$("#backTop").show();
				});
				$("#backTop").mouseout(function(){
					$("#backTop").hide();
				});
				$(".asideBottom").mouseover(function(){
					$("#opin").show();
				});
				$("#opin").mouseout(function(){
					$("#opin").hide();
				});
				
});
