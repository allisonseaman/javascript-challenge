// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
data.forEach(function(ufoSighting) {
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
var text = d3.select("ufobutton").on("click", function() {
    var dateTime = d3.select("#datetime");
    var button = d3.select("#filter");
    console.log(button);
    console.log(dateTime);
    tbody.html('');

    data.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      

});