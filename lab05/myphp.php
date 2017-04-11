<!doctype html>
<html>
<head>
<meta charset="utf-8">
<!-- TemplateBeginEditable name="doctitle" -->
<title>my php</title>
<!-- TemplateEndEditable -->
<!-- TemplateBeginEditable name="head" -->
<!-- TemplateEndEditable -->
</head>

<body>
<?php
	if(isset($_POST["province"])){
		$province = $_POST["province"];
		$provincetxt = "$province.txt";
		$provinceimg = "$province.png";
		$tis620txt = iconv("utf-8","tis620",$provincetxt);		
	}

	$birth = $_POST["birth"];
	$age = (date('Y') - date('Y',strtotime($birth)));
	if($age<13){
		$bg = "child_bg.jpg";
	}	
	
	else if(isset($_POST["gender"]) && $_POST["gender"] == "male"){
		$bg = "man_bg.jpg";
	}
	else {
		$bg = "girl_bg.jpg";
	}

 
?>
<style>
#head{
	background:url(<?php echo $provinceimg; ?>) top center no-repeat;
	height: 310px;
	text-indent: 100%;
	white-space: nowrap;
	overflow: hidden;
}
body{
	width:1360px;
	background-image:url(<?php echo $bg; ?>);
	background-size:cover;
}
#para{
	background-color:rgba(255,255,255, 0.5);
	text-align:center;
	margin:auto;
	width:60%;
	color:#011BE5;
	padding:20px;
}


</style>


	<h1 id="head"></h1>
	<div id="para">
    	<p id="showH"> <?php echo "คำขวัญจังหวัด$province"; ?> </p>
    	<p id="show"> <?php readfile($tis620txt); ?> </p>	
    </div>
</body>
</html>
