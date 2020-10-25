// maping location for HTML
thedrop = d3.select("#selDataset");
demoinfo = d3.select("#sample-metadata");
visual = d3.select("#bar");
nosub= d3.select("#no_subject");


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
});

function Refresh() {
    // Let's populate the drop down

suspect = d3.select("#selDataset").property("value");

// lets log the suspect
console.log("This is taking for ever " + suspect);
console.log("\n");

// Clear the html.  

demoinfo.html("");
visual.html("");
nosub.html("");

// time for json
d3.json("samples.json").then(datag => {

// and let's get the json
samples = datag.samples;
metadata = datag.metadata;

//bring the drop down down

subject_samples=samples.filter(sample => sample.id == suspect);
subject_meta=metadata.filter(meta => meta.id == suspect);

//make the subject part of the data


console.log(subject_samples);
console.log(subject_meta);
console.log("\n");

  // demographics box goes here

Object.entries(subject_meta[0]).forEach(value => {
    //p tag addition
    panstuf = demoinfo.append("p");

    // value addition

    panstuf.text(value[0] + ": " + value[1]);
});
// time for ten samples

otus = subject_samples[0].otu_ids.splice(0,10);
otu_values = subject_samples[0].sample_values.splice(0,10).reverse();
otu_labels = subject_samples[0].otu_labels.splice(0,10).reverse();
OTU_ids = otus.map(otu_value => "OTU " + otu_value).reverse();
//Log it


console.log(otus);

console.log("\n");
// real bar graph data goes here

  var traceb = {
    x: otu_values,
    y: OTU_ids,
    text: otu_labels,
    type:"bar",
    orientation: "h",
};

bardb = [traceb];

// variable for bar graph goes here

var bbbar = {
    title: "Belly Button Top OTU",
    yaxis:{
    tickmode:"linear",
  },
};

// lets make the bar plot

Plotly.newPlot("bar", bardb, bbbar);

//Log it
console.log(bardb);
console.log(bbbar);
console.log("\n");

// the real bubble chart goes here

var tracebub = {
    x: otus,
    y: otu_values,
    mode: "markers",
    marker: {
        size: otu_values,
        color: otus
    },
    text:  otu_labels
};

var bubbled = [tracebub];

// layout for the bublle chart goes here

var bubbletime = {
    xaxis:{title: "OTU ID"},
    height: 600,
    width: 900
};

// bubble plot creation time

Plotly.newPlot("bubble", bubbled, bubbletime);

//Log it

console.log("Here is the BubbleGraph was made");
console.log(bardb);
console.log(bbbar);
console.log("\n");

});

}

// this is how the webpage knows to update the webpage

d3.select("#selDataset").on("change", Refresh)   



// python -m http.server


// var datag = [
// {
//     type: "indicator",
//     mode: "gauge+number+delta",
//     value: 6,
//     title: { text: "Non working Belly Button Washing Frequency", font: { size: 24 } },
//     delta: { reference: 5, increasing: { color: "RebeccaPurple" } },
//     gauge: {
//     axis: { range: [null, 9], tickwidth: 1, tickcolor: "rgb(66, 127, 207)" },
//     bar: { color: "rgb(66, 127, 207)" },
//     bgcolor: "white",
//     borderwidth: 2,
//     bordercolor: "gray",
//     steps: [
//         { range: [0, 1], color: "rgb(242,242,242)" },
//         { range: [1, 2], color: "rgb(253,218,236)" },
//         { range: [2, 3], color: "rgb(244,212,242)" },
//         { range: [3, 4], color: "rgb(252,180,229)" },
//         { range: [4, 5], color: "rgb(252,138,195)" },
//         { range: [5, 6], color: "rgb(231,100,250)"},
//         { range: [6, 7], color: "rgb(231,41,138)"},
//         { range: [7, 8], color: "rgb(148,52,110)"},
//         { range: [8, 9], color: "rgb(102,17,0)"}
//     ],
//     threshold: {
//         line: { color: "red", width: 4 },
//         thickness: 0.75,
//         value: 8.75
//     }
//     }
// }
// ];

// var layout = {
// width: 500,
// height: 400,
// margin: { t: 25, r: 25, l: 25, b: 25 },
// paper_bgcolor: "white",
// font: { color: "rgb(66, 127, 207)", family: "Arial" }
// };

// Plotly.newPlot('gauge', datag, layout);



// // "id": 940, "ethnicity": "Caucasian", 
// // "gender": "F", "age": 24.0, "location": "Beaufort/NC", "bbtype": "I", "wfreq": 2.0
// // Create an array of each ID's numbers
// // var ethnicity = Object.values(data.ethnicity);
// // var gender = Object.values(data.gender);
// // var age = Object.values(data.age);
// // var location = Object.values(data.location);
// // var bbtype = Object.values(data.bbtype);
// // var wfreq = Object.values(ID.wfreq);
// // console.log(wfreq)

//1 -  Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.
// var datab = [{
//     type: 'bar',
//     x: [20, 14, 23, 82, 99, 27, 50, 59, 80, 100],
//     y: ['OTU 1167', 'OTU 2859', 'OTU 482', 'OTU 2264', 'OTU 41', 'OTU 1189', 'OTU 352', 'OTU 189', 'OTU 2318', 'OTU 1977'],
//     orientation: 'h',
//     }];

// Plotly.newPlot('bar1', datab, layout);


// 2 - Create a bubble chart that displays each sample.
// https://plotly.com/javascript/bubble-charts/
// Use otu_ids for the x values.
// Use sample_values for the y values.
// Use sample_values for the marker size.
// Use otu_ids for the marker colors.
// Use otu_labels for the text values.
// var trace1 = {
//     x: [1, 2, 3, 4],
//     y: [10, 11, 12, 13],
//     mode: 'markers',
//     marker: {
//         size: [40, 60, 80, 100]
//     }
//     };
    
//     var data = [trace1];
    
//     var layout = {
//     title: { text: "OTU ID", font: { size: 24 } },
//     showlegend: false,
//     height: 600,
//     width: 600,
//     font: { color: "rgb(66, 127, 207)", family: "Arial" }
//     };
    
//     Plotly.newPlot('bubble', data, layout);