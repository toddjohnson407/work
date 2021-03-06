
//TODO: New Grade: 4/5 spaghettios
//          + good job on using a container for the colors!
//          - icon 3 is never picked because you did the math wrong.
//          + your git commit message was very descriptive! good job! :-)
//
//      NOTES:
//        > I am using TODO: because many text editors highlight it, and add it to a list, called the "tasklist"
//            > TODO is really nice in comments because you can use it to add things to a todo list
//        > I got an error from electron saying: cannot load file of type scss
//            > I had to create an identical file named index.css and everything worked after that :-)

//TODO: never use ambiguous names like this. Always use descriptive names, or else your code will become a nightmare to work with
var icon_1 = document.getElementById("tv");
var icon_2 = document.getElementById("alien");
var icon_3 = document.getElementById("peace");

//TODO: you can do this like this:
//colors = {
//  a: 'green',
//  b: 'blue',
//  c: 'pink',
//  d: 'red'
//}
var colors = {};

colors.a = "green";
colors.b = "blue";
colors.c = "pink";
colors.d = "red";

console.log(colors.a);

var random_icon = Math.floor(Math.random() * 2);
//TODO: because you are flooring the random function, it will never be 2 (because Math.random() returns 0 -> 1, which you are multiplying by 2... 0.99 * 2 == 1.98... Math.floor(1.98) == 1)

//TODO: because random_icon will never be 2 (it will only ever be 0 or 1) it will never choose the peace sign.
if (random_icon == 0) {
    //TODO: this code is repetitive, which means you should move it to a function or an object
    //          In object oriented programming, you should always try to make things as modular as possible.

    //TODO: you mentioned it in your text to me, and you were right. Whenever you are dealing with a group
    //          of objects or information you should use some sort of container that you can iterate through,
    //          in this case I would have used an array.

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
else { //bonus points for efficiency! this saves like a picosecond, because it doesn't have to perform another if statement
       //       be very careful to be sure that you have eliminated all other outcomes by this point though.
  dragElement(icon_3);
  icon_3.style.visibility='visible';
  icon_1.style.visibility='hidden';
  icon_2.style.visibility='hidden';
}

//TODO: good, descriptive function alias!
function dragElement(element) {

  var position_1 = 0;
  var position_2 = 0;
  var position_3 = 0;
  var position_4 = 0;

    //TODO: this would be a perfect place to use javascript's object property attachment
  //I would have done it this way
  /*
  var position;
  position.a = 0;
  position.b = 0;
  position.c = 0;
  position.d = 0;

  OR (even better, because you can actually tell what the variables are for)

  var oldPosition;
  oldPosition.x = 0;
  oldPosition.y = 0;
  var newPosition;
  newPosition.x = 0;
  newPosition.y = 0;

  then you can access them by typing:
  position.a == 4;
  position.b = 3;
  newPosition.x = 3;
  etc.
  */

  //TODO: this code is really nice! I don't know if you copied it or not, but this kind of succinct code is what you should strive for.
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
    // change color based on new X coordinate positioning of icon.
    if (position_3 > 400) {
      document.body.style.backgroundColor = colors.a;
    }
    else if (position_3 > 200) {
      document.body.style.backgroundColor = colors.b;
    }
    else if (position_3 > 100) {
      document.body.style.backgroundColor = colors.c;
    }
    else {
      document.body.style.backgroundColor = colors.d;
    }
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
