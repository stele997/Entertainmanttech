$(document).ready(function(){
	$("#ime").keyup(proveraIme);
	$("#prezime").keyup(proveraPrezime);
	$("#email").keyup(proveraEmail);
	$("#emailPonovo").keyup(proveraEmailPonovo);
	$("#ime").blur(otvoriPolje);
	$("#prezime").blur(otvoriPolje);
	$("#email").blur(otvoriPolje);
	$("#emailPonovo").blur(otvoriPolje);
	$("#textpolje").blur(otvoriDugme);
	
	
function proveraIme(){
var ime = document.getElementById("ime").value;
var regIme=/^[A-ZĐŠŽĆČ][a-zđšžćč]{2,12}$/;
	if(ime.length<1)
	{
		$("#ime").css("border", "");
		$("#loseIme").css("visibility","hidden" );
	}
	else if(!regIme.test(ime))
	{
		document.getElementById("loseIme").innerHTML="Loše uneto ime, primer: 'Stefan'";
		$("#ime").css("border", "2px solid #ff0000");
		$("#loseIme").css("visibility","visible");
		$("#ime").attr("sveTacno","0");
	}
	else{
		$("#ime").css("border", "2px solid #187505");
		$("#loseIme").css("visibility","hidden" );
		$("#ime").attr("sveTacno","1");
	}
	
};


function proveraPrezime(){
var prezime = document.getElementById("prezime").value;
var regPrezime=/^[A-ZĐŠŽĆČ][a-zđšžćč]{2,12}(\s[A-ZĐŠŽĆČ][a-zđšžćč]{2,12})*$/;
console.log(prezime);
	if(prezime.length<1)
	{
		$("#prezime").css("border", "");
		$("#losePrezime").css("visibility","hidden" );
	}
	else if(!regPrezime.test(prezime))
	{
		document.getElementById("losePrezime").innerHTML="Prezime nije uneto u dobrom formatu, primer: 'Stanković Jeftić'";
		$("#prezime").css("border", "2px solid #ff0000");
		$("#losePrezime").css("visibility","visible");
		$("#prezime").attr("sveTacno","0");
	}
	else{
		$("#prezime").css("border", "2px solid #187505");
		$("#losePrezime").css("visibility","hidden" );
		$("#prezime").attr("sveTacno","1");
		
	}

};

function proveraEmail(){
var email = document.getElementById("email").value;
var regEmail = /^[\w]+[\.\_\-\w]*\@[\w]+([\.][\w]+)+$/;
	if(email.length<1)
	{
		$("#email").css("border", "");
		$("#losEmail").css("visibility","hidden" );
	}
	else if(!regEmail.test(email))
	{
		document.getElementById("losEmail").innerHTML="Email nije u dobrom formatu! Primer: 'pera@gmail.com' ";
		$("#email").css("border", "2px solid #ff0000");
		$("#losEmail").css("visibility","visible" );
		$("#email").attr("sveTacno","0");
	}
	else{
		document.getElementById("losEmail").innerHTML="";
		$("#email").css("border", "2px solid #187505");
		$("#losEmail").css("visibility","hidden" );
		$("#email").attr("sveTacno","1");
	}
};


function proveraEmailPonovo(){
	var email = document.getElementById("email").value;
	var emailPonovo = document.getElementById("emailPonovo").value;
	if(emailPonovo.length<1)
	{
		$("#emailPonovo").css("border", "");
		$("#losEmailPonovo").css("visibility","hidden" );
	}
	else if(emailPonovo!=email){
		document.getElementById("losEmailPonovo").innerHTML="Uneti email se ne podudara sa prvim!"
		$("#emailPonovo").css("border", "2px solid #ff0000");
		$("#losEmailPonovo").css("visibility","visible" );
		$("#emailPonovo").attr("sveTacno","0");
	}
	else{
		$("#emailPonovo").css("border", "2px solid #187505");
		$("#losEmailPonovo").css("visibility","hidden" );
		$("#emailPonovo").attr("sveTacno","1");
	}
};


function otvoriPolje(){
	var ime = $("#ime").attr("sveTacno");
	var prezime = $("#prezime").attr("sveTacno");
	var email = $("#email").attr("sveTacno");
	var emailPonovo = $("#emailPonovo").attr("sveTacno");
	
	if(ime==1 && prezime==1 && email==1 && emailPonovo==1){
		$("#textpolje").removeAttr("disabled")
	};
	
};

function otvoriDugme(){
	if($("#textpolje").val().length>1){
		$("#potvrdi").removeAttr("disabled")
	}
};
});


