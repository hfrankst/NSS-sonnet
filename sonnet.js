//In-Class Walkthrough Exercise
var sonnet = document.getElementById("sonnet").textContent;
	console.log("sonnet:", sonnet);

//finding the position of the word 'orphans' in the sonnet
var orphanSearch = sonnet.indexOf("orphans");
	console.log("orphans:", orphanSearch);

//gives the character count of the sonnet 
var sample = sonnet.length;
	console.log('sonnet length:', sample);

//Replace the first occurance of the string "winter" with "yuletide"
// the following variable and the console.log achieve the same result
var newString = sonnet.replace('winter', 'yuletide');
	console.log('new string:', sonnet.replace('winter', 'yuletide'));

//replaces every instance of 'the' with 'a large'.  The 'gi' says get this string signified with 
//the '//' and look for it globally (g) and the (i) says that the case doesn't matter
var replaceMore = sonnet.replace(/the /gi, 'a large ');
	console.log('new replacement: ', replaceMore);

document.getElementById('sonnet').innerHTML = replaceMore;