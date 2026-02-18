let text;
switch (1) {
  case 0:
    text = "This is zero";
    break;
  case 1:
    text = "This is one";
  case 2:
    text = "This is two";
    break;
  default:
    text = "No matches found!";
}
console.log(text);

// Output: This is two(switch(1) means JS looks for a case that matches 1. It finds case 1 & sets text as "This is one". But there is no break, so it keeps going (falls through) into case 2 & overwrites the value.)
