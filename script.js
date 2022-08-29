console.clear();
var popup = document.getElementsByClassName("pop-up-list")[0];
var overlay = document.getElementsByClassName("overlay-pop-up")[0];
var getButton = document.getElementsByClassName("info-wrapper")[0];
var button = document.getElementsByClassName("button")[0];
var orangeButton = document.getElementById('orange-button');
var close = document.getElementsByClassName('pop-up-button')[0];
getButton.onclick=function(){
	popup.style.display = "block";
	overlay.style.display = "block";
}
button.onclick=function(){
	popup.style.display = "block";
	overlay.style.display = "block";
	
}
orangeButton.onclick=function(){
	popup.style.display = "block";
	overlay.style.display = "block";
}
overlay.onclick=function(){
	popup.style.display = "none";
	overlay.style.display = "none";	
}
close.onclick=function(){
	popup.style.display = "none";
	overlay.style.display = "none";	
}