import { series } from './data.js';
var seriesTableBody = document.getElementById("tbody");
var prom = 0;
var cant = 0;
series.forEach(function (ser) {
    var row = document.createElement('tr');
    row.innerHTML = "<th>".concat(ser.id, "</th>\n    <td><button type=\"button\" class=\"btn btn-link text-left\" id = \"").concat(ser.id, "\">").concat(ser.name, "</button></td>\n    <td>").concat(ser.channel, "</td>\n    <td>").concat(ser.seasons, "</td>");
    seriesTableBody.appendChild(row);
    prom += ser.seasons;
    cant++;
});
var row = document.createElement('tr');
row.innerHTML = "<th>Seasons average: </th>\n<td>".concat(prom / cant, "</td>");
seriesTableBody.appendChild(row);
var card = document.getElementById("card");
var btn1 = document.getElementById("1");
btn1.onclick = function () { showDetail(series[0]); };
var btn2 = document.getElementById("2");
btn2.onclick = function () { showDetail(series[1]); };
var btn3 = document.getElementById("3");
btn3.onclick = function () { showDetail(series[2]); };
var btn4 = document.getElementById("4");
btn4.onclick = function () { showDetail(series[3]); };
var btn5 = document.getElementById("5");
btn5.onclick = function () { showDetail(series[4]); };
var btn6 = document.getElementById("6");
btn6.onclick = function () { showDetail(series[5]); };
function onClick(serie) {
    var img = document.getElementById('card-img');
    var name = document.getElementById('card-name');
    var description = document.getElementById('card-desc');
    var link = document.getElementById('card-link');
    img.src = serie.image;
    name.innerHTML = serie.name;
    description.innerHTML = serie.description;
    link.setAttribute('href', serie.link);
    var card = document.getElementById('card');
    card.classList.remove('d-none');
}
function showDetail(serie) {
    card.getElementsByTagName("div")[0].remove();
    var newCard = document.createElement("div");
    newCard.setAttribute("class", "card");
    newCard.setAttribute("style", "width: 300px;");
    newCard.innerHTML = "<img class=\"card-img-top\" src=\"".concat(serie.image, "\" alt=\"Image\"/>\n                        <div class=\"card-body\">\n                        <h2 class=\"card-title\">").concat(serie.name, "</h2>\n                        <p class=\"card-text\">").concat(serie.description, "</p>\n                        <a href=").concat(serie.link, ">").concat(serie.link, "</a>\n                        </div>");
    card.appendChild(newCard);
}
