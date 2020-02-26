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

// Iteration 1
let h1tag = document.querySelector("h1")
h1tag.innerHTML="hello class!"

// Iteration 2
$p = document.createElement("p")
$p.innerHTML="Today we're going to solidify our DOM skills!"
let parentbody = document.querySelector("body")
parentbody.appendChild($p)

// Iteration 3
for (var i=0;i<students.length;i++) {
    let firstnamestudent = students[i].firstname
    let lastnamestudent = students[i].lastname
    $h3 = document.createElement("h3")
    $h3.innerHTML = `${firstnamestudent} ${lastnamestudent}`
    let parentbody = document.querySelector("body")
    parentbody.appendChild($h3)
}

//Iteration 4
for(var j=0; j<students.length;j++) {

$img = document.createElement("img")
let parentbodys = document.querySelector("body")
parentbodys.appendChild($img)

let nameurl = students[j].firstname.toLowerCase()
$img.setAttribute("src","https://wd-ft-feb.s3.eu-central-1.amazonaws.com/"+`${nameurl}`+".png")

// //Iteration 5
$img.setAttribute("width","200px")
$img.setAttribute("border","5px solid black")

}

//Iteration 6
$button = document.createElement("button")
$button.innerHTML = "Choose favorite student"
let parentbodi = document.querySelector("body")
parentbodi.appendChild($button)

document.querySelector("button").addEventListener("click",function(){
    $favouriteStudent = document.querySelectorAll("h3")[Math.floor(Math.random()*students.length)]
    console.log($favouriteStudent)

    let parentbodie = document.querySelector("body")
    parentbodie.insertBefore($favouriteStudent,$p)

})


document.querySelector("#submit").addEventListener("click", function(){
let newText = document.querySelector("#add-text").value;
let newHeaderTag = document.createElement("h1");
newHeaderTag.innerHTML = newText;

document.querySelectorAll(".new-headers")[0].appendChild(newHeaderTag)
})