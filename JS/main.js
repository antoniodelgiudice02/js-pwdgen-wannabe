const password= document.getElementById ('Password')

const firstName = prompt ('Qual è il tuo nome?');
console.log(firstName);

const surname = prompt ('Qual è il tuo cognome?');
console.log(surname); 

const color = prompt ('Qual è il tuo colore preferito?');
console.log(color);

password.innerText = firstName + surname + color +'24';

