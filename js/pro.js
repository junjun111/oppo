$(function(){
	    $("#Global").click(function(){
						$("article").toggle();
				});
		$("#main_center .centerF").mouseover(function(){
			$("#main_center .centerF img:eq(0)").animate({"width":"800px","height":"400px"},1000);
		});
		$("#main_center .centerF").mouseout(function(){
			$("#main_center .centerF img:eq(0)").stop(true,true);
			$("#main_center .centerF img:eq(0)").animate({"width":"770px","height":"365px"},1000);
		});
		$("#main_center .centerS").mouseover(function(){
			$("#main_center .centerS img:eq(1)").animate({"width":"800px","height":"400px"},1000);
		});
		$("#main_center .centerS").mouseout(function(){
			$("#main_center .centerS img:eq(1)").stop(true,true);
			$("#main_center .centerS img:eq(1)").animate({"width":"770px","height":"365px"},1000);
		});
		$("#main_center .centerT").mouseover(function(){
			$("#main_center .centerT img:eq(1)").animate({"width":"420px","height":"750px"},1000);
		});
		$("#main_center .centerT").mouseout(function(){
			$("#main_center .centerT img:eq(1)").stop(true,true);
			$("#main_center .centerT img:eq(1)").animate({"width":"396px","height":"738px"},1000);
		});
		$("#main_bottom .pho_1").mouseover(function(){
			$(this).css({"box-shadow":"0 10px 10px rgba(0, 0, 0, 0.1)"});
			$(this).animate({"margin-top":"8px"},100);
		});
		$("#main_bottom .pho_1").mouseout(function(){
			$("#main_bottom .pho_1").stop();
			$(this).css({"box-shadow":"0 10px 10px rgba(0, 0, 0, 0)"});
			$(this).animate({"margin-top":"10px"},100);
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