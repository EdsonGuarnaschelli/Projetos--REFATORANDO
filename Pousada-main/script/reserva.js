document.getElementById("reservaForm").addEventListener("submit", function(event) {
    let hospedes = document.getElementById("hospedes").value;
    let erroHospedes = document.getElementById("erroHospedes");

    if (hospedes <= 0) {
        erroHospedes.style.display = "block";
        event.preventDefault(); // Impede o envio do formulário
    } else {
        erroHospedes.style.display = "none"; // Oculta a mensagem de erro se for válido
    }
});

let activeOffset = $('nav ul .active').position().left;
let activeItemWidth = $('nav ul .active').width();

$('document').ready(function(){
	$('.dot').css('left', activeOffset + activeItemWidth / 2);
	let bgColor = $('.active a').css("background-color");
	$('.dot').css('background-color', bgColor);
});

$('nav').mouseout(function(){
	$('.dot').css('left', activeOffset + activeItemWidth / 2);
	let bgColor = $('.active a').css("background-color");
	$('.dot').css('background-color', bgColor);
});

$('nav ul li').hover(function(){
	let navOffset = $(this).position().left;
	let navItemWidth = $(this).width();
	
	$('.dot').css('left', navOffset + navItemWidth / 2);
	
	let bgColor = $('a', this).css("background-color");
	
	$('.dot').css('background-color', bgColor);
});