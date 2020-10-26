let number = [0,1];

for(let place = 2 ; place <= 100 ; place++) {
    number[place] = number[place-1] + number[place-2];
}

for(let place = 0 ; place <= 100 ; place++) {
    console.log(number[place]);
}