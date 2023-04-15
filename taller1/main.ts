import { Serie, series } from "./serie.js";

const myTable = document.getElementById("mytbody") as HTMLTableElement;
const mySpan = document.getElementById("avergae") as HTMLSpanElement;

for (let index = 0; index < series.length; index++) {
    myTable.innerHTML += `<tr>
                            <td> ${series[index].id} </td>
                            <td>  <a href="#" >${series[index].nombre}</a> </td>
                            <td> ${series[index].canal} </td>
                            <td> ${series[index].temporadas} </td>
                        </tr>`;
    
}

function calculateSeasonAverage(series:Serie[]) : number{
    
    let average : number = 0;

    for (let index = 0; index < series.length; index++) { average += series[index].temporadas}

    average = average/series.length;

    return average;
}

mySpan.innerText = calculateSeasonAverage(series).toString();

