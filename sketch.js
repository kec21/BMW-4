


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
  button2.mousePressed(labwork2);
  let button3 = createButton("YOUR DOCTOR HAS REFERRED YOU TO A SPECIALIST");
  button3.id("specialist3Button");
  button3.mousePressed(labwork3);
}

function labwork() {
  let button4 = createButton("YOUR SPECIALIST HAS ORDERED LABWORK");
  button4.id("labworkButton");
  button4.mousePressed(scan1);
}

function labwork2() {
  let button5 = createButton("YOUR SPECIALIST HAS ORDERED LABWORK");
  button5.id("labwork2Button");
  button5.mousPressed(scan2);
}

function labwork3() {
  let button6 = createButton("YOUR SPECIALIST HAS ORDERED LABWORK");
  button6.id("labwork3Button");
  button6.mousePressed(scan3);
}

function scan1() {
  let button7 = createButton("YOUR LABS ARE NORMAL, YOUR SPECIALIST HAS ORDERED A SCAN");
  button7.id("scan1Button");
}

function scan2() {
  let button8 = createButton("YOUR LABS ARE NORMAL, YOUR SPECIALIST HAS ORDERED A SCAN");
  button8.id("scan2Button");
}

function scan3() {
  let button9 = createButton("YOUR LABS ARE NORMAL, YOUR SPECIALIST HAS ORDERED A SCAN");
  button9.id("scan3Button");
}




