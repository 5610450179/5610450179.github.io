// JavaScript Document
	function saveForm(){
		localStorage.setItem("Fname",document.getElementById("Fname").value);
		localStorage.setItem("Lname",document.getElementById("Lname").value);
		localStorage.setItem("house",document.getElementById("house").value);
		localStorage.setItem("street",document.getElementById("street").value);
		localStorage.setItem("city",document.getElementById("city").value);
		localStorage.setItem("province",document.getElementById("province").value);
		localStorage.setItem("zip",document.getElementById("zip").value);
		localStorage.setItem("phone",document.getElementById("phone").value);
		localStorage.setItem("cell",document.getElementById("cell").value);
		localStorage.setItem("Cnum",document.getElementById("Cnum").value);
		localStorage.setItem("birth",document.getElementById("birth").value);
		localStorage.setItem("Zsign",document.getElementById("Zsign").value);
		localStorage.setItem("Zyear",document.getElementById("Zyear").value);
		localStorage.setItem("day",document.getElementById("day").value);
		
		
	}
	window.onload = function(){
		document.getElementById("Fname").value = localStorage.getItem("Fname");
		document.getElementById("Lname").value = localStorage.getItem("Lname");
		document.getElementById("house").value = localStorage.getItem("house");
		document.getElementById("street").value = localStorage.getItem("street");
		document.getElementById("city").value = localStorage.getItem("city");
		document.getElementById("province").value = localStorage.getItem("province");
		document.getElementById("zip").value = localStorage.getItem("zip");
		document.getElementById("phone").value = localStorage.getItem("phone");
		document.getElementById("cell").value = localStorage.getItem("cell");
		document.getElementById("Cnum").value = localStorage.getItem("Cnum");
		document.getElementById("birth").value = localStorage.getItem("birth");
		document.getElementById("Zsign").value = localStorage.getItem("Zsign");
		document.getElementById("Zyear").value = localStorage.getItem("Zyear");
		document.getElementById("day").value = localStorage.getItem("day");
	}
	function onSelectedItem(id,index){
		if(id == document.getElementById("Zsign").id) document.getElementById("Zyear").selectedIndex = index;
		if(id == document.getElementById("Zyear").id) document.getElementById("Zsign").selectedIndex = index;
	}
	function onSelectedDate(){
		var date = new Date(document.getElementById("birth").value);
		var day = date.getDay();
		document.getElementById("day").selectedIndex = day;
	}
	function myValidate(){
		var fname = document.forms["myForm"]["Fname"].value;
		var lname = document.forms["myForm"]["Lname"].value;
		var phone = document.forms["myForm"]["phone"].value;
		var cell = document.forms["myForm"]["cell"].value;
		var birth = document.forms["myForm"]["birth"].value;
		var cnum = document.forms["myForm"]["Cnum"].value;
		var phoneReg = /[\+662][\-]\d{3}[\-]\d{3}/;
		var cellReg = /[\+66]\d{2}[\-]\d{3}[\-]\d{4}/
		if(fname == ""){
			window.alert("Firstname must be filled out");
			return false;
		}
		if(lname == ""){
			window.alert("Lastname must be filled out");
			return false;
		}	
		if(!phone.match(phoneReg) && phone!=""){
			window.alert("Phone number does not match the format");
			return false;
		}
		if(!cell.match(cellReg) && cell!=""){
			window.alert("Cell Phone number does not match the format");
			return false;
		}
		if(birth == ""){
			window.alert("Birthday must be filled out");
			return false;
		}
		if(cnum == ""){
			window.alert("Citizenship number must be filled out");
			return false;
		}
		if(isNaN(cnum)){
			window.alert("This field is required number");
			return false;
		}
		if(cnum.length <13){
			window.alert("This field is required 13 characters length");
			return false;
		}

		setCookies("Firstname",fname,7);
		setCookies("Phone number",phone,7);
		showCookies();
	}
	
	function showCookies() {
    	var cookies = document.cookie.split(';');
    	var s = 'Showing cookies work on w3school tryit\n';
    	for (var i = 1 ; i <= cookies.length; i++) {
    	    s += i + ' ' + cookies[i-1] + "\n";
		}
    	window.alert(s);
	}
	function setCookies(cname, cvalue, exdays) {
    	var d = new Date();
    	d.setTime(d.getTime() + (exdays*24*60*60*1000));
    	var expires = "expires="+ d.toUTCString();
    	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	