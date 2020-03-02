var students = [{
            firstname: "Sybille",
            lastname: "Kasslatter",
        },
        {
            firstname: "Miranda",
            lastname: "Kamp"
        },
        {
            firstname: "Emelie",
            lastname: "Sundgren"
        },
        {
            firstname: "Aristides",
            lastname: "Abeywickrama"
        },
        {
            firstname: "Damianos",
            lastname: "Makris"
        },
        {
            firstname: "Neil",
            lastname: "Gursahani"
        },
        {
            firstname: "Justin",
            lastname: "Peeters"
        },
        {
            firstname: "Yvana",
            lastname: "Wagter"
        },
        {
            firstname: "Charles",
            lastname: "van den Bergh"
        },
        {
            firstname: "Elena",
            lastname: "Perrone"
        },
        {
            firstname: "Fábio",
            lastname: "Costa"
        },
        {
            firstname: "Shabeer",
            lastname: "Hussain"
        },
        {
            firstname: "Felix",
            lastname: "van Riessen"
        },
        {
            firstname: "Alexandra",
            lastname: "Muskovszky"
        },
        {
            firstname: "Azadeh",
            lastname: "Farshidi"
        },
        {
            firstname: "Francis",
            lastname: "Bukenya"
        }
    ]
    // Iteration 1

document.querySelectorAll("h1")[0].innerHTML = "hello class!";

// Iteration 2

let newP = document.createElement("p");
newP.innerHTML = "Today we're going to solidify our DOM skills!";
document.querySelectorAll('body')[0].appendChild(newP);

// Iteration 3 & 4

function createStudentProfiles() {

    for (let i = 0; i < students.length; i++) {
        var $newH3 = document.createElement("h3");
        $newH3.innerHTML = students[i].firstname + " " + students[i].lastname;
        let $imgStudent = document.createElement("img");
        $imgStudent.src = "https://wd-ft-feb.s3.eu-central-1.amazonaws.com/" + students[i].firstname.toLowerCase() + ".png";
        document.querySelectorAll('body')[0].appendChild($newH3);
        document.querySelectorAll('h3')[i].appendChild($imgStudent);

    }
}
createStudentProfiles();


// // Iteration 5
function setCssToPicture() {
    document.querySelectorAll('img').add('img');
}
setCssToPicture();

// // Iteration 6
document.querySelector('button').onclick = function(event) {
    for (let x = 0; x < students.length; x++) {
        event.currentTarget.classList('h3')[x];
    }



}