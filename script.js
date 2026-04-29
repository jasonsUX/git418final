$(function(){
    $("#info").tabs();
    fetchDogs();
});

let carouselInfo = document.getElementById("carousel");

function fetchDogs(){
    fetch("dogs.json")

    // .then(response => {
    //     if(!response.ok){
    //         throw new Error("Network has received an error");
    //     }
    //     return response.json();
    // })

    .then(response => response.json())

    // console.log(data)

    .then(data =>{
        console.log(data)
    })
}

function getRandomDogs(){
    
}

function displayDogs(){
    let string = "";
        for(let i = 0; i < 3; i++){
            string += `
            <section>
                <img src="${data[i].image}" alt="${data[i].imgalt}">
                <h2>${data[i].name}</h2>
                <p>${data[i].desc}</p>            
            </section>`
        }
        carouselInfo.innerHTML += string;
}