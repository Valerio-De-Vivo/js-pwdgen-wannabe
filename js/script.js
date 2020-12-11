var nome, cognome, colore;

nome = prompt('inserisci il tuo nome');
cognome = prompt('inserisci il tuo cognome');
colore = prompt('inserisci il tuo colore preferito');

var nomelow = nome.toLowerCase();
var cognomelow = cognome.toLowerCase();
var colorelow = colore.toLowerCase();

document.getElementById('password').innerHTML = nomelow + cognomelow + colorelow + 20;
