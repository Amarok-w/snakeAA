function createWrap() {
    const wrap = document.querySelector('.wrap');

    let xCord = -1;
    let yCord = 0;

    for (let i = 0; i < 100; i++) {
        if (xCord == 9) {
            yCord++;
            xCord = -1;
        }
        xCord++;


        const cell = document.createElement('div');
        cell.className = `cell x${xCord} y${yCord}`;
        wrap.append(cell);
    }
}

createWrap();

function random(min, max) {
    return ~~(Math.random() * (max - min + 1) + min);
    // include min and max
}

// plan
// create snake 3x cells
// snake move
// move control
// create fruits

let snake = [
    [0,0]
];
let direction = 0;
let snakeHead = snake[snake.length - 1];
let snakeEnd = snake[0];
let snakeRotation = [];
let rotate = false;
// 0 = down
// 1 = right
// 2 = top
// 3 = left

drawSnake();

function drawSnake() {
    let lastElementIndex = snake.length - 1;
    let i = 0;
    snake.forEach(item => {
        if (i != lastElementIndex) {
            const snakePart = document.querySelector(`.x${item[0]}.y${item[1]}`);
            snakePart.classList.remove('snake-head');
            snakePart.classList.add('snake');
        }
        else {
            const snakePart = document.querySelector(`.x${item[0]}.y${item[1]}`);
            snakePart.classList.add('snake-head');
        }
        i++;
    })
}

function moveSnake(dir, isRotated) {
    if (dir == 0) {
        const snakeDelete = document.querySelector(`.x${snake[0][0]}.y${snake[0][1]}`);
        snakeDelete.classList.remove('snake');
        snakeDelete.classList.remove('snake-head');

        snake = snake.map(item => {
        return [item[0], ++item[1]];
        })

        snakeHead = snake[snake.length - 1];
        snakeEnd = snake[0];
    }
    else if (dir == 1) {
        
        // const snakeDelete = document.querySelector(`.x${snake[0][0]}.y${snake[0][1]}`);
        // snakeDelete.classList.remove('snake');
        // snakeDelete.classList.remove('snake-head');

        // snake = snake.map(item => {
        // return [++item[0], item[1]];
        // })
        
        // const snakeDelete = document.querySelector(`.x${snake[0][0]}.y${snake[0][1]}`);
        // snakeDelete.classList.remove('snake');
        // snakeDelete.classList.remove('snake-head');

        // snake[snake.length - 1][0] = snake[snake.length - 1][0] + 1;

        if (snakeEnd != snakeRotation) {
            const snakeDelete = document.querySelector(`.x${snake[0][0]}.y${snake[0][1]}`);
            snakeDelete.classList.remove('snake');
            snakeDelete.classList.remove('snake-head');

            snake = snake.map(item => {
            return [item[0], ++item[1]];
        })

            snakeHead = snake[snake.length - 1];
            snakeEnd = snake[0];
        }
        else {


            const snakeDelete = document.querySelector(`.x${snake[0][0]}.y${snake[0][1]}`);
            snakeDelete.classList.remove('snake');
            snakeDelete.classList.remove('snake-head');

            snake[snake.length - 1][0] = snake[snake.length - 1][0] + 1;
            // snake = snake.map(item => {
            // return [++item[0], item[1]];
        
    }

        // const snakeDelete = document.querySelector(`.x${snake[0][0]}.y${snake[0][1]}`);
        // snakeDelete.classList.remove('snake');
        // snakeDelete.classList.remove('snake-head');

        // snake = snake.map(item => {
        // return [++item[0], item[1]];
        // })
    }
}

document.addEventListener('keydown', event => {
    if (event.keyCode == 68) {

        direction = 1;
        snakeRotation = snakeHead;
        console.log(direction);
    }
})

setInterval(() => {
    moveSnake(direction);
    drawSnake();

}, 1000)


//drawSnake();