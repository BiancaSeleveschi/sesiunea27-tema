//1.a. 
function doLaundry(wash, dry, fold) {
  wash(20, 45);
  dry(33, 44);
  fold("KonMari");
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

doLaundry(wash, dry, fold)


console.log("*******************************************************")


// b. Scrie cate o functie care mimeaza 3 workout-uri de la sala
// doUpperWorkout(doBiceps, doChest, totalTme)
function doBiceps(noOfReps, breakPause) {
  console.log("Exercitiul pentru biceps va avea", noOfReps, "repetari cu", breakPause, "secunde pe fiecare repetare")
}

function doChest(noOfReps, breakPause) {
  console.log("Exercitiul pt piept va avea", noOfReps, "repetari cu", breakPause, "secunde pe fiecare repetare")
}

function computeTime1(noOfReps, breakPause) {
  console.log("Fiecare exercitiu va avea", noOfReps, "serii cu", breakPause, "secunde de pauza intre exercitii")
}

function doUpperWorkout1(doWorkout1, doWorkout2, doWorkout3) {
  doWorkout1(12, 3);
  doWorkout2(15, 3);
  doWorkout3(4, 40);
}

doUpperWorkout1(doBiceps, doChest, computeTime1)


console.log("*******************************************************")


function doUpperWorkout2(noOReps, breakPause, doWorkout) {
  doWorkout(noOReps, breakPause)
}
doUpperWorkout2(12, 3, doBiceps)
doUpperWorkout2(15, 3, doChest)


console.log("*******************************************************")


// doLegsWorkout(doSquats, doLaunges, totalTme)
function doLegsWorkout(doSquats, doLaunges, computeTime2) {
  console.log("Legs workout:")
  doSquats(10, 4);
  doLaunges(8, 3);
  computeTime2(4, 40);
}

function doSquats(noOfReps, breakPause) {
  console.log("Exercitiul va avea", noOfReps, "repetari cu", breakPause, "secunde de pauza intre seturi")
}

function doLaunges(noOfReps, breakPause) {
  console.log("Exercitiul va avea", noOfReps, "repetari cu", breakPause, "secunde de pauza intre seturi")
}

function computeTime2(noOfReps, breakPause) {
  console.log("Exercitiul va avea", noOfReps, "serii cu", breakPause, "secunde de pauza")
}

doLegsWorkout(doSquats, doLaunges, computeTime2)


console.log("****************************************************")


//doCardio(time, minKcals)
function doCardio(time, minKcals) {
  console.log("Am alergat", time, "minute si am ars", minKcals, "calorii")
}
doCardio(30, 200)


console.log("****************************************************")


//c. Scrie o functie filter care primeste 2 patrametri: un array de numere si o functie filterFunc care primeste un numar si returneaza un boolean
//Functia filter, filtreaza elementele array-ului in functie de filterFunc
//Adica rezultatul lui filgterfunc pe element este adevarat, elementul se pastreaza in array, altfel se scoate 
//Altfel spus: re returneaza un array doar cu elementle care respecta filterfunc (returneaza true)
//functie care filtreaa elementele elementele impare
//se returneaza doar elementele impare
function filterOddNumbers(array) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < array.length; i++) {
    if (isOdd(array[i])) {
      res[contor++] = array[i]
    }
  }
  return res;
}
console.log("Numere impare sunt:", filterOddNumbers([3, 4, 5, 7, 6, 8]))


//functie care filtreaza elementele prime
function filterPrimeNo(array) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      res[contor++] = array[i]
    }
  }
  return res;
}
console.log("Numere prime sunt:", filterPrimeNo([4, 66, 5, 13, 12]))


//functie care filtreaza elementel care sunt puteri ale lui 2
function filterPowerOf2No(array) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < array.length; i++) {
    if (isPowerOfTwo(array[i])) {
      res[contor++] = array[i]
    }
  }
  return res;
}
console.log("Numerele care sunt puteri ale lui 2 sunt:", filterPowerOf2No([4, 66, 5, 13, 12, 32, 22]))


// Functia filter parcurge array-ul si aplica functia filterFunc pe fiecare element.
function filter(array, filterFunc) {
  let res = [];
  let contor = 0;
  for (let i = 0; i < array.length; i++) {
    if (filterFunc(array[i])) {
      res[contor++] = array[i]
    }
  }
  return res;
}
console.log(filter([4, 5, 3, 6, 77, 6], isPrime))


// Pentru filterFunc creeaza 3 functii care le dai pe rand ca argument la apelul functie filter
// Functia isPrime
function isPrime(x) {
  if (x < 2) {
    return true;
  }
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}


// Functia isOdd
function isOdd(x) {
  if (x < 2) {
    return true;
  }
  for (let i = 2; i < x; i++) {
    if (x % 2 === 0) {
      return false;
    }
  }
  return true;
}


// Functia isPowerOfTwo: functie care verifica daca nr. Primit ca parametru este putere a lui 2 (la asta va ganditi singuri cum ati face voi pe foaie, scrieti in comentarii pasi si apoi implementati, nu va uitati pe net ca nu e grea)
function isPowerOfTwo(x) {
  let num = x;
  for (let i = 1; i <= x; i++) {
    num /= 2
    if (num / 2 === 1) {
      return true
    }
  }
  return false;
}
console.log(isPowerOfTwo(32))


// function isPowerOfTwo2(x) {
//   for (let i = 1; i <= x; i++) {
//     x /= 2
//     if (x / 2 === 1) {
//       return true
//     }
//   }
//   return false;
// }
// console.log(isPowerOfTwo2(32))


console.log("****************************************************")


//d. Scrie o functie care mimeaza curatenia din bucatarie: cleanKitchen(washDishes, cleanFloor)
function cleanKitchen(washDishes, cleanFloor) {
  washDishes([3, 2, 5], washDish);
  cleanFloor()
}
cleanKitchen(washDishes, cleanFloor)

// Functia washDishes(dishes[], washDish): parcurge array-ul de farfurii si apeleaza funcția washDish pe fiecare.
function washDishes(dishes, washDish) {
  for (let i = 0; i < dishes.length; i++) {
    washDish(i + 1)
  }
}

// Functia washDish primeste un parametru care reprezinta nr-ul farafuriei pe care il spala (a catea farfurie o spala) si afiseaza mesajul:
// “Washing first dish” (daca se primeste 1 ca param)
// “Washing second dish” (daca se primeste 2 ca param)
// “Washing <number>th dish” (daca se primeste orice alt nr ca param)
function washDish(dishNo) {
  if (dishNo === 1) {
    console.log("Washing first dish")
  }
  else if (dishNo === 2) {
    console.log("Washing second dish")
  }
  else {
    console.log("Washing", dishNo, "th dish")
  }
}

// Functia cleanFloor afiseaza 1 mesaj sugestiv.
function cleanFloor() {
  console.log("The last thing you have to do is clean the floor")
}

console.log("****************************************************")


// e.  Scrie o functie find care primeste ca parametruu un array de obiecte user si o functie findBy, care parcurge array-ul si apeleaza functia verifyUser pe fiecare element)
// User: name, age, isMarried, hasLicense, city

let users = [
  {
    name: "Ana",
    age: 36,
    isMarried: true,
    hasLicense: true,
    city: "Brasov",
  },
  {
    name: "Cristian",
    age: 25,
    isMarried: false,
    hasLicense: true,
    city: "Bucuresti",
  },
  {
    name: "Ioana",
    age: 27,
    isMarried: false,
    hasLicense: false,
    city: "Suceava",
  },
]

function find(array, verifyUser) {
  for (let i = 0; i < array.length; i++) {
    if (verifyUser(array[i], "name", "Ioana")) {
      console.log(array[i])
    }
  }
}
find(users, verifyUser)


function find2(array, verifyUser, property, comparationValue) {
  for (let i = 0; i < array.length; i++) {
    if (verifyUser(array[i], property, comparationValue)) {
      console.log(array[i])
    }
  }
}
find2(users, verifyUser, "age", 25)
find2(users, verifyUser, "city", "Brasov")

// Functia verifyUser primeste ca parametri: un user, numeleProprietatii, valoarea de comparat
// Si verifica daca valoarea user-ului de la proprietatea primita ca parametru este egala cu valoarea de comparat
//exemplu: verifyUser(user, "age", 23) -> if(user.age == 23)
//exemplu: verifyUser(user, "city", "Cluj") -> if(user.city == "Cluj")
function verifyUser(user, propertyName, comparationValue) {
  return user[propertyName] === comparationValue
}

//aceeasi functie, dar recolvata cu if 
// function verifyUser2(user, propertyName, comparationValue) {
//   if (user[propertyName] === comparationValue) {
//     return true;
//   }
//   return false;
// }

// Reminder: o propritetate dintr-un obiect se poate accesa folosind notati cu punct sau folosind paranteze drepte (obiectul poate fi considerat ca un array cu perechi keie-valoare in care valoarea este accesata dupa cheie)
