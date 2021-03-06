//FIRST ANIMATION ON START
function setCardStartingPlace(deck) {
  //10(%) is half the width of the first column - MINUS half of the width of a card DIVIDED by one percent of the screen width
  let lefty = 10 - deck[0].offsetWidth / 2 / (window.innerWidth / 100);
  //17% top offset
  let top = 17;
  //Animation delay starts at 0
  delay = 0;
  //setting the audio volume
  cardFlop.volume = 0.5;
  cardSwipe.volume = 0.5;

  //this loop will run 55 times
  for (let i = 0; i <= deck.length - 1; i++) {
    //David , why do we have this time out?
    setTimeout(() => {
      //after a column has been dealt (11 cards) increase the left offset by 20(%)
      if (i > 0 && i % 11 === 0) {
        lefty += 20;
      }
      //run the animation for every card
      dealTheStartingCards(deck[i], top, lefty, delay);
      //timeout for swipe audio start
      setTimeout(() => {
        //reset swipe audio 
        cardSwipe.currentTime = 0;
        //play audio
        cardSwipe.play();
      }, 60 * i);

      //delay increases every iteration by 50milliseconds
      delay += 50;
    }, 50);

    //setting a timeout for flop audio play delay is 900 milliseconds
    setTimeout(() => {
      setTimeout(() => {
        //reset flop audio
        cardFlop.currentTime = 0;
        //play flop audio
        cardFlop.play();
      }, 50 * i);
    }, 900);
  }
}

//starting deal animation
function dealTheStartingCards(card, top, lefty, delay) {

  card.animate(
    [//cards start almost off the screen at the bottomand the left offset is in the middle
      {
        top: "97%",
        left: `${10 - card.offsetWidth / 2 / (window.innerWidth / 100) + 40}%`,
      },
      //the top and left parameters are passed through in the parent function
      { top: `${top}%`, left: `${lefty}%` },
    ],
    {
      duration: 1000,
      fill: "forwards",
      iterations: 1,
      easing: "ease-in-out",
      delay: delay,
    }
  );
}
/******************************************************************************* */
//im not sure if we use or need this function anymore
function cascade(pile) {
  let top = 20;
  for (let i = 0; i < pile.length; i++) {
    pile[i].animate([{ top: `${top}%` }], {
      duration: 500,
      fill: "forwards",
      iterations: 1,
      easing: "ease-out",
    });
    top += 7;
  }
}

/************************************************************************** */
// can we use this function for bringing a single pile down to the bottom?
//because this one is the same, and better?
//the cards spread down the screen
function spreadTheCards(e, direction, fill, duration) {
  let x = 17;

  for (let i = 1; i <= e.length - 1; i++) {
    e[i].animate([{ top: `${x}%` }], {
      duration: duration,
      fill: fill,
      iterations: 1,
      direction: direction,
      easing: "ease-in-out",
    });
    x += 6;
  }
}
//***************************************************************************** */
function flipThePilesBackOver(e) {
  for (let i = 0; i < e.length; i++) {
    e[i].children[0].classList.toggle("flipFront");
    e[i].children[1].classList.toggle("flipBack");
  }
}

//FIRST FUNCTION ON CLICK
//the cards go back up to the original top offset - 17%
function goBackTheCards(e, direction, fill, duration) {
  let x = 0;
  for (let i = 0; i <= e.length - 1; i++) {
    e[i].animate([{ top: `${x - x + 17}%` }], {
      duration: 1000,
      fill: fill,
      iterations: 1,
      direction: direction,
      easing: "ease-in-out",
      delay: 0,
    });
  }
}

//***************************************************************************************** */
function flipThePilesOver(e) {
  for (let i = 0; i < e.length; i++) {
    e[i].children[0].classList.toggle("flipFront");
    e[i].children[1].classList.toggle("flipBack");
  }
}



function bringThePilesTogether(e, left) {
  let x = left;
  for (let i = 0; i <= e.length - 1; i++) {
    e[i].animate([{ left: `${x}%` }], {
      duration: 500,
      fill: "forwards",
      iterations: 1,
      easing: "ease-in-out",
    });
  }
}
/******************************************************************* */
//can we use spread the cards instead?

function pilesToTheBottom(deck) {
  for (let i = 0; i <= deck.length - 1; i++) {
    deck[i].animate([{ top: `80%` }], {
      duration: 500,
      fill: "forwards",
      iterations: 1,
      easing: "ease-in-out",
    });
  }
}

//********************************************************************************************** */
//we already wrote this as the first function - how much modification does it need?
function setCardPlace(deck, delay) {
  let pp = 55;
  let left = 10 - deck[0].offsetWidth / 2 / (window.innerWidth / 100);
  let top = 17;
  delay = 0;

  for (let i = 0; i <= deck.length - 1; i++) {
    setTimeout(() => {
      if (i % 5 === 0) {
        left = 10 - deck[0].offsetWidth / 2 / (window.innerWidth / 100);
      }
      dealTheCards(deck[i], top, left, delay, pp);
    
      pp--;
      left += 20;
      delay += 100;
    }, 50);
  }
}
//*********************************************************** */
//same for this one
function dealTheCards(card, toppy, left, delay, zindex) {
  card.animate(
    [
      { zIndex: `${zindex}` },
      { top: `${toppy}%`, left: `${left}%` },
      { zIndex: 1, top: `${toppy}%`, left: `${left}%` },
    ],
    {
      duration: 1500,
      fill: "forwards",
      iterations: 1,
      delay: delay,
    }
  );
}
function revealYourCard(card, direction){
card.animate(
        [
          {
            zIndex: "0",
            transform: `rotate(0deg)`,
            maxHeight: "237.25px",
            maxWidth: "156px",
            height: "13.5vw",
            width: "9vw",
            left: `${
              (card.offsetWidth / 2) / (window.innerWidth / 100) + 40
            }%`,
            top: "17%",
          },
          {
            zIndex: "100",
            transform: `rotate(720deg)`,
            maxHeight: "474.5px",
            maxWidth: "312px",
            height: "54vw",
            width: "36vw",
            left: `${
              (card.offsetWidth / 2) / (window.innerWidth / 100) + 40
            }%`,
            top: "14%",
          },
        ],
        {
          duration: 500,
          direction: direction,
          fill: "forwards",
          iterations: 1,
          easing: "ease-in",
        }
      );
      card.children[0].classList.toggle("flipFront");
      card.children[1].classList.toggle("flipBack");
}

function doABlackOut(section){
  section.animate([
    {opacity: '1'},
    {opacity: '0'},
    {opacity: '0'},
    {opacity: '1'}
    ],
    {
      duration: 3000,
      fill: 'forwards',
      iterations: 1
  })
}