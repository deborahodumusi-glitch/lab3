"use strict";

// =========================================================================
// Configuration Variables
// =========================================================================
let drawingWidth = 500;
let drawingHeight = 500;

// These two variables control the snowman's position.
// Changing these values will move the entire drawing.
let snowmanX = 250;
let snowmanY = 350;

let snowmanSize = 100;

// =========================================================================
// Setup the Drawing Canvas
// =========================================================================
/*  Variable that enables you to "talk to" your SVG drawing canvas. */
let drawing = d3
  .select("#drawing")
  .append("svg")
  .attr("width", drawingWidth)
  .attr("height", drawingHeight);

/* Draw a border that matches the specified drawing area's size and fill the background. */
let border = drawing
  .append("rect")
  .attr("width", drawingWidth)
  .attr("height", drawingHeight)
  .attr("fill", "lightblue")
  .attr("stroke", "red");

// =========================================================================
// Draw and store snowman shapes without positioning them
// =========================================================================
let snowmanBody = drawing
  .append("circle")
  .attr("r", snowmanSize)
  .attr("fill", "white");

let snowmanHead = drawing
  .append("circle")
  .attr("r", snowmanSize * 0.6)
  .attr("fill", "white");

let snowmanEyeLeft = drawing
  .append("circle")
  .attr("r", snowmanSize * 0.05)
  .attr("fill", "black");

let snowmanEyeRight = drawing
  .append("circle")
  .attr("r", snowmanSize * 0.05)
  .attr("fill", "black");

let snowmanMouth = drawing
  .append("line")
  .attr("stroke", "black")
  .attr("stroke-width", 2); // Corrected attribute name

// =========================================================================
// Move snowman pieces into place relative to the configuration variables
// =========================================================================

/* 
This section positions all parts of the snowman.
The body is placed using the snowmanX and snowmanY variables.
All other parts (head, eyes, mouth) are positioned relative to the body or head.
This ensures that if snowmanX or snowmanY is changed, the entire drawing moves together.
*/

// Position the snowman's body using the main configuration variables
snowmanBody.attr("cx", snowmanX).attr("cy", snowmanY);

// Position the head relative to the snowman's body
snowmanHead
  .attr("cx", snowmanBody.attr("cx"))
  .attr("cy", Number(snowmanBody.attr("cy")) - Number(snowmanBody.attr("r")));

// Position the left eye relative to the head
snowmanEyeLeft
  .attr(
    "cx",
    Number(snowmanHead.attr("cx")) - Number(snowmanEyeLeft.attr("r")) * 3
  )
  .attr(
    "cy",
    Number(snowmanHead.attr("cy")) - Number(snowmanEyeLeft.attr("r")) * 3
  );

// Position the right eye relative to the head
// NOTE: We must wrap snowmanHead.attr("cx") in Number() because adding a number
// to a string in JavaScript results in concatenation (e.g., "100" + 5 becomes "1005").
snowmanEyeRight
  .attr(
    "cx",
    Number(snowmanHead.attr("cx")) + Number(snowmanEyeLeft.attr("r")) * 3
  )
  .attr(
    "cy",
    Number(snowmanHead.attr("cy")) - Number(snowmanEyeLeft.attr("r")) * 3
  );

// Position the mouth relative to the head
snowmanMouth
  .attr(
    "x1",
    Number(snowmanHead.attr("cx")) - Number(snowmanHead.attr("r")) * 0.5
  )
  .attr(
    "x2",
    Number(snowmanHead.attr("cx")) + Number(snowmanHead.attr("r")) * 0.5
  )
  .attr(
    "y1",
    Number(snowmanHead.attr("cy")) + Number(snowmanHead.attr("r")) * 0.2
  )
  .attr(
    "y2",
    Number(snowmanHead.attr("cy")) + Number(snowmanHead.attr("r")) * 0.2
  );
