			var box = document.getElementById("box");
			var list = document.getElementById("list");
			var li = list.getElementsByTagName("li");
			var lis = document.getElementById("lis");
			var oli = lis.getElementsByTagName("li");
			var oLen = li.length;
			 for(i=0;i<oLen;i++){
			 	oli[i].index = i;
			 	oli[i].onclick = function(){
			 		for(j=0;j<oLen;j++){
			 			oli[j].className = "";
			 		}
			 		oli[this.index].className = "active";
			 		move(list,{"left": (-1)*this.index*588+"px"});
			 		m = this.index;
			 	}
			 }
            var minus = document.getElementById("minus");
			var num = document.getElementById("txt");
			var plus = document.getElementById("plus");
			//加号的点击
			plus.onclick = function(){
				var n = parseInt(num.value);
				if(n<199&&n>0){
					num.value = n+1;
					console.log(minus.disabled);
					minus.disabled = false;
					minus.style.cursor = "pointer";
					if(num.value==199){
						plus.disabled = true;
						plus.style.cursor = "not-allowed";
					}
				}else{
					plus.disabled = true;
					plus.style.cursor = "not-allowed";
				}
			}
			//减号的点击
			minus.onclick = function(){
				var n = parseInt(num.value);
				if(n>1&&n<200){
					num.value = n-1;
					plus.disabled = false;
					plus.style.cursor = "pointer";
					if(num.value==1){
						minus.disabled = true;
						minus.style.cursor = "not-allowed";
					}
				}else{
					minus.disabled = true;
					minus.style.cursor = "not-allowed";
				}		
			}
			//键盘松开数字的处理
			num.onkeyup = function(){
				setTimeout(function(){
					var n = num.value;
					n1 = n.replace(/\D/g,"")?n.replace(/\D/g,""):1;
					num.value = n1<200?n1:199;
					if(num.value==1){
						minus.disabled = true;
						minus.style.cursor = "not-allowed";
					}else{
						minus.disabled = false;
						minus.style.cursor = "pointer";
					}
					if(num.value==199){
						plus.disabled = true;
						plus.style.cursor = "not-allowed";
					}else{
						plus.disabled = false;
						plus.style.cursor = "pointer";
					}
				},500)	
			}
			$("#intru span").mouseover(function(){
				$(this).css({"border":"1px solid #2AAD6F"});
			});
           $("#intru span").mouseout(function(){
				$(this).css({"border":"1px solid #E1E1E1"});
			});