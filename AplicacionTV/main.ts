import { dataSeries } from "./dataSeries.js";

var seriesTbody = document.getElementById('series');
var avgSeasons = document.getElementById("average-seasons");
renderSeriesInTable(dataSeries);
avgSeasons.innerHTML = "" + getAverageSeasons(dataSeries);


function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + serie.id + "</td>\n   <td>" + serie.name + "</td>\n     <td>" + serie.channel + "</td>\n    <td>" + serie.seasons + "</td>";
        seriesTbody.appendChild(trElement);
    });
}


function getAverageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function(serie) {totalSeasons = totalSeasons + serie.seasons;})
    return totalSeasons/series.length;
}

