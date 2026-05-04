function showPage(page){
    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });
    document.getElementById(page).classList.add("active");
}

/* ÉLÈVES */
function ajouterEleve(){
    let nom = document.getElementById("nomEleve").value;

    if(nom){
        let li = document.createElement("li");
        li.textContent = nom;
        document.getElementById("listeEleves").appendChild(li);
        document.getElementById("nomEleve").value = "";
    }
}

/* PROFESSEURS */
function ajouterProf(){
    let nom = document.getElementById("nomProf").value;

    if(nom){
        let li = document.createElement("li");
        li.textContent = nom;
        document.getElementById("listeProfs").appendChild(li);
        document.getElementById("nomProf").value = "";
    }
}

/* NOTES */
function ajouterNote(){
    let eleve = document.getElementById("eleveNote").value;
    let note = document.getElementById("note").value;

    if(eleve && note){
        let li = document.createElement("li");
        li.textContent = eleve + " : " + note + "/20";
        document.getElementById("listeNotes").appendChild(li);

        document.getElementById("eleveNote").value = "";
        document.getElementById("note").value = "";
    }
}
