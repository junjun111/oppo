<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	 <body>
<?php
	header("content-type","text/html;charset=utf-8");
	
	$userName = $_REQUEST['tet'];
	$userPass = $_REQUEST['txt'];
	
	//echo($userName.$userPass);


	//建立连接
	$conn = mysql_connect("localhost:3306","root","root");
	
	if(!$conn){
		die("连接失败");
	}
	
	//2、选择数据库
	mysql_select_db("db1609",$conn);
	
	//3、执行语句（插入数据）
	$sqlStr = "insert into vipTable(useName,usePass)values('$userName','$userPass')";
 
 
    mysql_query($sqlStr,$conn);//执行查询的sql语句后，有返回值，返回的是查询结果
				
				//查询行数
	//$query_num = mysql_num_rows($result);
	echo("创建成功");			
 
	//mysql_query($sqlStr,$conn);
	
	//4、关闭数据库
	mysql_close($conn);

   //3,返回
//  if($query_num==0){
//  	echo "0";
//  }else{
//  	echo "1";
//  };
?>
    </body>
</html>