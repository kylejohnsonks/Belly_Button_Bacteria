

let xArray = [1,5,10,20];
let yArray = [100, 50, 20, 1];

let myObj={};
myObj["x"]=xArray;
myObj["y"]=yArray;

console.log(myObj)
Plotly.newPlot("plotArea", [{x: myObj.x, y: myObj.y}]);
