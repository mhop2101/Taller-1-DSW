import { series } from "./serie.js";
var myTable = document.getElementById("mytbody");
var mySpan = document.getElementById("avergae");
for (var index = 0; index < series.length; index++) {
    myTable.innerHTML += "<tr>\n                            <td> ".concat(series[index].id, " </td>\n                            <td>  <a href=\"#\" >").concat(series[index].nombre, "</a> </td>\n                            <td> ").concat(series[index].canal, " </td>\n                            <td> ").concat(series[index].temporadas, " </td>\n                        </tr>");
}
function calculateSeasonAverage(series) {
    var average = 0;
    for (var index = 0; index < series.length; index++) {
        average += series[index].temporadas;
    }
    average = average / series.length;
    return average;
}
mySpan.innerText = calculateSeasonAverage(series).toString();
