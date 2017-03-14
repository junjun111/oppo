		$(function(){
			$("#btn").click(function(){
				//1、
				
				$.post("demo03.php",
						{
							"userName":$("#tet").val(),
							"userPass":$("#txt").val()
						},
						function(data){
							//alert(data);
							
							
								if(data.indexOf("1")>-1){
								
								location.href = "Denglu1.html";
							}
							else{
								alert("注册失败！");
							}
							//location.href = "sucess.html";
						}
				)
			});
		});
