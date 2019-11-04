function validation() {
    var nom = document.getElementById("nom").value.length;
    var prenom = document.getElementById("prenom").value.length;
    var date_naissance = document.getElementById("date_naissance").value.length;
    var adresse = document.getElementById("adresse").value.length;
    var mail = document.getElementById("mail").value.length;

    if (
        validationItem("nom", "error1") &&
        validationItem("prenom", "error2") &&
        validationItem("date_naissance", "error3") &&
        validationItem("adresse", "error4") &&
        validationItem("mail", "error5")) {
        var doc1 = document.querySelector("#resultat");  /*Changer le texte d'un élément avec id = "resulat" par un autre truc*/
        doc1.style.backgroundColor = 'rgb(0,128,0)';
        doc1.style.padding = '10px';
        doc1.style.color = 'rgb(255,255,255)';
        doc1.innerHTML = "Bienvenue " + " " + document.querySelector("#prenom").value; /*afficher le msg Bienvenue plus le prenom passer en paramettre*/

    }


}


function validationItem(_id, _idError) {
    var el = document.querySelector("#" + _id);
    var label = document.querySelector('[for="' + _id + '"]');
    var error = document.querySelector("#" + _idError);
    var doc1 = document.querySelector("#resultat");

    if (el.value.length < 5) {

        doc1.innerHTML = "";
        doc1.backgrondColor = "#e9ebee";
        error.style.backgrondColor = 'rgb(182,82,137)';
        error.style.border = '1px  black';
        error.innerHTML = "La saisie de " + label.textContent + "  est obligatoire !";
        return false;
    } else {
        error.style.backgrondColor = "#9ebee";
        error.innerHTML = "";
        return true;
    }

}