const prezzoAlKm = 0.21; 
const scontoMinorenni = 0.168;
const scontoOver40 = 0.128;
let eta = prompt('quanti anni hai?');
let km = prompt('quanti km percorrerai?');

if(eta < 18) {
    let prezzoscontato = km * scontoMinorenni;
    document.getElementById('costo').innerHTML = prezzoscontato.toFixed(2) + "€";
} else if(eta >= 40) {
    let prezzoscontato = km * scontoOver40;
    document.getElementById('costo').innerHTML = prezzoscontato.toFixed(2) + " €";
} else {
    let prezzotot = km * prezzoAlKm;
    document.getElementById('costo').innerHTML = prezzotot.toFixed(2) + "€";
}