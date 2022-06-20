// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data  and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

  // Use this function to filter the table when data is entered.

function filterTable() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let cityText = d3.select("#city").property("value");
    let stateText = d3.select("#state").property("value");
    let countryText = d3.select("#country").property("value");
    let shapeText = d3.select("#shape").property("value");

   // Set the filtered data to the tableData.
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };

    if (cityText) {
      filteredData = filteredData.filter(row => row.city === cityText);
    };

    if (stateText) {
      filteredData = filteredData.filter(row => row.state === stateText);
    };

    if (countryText) {
      filteredData = filteredData.filter(row => row.country === countryText);
    };

    if (shapeText) {
      filteredData = filteredData.filter(row => row.shape === shapeText);
    };

    
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };  

  // Attach an event to listen for the form button
//d3.selectAll("#filter-btn").on("click", handleClick);

//Attach an event to listen for changes to each filter

d3.selectAll("input").on("click", filterTable);
// Build the table when the page loads
buildTable(tableData);