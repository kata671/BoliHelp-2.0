let symptomsData = [];

const button = document.getElementById("searchButton");
const input = document.getElementById("symptomInput");
const resultBox = document.getElementById("resultBox");


// Wczytanie bazy objawów

fetch("assets/data/symptoms.json")
.then(response => response.json())
.then(data => {

    symptomsData = data.objawy;

    console.log("Baza objawów działa");

})
.catch(error => {

    console.error("Błąd bazy:", error);

});




// Analiza objawów

button.addEventListener("click", () => {


    const text = input.value.toLowerCase().trim();


    if(text === "") {

        resultBox.style.display="block";

        resultBox.innerHTML = `
        <h2>🧠 BoliHelp AI</h2>
        <p>Wpisz swoje objawy, aby rozpocząć analizę.</p>
        `;

        return;

    }



    const found = symptomsData.find(item => {


        return item.slowa.some(word =>

            text.includes(word)

        );


    });




    resultBox.style.display="block";



    if(found) {


        resultBox.innerHTML = `

        <h2>🩺 Wynik BoliHelp AI</h2>

        <p>
        <b>Objaw:</b> ${found.nazwa}
        </p>


        <p>
        <b>Informacja:</b><br>
        ${found.informacja}
        </p>


        <div class="warning">

        ⚠️ <b>Kiedy skontaktować się z lekarzem:</b><br>

        ${found.alarm}

        </div>

        `;


    } else {


        resultBox.innerHTML = `

        <h2>🧠 BoliHelp AI</h2>

        <p>
        Nie znaleziono jeszcze tego objawu w naszej bazie.
        </p>

        <p>
        Baza będzie stopniowo rozszerzana.
        </p>

        `;


    }


});
