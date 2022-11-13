// --- *** S T R I N G   B A S I C S   II *** --- //

let name_1 = 'benjamin franklin';
let name_2 = 'GEORGE WASHINGTON';

// In Großbuchstaben umwandeln

console.log(name_1.toUpperCase())
console.log(name_2.toLowerCase())


// Zeichen ersetzen

let name_3 = 'Henjamin';
console.log(name_3.replace('H', 'B'))


// String trimmen

let name_4 = '  Peter   ';
console.log(name_4.trim());


// Hinweis Variablen wurden aber nie verändert

console.log(name_4)

// Das ging nur so

name_4 = name_4.trim();
console.log(name_4)


// Kombination mehrererBefehle

name_5 = '   Bernard   ';
console.log(name_5.trim().length)


