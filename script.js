function createWrap() {
    const wrap = document.querySelector('.wrap');
    wrap.innerHTML = '';

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
function random(min, max) {
    return ~~(Math.random() * (max - min + 1) + min);
    // include min and max
}

let snake = [
    [0,2],
    [0,1],
    [0,0]
];
let lastDirection = '';
let direction = 'down';
// let isRotated = false;
let rotatePoint = [];

function drawSnake() {
    createWrap();

    for (let i = 0; i < snake.length; i++) {
        if (i == 0) {
            let snakeHead = document.querySelector(`.x${snake[i][0]}.y${snake[i][1]}`);
            snakeHead.classList.add('snake-head');
        } else {
            let snakeBody = document.querySelector(`.x${snake[i][0]}.y${snake[i][1]}`);
            snakeBody.classList.add('snake');
        }
    }
}

function moveSnake(dir) {
    
    if (dir == 'right') {
        if (lastDirection == 'down') {
            for (let i = 0; i < snake.length; i++) {
                if (snake[i][1] != rotatePoint[1]) {
                    snake[i][1]++;
                }
                else {
                    snake[i][0]++;
                }
            }
        } else if (lastDirection == 'up') {
            for (let i = 0; i < snake.length; i++) {
                if (snake[i][1] != rotatePoint[1]) {
                    snake[i][1]--;
                }
                else {
                    snake[i][0]++;
                }
            }
        }
    }
    if (dir == 'down') {
        if (lastDirection == 'right') {
            for (let i = 0; i < snake.length; i++) {
                if (snake[i][0] != rotatePoint[0]) {
                    snake[i][0]++;
                } else {
                    snake[i][1]++;
                }
            }
        } else if (lastDirection == 'left') {
            for (let i = 0; i < snake.length; i++) {
                if (snake[i][0] != rotatePoint[0]) {
                    snake[i][0]--;
                } else {
                    snake[i][1]++;
                }
            }
        } else {
            for (let i = 0; i < snake.length; i++) {
                snake[i][1]++;
            }
        }
    }
    if (dir == 'left') {
        if (lastDirection == 'down') {
            for (let i = 0; i < snake.length; i++) {
                if (snake[i][1] != rotatePoint[1]) {
                    snake[i][1]++;
                }
                else {
                    snake[i][0]--;
                }
            }
        } else if (lastDirection == 'up') {
            for (let i = 0; i < snake.length; i++) {
                if (snake[i][1] != rotatePoint[1]) {
                    snake[i][1]--;
                }
                else {
                    snake[i][0]--;
                }
            }
        }
    }
    if (dir == 'up') {
        if (lastDirection == 'right') {
            for (let i = 0; i < snake.length; i++) {
                if (snake[i][0] != rotatePoint[0]) {
                    snake[i][0]++;
                } else {
                    snake[i][1]--;
                }
            }
        } else if (lastDirection == 'left') {
            for (let i = 0; i < snake.length; i++) {
                if (snake[i][0] != rotatePoint[0]) {
                    snake[i][0]--;
                } else {
                    snake[i][1]--;
                }
            }
        } else {
            for (let i = 0; i < snake.length; i++) {
                snake[i][1]--;
            }
        }
    }
}

document.addEventListener('keydown', e => {
    if (e.keyCode == 68) {
        // right
        if (direction == 'down' || direction == 'up') {
            lastDirection = direction;
            direction = 'right';
            rotatePoint = snake[0];
        }
    }
    if (e.keyCode == 83) {
        // down
        if (direction == 'right' || direction == 'left') {
            lastDirection = direction;
            direction = 'down';
            rotatePoint = snake[0];
        }
    }
    if (e.keyCode == 65) {
        // left
        if (direction == 'down' || direction == 'up') {
            lastDirection = direction;
            direction = 'left';
            rotatePoint = snake[0];
        }
    }
    if (e.keyCode == 87) {
        // up
        if (direction == 'right' || direction == 'left') {
            lastDirection = direction;
            direction = 'up';
            rotatePoint = snake[0];
        }
    }
})

drawSnake();
setInterval(() => {
    moveSnake(direction);
    drawSnake();
}, 500)


// document.addEventListener('keydown', event => {
//     if (event.keyCode == 68) {

//         direction = 1;
//         snakeRotation = snakeHead;
//         console.log(direction);
//     }
// })


