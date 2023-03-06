// Import stylesheets
import './style.css';

//Gráfico de columnas. Mi 1º gráfico
var visualization = d3plus.viz()
 .container("#viz1")
 .data([{"year": 1991, "name":"alpha", "value": 15},
 {"year": 1992, "name":"alpha", "value": 20},])
 .type("bar")
 .id("name")
 .x("year")
 .y("value")
 .draw()

 d3.json("https://raw.githubusercontent.com/raul27868/07MBIG-Visualizacion-Actividades-Guiadas/master/columnas.json", function(data) {
 var visualization = d3plus.viz()
 .container("#viz2")
 .data(data)
 .type('bar')
 .id('name')
 .x('year')
 .y('value')
 .axes({ ticks: 'false' })
 .draw();
});

var data_year = [
  {"year": 1991, "name":"alpha", "count": 15},
  {"year": 1992, "name":"alpha", "count": 34},
  {"year": 1991, "name":"alpha2", "count": 17},
  {"year": 1992, "name":"alpha2", "count": 65},
  {"year": 1991, "name":"beta", "count": 10},
  {"year": 1992, "name":"beta", "count": 10},
  {"year": 1991, "name":"beta2", "count": 40},
  {"year": 1992, "name":"beta2", "count": 38},
  {"year": 1991, "name":"gamma", "count": 5},
  {"year": 1992, "name":"gamma", "count": 10},
  {"year": 1991, "name":"gamma2", "count": 20},
  {"year": 1992, "name":"gamma2", "count": 34},
  {"year": 1991, "name":"delta", "count": 50},
  {"year": 1992, "name":"delta", "count": 43},
  {"year": 1991, "name":"delta2", "count": 17},
  {"year": 1992, "name":"delta2", "count": 35}
];

var visualization = d3plus.viz()
  .container("#viz3")
  .data(data_year)
  .type("box")
  .id(["year"])
  .x({"value": "year"})
  .y({"value": "count"})
  .draw()
