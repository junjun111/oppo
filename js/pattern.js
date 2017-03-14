$(function(){
			$("#txt").blur(function(){
				if($(this).val()){
				var reg = /^[0-9a-zA-Z][0-9a-zA-Z_]{5,11}$/;
				var oText = $(this).val();
				//console.log(reg.test(oText));
				if(!reg.test(oText)){
					alert("账号格式不正确");	
				}
				
			}
			});
//			$("#pwd").blur(function(){
//				if($(this).val()){
//				var reg = /^[0-9a-zA-Z][0-9a-zA-Z_]$/;
//				var oText = $(this).val();
//				console.log(reg.test(oText));
//				if(!reg.test(oText)){
//					alert("请输入6-16位密码");
//				}
//			}
//			});
		});