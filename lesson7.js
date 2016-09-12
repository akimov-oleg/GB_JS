"use strict";

// create set of style classes
var cssClasses =
  " .basis  {width:30px; height:32px; border:1px solid black;" +
  " font-size:30px; padding:15px; font-family:Windows}" +
  ".black {background-color:grey; color:black;}" +
  ".white {background-color:white; color:black;}" +
  ".continueRow {float:left;}" + 
  ".newRow {float:none; width:500px}";

// add new styles
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = cssClasses;
document.getElementsByTagName('head')[0].appendChild(style);


// creation of new cell; 1st parameter - white color of cell (true - white, false - black), 
// 2nd parameter - identifier
// 3rd parameter - div - row

function newCell(cellColor, divId, row)
{
  var div = document.createElement("div");
  var cssClass = "basis " + (cellColor ?  "white " : "black ") + "continueRow ";
  console.log(cssClass);
  div.className = cssClass;
  div.id = "cell_" + divId.toString();
  row.appendChild(div);
  return div.id;
}

// create chess board
// start from black cell at the top left corner

var currentCellColor = false;
var divider; //cells row div
for (var i = 1; i <= 64; i++)
{
  // start new row at ever 8th cell  
  var startNewRow = i % 8 == 1;
  if (startNewRow) // new row starts with separate float-none div 
  {
    divider = document.createElement("div");
    divider.className = "newRow";
    document.body.appendChild(divider);
  };
  
  // when new row is starting, cell has color of previous cell,
  // else switch colors
  if (!startNewRow) {currentCellColor = !currentCellColor};
  
  newCell(currentCellColor, i, divider) 
  
}

// put pawes
for (var i = 1; i <= 8; i++)
{
  document.getElementById("cell_" + (i + 48)).innerHTML = '\u2659'; //white
  document.getElementById("cell_" + (i +  8)).innerHTML = '\u265f'; //black
}

// put other figures
function putFigure(divId, charSymbol) 
{
  var currentDiv = document.getElementById("cell_" + divId);
  currentDiv.innerHTML = charSymbol;
}

putFigure(57, "\u2656");putFigure(64, "\u2656"); // white rooks
putFigure(58, "\u2658");putFigure(63, "\u2658"); // white knights
putFigure(59, "\u2657");putFigure(62, "\u2657"); // white bishops
putFigure(60, "\u2654");putFigure(61, "\u2655"); // white king & queen

putFigure(1, "\u265C");putFigure(8, "\u265C"); // black rooks
putFigure(2, "\u265E");putFigure(7, "\u265E"); // black knights
putFigure(3, "\u265D");putFigure(6, "\u265D"); // black bishops
putFigure(4, "\u265A");putFigure(5, "\u265B"); // black king & queen
