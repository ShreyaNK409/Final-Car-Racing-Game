canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;
car2_width = 120;
car2_height = 70;
car2_image = "download.png";
car2_x = 10;
car2_y = 100;
background_image = "race court.jpg";

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // when the variable is loaded with image, function is called
    background_imgTag.src = background_image; // load the variable with image

    car1_imgTag = new Image(); //defining a variable with a new image
    car1_imgTag.onload = uploadcar1; // when the variable is loaded with image, function is called
    car1_imgTag.src = car1_image; // load the variable with image

    car2_imgTag = new Image(); //defining a variable with a new image
    car2_imgTag.onload = uploadcar2; // when the variable is loaded with image, function is called
    car2_imgTag.src = car2_image; // load the variable with image
}



function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1up();
        console.log("car1up");
    }
    if (keyPressed == '40') {
        car1down();
        console.log("car1down");
    }
    if (keyPressed == '37') {
        car1left();
        console.log("car1left");
    }
    if (keyPressed == '39') {
        car1right();
        console.log("car1right");
    }

    if (keyPressed == '87') {
        car2up();
        console.log("car2up");
    }
    if (keyPressed == '83') {
        car2down();
        console.log("car2down");
    }

    if (keyPressed == '65') {
        car2left();
        console.log("car2left");
    }

    if (keyPressed == '68') {
        car2right();
        console.log("car2right");
    }

    if (car1_x > 700) {
        console.log("car1");
        document.getElementById('Score').innerHTML = "Car 1 Won!!";

    } else if (car2_x > 700) {
        console.log("car2");
        document.getElementById('Score').innerHTML = "Car 2 Won!!";
    }
}

function car1up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed,  x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}


function car1down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed,  x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}


function car1left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed,  x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}


function car1right() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed,  x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2up() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When up arrow is pressed,  x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function car2down() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        console.log("When down arrow is pressed,  x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}


function car2left() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("When left arrow is pressed,  x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}


function car2right() {
    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        console.log("When right arrow is pressed,  x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}