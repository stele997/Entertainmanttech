$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "js/telefoni.json",
		dataType: "json",
		success: function(data) {
			ispisi(data);
		}
	});
	$("#potvrdiFilter").click(function(){
		$.ajax({
		type: "GET",
		url: "js/telefoni.json",
		dataType: "json",
		success: function(data) {
			filter(data);
		}
		});	
	});
});
function filter(data){
	var x = document.getElementById("cenaOd").value;
	var y = document.getElementById("cenaDo").value;
	var a = document.getElementById("sortiranje");
	var b = document.getElementById("sortiranje").selectedIndex;
	var c = a.options[b].value;
	if(c==0 && x==0 && y==0)ispisi(data);
	
	if(c!=0)sortiranje(data);
	else if(x!=0)cenaOd(data);
	else if(y!=0)cenaDo(data);
}
function sortiranje(data){
	var x = document.getElementById("cenaOd").value;
	var y = document.getElementById("cenaDo").value;
	var a = document.getElementById("sortiranje");
	var b = document.getElementById("sortiranje").selectedIndex;
	var c = a.options[b].value;
	if(c==1)rastuce(data);
	else if(c==2)opadajuce(data);
	else if(c==3)aZ(data);
	else if(c==4)zA(data);
	function rastuce(data){	
		function sortiraj(){
			for( var i=0;i<data.length;i++){
				for(var j=1;j<data.length;j++)
						   
					return function(i,j){
						if( i.cena > j.cena){
							return 1;
						}
						else if( i.cena < j.cena ){
							return -1;
						}
							return 0;
				 }
			}
		}
		var podatak = data.sort(sortiraj());
		ispisi(podatak);
		if(x>0)cenaOd(podatak);
		else if(y>0)cenaDo(podatak);
	}
	function opadajuce(data){	
		function sortiraj(){
			for( var i=0;i<data.length;i++){
				for(var j=1;j<data.length;j++)
						   
					return function(i,j){
						if( i.cena < j.cena){
							return 1;
						}
						else if( i.cena > j.cena ){
							return -1;
						}
							return 0;
				 }
			}
		}
		var podatak = data.sort(sortiraj());
		ispisi(podatak);
		if(x>0)cenaOd(podatak);
		else if(y>0)cenaDo(podatak);
	}
	function aZ(data){	
		function sortiraj(){
			for( var i=0;i<data.length;i++){
				for(var j=1;j<data.length;j++)
						   
					return function(i,j){
						if( i.ime > j.ime){
							return 1;
						}
						else if( i.ime < j.ime ){
							return -1;
						}
							return 0;
				 }
			}
		}
		var podatak = data.sort(sortiraj());
		ispisi(podatak);
		if(x>0)cenaOd(podatak);
		else if(y>0)cenaDo(podatak);
	}
	function zA(data){	
		function sortiraj(){
			for( var i=0;i<data.length;i++){
				for(var j=1;j<data.length;j++)
						   
					return function(i,j){
						if( i.ime < j.ime){
							return 1;
						}
						else if( i.ime > j.ime ){
							return -1;
						}
							return 0;
				 }
			}
		}
		var podatak = data.sort(sortiraj());
		ispisi(podatak);
		if(x>0)cenaOd(podatak);
		else if(y>0)cenaDo(podatak);
	}
};
function cenaOd(data){
	var x = document.getElementById("cenaOd").value;
	var y = document.getElementById("cenaDo").value;
			var podatak=[];
			for(var i=0; i<data.length; i++){
				if(x<data[i].cena){
					podatak.push(data[i]);
				}
			}
		if(x>0 && y==0){
			ispisi(podatak);
		}
		else{
		cenaOdDo(podatak);
		}
	}
function cenaDo(data){
	var x = document.getElementById("cenaOd").value;
	var y = document.getElementById("cenaDo").value;
			var podatak=[];
			for(var i=0; i<data.length; i++){
				if(y>data[i].cena){
					podatak.push(data[i]);
				}
			}
			ispisi(podatak);
	}
function cenaOdDo (podatak){
	var x = document.getElementById("cenaOd").value;
	var y = document.getElementById("cenaDo").value;
		var podatak2 = [];
			for(var i=0; i<podatak.length; i++){
				if(y>podatak[i].cena){
					podatak2.push(podatak[i]);
				}
			}
		ispisi(podatak2);
}
function ispisi(podatak){
	var ispis="";
	for(var i=0;i<podatak.length;i++){
	ispis+='<div class="kutija">'+
						'<img src="'+podatak[i].slika.src+'" alt="'+podatak[i].slika.alt+'"width="25%"/>'+
					'<div class="kutijaSadrzaj">'+
						'<table border="1px" width="100%">'+
							'<tr>'+
								'<td rowspan="2">'+
									'<p>Display:</p>'+
								'</td>'+
								'<td>'+
									'<p>'+ podatak[i].display.type+'</p>'+
								'</td>'+
							'</tr>'+
							'<tr>'+
								'<td>'+
									'<p>'+podatak[i].display.size+'</p>'+
								'</td>'+
								'</tr>'+
								'<tr>'+
								'<td>'+
									'<p>CPU:</p>'+
								'</td>'+
								'<td>'+
									'<p>'+ podatak[i].cpu+'</p>'+
								'</td>'+
							'</tr>'+
							'<tr>'+
								'<td>'+
									'<p>GPU:</p>'+
								'</td>'+
								'<td>'+
									'<p>'+ podatak[i].gpu+'</p>'+
								'</td>'+
							'</tr>'+
							'<tr>'+
								'<td>'+
									'<p>Memory:</p>'+
								'</td>'+
								'<td>'+
									'<p>'+ podatak[i].memory+'</p>'+
								'</td>'+
							'</tr>'+
							'<tr>'+
								'<td rowspan="2">'+
									'<p>Camera: </p>'+
								'</td>'+
								'<td>';
								ispis+='<p>'+ podatak[i].camera.primary+'</p>'+
								'</td>'+
							'</tr>'+
							'<tr>'+
								'<td>'+
									'<p>'+ podatak[i].camera.secondary+'</p>'+
								'</td>'+
								'</tr>'+
								'<tr>'+
								'<td>'+
									'<p>Batery:</p>'+
								'</td>'+
								'<td>'+
									'<p>'+ podatak[i].batery+'</p>'+
								'</td>'+
							'</tr>'+
						'</table>'+
						'<h3> '+podatak[i].ime+' | '+podatak[i].cena+'e</h3>'+
					'</div>'+
				'</div>';
	}
	document.getElementById("kontejner").innerHTML=ispis;
}