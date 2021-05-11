//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var student = {
    firstName: "Jack",
    lastName: "Black",
    age: 51
}
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in student) {
    document.getElementById("student").innerHTML += "<li>" + key + ": " + student[key] + "</li>";
    console.log(key + ": " + student[key]);
}
//Creare un array di oggetti di studenti.
var class = [
    {
        firstName: "John",
        lastName: "Renbourn",
        age: 70
    },
    {
        firstName: "Herbert",
        lastName: "Jansch",
        age: 67
    },
    {
        firstName: "Davy",
        lastName: "Graham",
        age: 68
    },
    {
        firstName: "Joe",
        lastName: "Pass",
        age: 65
    },
    {
        firstName: "Phil",
        lastName: "Ochs",
        age: 35
    }
]
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
var nameSurname = []
for (var i = 0; i < classe.length; i++) {
    var nameSurnameStudent = class[i].firstName + " " + class[i].lastName;
    nameSurname.push(nameSurnameStudent);
    document.getElementById("class").innerHTML += "<li>" +nameSurname[i] + "</li>";
    document.getElementById("class").innerHTML += "<li>" +nameSurnameStudent + "</li>";
}
console.log(nameSurname);
//Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.
do {
    var newStudentName = prompt("Inserisci il nome dello studente:");
    } while (!isNaN(newStudentName));
    
    do {
    var newStudentLastname = prompt("Inserisci il cognome dello studente:");
    } while (!isNaN(newStudentLastName));
do {
    var newStudentAge = parseInt(prompt("Inserisci l'eta' dello studente:"));
  } while (isNaN(newStudentAge));
var NewStudent = {}
NewStudent.firstName = newStudentName;
NewStudent.lastName = newStudentLastName;
utenteStudente.age = newStudentAge;
class.push(newStudent));
console.log(class);
    