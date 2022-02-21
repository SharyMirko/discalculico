const prezzoAlKm = 0.21; 
const scontoMinorenni = 0.168;
const scontoOver65 = 0.126;
let eta = document.getElementById('eta').value;
let km = document.getElementById('km').value;

function calcola() {
if(eta < 18) {
    let prezzoscontato = km * scontoMinorenni;
    document.getElementById('costo').innerHTML = prezzoscontato.toFixed(2) + "€";
} else if(eta >= 40) {
    let prezzoscontato = km * scontoOver65;
    document.getElementById('costo').innerHTML = prezzoscontato.toFixed(2) + " €";
} else {
    let prezzotot = km * prezzoAlKm;
    document.getElementById('costo').innerHTML = prezzotot.toFixed(2) + "€";
}
}