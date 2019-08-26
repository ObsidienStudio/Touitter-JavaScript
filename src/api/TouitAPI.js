
function list(ts = 0) {
    return (fetch('http://touiteur.cefim-formation.org/list?ts=' + ts))
}

function sending(e, name, msg) {
    //Ne pas faire changer de page
    e.preventDefault();
    //Je crée mon argument pour le POST
    let message = "name=" + encodeURIComponent(name) + "&message=" + encodeURIComponent(msg);
    //Je monte la requete en AJAX
    const request = new XMLHttpRequest();
    request.open("POST", "http://touiteur.cefim-formation.org/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(message);
    //remettre la zone de texte vierge
    document.getElementById('msg').value = "";
    window.alert('Le touit est parti ! :)')
}

function trending(callback) {
    const requestTrending = new XMLHttpRequest();
    requestTrending.open("GET", "http://touiteur.cefim-formation.org/trending", true);
    requestTrending.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    requestTrending.addEventListener('readystatechange', function () {
        if (requestTrending.readyState === XMLHttpRequest.DONE && requestTrending.status === 200) {
            callback(JSON.parse(requestTrending.responseText));
        }
    })
    requestTrending.send();
}

export { list, sending, trending };