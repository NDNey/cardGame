function spreadTheCards(e, direction, fill, duration) {
    let x = 0;
    for (let i = 1; i <= e.length - 1; i++) {
        x += 7;
        e[i].animate([

            { top: `${x}%` }
        ],
            {
                duration: duration,
                fill: fill,
                iterations: 1,
                direction: direction,
                easing: 'ease-in-out'
            })

    }
}

function goBackTheCards(e, direction, fill, duration) {
    let x = 0;
    for (let i = 1; i <= e.length - 1; i++) {

        e[i].animate([

            { top: `${x - x + 2}%` }
        ],
            {
                duration: duration,
                fill: fill,
                iterations: 1,
                direction: direction,
                easing: 'ease-in-out'
            })
        x += 7;
    }
}


const threeDFlipKeyframes = [
    { transform: `translate3d(1px, 0px, 0px)` },
    { transform: `translate3d(1000px, 1000px, -200px)` },
    { transform: `translate3d(1000px, 0px, 200px)` },
    { transform: `translate3d(1px, 0px, 0px)` }
]

const threeDFlipTiming = {
    duration: 5000,
    fill: 'both',
    iterations: 1,
    direction: 'normal',
    easing: 'ease-in-out',
    delay: 0
}


const flipKeyframes = [
    { transform: `rotateY(0deg)` },
    { transform: `rotateY(90deg)`, boxShadow: `-30px 3px 5px 0px rgba(36, 36, 36, 0.8)` },
    { transform: `rotateY(180deg)` }
]
let flipTiming = {
        duration: 1000,
        fill: 'both',
        iterations: 1,
        direction: 'normal',
        easing: 'ease-in-out',
        delay: 0
}

function doSomething(card, delay) {
    flipTiming.delay = delay;
    // threeDFlipTiming.delay = delay
    // card.animate(
    //     threeDFlipKeyframes,
    //     threeDFlipTiming
    // )
    card.animate(
        flipKeyframes,
        flipTiming
        
    )
}


function flipThePilesOver(e) {
    let x = 0;
    for (let i = 10; i >= 0; i--) {
        doSomething(e[i], x)

        x += 3
        setTimeout(() => {
            for (let i = 0; i <= e.length - 1; i++) {
                e[i].style.backgroundImage = `url('./img/1B.svg')`
            }
        }, (500 + x))
    }



}

function changeTheCardPicture(e) {
    setTimeout(() => {
        for (let i = 0; i <= e.length - 1; i++) {
            e[i].classList.replace('card', 'cardBack')
        }
    }, 500)
}




function bringThePilesTogether(e, left) {


    let x = left;
    for (let i = 0; i <= e.length - 1; i++) {
        e[i].animate([

            { left: `${x}%` }
        ],
            {
                duration: 500,
                fill: 'forwards',
                iterations: 1,
                easing: 'ease-in-out'
            })

    }

}