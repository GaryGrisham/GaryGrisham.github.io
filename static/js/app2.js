//1 -  Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.


// Use sample_values as the values for the bar chart.


// Use otu_ids as the labels for the bar chart.


// Use otu_labels as the hovertext for the chart.
var datab = [{
    type: 'bar',
    x: [20, 14, 23],
    y: ['OTU 1167', 'OTU 2859', 'OTU 482', 'OTU 2264', 'OTU 41', 'OTU 1189', 'OTU 352', 'OTU 189', 'OTU 2318', 'OTU 1977'],
    orientation: 'h',
    }];
    
    Plotly.newPlot('bar1', datab, layout);
    
    var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    mode: 'markers',
    marker: {
        size: [40, 60, 80, 100]
    }
    };