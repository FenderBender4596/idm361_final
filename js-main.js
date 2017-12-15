var whichOne = ['fart', 'shart', 'horn', 'scream', 'help_me'];

//document.getElementById('timer').innerHTML == 01 + ":" + 00;
//startTimer();

function pageSetUp() {
  console.log('pageSetUp');
}

function jmp2LocalPage(whichPage) {
  location.href = whichPage;
}

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
	  playAudio('fartSound');
  };
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

//window.onload = function () {
//    
//    startTimer(oneMinutes, display);
//};

function playAudio(whichSound) {
  console.log("sound called was "+ whichSound);
  document.getElementById(whichSound).play();
}

function changeColor(whichOne) {
	console.log ('colors changed '+ whichOne);
	
	switch(whichOne) {
    case "fart":
        document.getElementById('fart').classList.add('change');
//		document.getElementById('fart').classList.add('unchange');
		document.getElementById('shart').classList.remove('change');
		document.getElementById('horn').classList.remove('change');
		document.getElementById('scream').classList.remove('change');
		document.getElementById('help_me').classList.remove('change');
		playAudio('fartSound');
		console.log('fart was played');
        break;
    case "shart":
        document.getElementById('shart').classList.add('change');
		document.getElementById('fart').classList.remove('change');
		document.getElementById('horn').classList.remove('change');
		document.getElementById('scream').classList.remove('change');
		document.getElementById('help_me').classList.remove('change');
		playAudio('shartSound');
		console.log('shart was played');
        break;
    case "horn":
        document.getElementById('horn').classList.add('change');
		document.getElementById('fart').classList.remove('change');
		document.getElementById('shart').classList.remove('change');
		document.getElementById('scream').classList.remove('change');
		document.getElementById('help_me').classList.remove('change');
		playAudio('hornSound');
		console.log('horn was played');
        break;
	case "scream":
        document.getElementById('scream').classList.add('change');
		document.getElementById('fart').classList.remove('change');
		document.getElementById('shart').classList.remove('change');
		document.getElementById('horn').classList.remove('change');
		document.getElementById('help_me').classList.remove('change');
		playAudio('skramSound');
		console.log('skramz was played');
        break;
	case "help_me":
        document.getElementById('help_me').classList.add('change');
		document.getElementById('fart').classList.remove('change');
		document.getElementById('shart').classList.remove('change');
		document.getElementById('horn').classList.remove('change');
		document.getElementById('scream').classList.remove('change');
		playAudio('helpSound');
		console.log('HELP was played');
        break;
			
    default:
        document.getElementById('fart').classList.add('unchange');
		document.getElementById('shart').classList.add('unchange');
		document.getElementById('horn').classList.add('unchange');
		document.getElementById('scream').classList.add('unchange');
		document.getElementById('help_me').classList.add('unchange');
}
	
	
//	document.getElementById('soundBttn1').classList.add('change');
//	document.getElementById('soundBttn2').classList.add('change');
//	document.getElementById('soundBttn3').classList.add('change');
//	document.getElementById('soundBttn4').classList.add('change');
//	document.getElementById('soundBttn5').classList.add('change');
}; 


function changeText(display) {
	console.log ('text changed');
	document.getElementById('unarmed').classList.add('hide');
	document.getElementById('armed').classList.remove('hide');
};