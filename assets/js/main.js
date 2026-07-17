let symptomsData = [];

// Pobieranie bazy objawów
fetch("assets/data/symptoms.json")
    .then(response => response.json())
    .then(data => {
        symptomsData = data.objawy;
        console.log("Baza objawów załadowana");
    })
    .catch(error => {
        console.error("Błąd bazy objawów:", error);
    });



const button = document.getElementById("searchButton");
const input = document.getElementById("symptomInput");


button.addEventListener("click", () => {

    const text = input.value.toLowerCase().trim();


    if(text === "") {
        alert("Wpisz swoje objawy.");
        return;
    }


    let found = symptomsData.find(symptom => {

        return symptom.slowa.some(word =>
            text.includes(word)
        );

    });



    if(found) {

        alert(
            "🩺 BoliHelp AI\n\n" +
            "Objaw: " + found.nazwa +
            "\n\n" +
            found.informacja +
            "\n\n⚠️ " +
            found.alarm
        );

    } else {

        alert(
            "🧠 BoliHelp AI\n\n" +
            "Nie znaleziono jeszcze tego objawu w bazie.\n\n" +
            "Baza będzie stopniowo rozszerzana."
        );

    }

});
