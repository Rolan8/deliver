let tog = document.getElementsByClassName('jstoggle');
let main = document.getElementsByClassName('toggle');


for(let i = 0; i < tog.length; i++){
	tog[i].onclick =()=>{	

		main[i].classList.add('yellowboard');
		tog[i].childNodes[0].src = 'Img/up.png';
		

		// 'Img/icon.png';

			for(let j = 0; j < tog.length; j++){
				if ((main[j].classList.contains('yellowboard'))
					&& (main[j] != main[i])) {
						main[j].classList.toggle('yellowboard');
						tog[j].childNodes[0].src = 'Img/down.png';
																													}}

		}		

		}


let langSwitch = document.getElementsByClassName('langsw');

for(let i = 0; i<langSwitch.length;i++){
	langSwitch[i].onclick = (tg) => {
		document.getElementById('langbtn').innerText = tg.target.innerText;
	}	
}

// document.getElementsById('langbtn')