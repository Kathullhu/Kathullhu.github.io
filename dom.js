// EXAMINE THE DOCUMENT OBJECT //



//	console.log(document.doctype); // gives us the doctype
//	console.log(document.URL); //gives us the Url
//	console.log(document.title); // gives us the title
//	console.log(document.domain); //gives us the nonexistant domain
//	console.log(document.head); //gives us all code in the head
//	console.log(document.body); //gives us all code in the body
//	console.log(document.all[10]);
//	console.log(document.forms) 
//	console.log(document.links) // Provides all the HTML collections(?)
	//document.title = "David Is Cool"
	//console.log(document.title);

//GET ELEMENT BY ID

//console.log(document.images);
//console.log(document.getElementsByTagName('heading1'));

//var thisID = document.getElementsById('intro');
//console.log(thisID);

//QUERYSELECTOR

var header = document.querySelector('#header')

header.style.borderBottom = 'solid 4px #ccc'
//
//let bombTimer = setTimeout(() => {
 // console.log("BOOM!");
//}, 500);

//if (Math.random() < 0.5) { // 50% chance
//  console.log("Defused.");
//  clearTimeout(bombTimer);
//}

//ONE WAY TO MAKE BUTTON CHANGE STUFF

//const btn = document.querySelector('button');

//function random(number) {
 // return Math.floor(Math.random() * (number+1));
//}

//btn.onclick = function() {
 // const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
 // document.body.style.backgroundColor = rndCol;
//}


