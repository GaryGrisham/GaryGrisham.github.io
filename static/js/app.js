//1 -  Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.
var datab = [{
    type: 'bar',
    x: [20, 14, 23, 82, 99, 27, 50, 59, 80, 100],
    y: ['OTU 1167', 'OTU 2859', 'OTU 482', 'OTU 2264', 'OTU 41', 'OTU 1189', 'OTU 352', 'OTU 189', 'OTU 2318', 'OTU 1977'],
    orientation: 'h',
    }];

Plotly.newPlot('bar1', datab, layout);


// 2 - Create a bubble chart that displays each sample.
// https://plotly.com/javascript/bubble-charts/
// Use otu_ids for the x values.
// Use sample_values for the y values.
// Use sample_values for the marker size.
// Use otu_ids for the marker colors.
// Use otu_labels for the text values.
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
    title: { text: "OTU ID", font: { size: 24 } },
    showlegend: false,
    height: 600,
    width: 600,
    font: { color: "rgb(66, 127, 207)", family: "Arial" }
    };
    
    Plotly.newPlot('bubble', data, layout);


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
// var wfreq = Object.values(ID.wfreq);
// console.log(wfreq)

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
// d3.selectAll("#selDataset").on("change", ID;

// // // Function called by DOM changes
// function getData() {
//     var dropdownMenu = d3.select("#selDataset");
// // // Assign the value of the dropdown menu option to a variable
//     var dataset = dropdownMenu.property("value");
// // // Initialize an empty array for the country's data
//     var data = [];

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
// define optionChanged function here to catch the value from you will need two functions to bas the parameter throught those two functions.  
// Display each key-value pair from the metadata JSON object somewhere on the page.

// def optionChanged(IDSample){
//     function1(IDSample)
//     function2(IDSample)
// }
// python -m http.server


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

var datag = [
{
    type: "indicator",
    mode: "gauge+number+delta",
    value: 6,
    title: { text: "Belly Button Washing Frequency", font: { size: 24 } },
    delta: { reference: 5, increasing: { color: "RebeccaPurple" } },
    gauge: {
    axis: { range: [null, 9], tickwidth: 1, tickcolor: "rgb(66, 127, 207)" },
    bar: { color: "rgb(66, 127, 207)" },
    bgcolor: "white",
    borderwidth: 2,
    bordercolor: "gray",
    steps: [
        { range: [0, 1], color: "rgb(242,242,242)" },
        { range: [1, 2], color: "rgb(253,218,236)" },
        { range: [2, 3], color: "rgb(244,212,242)" },
        { range: [3, 4], color: "rgb(252,180,229)" },
        { range: [4, 5], color: "rgb(252,138,195)" },
        { range: [5, 6], color: "rgb(231,100,250)"},
        { range: [6, 7], color: "rgb(231,41,138)"},
        { range: [7, 8], color: "rgb(148,52,110)"},
        { range: [8, 9], color: "rgb(102,17,0)"}
    ],
    threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
        value: 8.75
    }
    }
}
];

var layout = {
width: 500,
height: 400,
margin: { t: 25, r: 25, l: 25, b: 25 },
paper_bgcolor: "white",
font: { color: "rgb(66, 127, 207)", family: "Arial" }
};

Plotly.newPlot('gauge', datag, layout);