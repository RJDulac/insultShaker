
const clickWord = document.getElementById("btnWord");

const sillyWordList = [
{silly: "jerk"},
{silly: "Butter"},
{silly: "rolling"},
{silly: "broken"},
{silly: "booger"},
{silly: "air head"},
{silly: "dork"},
{silly: "limey"},
{silly: "klutz"},
{silly: "nerd"},
{silly: "dweeb"},
{silly: "obnoxious"},
{silly: "geezer"},
{silly: "crusty"},
{silly: "crazy"},
{silly: "trashy"}
];

const anotherWordList = [
{another: "jerk"},
{another: "butter"},
{another: "rolling"},
{another: "broken"},
{another: "nugget"},
{another: "biscuit"},
{another: "boring"},
{another: "cat"},
{another: "coward"},
{another: "trash"},
{another: "wobbly"},
{another: "dusty"}
];
const wordClick = document.getElementById("clickWord");
const getRandom = document.getElementById("generatedText");
wordClick.addEventListener("click", function() {
  getRandom.innerHTML = combineWord();

    // console.log(combineWord());
});

function combineWord() {
    let test = sillyWordList[randomWord(sillyWordList)].silly;
    let anotherTest = anotherWordList[randomWord(anotherWordList)].another;

    return test + " " + anotherTest;
}

// function randomWord(mr) {
//     return Math.floor(Math.random()*mr.length);
// };

// randomWord = (mr) => {
//       return Math.floor(Math.random()*mr.length);
// };
randomWord = (mr) => (Math.floor(Math.random()*mr.length));
