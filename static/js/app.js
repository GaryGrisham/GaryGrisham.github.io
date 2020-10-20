//1 -  Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.


// Use sample_values as the values for the bar chart.


// Use otu_ids as the labels for the bar chart.


// Use otu_labels as the hovertext for the chart.




// 2 - Create a bubble chart that displays each sample.

// https://plotly.com/javascript/bubble-charts/

// Use otu_ids for the x values.


// Use sample_values for the y values.


// Use sample_values for the marker size.


// Use otu_ids for the marker colors.


// Use otu_labels for the text values.



var drop = d3.select('#selDataset');
drop.append('option').text()
// 3 - Display the sample metadata, i.e., an individual's demographic information.
d3.json("samples.json").then((data) => {
    console.log(data)
    names = data.names
    console.log(names)
    names.forEach((ID) => {
    drop.append('option').text(ID).property('value', ID)
    console.log(ID)    

    }


    )
    
    // var ID2 = names[0]
    // function1(ID2)
    // function2(ID2)

});

// "id": 940, "ethnicity": "Caucasian", 
// "gender": "F", "age": 24.0, "location": "Beaufort/NC", "bbtype": "I", "wfreq": 2.0
// Create an array of each ID's numbers
// var ethnicity = Object.values(data.ethnicity);
// var gender = Object.values(data.gender);
// var age = Object.values(data.age);
// var location = Object.values(data.location);
// var bbtype = Object.values(data.bbtype);
// var wfreq = Object.values(wfreq.bbtype);

// // Create an array of music provider labels
// var labels = Object.keys(data.ID);

// // Display the default plot
// function init() {
// var data = [{
// values: ID,
// labels: labels,
// type: "pie"
// }];

// var layout = {
// height: 600,
// width: 800
// };

// Plotly.newPlot("pie", data, layout);
// }

// // On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", getData);

// // Function called by DOM changes
// function getData() {
// var dropdownMenu = d3.select("#selDataset");
// // Assign the value of the dropdown menu option to a variable
// var dataset = dropdownMenu.property("value");
// // Initialize an empty array for the country's data
// var data = [];

// if (dataset == 'us') {
//     data = us;
// }
// else if (dataset == 'uk') {
//     data = uk;
// }
// else if (dataset == 'canada') {
//     data = canada;
// }
// // Call function to update the chart
// updatePlotly(data);
// }

// // Update the restyled plot's values
// function updatePlotly(newdata) {
// Plotly.restyle("pie", "values", [newdata]);
// }

// init();



var trace1 = {
x: [1, 2, 3, 4],
y: [10, 11, 12, 13],
mode: 'markers',
marker: {
    size: [40, 60, 80, 100]
}
};

var data = [trace1];

var layout = {
title: 'Marker Size',
showlegend: false,
height: 600,
width: 600
};

Plotly.newPlot('bubble', data, layout);
// define optionChanged function here to catch the value from you will need two functions to bas the parameter throught those two functions.  
// Display each key-value pair from the metadata JSON object somewhere on the page.

// def optionChanged(IDSample){
//     function1(IDSample)
//     function2(IDSample)
// }
// python -m http.server

// Some Notes:
// 9:20
// 1) Grab a reference to the dropdown select element using D3 select()
// 2) Create two functions such as function1 for creating demograpgic data and function2 for building charts/plots
// 3) Use the list of sample names to populate the select options (Create a dropdown menu list)
// 	-> Read JSON data
// 	-> Store 'names' key information from data in a variable
// 	-> Loop through through names list
// 	-> Use append method o insert 'option' tag
// 	-> Use text() to insert dropdown text
// 	-> Use property() to insert 'value'
// 4) Use the first sample from the list to build the initial plots
// 	-> call function1 and function2 while passing the first sample value from list
// 5) Define function 'optionChanged' and catch the value as a parameter when dropdown value is seleceted
// 	-> call function1 and function2 while passing the this catched parameter value
// 6) In function1 (step 2 above)->
// 	Read JSON data
// 	-> This time, read metadata key from dataset
// 		e.g: var metadata = data.metadata;
// 	-> Define steps to read the dictionary data and display it using append() method and any html tag
// 7) In function2 (step 2 above) ->
// 	Read JSON data
// 	-> This time, read metadata key from dataset
// 		e.g: var samples = data.samples;
// 	-> Define steps to create the plot/chart