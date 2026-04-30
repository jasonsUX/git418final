"use strict";

$(function(){
    $("#info").tabs();
    fetchDogs();
});

let carouselInfo = document.getElementById("carousel");

let dogs = [];

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
        dogs = data;
        getRandomDogs();
    })
}
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

let selectedDogs = [];

let numOfDogs = 0;

function getRandomDogs(){
    while(numOfDogs < 3){
        let random = getRandomIntInclusive(0, 5);
        if(selectedDogs.indexOf(dogs[random])=== -1){
            selectedDogs.push(dogs[random]);
            numOfDogs++;
        }else{
            getRandomDogs();
        }
    }
    displayDogs();
}

function displayDogs(){
    let string = "";
        for(let i = 0; i < 3; i++){
            string += `
            <section>
                <img src="${selectedDogs[i].image}" alt="${selectedDogs[i].imgalt}">
                <h2>${selectedDogs[i].name}</h2>
                <p>${selectedDogs[i].desc}</p>            
            </section>`
        }
        carouselInfo.innerHTML = string;
    getCarousel();
}

function getCarousel(){
    $("#carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
    });
}

let lightDrk = document.getElementById("lightDark");
let docBody = document.body;  
let docHTML = document.querySelector("html");
let info = document.getElementById("info")
let h1 = document.querySelector("h1 > a");
let nav = document.querySelectorAll("nav li > a");

lightDrk.addEventListener("click", function(){
        docBody.classList.toggle("invert");
        docHTML.classList.toggle("dark");
        info.classList.toggle("dark");
        h1.classList.toggle("dark");
        nav.forEach(item => {
            item.classList.toggle("dark");
        });
    
        let dark = docHTML.classList.contains("dark");

        if(!dark){
            localStorage.setItem("mode", "light");
        }else{
            localStorage.setItem("mode", "dark");
        }
});

document.addEventListener("DOMContentLoaded", function (){

    let prefMode = localStorage.getItem("mode");

    if(prefMode === "dark") {
        docBody.classList.add("invert");
        docHTML.classList.add("dark");
        info.classList.add("dark");
        h1.classList.add("dark");
        nav.forEach(item => {
            item.classList.add("dark");
        });
    }else{
        docBody.classList.remove("invert");
        docHTML.classList.remove("dark");
        info.classList.remove("dark");
        h1.classList.remove("dark");
        nav.forEach(item => {
            item.classList.remove("dark");
        });
    }
});