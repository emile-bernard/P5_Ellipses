let selectedEllipseNumber = 1;

let totalEllipsesCount = 600;
let spacing = 20;

function setup(){
    createCanvas(windowWidth, windowHeight);

    setupLabel();
    setupButtons();
}

function setupLabel() {
    let myDiv = createDiv('Selection:');
    myDiv.style('position', 20, spacing);
}

function setupButtons() {
    let ellipseButton1 = createButton('1');
    ellipseButton1.style('background-color', '#ffcad2');
    ellipseButton1.style('text-color', '#000000');
    ellipseButton1.position(100, spacing);
    ellipseButton1.mousePressed(function() { setSelectedEllipse(1);});

    let ellipseButton2 = createButton('2');
    ellipseButton2.style('background-color', '#ffcad2');
    ellipseButton2.style('text-color', '#000000');
    ellipseButton2.position(140, spacing);
    ellipseButton2.mousePressed(function() { setSelectedEllipse(2);});

    let ellipseButton3 = createButton('3');
    ellipseButton3.style('background-color', '#ffcad2');
    ellipseButton3.style('text-color', '#000000');
    ellipseButton3.position(180, spacing);
    ellipseButton3.mousePressed(function() { setSelectedEllipse(3);});

    let ellipseButton4 = createButton('4');
    ellipseButton4.style('background-color', '#ffcad2');
    ellipseButton4.style('text-color', '#000000');
    ellipseButton4.position(220, spacing);
    ellipseButton4.mousePressed(function() { setSelectedEllipse(4);});

    let ellipseButton5 = createButton('5');
    ellipseButton5.style('background-color', '#ffcad2');
    ellipseButton5.style('text-color', '#000000');
    ellipseButton5.position(260, spacing);
    ellipseButton5.mousePressed(function() { setSelectedEllipse(5);});
}

function setSelectedEllipse(ellipseNum) {
    selectedEllipseNumber = ellipseNum;
    clear();
}

function draw(){
    stroke('#ff1269');
    noFill();
    drawEllipses(selectedEllipseNumber);
}

function drawEllipses(selectedEllipseNumber) {
    if(selectedEllipseNumber === 1) {
        for(let count=0; count<=totalEllipsesCount; count+=spacing) {
            ellipse(count, 300, 250);
        }
        console.log(selectedEllipseNumber);
    } else if (selectedEllipseNumber === 2) {
        for(let count=0; count<=totalEllipsesCount; count+=spacing) {
            ellipse(count, 300, count/2);
        }
    } else if (selectedEllipseNumber === 3) {
        for(let count=0; count<=totalEllipsesCount; count+=spacing) {
            ellipse(count, 300, count);
        }
    } else if (selectedEllipseNumber === 4) {
        for(let count=0; count<=totalEllipsesCount; count+=spacing) {
            ellipse(count, 300, count*2);
        }
    } else if (selectedEllipseNumber === 5) {
        for(let count=0; count<=totalEllipsesCount; count+=spacing) {
            ellipse(count, 300, count*3);
        }
    }
}
