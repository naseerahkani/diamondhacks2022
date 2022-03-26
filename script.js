console.log("runnign javacript file")

var situation = document.getElementById('flavor').situation.value
var danger1 = 0
var danger2 = 0
var danger3 = 0
var danger4 = 0
var danger5 = 0

var feeling = document.getElementById('tier').feeling.value

for (var i = 0; i < situationArray.length; i++){
	 situationCount = siutationArray[i];

	 if (situation == "toxic controlling") {
		 danger1++
		 document.getElementById('flavor').innerHTML="heyhey"
	 }

	else if (situation =="harassment"){
		danger2++
	}

	else if (situation == "physical abuse"){
		danger3++
	}

	else if (situation == "sexual assault") {
		danger4++
	}

	else if (situation == "danger") {
		danger5++
	}
}

for(var i = 0; i < tierArray.length; i++){
	tierCount = tierArray[i];

	if (tier == "calm"){
		danger1++
	}

	else if (tier == "uncomfortable"){
		danger2++
	}

	else if (tier == "want to leave"){
		danger3++
	}
	else if (tier =="send help"){
		danger4++
	}
	else if (tier == "immediate danger"){
		danger5++
	}

}