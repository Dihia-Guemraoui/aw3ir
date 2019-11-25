$(document).ready(function () {

    //button de localisation et fair un appel a  la fonction get localisation
    $("#gps").on("click", function () {
        getLocation();
    });

    //calculer le nombre de carateres du nom et prenom saisie en paramettre

    nbr_c_name = 0;
    nbr_c_firstname = 0;

    $("#name").keypress(function () {
        $("#nom").text(nbr_c_name += 1);
    });

    $("#firstname").keypress(function () {
        $("#prenom").text(nbr_c_firstname += 1);

    });
    $("#submit").on("click", function () {
        var
            name = document.querySelector("#name").value,
            firstname = document.querySelector("#firstname").value,
            birth = document.querySelector("#birth").value,
            adresse = document.querySelector("#adresse").value,
            mail = document.querySelector("#mail").value;

        if (validateItem("name") && validateItem("firstname") && validateItem("birth") &&
            validateItem("adresse") && validateItem("mail")) {
            d1.innerHTML = "";
            contactStore.add(name, firstname, birth, adresse, mail);
            contactList = contactStore.getList();
            document.querySelector("table tbody").innerHTML = "";

            //Pour faire une boucle sur une liste JSON:
            for (var index in contactList) {
                document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
                    '<td>' + contactList[index].name +
                    '</td><td>' + contactList[index].firstname +
                    '</td><td>' + contactList[index].birth +
                    '</td><td>' + contactList[index].adresse +
                    '</td><td>' + contactList[index].mail + '</td>';

            }
        }
        else {
            d1 = document.querySelector("#verf");
            d1.innerHTML = "";
            d1.style.backgroundColor = "#e9ebee"
            d1.style.border = '1px black';
            d1.style.padding = '5px';
            d1.innerHTML = "Faut remplir tous les champs ! ";
        }





    });
});
function validateItem(_id) {
    var el = document.querySelector("#" + _id);

    if (el.value.length < 5) {
        return false;
    } else {

        return true;
    }

}