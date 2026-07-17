const button = document.getElementById("searchButton");
const input = document.getElementById("symptomInput");

button.addEventListener("click", () => {

    const symptom = input.value.trim();

    if(symptom === "") {
        alert("Wpisz swoje objawy.");
        return;
    }

    alert(
        "BoliHelp AI analizuje objaw:\n\n" +
        symptom +
        "\n\nModuł AI zostanie rozbudowany w kolejnych etapach."
    );

});
