var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var scoreA = [];
var scoreB = [];
var scoreC = [];
var scoreD = [];
var scoreF = [];
var lowScore = [];
var highScore = [];

for(i=0; i<scores.length; i++){

	if(scores[i] <= 60) {
		scoreF.push(i);
			if(scores[i] < 56){
				lowScore.push(i);
			}
	}
		else if (scores[i] <= 70 && scores[i] >= 61){
			scoreD.push(i);
		}
		else if (scores[i] <= 80 && scores[i] >= 71){
			scoreC.push(i);
		}
		else if (scores[i] <= 90 && scores[i] >= 81){
			scoreB.push(i);
		}
		else  if(scores[i] > 91){

			scoreA.push(i);		
		}

		else if (scores[i] > 56){
			lowScore.push(i);
		}

		else if(scores[i] > 95){
			highScore.push(i)
		}

	}
var uno = "How many As were there-  "
var dos = "How many Bs were there-  "
var tres = "How many Cs were there-  "
var quatro = "How many Ds were there-  "
var diaz = "How many Fs were there-  "
var low = "Lowest score"
var high = "Highest score"

console.log(uno + scoreA.length);
console.log(dos + scoreB.length);
console.log(tres + scoreC.length);
console.log(quatro + scoreD.length);
console.log(diaz + scoreF.length);
console.log("Low Score: "lowScore);
console.log(highScore)

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A