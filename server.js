var express = require("express");
var cors = require("cors");

var app = express();

app.use(cors());

var lessons = [
    {
        id: 1,
        topic: "Mathematics",
        location: "Hendon",
        price: 10,
        space: 5,
        icon: "fa-solid fa-calculator",
        image: "math1.jpg"
    },
    {
        id: 2,
        topic: "Art and Drawing",
        location: "Colindale",
        price: 8,
        space: 5,
        icon: "fa-solid fa-palette",
        image: "art1.jpg"
    },
    {
        id: 3,
        topic: "Football",
        location: "Brent Cross",
        price: 12,
        space: 5,
        icon: "fa-solid fa-futbol",
        image: "football1.jpg"
    },
    {
        id: 4,
        topic: "Music",
        location: "Hendon",
        price: 15,
        space: 5,
        icon: "fa-solid fa-music",
        image: "music1.jpg"
    },
    {
        id: 5,
        topic: "Science",
        location: "Edgware",
        price: 10,
        space: 5,
        icon: "fa-solid fa-flask",
        image: "science1.jpg"
    },
    {
        id: 6,
        topic: "Coding",
        location: "Colindale",
        price: 18,
        space: 5,
        icon: "fa-solid fa-laptop-code",
        image: "code1.jpg"
    },
    {
        id: 7,
        topic: "Dance",
        location: "Finchley",
        price: 9,
        space: 5,
        icon: "fa-solid fa-person",
        image: "dance1.jpg"
    },
    {
        id: 8,
        topic: "Swimming",
        location: "Hendon",
        price: 14,
        space: 5,
        icon: "fa-solid fa-person-swimming",
        image: "swim1.jpg"
    },
    {
        id: 9,
        topic: "Drama",
        location: "Edgware",
        price: 11,
        space: 5,
        icon: "fa-solid fa-masks-theater",
        image: "drama1.jpg"
    },
    {
        id: 10,
        topic: "Chess",
        location: "Finchley",
        price: 7,
        space: 5,
        icon: "fa-solid fa-chess",
        image: "chess1.jpg"
    }
];

app.use(function(request, response) {
    console.log("In comes a request to: " + request.url);
    response.json(lessons);
});

app.listen(3000, function() {
    console.log("App started on port 3000");
});