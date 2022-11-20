
function setup() {
  createCanvas(1000, 1000);
  background(0);
  let button = createButton('GO TO THE DOCTOR');
  button.id("doctorButton");
  button.mousePressed(doctorClicked);
}
function draw() {
  background(220);

}

function doctorClicked() {
  let button1 = createButton("YOUR DOCTOR HAS REFERRED YOU TO A SPECIALIST");
  button1.id("specialist1Button");
  button1.mousePressed(labwork);
  let button2 = createButton("YOUR DOCTOR HAS REFERRED YOU TO A SPECIALIST");
  button2.id("specialist2Button");
  let button3 = createButton("YOUR DOCTOR HAS REFERRED YOU TO A SPECIALIST");
  button3.id("specialist3Button");
}

function labwork() {
  let button4 = createButton("YOUR SPECIALIST HAS ORDERED LABWORK");
  button4.id("labworkButton");
}




