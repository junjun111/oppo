
	$(function(){
		$("#btn").click(function(){
		var sendData = {"userName":$("#userName").val(),"userPass":$("#userPass").val()};
		//console.log(sendData);
		$.post("login.php",sendData,function(data){
			if(data.indexOf("1")>-1){
			//2、跳转页面；
			
			console.log(data);
				//$.cookie( "userName" , $("#username").val()  , { path: '/', expires: 14 });
				document.write("登录成功，3s后跳转至首页面...");
				setTimeout(function(){
					location.href = "shouye.html";
				},3000)
					
			}
				//1、记录cookie;	

			else{
				document.write("登录失败，3s后跳转至登录页面...");
				setTimeout(function(){
					location.href = "Denglu1.html";
				},3000)
			}
			});
		});
	});
