var x = 50;
var y = "yo";
for(var i = 0; i < x; i++){
	y = y + i + " ";	
}

// Тут через класс
here = document.getElementsByClassName("here")
here[1].innerHTML = "Я родился"

// Тут через айди
first_here = document.getElementById("here1")
first_here.innerHTML = y

parent_box = document.getElementById("third_info")
card = document.getElementsByClassName("card")[0]
card2 = card.cloneNode(true);
parent_box.appendChild(card2)