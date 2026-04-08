function activerMagie() {
    document.getElementById('maCarte').style.borderColor = '#2ecc71';
    document.getElementById('statut').innerHTML = 'Super Puissance Activée ⚡';
    document.getElementById('statut').style.color = '#2ecc71';
    alert("Magie activée !");
}

function changerMode() {
    let corps = document.body;
    if (corps.style.backgroundColor === "rgb(44, 62, 80)") {
        corps.style.backgroundColor = "#ecf0f1";
        corps.style.color = "#2c3e50";
    } else {
        corps.style.backgroundColor = "#2c3e50";
        corps.style.color = "white";
    }
}
