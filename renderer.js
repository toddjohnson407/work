
var icon_1 = document.getElementById("tv");
var icon_2 = document.getElementById("alien");
var icon_3 = document.getElementById("peace");

var random_icon = Math.floor(Math.random() * 2);

if (random_icon == 0) {
  dragElement(icon_1);
  icon_1.style.visibility='visible';
  icon_2.style.visibility='hidden';
  icon_3.style.visibility='hidden';
}
else if (random_icon == 1) {
  dragElement(icon_2);
  icon_2.style.visibility='visible';
  icon_1.style.visibility='hidden';
  icon_3.style.visibility='hidden';
}
else {
  dragElement(icon_3);
  icon_3.style.visibility='visible';
  icon_1.style.visibility='hidden';
  icon_2.style.visibility='hidden';
}


function dragElement(element) {
  var position_1 = 0;
  var position_2 = 0;
  var position_3 = 0;
  var position_4 = 0;

  if (document.getElementById(element.id)) {
    document.getElementById(element.id).onmousedown = dragMouseDown;
  }
  else {
    element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(elem) {
    elem = elem || window.event;
    elem.preventDefault();
    // get mouse cursor position at start
    position_3 = elem.clientX;
    position_4 = elem.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(elem) {
    elem = elem || window.event;
    elem.preventDefault();
    // get new cursor postion
    position_1 = position_3 - elem.clientX;
    position_2 = position_4 - elem.clientY;
    position_3 = elem.clientX;
    position_4 = elem.clientY;
    // set new elem position
    element.style.top = (element.offsetTop - position_2) + "px";
    element.style.left = (element.offsetLeft - position_1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
