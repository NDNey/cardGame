// const firstArray = Array.from(document.querySelectorAll('.one'))
// const secondArray = Array.from(document.querySelectorAll('.two'))
// const thirdArray = Array.from(document.querySelectorAll('.three'))
// const fourthArray = Array.from(document.querySelectorAll('.four'))
// const fifthArray = Array.from(document.querySelectorAll('.five'))

let arrayOfContainers = []

const containerOne = document.getElementById('theFirst')
const containerTwo = document.getElementById('theSecond')
const containerThree = document.getElementById('theThird')
const containerFour = document.getElementById('theFourth')
const containerFive = document.getElementById('theFifth')



document.querySelector('body').addEventListener('click', doStuff)

let randomizedCardFaces = cardFaces.sort( () => Math.random() > .5 ? 1 : -1 );
window.onload = () => {
    arrayOfContainers = [Array.from(containerOne.children), Array.from(containerTwo.children), Array.from(containerThree.children), Array.from(containerFour.children), Array.from(containerFive.children)]

    for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
        setTimeout(() => {
            spreadTheCards(arrayOfContainers[i], 'normal', 'forwards', 2000)
        }, `${500 * i}`)
    }

    
    
    
        
        makeCardsHaveFaces(arrayOfContainers[0].concat(arrayOfContainers[1], arrayOfContainers[2], arrayOfContainers[3], arrayOfContainers[4]))
        
    
    
    // containerOne.children[0].style.backgroundImage = `url('../CARDS/${cardFaces[0]}')`
}

function makeCardsHaveFaces(e) {
    for(let i = 0; i <= e.length - 1; i++){
        e[i].style.backgroundImage = `url(./img/${randomizedCardFaces[i]})`
    }
}


let deckArray = []
function doStuff(e) {

    if(e.target !== e.currentTarget){

    let theFirstPile = Array.from(containerOne.children)

    let theSecondPile = Array.from(containerTwo.children)

    let theThirdPile = Array.from(containerThree.children)

    let theFourthPile = Array.from(containerFour.children)

    let theFifthPile = Array.from(containerFive.children)



    
    let target
    if (e.target.classList.contains('container')) {
        target = e.target
    } else if (e.target.classList.contains('card')) {
        target = e.target.parentNode
    }

    let middleArray = []
    let topArray = []
    let bottomArray = []

    if (target === containerThree) {   //middle
        middleArray = theThirdPile;
        topArray = theFirstPile.concat(theSecondPile)
        bottomArray = theFourthPile.concat(theFifthPile)

    } else if (target === containerOne) {  //first
        middleArray = theFirstPile;
        topArray = theFourthPile.concat(theFifthPile)
        bottomArray = theSecondPile.concat(theThirdPile)

    } else if (target === containerTwo) {  //second
        middleArray = theSecondPile;
        topArray = theFifthPile.concat(theFirstPile)
        bottomArray = theThirdPile.concat(theFourthPile)

    } else if (target === containerFour) {  //fourth
        middleArray = theFourthPile;
        topArray = theSecondPile.concat(theThirdPile)
        bottomArray = theFifthPile.concat(theFirstPile)

    } else if (target === containerFive) {  //fifth
        middleArray = theFifthPile;
        topArray = theThirdPile.concat(theFourthPile)
        bottomArray = theFirstPile.concat(theSecondPile)

    }
    deckArray = topArray.concat(middleArray, bottomArray)



    arrayOfContainers = [Array.from(containerOne.children), Array.from(containerTwo.children), Array.from(containerThree.children), Array.from(containerFour.children), Array.from(containerFive.children)]

    for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
        setTimeout(() => {
            goBackTheCards(arrayOfContainers[i], 'normal', 'forwards', 2000)
        }, `${500 * i}`)
    }

    for (let i = 0; i <= arrayOfContainers.length - 1; i++){
    
    setTimeout( () => {
        flipThePilesOver(arrayOfContainers[i])
    }, 4500)
    
    }




    setTimeout( () => {
        for(let i = 0; i <= arrayOfContainers.length - 1; i++){
            x = 48;
        bringThePilesTogether(arrayOfContainers[i], x)
            x-= 20;
        }
    }, 8000)
    // reOrderTheDeck(deckArray)
    
    }
    
}
/*
//shuffle
so the cards go to the middle
then
 */

function reOrderTheDeck(array) {
setTimeout(() => {
        let x = 1
        for (i = 0; i <= array.length - 1; i++) {
            
            if (x === 1) {
                containerOne.appendChild(array[i])
                x += 1;
            } else if (x === 2) {
                containerTwo.appendChild(array[i])
                x += 1
            } else if (x === 3) {
                containerThree.appendChild(array[i])
                x += 1
            } else if (x === 4) {
                containerFour.appendChild(array[i])
                x += 1
            } else if (x === 5) {
                containerFive.appendChild(array[i])
                x = 1
            }
        }
    }, 4000)
}


