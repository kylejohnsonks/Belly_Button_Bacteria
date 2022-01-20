// //create a bar graph.
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };
// var data=[trace]

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };

// Plotly.newPlot("plotArea", data, layout);



// //Create a pie chart
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };
// var data = [trace];
// var layout = {
//     title: "'Pie' Chart",
//    };
// Plotly.newPlot("plotArea", data, layout);
   




// //create a scatter plot.
var trace = {
    x: [6, 12, 9],
    y: [10, 18, 5],
    mode: 'markers',
    type: 'scatter'
 };
var data=[trace]

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotArea", data, layout);











// //Practice line graph, create arrays, store in object, load from object into newPlot
// let xArray = [1,5,10,20];
// let yArray = [100, 50, 20, 1];

// let myObj={};
// myObj["x"]=xArray;
// myObj["y"]=yArray;

// console.log(myObj)
// Plotly.newPlot("plotArea", [{x: myObj.x, y: myObj.y, tpye:"line"}]);
