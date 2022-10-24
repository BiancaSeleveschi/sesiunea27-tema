//1.a. 

function doLaundry(a, b, washh, c, d, dryy, method, foldd) {
  console.log(washh(a, b), ";", dryy(c, d), "iar", foldd(method))
}

function wash(degrees, time) {
  console.log("Hainele se spala la", degrees, "de grade, in", time, "minute")
}


function dry(rotations, time) {
  console.log("Functia de uscare a hainelor necesita ", rotations, "de rotatii in", time, "minute")
}

function fold(foldMethod) {
  console.log("Pentru a impaturi hainele se foloseste metoda ", foldMethod)
}

let ress1 = wash
let ress2 = dry
let ress3 = fold

doLaundry(40, 45, ress1, 654, 18, ress2, "KonMari", ress3)

// function doLaundry(a, b, wash, c, d, dry, method, fold) {
//  return wash(a, b) 
// }
// let result = doLaundry(40, 45, ress1, 654, 18, ress2, "KonMari", ress3)
// console.log(result)


//*************************************************************


// b. Scrie cate o functie care mimeaza 3 workout-uri de la sala
// doUpperWorkout(doBiceps, doChest, totalTme)

function doBiceps(noOfReps, breakPause) {
  console.log("Exercitiul pentru biceps va avea", noOfReps, "repetari cu", breakPause, "secunde pe fiecare repetare")
}

function doChest(noOfReps, breakPause) {
  console.log("Exercitiul pt piept va avea", noOfReps, "repetari cu", breakPause, "secunde pe fiecare repetare")
}

function totalTime1(noOfReps, breakPause) {
  console.log("Fiecare exercitiu va avea", noOfReps, "serii cu", breakPause, "secunde de pauza intre exercitii")
}

let biceps = doBiceps(12, 3);
let chest = doChest(10, 4);
let time1 = totalTime1(4, 40);

function doUpperWorkout(doBiceps, doChest, totalTme) {
  console.log("Upper workout:", doBiceps, doChest, totalTme)
}
doUpperWorkout(biceps, chest, time1)



// doLegsWorkout(doSquats, doLaunges, totalTme)
function doLegsWorkout(a, b, doSquats, doLaunges, c, d, totalTme) {
  console.log("Legs workout:", doSquats(a, b), doLaunges(a, b), totalTme(c, d))
}

function doSquats(noOfReps, breakPause) {
  console.log("Exercitiul va avea", noOfReps, "repetari cu", breakPause, "secunde de pauza intre seturi")
}

function doLaunges(noOfReps, breakPause) {
  console.log("Exercitiul va avea", noOfReps, "repetari cu", breakPause, "secunde de pauza intre seturi")
}

function totalTime2(noOfReps, breakPause) {
  console.log("Exercitiul va avea", noOfReps, "serii cu", breakPause, "secunde de pauza")
}

let squats = doSquats;
let launges = doLaunges;
let time2 = totalTime2;

doLegsWorkout(12, 20, squats, launges, 4, 40, time2)


//doCardio(time, minKcals)
function doCardio(time, minKcals) {
  console.log("Am alergat", time, "minute si am ars", minKcals)
}

let res1 = doUpperWorkout //("squats", "launges", 20);
let res2 = doLegsWorkout //("squats", "launges", 20);
let res3 = doCardio //(30, 200);


//**********************************************************************


//c. Scrie o functie filter care primeste 2 patrametri: un array de numere si o functie filterFunc care primeste un numar si returneaza un boolean
function filter(array, filterFunc) {
  for (let i = 0; i < array.length; i++) {
    filterFunc(array[i])
  }
}

function filterFunc() {

}
// Functia filter parcurge array-ul si aplica functia filterFunc pe fiecare element.
// Pentru filterFunc creeaza 3 functii care le dai pe rand ca argument la apelul functie filter
// Functia isPrime
function isPrime() {

}

// Functia isOdd
function isOdd() {

}

// Functia isPowerOfTwo: functie care verifica daca nr. Primit ca parametru este putere a lui 2 (la asta va ganditi singuri cum ati face voi pe foaie, scrieti in comentarii pasi si apoi implementati, nu va uitati pe net ca nu e grea)
function isPowerOfTwo() {

}

