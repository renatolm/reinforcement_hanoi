class Disc {
    constructor(value, currentTower, element){
        this.value = value;
        this.currentTower = currentTower;
        this.element = element;
    }
}

let discs = [1,2,3];
var stack1 = [];
var stack2 = [];
var stack3 = [];

for (let disc of discs){
    var disc_element = document.createElement("DIV");
    disc_element.setAttribute("id", "disc"+disc.toString());
    disc_element.setAttribute("class", "disc");
    hanoiArea = document.getElementById("hanoi-area");
    hanoiArea.appendChild(disc_element);
    let disc_obj = new Disc(disc, 1, disc_element);    
    stack1.push(disc_obj);

    // Make the disc elements draggable    
    dragElement(disc_element);
}

function calculateDistances(element){
    tower1 = document.getElementById('area-tower-1');
    positionTower1 = tower1.getBoundingClientRect();
    // tower1Y = tower1.offsetTop + 105;
    tower1Y = positionTower1.top +(positionTower1.height/2);
    // tower1X = tower1.offsetLeft + 165;
    tower1X = positionTower1.left+(positionTower1.width/2);

    tower2 = document.getElementById('area-tower-2');
    positionTower2 = tower2.getBoundingClientRect();
    // tower2Y = tower2.offsetTop + 105;
    tower2Y = positionTower2.top +(positionTower2.height/2);
    // tower2X = tower2.offsetLeft + 165;
    tower2X = positionTower2.left+(positionTower2.width/2);

    tower3 = document.getElementById('area-tower-3');
    positionTower3 = tower3.getBoundingClientRect();
    // tower3Y = tower3.offsetTop + 105;
    tower3Y = positionTower3.top +(positionTower3.height/2);
    // tower3X = tower3.offsetLeft + 165;
    tower3X = positionTower3.left+(positionTower3.width/2);

    positionElement = element.getBoundingClientRect();
    elementY = positionElement.top + (positionElement.height/2);
    elementX = positionElement.left + (positionElement.width/2);

    distTower1X = tower1X - elementX;
    distTower1Y = tower1Y - elementY;
    distanceTower1 = Math.floor(Math.sqrt(distTower1X*distTower1X + distTower1Y*distTower1Y));
    console.log("Distance Tower 1:",distanceTower1);

    distTower2X = tower2X - elementX;
    distTower2Y = tower2Y - elementY;
    distanceTower2 = Math.floor(Math.sqrt(distTower2X*distTower2X + distTower2Y*distTower2Y));
    console.log("Distance Tower 2:",distanceTower2);

    distTower3X = tower3X - elementX;
    distTower3Y = tower3Y - elementY;
    distanceTower3 = Math.floor(Math.sqrt(distTower3X*distTower3X + distTower3Y*distTower3Y));
    console.log("Distance Tower 3:",distanceTower3);

    if(distanceTower1<distanceTower2 && distanceTower1<distanceTower3){
        moveToTower1(element);
    }else if(distanceTower2<distanceTower1 && distanceTower2<distanceTower3){
        moveToTower2(element);
    }else{
        moveToTower3(element);
    }
}

function moveToTower1(element){
    element.style.bottom = "40px";
    element.style.left = "80px";
    element.style.top = null;
}

function moveToTower2(element){
    element.style.bottom = "40px";
    element.style.left = "313px"
    element.style.top = null;
}

function moveToTower3(element){
    element.style.bottom = "40px";
    element.style.left = "547px";
    element.style.top = null;
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // if (document.getElementById(elmnt.id + "header")) {
    //   // if present, the header is where you move the DIV from:
    //   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    // } else {
    //   // otherwise, move the DIV from anywhere inside the DIV: 
    //   elmnt.onmousedown = dragMouseDown;
    // }
    console.log(elmnt.id)
    elmnt.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;      
      calculateDistances(elmnt);
    }
  }