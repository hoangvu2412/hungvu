function div(idBox) {
		if((parseInt(idBox.id)) == 1 ) {
			document.getElementById('div-1').style.display = "block";
		}else if ((parseInt(idBox.id)) == 2) {
			document.getElementById('div-2').style.display = "block";
		}else if ((parseInt(idBox.id)) == 3) {
			document.getElementById('div-3').style.display = "block";
		}else if ((parseInt(idBox.id)) == 4) {
			document.getElementById('div-4').style.display = "block";
		}else if ((parseInt(idBox.id)) == 5) {
			document.getElementById('div-5').style.display = "block";
		}else if ((parseInt(idBox.id)) == 6) {
			document.getElementById('main').style.display = "block";
			document.getElementById('div-1').style.display = "none";
			document.getElementById('div-2').style.display = "none";
			document.getElementById('div-3').style.display = "none";
			document.getElementById('div-4').style.display = "none";
			document.getElementById('div-5').style.display = "none";
			
		}		
}