import { series } from './data.js';
import { Serie } from './Serie.js';

let seriesTableBody:HTMLElement = document.getElementById("tbody")!;
let prom:number = 0;
let cant:number = 0;
series.forEach(ser => {
    let row = document.createElement('tr');
    row.innerHTML=`<th>${ser.id}</th>
    <td><button type="button" class="btn btn-link text-left" id = "${ser.id}">${ser.name}</button></td>
    <td>${ser.channel}</td>
    <td>${ser.seasons}</td>`
    seriesTableBody.appendChild(row);
    prom += ser.seasons;
    cant++;
})
let row = document.createElement('tr');
row.innerHTML=`<th>Seasons average: </th>
<td>${prom/cant}</td>`
seriesTableBody.appendChild(row);



let card:HTMLElement = document.getElementById("card")!;

let btn1:HTMLElement = document.getElementById("1")!;
btn1.onclick = () => {showDetail(series[0])!;};
let btn2:HTMLElement = document.getElementById("2")!;
btn2.onclick = () => {showDetail(series[1])!;};
let btn3:HTMLElement = document.getElementById("3")!;
btn3.onclick = () => {showDetail(series[2])!;};
let btn4:HTMLElement = document.getElementById("4")!;
btn4.onclick = () => {showDetail(series[3])!;};
let btn5:HTMLElement = document.getElementById("5")!;
btn5.onclick = () => {showDetail(series[4])!;};
let btn6:HTMLElement = document.getElementById("6")!;
btn6.onclick = () => {showDetail(series[5])!;};

function onClick(serie : Serie) {
    const img = document.getElementById('card-img')! as HTMLImageElement;
    const name = document.getElementById('card-name')!;
    const description = document.getElementById('card-desc')!;
    const link = document.getElementById('card-link')!;
    img.src = serie.image;
    name.innerHTML = serie.name;
    description.innerHTML = serie.description;
    link.setAttribute('href', serie.link);
    const card = document.getElementById('card')!;
    card.classList.remove('d-none');
}

function showDetail(serie: Serie):void{
    card.getElementsByTagName("div")[0].remove();
    let newCard:HTMLElement = document.createElement("div");
    newCard.setAttribute("class", "card");
    newCard.setAttribute("style", "width: 300px;");
    newCard.innerHTML= `<img class="card-img-top" src="${serie.image}" alt="Image"/>
                        <div class="card-body">
                        <h2 class="card-title">${serie.name}</h2>
                        <p class="card-text">${serie.description}</p>
                        <a href=${serie.link}>${serie.link}</a>
                        </div>`
    card.appendChild(newCard);

}
    
