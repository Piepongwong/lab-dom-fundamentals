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

// Iteration 1
let h1Tag = document.querySelector('h1');
h1Tag.innerHTML = 'Hellooo class!';

// Iteration 2
let pTag = document.createElement('p');
pTag.innerHTML = `Today we're going to solidify our DOM skills!`;
let parent = document.querySelector('body');
parent.appendChild(pTag);

// Iteration 6
let btn = document.createElement('button');
btn.innerHTML = `Choose favorite student`;
// I created the button at the beginning of the page instead of doing document.querySelector('html').appendChild(btn);
parent.appendChild(btn);
function changeStyle(){
    let indexRandomStudent = Math.floor(Math.random()*students.length);
    let randomStudent = students[indexRandomStudent].firstname;
    let favoriteStudentDiv = document.querySelector(`.${randomStudent}`);
    let firstDiv = document.querySelector('div');
    parent.insertBefore(favoriteStudentDiv, firstDiv);
}
btn.addEventListener('click', changeStyle);

// Iteration 3, 4, 5
for (let i=0; i<students.length; i++){
    let divTag = document.createElement('div');
    divTag.setAttribute('class', `${students[i].firstname}`);
    parent.appendChild(divTag);
    // Iteration 3
    let h3Tag = document.createElement('h3');
    h3Tag.innerHTML = `${students[i].firstname} ${students[i].lastname}`;
    divTag.appendChild(h3Tag);
    // Iteration 4
    let imgTag = document.createElement('img');
    imgTag.setAttribute('src', `https://wd-ft-may.s3.amazonaws.com/${students[i].firstname}.png`);
    imgTag.setAttribute('alt', `${students[i].firstname} picture`);
    divTag.appendChild(imgTag);
    // Iteration 5
    imgTag.style.border = '5px solid black';
    imgTag.style.width = '200px';
}