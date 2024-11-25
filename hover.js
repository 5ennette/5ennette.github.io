var clickcheck=0;
var heroside="hero-left";
var image = "";
var images =[
	"/images/Arakni/hero.webp",
	"images/Aurora/hero.webp",
	"images/Azalea/hero.webp",
	"images/Benji/hero.webp",
	"images/Betsy/hero.webp",
	"images/Boltyn/hero.webp",
	"images/Bravo/hero.webp",
	"images/Brevant/hero.webp",
	"images/Briar/hero.webp",
	"images/Chane/hero.webp",
	"images/Cindra/hero.webp",
	"images/Dash/hero.webp",
	"images/DashIO/hero.webp",
	"images/DataDoll/hero.webp",
	"images/Dorinthea/hero.webp",
	"images/Dromai/hero.webp",
	"images/Emperor/hero.webp",
	"images/Enigma/hero.webp",
	"images/Fai/hero.webp",
	"images/Fang/hero.webp",
	"images/Florian/hero.webp",
	"images/Genis/hero.webp",
	"images/Ira/hero.webp",
	"images/Iyslander/hero.webp",
	"images/JarlVetreidi/hero.webp",
	"images/Kano/hero.webp",
	"images/Kassai/hero.webp",
	"images/Katsu/hero.webp",
	"images/Kavdaen/hero.webp",
	"images/Kayo/hero.webp",
	"images/Levia/hero.webp",
	"images/Lexi/hero.webp",
	"images/MaxxNitro/hero.webp",
	"images/Melody/hero.webp",
	"images/Nuu/hero.webp",
	"images/Oldhim/hero.webp",
	"images/Olympia/hero.webp",
	"images/Oscilio/hero.webp",
	"images/Prism/hero.webp",
	"images/Rhinar/hero.webp",
	"images/Riptide/hero.webp",
	"images/Shiyana/hero.webp",
	"images/Teklovossen/hero.webp",
	"images/Terra/hero.webp",
	"images/Uzuri/hero.webp",
	"images/Valda/hero.webp",
	"images/Verdance/hero.webp",
	"images/VictorGoldmane/hero.webp",
	"images/Viserai/hero.webp",
	"images/Vynnset/hero.webp",
	"images/Yoji/hero.webp",
	"images/Zen/hero.webp",
]

$(images).each(function() {
	image = $('<img />').attr('src', this);
});

$(document).ready(function() {
	$("body").css("display", "none");
	$("body").fadeIn(1000);
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
	var outurl= "url(/images/"+hoverid+"/hero.webp)";
	document.getElementById(heroside).style.backgroundImage = outurl;
})
