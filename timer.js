
let count = 3;

const counter = setInterval(() => {
    console.log(count);
    count--;
    if (count === 0) {
        clearInterval(counter);
    }
}, 1000);