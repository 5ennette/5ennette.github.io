var clickcheck=0;
var heroside="hero-left";

window.onclick =function(){
	clickcheck ++;
	if(clickcheck==1){
		heroside = "hero-right";
	} else if(clickcheck>1){
		heroside = "";
		var griddisplay = document.getElementById("heroes");
		griddisplay.style.opacity=0;
		griddisplay = document.getElementById("versus");
		griddisplay.style.opacity=1;
		griddisplay.style.top="	300px";
	}
}

$('.heroes_img').mouseover(function(eventObj) 
{
	var hoverid = eventObj.target.id;
	var outurl= "url(images/"+hoverid+"/hero.png)";
	document.getElementById(heroside).style.backgroundImage = outurl;	
})
