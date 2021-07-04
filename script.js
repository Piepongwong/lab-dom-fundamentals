var students = [
    {
        firstname: "Aïda",
        lastname: "Loemba"
    },
    {
        firstname: "Amruta",
        lastname: "Karanjekar"
    },
    {
        firstname: "Ana",
        lastname: "Durguz"
    },
    {
        firstname: "Elko",
        lastname: "Lemiso"
    },
    {
        firstname: "Melanie",
        lastname: "Nachef"
    },
    {
        firstname: "Nardo",
        lastname: "Kraaijeveld"
    },
    {
        firstname: "Nienke",
        lastname: "Westdijk"
    },
    {
        firstname: "Varun",
        lastname: "Kumar Chalotra"
    },
]

//Iteration 1
let hello = document.getElementsByTagName('h1')[0];
hello.innerHTML = "hello class!";
//Iteration 2
$body = document.getElementsByTagName('body')[0];
let text = document.createElement('p');
text.innerHTML='Today we\'re going to solidify our DOM skills!'
$body.appendChild(text);

//Iteration 3, 4 and 5
for(let i=0; i<students.length; i++){
    //Iteration 3 (Name Surname)
    let student = document.createElement('h3');
    student.innerHTML = `${students[i].firstname} ${students[i].lastname}`;
    $body.appendChild(student);
    ////Iteration 4 (Photo)
    let createPhoto = document.createElement('img');
    $body.appendChild(createPhoto);
    let photo = document.getElementsByTagName('img')[i];
    photo.setAttribute('src', `https://wd-ft-feb.s3.eu-central-1.amazonaws.com/${students[i].firstname.toLowerCase()}.png`);
    ////Iteration 5 (Photo styles)
    photo.width="200";
    photo.style.border="5px solid black";
};

//Iteration 6 (Button, random student)
$body = document.getElementsByTagName('body')[0];
let student = document.createElement('h2');
let createPhoto = document.createElement('img');
document.getElementsByTagName('button')[0].onclick = function favoriteStudent() {   
    let randomStudent = students[Math.floor(Math.random() * students.length)];
    student.innerHTML = `${randomStudent.firstname} ${randomStudent.lastname}`;
    $body.prepend(createPhoto);
    $body.prepend(student);
    let photo = document.querySelector('img');
    photo.setAttribute('src', `https://wd-ft-feb.s3.eu-central-1.amazonaws.com/${randomStudent.firstname.toLowerCase()}.png`);
    photo.width="200";
    photo.style.border="10px dotted pink";
}


