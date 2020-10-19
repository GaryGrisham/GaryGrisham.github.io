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

// define optionChanged function here to catch the value from you will need two functions to bas the parameter throught those two functions.  
// Display each key-value pair from the metadata JSON object somewhere on the page.

// def optionChanged(IDSample){
//     function1(IDSample)
//     function2(IDSample)
// }
// python -m http.server