// function combineWords(str1, str2) {
// 	return str1 + " " + str2;
// }
// const combinedWords = combineWords("butt", "face");
// console.log(combineWords("butt", "head"));


// console.log(combinedWords);


const test = ["car","bus", "crap", "poo"];
function randomWord() {
 let r = Math.floor(Math.random()*test.length);
  return r;
};
let test2 = randomWord();
console.log(test2);

//console.log(r);
//const ranOut = test[randomWord()];

console.log(test[randomWord()] + " " + test[randomWord()]);

//console.log(ranOut);

function addWords() {
  return test[test2] + " " + test[test2];
}








