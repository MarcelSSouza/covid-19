var output = document.getElementById("casos_totais");
var output2 = document.getElementById("obitos_totais");
var output3 = document.getElementById("recovered_totais");
var output4 = document.getElementById("casos_pais");
var output5 = document.getElementById("obitos_pais");
var output6 = document.getElementById("recovered_pais");
var output7 = document.getElementById("name_pais");

//I just want to call the api after the page is loaded



function mostrar(){
	$("#tudo").addClass('d-none')
}
function pesquisa_pais(){
	var pesquisa = $("#pesquisa_input").val()
	if(pesquisa.length<=3){
		alert("Digite ao menos 3 letras")
	}
	else {
		$.ajax({
			url: `https://api.covid19api.com/country/${pesquisa}`,
			method: "GET",
			dataType: "json",
			success: function (data) {
				mostrar()	
				var tam = data.length
				$("#tudo_2").removeClass('d-none')
				var respostaout =data[tam-1].Confirmed.toLocaleString('pt-BR');
				var respostadeath =  data[tam-1].Deaths.toLocaleString('pt-BR');
				var name_pais = data[tam-1].Country
				console.log(respostaout)
				console.log(respostadeath)
				output4.innerHTML = respostaout;
				output5.innerHTML = respostadeath;
				output7.innerHTML = name_pais + " COVID Data"
			}
		});
	}
	var pesquisa = $("#pesquisa_input").val('')
}
function voltar(){
	$("#tudo_2").addClass('d-none')	
	$("#tudo").removeClass('d-none')
}