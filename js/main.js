const resultElement = document.getElementById('main-title')

// Nome
let FirstName = prompt('Inserisci il tuo Nome' , "Simone");
console.log(FirstName);

// Cognome
let LastName = prompt('Inserisci il tuo Cognome' , "Cappadona");
console.log(LastName);

// Colore Preferito
let FavColor = prompt('Inserisci il tuo Colore preferito' , "Verde");
console.log(FavColor);

// Creazione password
const createPassword = FirstName + LastName + FavColor + 23;
console.log(createPassword);

//Password
resultElement.innerHTML = `<mark>${createPassword}</mark>` 