
// document.addEventListenter ("keydown", () => {
//     let movedLeft = document.getElementById('hero');
//     if (window.event.keyCode == 37)
//     moveLeft.Id='left-moved-hero'
// }
// );
// document.onkeydown = function(event) {
//     if (event.keyCode)
// }
// document.onkeydown = event => {

//     if (window.event.keyCode == 37) {
//         let movedLeft = document.getElementById('hero');
//         movedLeft.getElementById('hero').style.background-position='75px, 0';
//     }
// }
// ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- -----------

// let character = document.getElementById('hero');
// let field = document.getElementById('field');

// function movement(e) {
//     let characterPosition = document.getElementById('hero').style.left;
//     if (e.keyCode==37) {
//         characterPosition = characterPosition - 10 +'px';
    // if (e.keyCode == 39) {
    //     characterLeft++;
    //     character.stryle.left= characterLeft + 'px';
    
//     }

// }
// document.onkeydown = movement;

// -------------------------------------------------------
// character.style.left = 405 + 'px';

// let leftMovedHero = document.getElementById('hero')
// let heroPosition = document.getElementById('hero').style.left



// let character = document.getElementById('hero');
// document.addEventListener("keydown", function() {
//     let characterPosition = character.style.left;
//     let chaPositionToNum = Number(hero.style.left);
//     if (event.keyCode==37) {
//         chaPositionToNum = chaPositionToNum - 10;
//         characterPosition = chaPositionToNum + 'px';
//     }
//     return characterPosition;
//     console.log(characterPosition);
// });

let hero = document.getElementById('hero');
// let leftLim = hero.style.left;
// let leftLimit = Number(leftLim);
// let movingLeft = moveLeft.style.left
let movingPoint = 407;
document.addEventListener('keydown',function() {
    // let a = document.getElementById('hero).style.left'
    let x = 70 + 'px';
    let y = 0;
    if (event.keyCode === 37 && movingPoint > 8) {
        movingPoint = movingPoint - 20;
        hero.style.left = movingPoint + 'px'
        // if (hero.,style.left =0) {
        // hero.style.left = 0 + 'px'
        // }
    } 
    if (event.keyCode === 37) {
        hero.style.backgroundPosition = x, y;
    }
}
);

document.addEventListener('keydown', function() {
    let x = 35 + 'px';
    let y = 0;
    if (event.keyCode === 39 && movingPoint < 770) {
        movingPoint = movingPoint + 10;
        hero.style.left = movingPoint + 'px';
    }
    if (event.keyCode === 39) {
        hero.style.backgroundPosition = x, y;
    }
}
);
// ------------------------- 1차 삽질 of 랜덤 x위치에서 귀신 떨어트리기 ------------------------
// const ghost = setInterval( () => {
//     const createGhost = document.createElement('div');
//     createGhost.id = 'enemy';
//     document.body.insertAdjacentElement ('beforeend', createGhost);
//     const ghostPosition = document.getElementById('enemy');
    // const horizonMovement = () => {
    //     return Math.random(8, 770);
    //     ghostPosition.style.left = horizonMovement + 'px;'
    // }
    // let ghostTopPosition.style.top = 7
    // let movingVertical = 0;
    // const rainning = () => {
    // let ghostPosition = document.getElementById('enemy');
    // let movingVertical = movingVertical + 10;
    // ghostPosition.style.top = movingVertical + 'px';
    // };
// }, 1500)

// ------------------------------------- 1번째 rainning code--------------------
//     let movingVertical = 7;
//     document.setInterval ( ()=> {
//         let movingVertical = movingVertical + 10;
//         ghostPosition.style.top = movingVertical + 'px'
//     }, 1000)
// }
// ghost();
// ------------------------------------------------------------------------------------------------
// let verticalPosition = 7px

let count = 1;
const ghost = setInterval( () => {
    const createGhost = document.createElement('div');
    createGhost.id = 'enemy';
    document.body.insertAdjacentElement ('beforeend', createGhost);
    // let verticalRandom = ((Math.random()*10) +10)
    createGhost.style.left= ((Math.random() * 730) + 7) + 'px';
    // let ghost = document.getElementById('enemy')
    // let ghostTop = document.getElementById('enemy').style.top;
    // ghostTop = Number(ghostTop);
    // console.log(Number(ghostTop))
    // const movingHorizon = ghost/Top.style.top;
    console.log("ghost created")
    count += 1;
    let top = 0;
    let rainning = setInterval ( () => {
        // console.log(ghostTop)
        console.log(createGhost.style.top)
        top = top + 50;
        createGhost.style.top = top + "px";
        // movingHorizon.style.top = ghostTop + 'px';   
        // if ( createGhost.style.top <= 10) {
        //     createGhost.style.top = 7 + 'px';
        // }
        // if ( createGhost.style.top <=10) {
        //     createGhost.style.backgroundPosition = 43, 0;
        // }
        if (top >= 520) {
            clearInterval(rainning);
            createGhost.style.backgroundPosition = 43 + 'px', 0;
            setTimeout( () => {
                createGhost.remove();
            }, 1000);
        };
        // let x = 43;
        // let y = 0;
    }, 1000);
} ,1500);
