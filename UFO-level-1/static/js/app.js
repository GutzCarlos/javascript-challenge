// from data.js

var tableData = data;
console.log(data);
//var tbody = d3.select("tbody");

//data.forEach((ufoReport) => {
//  var row = tbody.append("tr");
//  Object.entries(ufoReport).forEach(([key, value]) => {
//   var cell = row.append("td");
//    cell.text(value);
//  });
// });

// Select the button
var button = d3.select("#filter-btn");

 button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(ufo => tableData.datetime === inputValue);

  console.log(filteredData);
  var tbody = d3.select("tbody");
  data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
 });
});
