let button;
var on = false;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  button = createButton('GO TO THE DOCTOR');
  button.position(100, 200);
  button.mousePressed(button = createButton('YOUR DOCTOR HAS REFERRED YOU TO A SPECIALIST'));
  button.position(300, 500);
  button.mousePressed();
  button.size(400,200)
  button.size(200,100)
}
function draw() {
  background(220);


}
