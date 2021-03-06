const cardFaces = ['1J.svg', '2J.svg', '2B.svg']

for (let i = 0; i <= 3; i++) {
    
    if(i === 0){
        cardSuit = 'C'
    }else if( i === 1){
        cardSuit = 'S'
    }else if( i === 2){
        cardSuit = 'D'
    }else if( i === 3){
        cardSuit = 'H'
    }
    console.log(i)
    for (let y = 2; y <= 14; y++) {
        cardNumber = y;
        if( y <= 9){
            cardName = cardNumber
        }else if( y === 10){
            cardName = 'T'
        }else if ( y === 11){
            cardName = 'J'
        }else if( y === 12 ){
            cardName = 'Q'
        }else if(y === 13){
            cardName = 'K'
        }else{
            cardName = 'A'
        }
        cardFaces.push(`${cardName}${cardSuit}.svg`)
        cardNumber += 1
        console.log(cardSuit)
    }
}

// const htmlReset = `<input type="submit" id="playAgain" class="hidden" value="Play Again" />
//         <section id="theFirst" class="container">
//           <section class="one card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="one card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="one card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="one card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="one card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="one card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="one card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="one card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="one card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="one card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="one card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//         </section>

//         <section id="theSecond" class="container">
//           <section class="two card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="two card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="two card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="two card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="two card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="two card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="two card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="two card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="two card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="two card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="two card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//         </section>
//         <section id="theThird" class="container">
//           <section class="three card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="three card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="three card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="three card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="three card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="three card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="three card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="three card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="three card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="three card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="three card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//         </section>

//         <section id="theFourth" class="container">
//           <section class="four card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="four card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="four card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="four card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="four card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="four card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="four card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="four card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="four card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="four card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="four card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//         </section>

//         <section id="theFifth" class="container">
//           <section class="five card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="five card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="five card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="five card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="five card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="five card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="five card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="five card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="five card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="five card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//           <section class="five card">
//             <section class="front"></section>
//             <section class="back"></section>
//           </section>
//         </section>`

/*
4 suits  C D S H

2 - 9 + T J Q K A

FORMAT IS CARDNAME + CARDSUIT + .SVG


EXTRAS ARE TWO JOKERS AND 'BACK OF CARD'

xH.svg

2H.svg
---- 9H.svg
TH.svg
JH.svg
 */