const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=fcee2e2a0ce143989d03deb625af8a0b";

const gethtml = document.querySelector(".html");

async function getresults() {

    const collectResponse = await fetch(url);

    const results = await Response.json();

    console.log(results.all);

    const display = results.all;

    for(let i =0; i < display.lenght; i++) {
        console.log(display[i].name + display[i].rating + display[i].games_count);

        gethtml.innerHTML += `<div class="html">${display[i].name + display[i].rating + display[i].games_count}</div>`;
    }
}

getresults();