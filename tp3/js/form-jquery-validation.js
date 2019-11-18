$(document).ready(() => {
    
    console.log("DOM ready!");

    //  code jQuery pour valider tous les champs du formulaire
    let name = $("#name");
    let firstname = $("#firstname");
    let birth = $("#birth");
    let adresse = $("#adresse");

    let mail = $("#mail");

    $("#submit").on("click", (event) => {
        let verify = (verifyInput(name.val(), firstname.val(), birth.val(), adresse.val(), mail.val())) ? false : true;
        console.log(verify);
        if (verify) {
            $(".modal-title").html("Bienvenue  " + name.val() );

            $(".modal-body").html(" Vous êtes  nés le :  " 
              
            + birth.val() + '\<br\> ' 
            + '</a>' + " et vous habitez à" + ''
            + '\<a href="http://maps.google.com/maps?q=' + adresse.val() 
            + '"> <img src="https://maps.googleapis.com/maps/api/staticmap?markers=' + adresse.val() 
            + '&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg" alt="carte" style="width:100%">' 
            + adresse.val() );

        } else {

            $(".modal-title").html("Message Modal");
            $(".modal-body").html("veuillez remplir tout les champs ");
        }
        $("#myModal").modal("show");
    });

    verifyInput = (name, firstname, mail, adresse, birth) => {
        return name === "" | firstname === "" | mail === "" | adresse === "" | birth === "";
    }

});

