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
});
    $(document).ready(function () {
        var validate = (function () {
            $("#submit").click(function () {
                var
                    name = $("#name").val(),
                    firstname = $("#firstname").val(),
                    datepicker = $("#datepicker").val(),
                    adresse = $("#adresse").val(),
                    mail = $("#mail").val();

                if ($("#name").val().length == 0 || $("#firstname").val().length == 0 || $("#datepicker").val().length == 0 ||
                    $("#adresse").val().length == 0 || $("#mail").val().length == 0) {
                    $("#submit").html('<div  style="background-color:#00ff89; width: 350px; height: 50px;">' + '<p style="color:red; text-align:center; padding-top:10px;">Veuillez remplir tout les champs !!</p\>' + '</div\>');

                }
                else if ($("input").val().length != 0) {
                    $("#submit").html('<div  style=" background-color:#f8f9fa; width: 350px; height: 50px;">' + '<p style="color:green; text-align:center; padding-top:10px;">' + '<strong> Bravo !!!</strong\>' + 'Le formulaire est bien sauvegardé</p\>' + '</div\>');
                    document.innerHTML = "";
                    contactStore.add(name, firstname, datepicker, adresse, mail);
                    contactList = contactStore.getList();
                    document.querySelector("table tbody").innerHTML = "";
                    for (var i in contactList) {
                        document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
                            '<td>' + contactList[i].name + '</td>' +
                            '<td>' + contactList[i].firstname + '</td>' +
                            '<td>' + $("#datepicker").val() + '</td>' +
                            '<td>' + $("#adresse").val() + '</td>' +
                            '<td style="color:blue;">' + contactList[i].mail + '</td>';


                    }

                }
            });

        })();
    });
