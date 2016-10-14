var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var scoreA = [];
var scoreB = [];
var scoreC = [];
var scoreD = [];
var scoreF = [];

for(i=0; i<scores.length; i++){

	if(scores[i] < 60) {
		console.log(scoreF)
		scores = scoreF.push("F");
	}
		else if (scores[i] >= 61 && scores[i] <= 70){
			scoreD.push("D");
		}
		else if (scores[i] >= 71 && scores[i] <= 80){
			scoreC.push("C");
		}
		else if (scores[i] >= 81 && scores[i] <= 90){
			scoreB.push("B");
	}
	else (scores[i] >= 91) 
			scoreA.push("A");		
}
var uno = "How many As were there-  "
var dos = "How many Bs were there-  "
var tres = "How many Cs were there-  "
var quatro = "How many Ds were there-  "
var diaz = "How many Fs were there-  "
console.log(uno + scoreA.length);
console.log(dos + scoreB.length);
console.log(tres + scoreC.length);
console.log(quatro + scoreD.length);
console.log(diaz + scoreF.length);

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A