var students = [
    {firstname: "Sybille",
    lastname: "Kasslatter",
    },
    {firstname: "Miranda",
    lastname: "Kamp"
    },
    {firstname: "Emelie",
    lastname: "Sundgren"
    },
    {firstname: "Aristides",
    lastname: "Abeywickrama"
    },
    {firstname: "Damianos",
    lastname: "Makris"
    },
    {firstname: "Neil",
    lastname: "Gursahani"
    },
    {firstname: "Justin",
    lastname: "Peeters"
    },
    {firstname: "Yvana",
    lastname: "Wagter"
    },
    {firstname: "Charles",
    lastname: "van den Bergh"
    },
    {firstname: "Elena",
    lastname: "Perrone"
    },
    {firstname: "Fábio",
    lastname: "Costa"
    },
    {firstname: "Shabeer",
    lastname: "Hussain"
    },
    {firstname: "Felix",
    lastname: "van Riessen"
    },
    {firstname: "Alexandra",
    lastname: "Muskovszky"
    },
    {firstname: "Azadeh",
    lastname: "Farshidi"
    },
    {firstname: "Francis",
    lastname: "Bukenya"
    }
]

//Iteration 1
let hello = document.getElementsByTagName('h1')[0];
hello.innerHTML = "hello class!";
//Iteration 2
$body = document.getElementsByTagName('body')[0];
let text = document.createElement('p');
text.innerHTML='Today we\'re going to solidify our DOM skills!'
$body.appendChild(text);

//Iteration 3
for(let i=0; i<students.length; i++){
let student = document.createElement('h3');
student.innerHTML = `${students[i].firstname} ${students[i].lastname}`
$body.appendChild(student);
};

