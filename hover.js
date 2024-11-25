var clickcheck=0;
var heroside="hero-left";

$(document).ready(function() {
	$("body").css("display", "none");
	$("body").fadeIn(1000);
	$("#block").fadeout(500);
});

window.onclick =function(){
	clickcheck ++;
	if(clickcheck==1){
		heroside = "hero-right";
	} else if(clickcheck==2){
		heroside = "";
		var griddisplay = document.getElementById("heroes");
		griddisplay.style.opacity=0;
		griddisplay = document.getElementById("versus");
		griddisplay.style.opacity=1;
		griddisplay.style.top="	300px";
	} else{
	window.location.reload(true);
	}
}

$('.heroes_img').mouseover(function(eventObj) 
{
	var hoverid = eventObj.target.id;
	var outurl= "url(images/"+hoverid+"/hero.webp)";
	document.getElementById(heroside).style.backgroundImage = outurl;	
})
