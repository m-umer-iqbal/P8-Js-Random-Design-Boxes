// const randomColor ={
//     1: "HotPink",
//     2: "Lime",
//     3: "Yellow",
//     4: "Aqua",
//     5: "Orange",
//     6: "Red",
//     7: "Gold",
//     8: "YellowSeaGreen",
//     9: "LightSteelBlue",
//     10: "Silver"
// };

function getRandomColor(){
    let val1 = Math.floor((Math.random()*255))+1;
    let val2 = Math.floor((Math.random()*255))+1;
    let val3 = Math.floor((Math.random()*255))+1;
    return `rgb(${val1}, ${val2}, ${val3})`;
}

let boxes = document.querySelectorAll(".box");

for(let i=0; i<boxes.length; i++){
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    // boxes[i].style.backgroundColor = randomColor[randomNumber];
    boxes[i].style.backgroundColor = getRandomColor();
    boxes[i].style.color = getRandomColor();
    boxes[i].style.borderColor = getRandomColor();
    if(randomNumber%2==0){
        boxes[i].classList.toggle("huge");
    }
}