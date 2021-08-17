// var but = document.querySelector("button");

// var isPurple = false;

// but.addEventListener("click", function(){
// 	if(isPurple){
// 		document.querySelector("body").style.background = "white";
// 	}else{
// 		document.querySelector("body").style.background = "purple";
// 	}
// 	isPurple = !isPurple;
// });
// but.addEventListener("click", function(){
// 	document.body.classList.toggle("purple");
// });



// var p1but = document.querySelector("#p1");
// var p2but = document.querySelector("#p2");
// var reset = document.querySelector("#reset");
// var input = document.querySelector("input");
// var max = document.querySelector("#max");
// var p1score = 0;
// var p2score = 0;
// var gameOver = false;
// var max = 5;

// p1but.addEventListener("click", function(){
// 	if(!gameOver){
// 		p1score++;
// 		if(p1score === max){
// 			document.getElementById("pl1").style.color = "green";
// 			gameOver = true;
// 		}
// 			document.getElementById("pl1").textContent = p1score;
// 	}
// });

// p2but.addEventListener("click", function(){
// 	if(!gameOver){
// 		p2score++;
// 		if(p2score === max){
// 			document.getElementById("pl2").style.color = "green";
// 			gameOver = true;
// 		}
// 			document.getElementById("pl2").textContent = p2score;
// 	}
// });

// reset.addEventListener("click", function(){
// 	p1score = 0;
// 	p2score = 0;
// 	pl1.textContent = 0;
// 	pl2.textContent = 0;
// 	document.getElementById("pl1").style.color = "black";
// 	document.getElementById("pl2").style.color = "black";
// 	gameOver = false;
// });

// input.addEventListener("change", function(){
// 	document.getElementById("max").textContent = input.value;
// 	max = Number(input.value);
// });


// let dec = document.getElementById("dec");
// let reset = document.getElementById("reset");
// let inc = document.getElementById("inc");
let number = document.getElementById("number");
let buts = document.querySelectorAll("button");

var count = 0;

buts.forEach(function (but){
	but.addEventListener('click', function(e){
		const styles = e.currentTarget.classList;
		if(styles.contains('dec')){
			count--;
		}else if(styles.contains('inc')){
			count++;
		}else{
			count = 0;
		}
		changeColor();
	});
})

// dec.addEventListener('click', function(){
// 	count--;
// 	changeColor();
// });
// inc.addEventListener('click', function(){
// 	count++;
// 	changeColor();
// });
// reset.addEventListener('click', function(){
// 	count = 0;
// 	changeColor();
// });

function changeColor(){
	number.innerHTML = count;
	if(count > 0){
	number.style.color = "green";
	}else if(count == 0){
		number.style.color = "black";
	}else{
		number.style.color = "red";
	}
}