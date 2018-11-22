
window.onload=function(){	
	var m = document.getElementById("mainForm");

	m.addEventListener("focus", myFocusFunction, true);
	m.addEventListener("blur", myBlurFunction, true);

	m.onsubmit = function (e){
	    var m = document.getElementsByClassName("required");
		for(i=0;i<m.length;i++){
			if(m[i].value == null || m[i].value == ""){
				m[i].classList.add("error");
				e.preventDefault();
			}else{
			m[i].classList.remove("error");
			}
				
		}

	};
}

function myFocusFunction(e) {
		var clickedItem = e.target.id;
		    document.getElementById(clickedItem).classList.add("highlight");
		if( document.getElementById(clickedItem).classList.contains("error") == true){
	       document.getElementById(clickedItem).classList.remove("error");
		}
	}

function myBlurFunction(e) {
		var clickedItem = e.target.id;
		    document.getElementById(clickedItem).classList.remove("highlight");


}
