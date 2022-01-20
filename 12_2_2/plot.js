// Sort the cities in descending order of population growth.
var decGrowths = cityGrowths.sort((a,b)=>b-a);
console.log(decGrowths);

// Select only the top five cities in terms of growth.
var top5 =decGrowths.slice(0,5);

// Create separate arrays for the city names and their population growths.
var cityNames=top5.map(it=>it.City);
var cityGrowths=top5.map(it=>it.Increase_from_2016);

// Use Plotly to create a bar chart with these arrays.
var trace ={
    x: cityNames,
    y: cityGrowths,
    type: "bar"
};

var layout={
    title:"Fastest Growing Cities in 2017"
};

var data=[trace];


Plotly.newPlot("bar-plot", data, layout);